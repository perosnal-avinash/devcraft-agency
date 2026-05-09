import { NextRequest, NextResponse } from "next/server";

/* ── Rate limiter (in-memory, per serverless instance) ─────────── */
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5;            // max 5 requests per IP per minute
const ipMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipMap.get(ip);
  if (!entry || now > entry.resetAt) {
    ipMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) return true;
  entry.count++;
  return false;
}

/* ── Input sanitization ────────────────────────────────────────── */
const MAX_FIELD_LENGTH = 2000;
const ALLOWED_FIELDS = new Set(["name","email","phone","company","service","budget","message","type","days","time","submittedAt"]);

function sanitizeString(value: unknown, maxLen = MAX_FIELD_LENGTH): string {
  if (typeof value !== "string") return "";
  return value.replace(/<[^>]*>/g, "").trim().slice(0, maxLen);
}

function validatePayload(data: Record<string, unknown>): Record<string, string | string[]> | null {
  const out: Record<string, string | string[]> = {};

  for (const [key, val] of Object.entries(data)) {
    if (!ALLOWED_FIELDS.has(key)) continue; // drop unknown fields

    if (key === "days" && Array.isArray(val)) {
      out[key] = val.map((d) => sanitizeString(d, 50)).filter(Boolean);
      continue;
    }
    out[key] = sanitizeString(val);
  }

  // Required field presence check (at least name + email)
  if (!out.name || !out.email) return null;

  // Basic email format
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(out.email))) return null;

  return out;
}

/* ── Handler ───────────────────────────────────────────────────── */
export async function POST(req: NextRequest) {
  // Enforce max body size (~10 KB)
  const contentLength = Number(req.headers.get("content-length") ?? 0);
  if (contentLength > 10_240) {
    return NextResponse.json({ error: "Payload too large" }, { status: 413 });
  }

  // Rate limit by IP
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait before submitting again." },
      { status: 429, headers: { "Retry-After": "60" } }
    );
  }

  // Parse JSON
  let raw: Record<string, unknown>;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Validate and sanitize
  const data = validatePayload(raw);
  if (!data) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 422 });
  }

  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    if (process.env.NODE_ENV === "development") {
      return NextResponse.json({ success: true, dev: true });
    }
    return NextResponse.json({ error: "Service unavailable" }, { status: 503 });
  }

  try {
    const payload = { ...data, submittedAt: new Date().toISOString() };

    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    if (!res.ok) {
      console.error("[Contact] upstream error", res.status);
      return NextResponse.json({ error: "Submission failed" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact] fetch error", err instanceof Error ? err.message : "unknown");
    return NextResponse.json({ error: "Submission failed" }, { status: 502 });
  }
}
