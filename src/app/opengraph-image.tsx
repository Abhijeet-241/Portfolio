import { ImageResponse } from "next/og";
import { site } from "@/constants/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const metrics = [
  ["5+", "trading flows"],
  ["92.7%", "latency cut"],
  ["24", "verified agent tasks"],
];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0a0a0b",
          backgroundImage:
            "radial-gradient(900px circle at 12% -10%, rgba(16,185,129,0.22), transparent 55%), radial-gradient(800px circle at 95% 5%, rgba(6,182,212,0.20), transparent 55%)",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        {/* top row: mark + status */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 64,
                height: 64,
                borderRadius: 16,
                fontSize: 30,
                fontWeight: 700,
                letterSpacing: -1,
                color: "#fff",
                background: "linear-gradient(135deg, #10b981, #06b6d4)",
              }}
            >
              AP
            </div>
            <div style={{ display: "flex", fontSize: 24, color: "#a1a1aa" }}>{site.name}</div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 18px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.12)",
              fontSize: 20,
              color: "#d4d4d8",
            }}
          >
            <div style={{ display: "flex", width: 10, height: 10, borderRadius: 999, background: "#10b981" }} />
            Open to roles
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", fontSize: 30, color: "#10b981", letterSpacing: 1 }}>
            {site.role} · Mobile · Fintech · Applied AI
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 66,
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: -2,
              maxWidth: 980,
            }}
          >
            I build reliable financial products and AI systems that show their work.
          </div>
        </div>

        {/* metrics row */}
        <div style={{ display: "flex", gap: 56 }}>
          {metrics.map(([value, label]) => (
            <div key={label} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: 44, fontWeight: 600, letterSpacing: -1 }}>{value}</div>
              <div style={{ display: "flex", fontSize: 22, color: "#a1a1aa" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
