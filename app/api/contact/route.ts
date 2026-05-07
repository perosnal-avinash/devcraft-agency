import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let data: Record<string, unknown>;

  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

  // In development without a script URL, log and return success so the form is testable
  if (!scriptUrl) {
    if (process.env.NODE_ENV === "development") {
      console.log("[Contact] No GOOGLE_SCRIPT_URL set — form data:", data);
      return NextResponse.json({ success: true, dev: true });
    }
    return NextResponse.json({ error: "Submission endpoint not configured" }, { status: 503 });
  }

  try {
    const payload = {
      ...data,
      submittedAt: new Date().toISOString(),
    };

    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      // Google Apps Script sometimes redirects; follow them
      redirect: "follow",
    });

    if (!res.ok) {
      console.error("[Contact] Google Script returned", res.status);
      return NextResponse.json({ error: "Failed to save submission" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Contact] Fetch error:", err);
    return NextResponse.json({ error: "Failed to reach submission endpoint" }, { status: 502 });
  }
}
