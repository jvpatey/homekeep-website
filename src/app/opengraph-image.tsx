import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "HomeKeep — Home maintenance, handled.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const fraunces = await readFile(
    join(process.cwd(), "src/app/fonts/Fraunces-Bold.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          backgroundColor: "#F4EFE6",
          backgroundImage:
            "radial-gradient(ellipse 80% 70% at 50% 0%, rgba(196, 92, 38, 0.2), transparent 62%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 18,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 8,
              height: 56,
            }}
          >
            <div
              style={{
                width: 16,
                height: 32,
                borderRadius: 8,
                backgroundColor: "#2F5D50",
              }}
            />
            <div
              style={{
                width: 16,
                height: 48,
                borderRadius: 8,
                backgroundColor: "#C45C26",
              }}
            />
            <div
              style={{
                width: 16,
                height: 24,
                borderRadius: 8,
                backgroundColor: "#1A1612",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Fraunces",
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#1A1612",
              lineHeight: 1,
            }}
          >
            Home
            <span style={{ color: "#C45C26" }}>Keep</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontFamily: "Fraunces",
            fontSize: 68,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            color: "#1A1612",
            maxWidth: 920,
          }}
        >
          Home maintenance, handled.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 28,
            color: "#6B645C",
            lineHeight: 1.35,
            maxWidth: 780,
          }}
        >
          Reminders, history, and a plan — without the mental load.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Fraunces",
          data: fraunces,
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
