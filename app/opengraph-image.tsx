/* eslint-disable @typescript-eslint/no-unused-vars */
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          color: "#f8fafc",
          fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span
            style={{
              border: "1px solid rgba(148, 163, 184, 0.3)",
              padding: "8px 14px",
              borderRadius: "9999px",
              fontSize: "24px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            TypeClipboard
          </span>
          <span style={{ fontSize: "24px", color: "rgba(226,232,240,0.8)" }}>typeclipboard.com</span>
        </div>
        <div style={{ maxWidth: "820px", display: "flex", flexDirection: "column", gap: "20px" }}>
          <h1 style={{ fontSize: "76px", lineHeight: 1, fontWeight: 700, margin: 0 }}>
            Paste where you can&apos;t paste.
          </h1>
          <p style={{ fontSize: "32px", lineHeight: 1.4, color: "rgba(226,232,240,0.85)", margin: 0 }}>
            Replay your clipboard as keystrokes to keep momentum on VNC, RDP, MFA prompts, and every remote workflow.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "18px",
            fontSize: "26px",
            color: "rgba(226,232,240,0.8)",
          }}
        >
          <span>Remote desktops</span>
          <span>•</span>
          <span>Secure prompts</span>
          <span>•</span>
          <span>Virtual consoles</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
