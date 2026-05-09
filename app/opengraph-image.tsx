import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CameeTo — Software Development Agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #020817 0%, #1e1b4b 50%, #020817 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow orbs */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "15%",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(99,102,241,0.15)",
            filter: "blur(80px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "15%",
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "rgba(6,182,212,0.12)",
            filter: "blur(80px)",
          }}
        />
        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, zIndex: 1 }}>
          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: "#a5b4fc",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            SOFTWARE DEVELOPMENT AGENCY
          </div>
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              background: "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)",
              backgroundClip: "text",
              color: "transparent",
              lineHeight: 1,
            }}
          >
            CameeTo
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#94a3b8",
              textAlign: "center",
              maxWidth: 700,
              lineHeight: 1.5,
            }}
          >
            Web Apps · Mobile Apps · AI/ML · FinTech · Enterprise Software
          </div>
          <div style={{ display: "flex", gap: 32, marginTop: 16 }}>
            {["200+ Projects", "50+ Clients", "8+ Years", "Noida, India"].map((stat) => (
              <div
                key={stat}
                style={{
                  padding: "10px 20px",
                  borderRadius: 40,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#e2e8f0",
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                {stat}
              </div>
            ))}
          </div>
        </div>
        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            color: "#475569",
            fontSize: 18,
            letterSpacing: "0.05em",
          }}
        >
          cameeto.com
        </div>
      </div>
    ),
    { ...size }
  );
}
