import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const alt = "Virtus Partners | Consultoría Estratégica y Financiera";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public/logo-virtus.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

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
          backgroundColor: "#17458F",
          position: "relative",
        }}
      >
        {/* Left accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 6,
            height: "100%",
            backgroundColor: "#C9A55A",
          }}
        />
        {/* Right accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 6,
            height: "100%",
            backgroundColor: "#C9A55A",
          }}
        />

        {/* Logo */}
        <img
          src={logoSrc}
          alt="Virtus Partners"
          width={380}
          height={104}
          style={{ objectFit: "contain" }}
        />

        {/* Gold divider */}
        <div
          style={{
            width: 60,
            height: 2,
            backgroundColor: "#C9A55A",
            marginTop: 40,
            marginBottom: 32,
          }}
        />

        {/* Tagline */}
        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: 26,
            fontWeight: 300,
            letterSpacing: "0.08em",
            margin: 0,
          }}
        >
          Consultoría Estratégica y Financiera
        </p>
      </div>
    ),
    size,
  );
}
