import FaceLogo from "../../imports/ChatGptImageMay22026085128Am1Vectorized/ChatGptImageMay22026085128Am1Vectorized";

export function LogoMark({ size = 360 }: { size?: number }) {
  // Scale paddings/strokes proportionally so the mark stays balanced at every size.
  const ringStroke = Math.max(1, Math.round(size * 0.0055));
  const innerPad = Math.max(2, Math.round(size * 0.028));
  const faceScale = 0.8;

  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size }}
      aria-label="Emon Hossain logo"
    >
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          boxShadow:
            "0 40px 80px -30px rgba(15, 23, 42, 0.25), 0 18px 40px -20px rgba(79, 70, 229, 0.18)",
        }}
      />
      <div
        className="relative aspect-square w-full rounded-full"
        style={{
          padding: ringStroke,
          background:
            "linear-gradient(145deg, #4f46e5 0%, #0ea5e9 50%, #10b981 100%)",
        }}
      >
        <div
          className="size-full rounded-full bg-white"
          style={{ padding: innerPad }}
        >
          <div
            className="size-full rounded-full flex items-center justify-center relative overflow-hidden"
            style={{
              background:
                "radial-gradient(circle at 50% 35%, #ffffff 0%, #f1f5f9 70%, #e2e8f0 100%)",
            }}
          >
            <div
              className="relative"
              style={{ width: `${faceScale * 100}%`, height: `${faceScale * 100}%` }}
            >
              <FaceLogo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Simplified mark for very small sizes (favicons, browser tabs, tiny avatars).
// Drops the white gap and zooms the face so it stays legible at 16–32 px.
export function LogoIcon({ size = 32 }: { size?: number }) {
  return (
    <div
      className="relative shrink-0 rounded-full overflow-hidden flex items-center justify-center"
      style={{
        width: size,
        height: size,
        background:
          "linear-gradient(145deg, #4f46e5 0%, #0ea5e9 50%, #10b981 100%)",
      }}
      aria-label="Emon Hossain icon"
    >
      <div
        className="rounded-full bg-white flex items-center justify-center"
        style={{ width: "92%", height: "92%" }}
      >
        <div style={{ width: "96%", height: "96%" }}>
          <FaceLogo />
        </div>
      </div>
    </div>
  );
}
