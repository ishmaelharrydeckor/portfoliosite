import { ImageResponse } from "next/og";

export const alt = "Ishmael Harry-Deckor: websites for consultants, coaches and speakers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The card shown when the site is shared on WhatsApp, LinkedIn and X.
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
          background: "#0e0e0d",
          color: "#f5f2ea",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 40, fontWeight: 800 }}>
          Ishmael<span style={{ color: "#f2d230" }}>.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.08, letterSpacing: -2 }}>Websites for consultants,</div>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 800, lineHeight: 1.08, letterSpacing: -2 }}>
            <span style={{ background: "#f2d230", color: "#0e0e0d", padding: "0 16px" }}>coaches and speakers</span>
          </div>
        </div>
        <div style={{ fontSize: 32, color: "#b9b6ad" }}>Ishmael Harry-Deckor · Done for you, easy to update</div>
      </div>
    ),
    size
  );
}
