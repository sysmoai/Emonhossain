import { LogoMark, LogoIcon } from "./components/logo-mark";
import { LogoLockup } from "./components/logo-lockup";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="uppercase text-stone-500"
      style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.36em" }}
    >
      {children}
    </p>
  );
}

function SectionTitle({
  index,
  title,
  caption,
}: {
  index: string;
  title: string;
  caption?: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <Eyebrow>{`Section ${index}`}</Eyebrow>
      <h2
        className="mt-3 uppercase text-stone-900"
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 800,
          fontSize: 28,
          letterSpacing: "0.24em",
          lineHeight: 1,
        }}
      >
        {title}
      </h2>
      {caption && (
        <p
          className="mt-3 text-stone-500 max-w-md"
          style={{ fontSize: 13, lineHeight: 1.6 }}
        >
          {caption}
        </p>
      )}
      <div
        className="mt-6 h-px w-16"
        style={{
          background:
            "linear-gradient(90deg, transparent, #0f172a, transparent)",
        }}
      />
    </div>
  );
}

function hexToRgb(hex: string) {
  const h = hex.replace("#", "");
  const n = parseInt(h, 16);
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}

function ColorSwatch({
  name,
  hex,
  bg,
  text = "white",
}: {
  name: string;
  hex: string;
  bg: string;
  text?: string;
}) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-stone-200 bg-white">
      <div
        className="aspect-[4/3] flex items-end p-5"
        style={{ background: bg, color: text }}
      >
        <div>
          <p
            className="uppercase"
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.28em",
              opacity: 0.85,
            }}
          >
            {name}
          </p>
          <p style={{ fontSize: 18, fontWeight: 700, marginTop: 4 }}>{hex}</p>
        </div>
      </div>
      <div className="flex justify-between px-5 py-3 text-stone-500" style={{ fontSize: 11 }}>
        <span>RGB {hexToRgb(hex)}</span>
        <span>{hex}</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        fontFamily: "Inter, sans-serif",
        background:
          "radial-gradient(1200px 600px at 50% -10%, #f5f3ff 0%, transparent 60%), #fafaf9",
      }}
    >
      {/* ============== HERO ============== */}
      <section className="relative w-full overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(600px 400px at 20% 30%, rgba(79,70,229,0.10), transparent 60%), radial-gradient(500px 400px at 80% 70%, rgba(14,165,233,0.10), transparent 60%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 flex flex-col items-center">
          <Eyebrow>01 — Main Logo · Est. 2026</Eyebrow>
          <h1
            className="mt-6 uppercase text-stone-900 text-center"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px, 6vw, 56px)",
              letterSpacing: "0.18em",
              lineHeight: 1,
            }}
          >
            Emon Hossain
          </h1>
          <p
            className="mt-5 text-stone-600 text-center max-w-xl"
            style={{ fontSize: 14, lineHeight: 1.7 }}
          >
            A premium personal identity system — crafted with restraint, balance,
            and clarity. Designed for screens, print, and everything in between.
          </p>

          <div className="mt-14">
            <LogoMark size={360} />
          </div>

          <div className="mt-10 flex items-center gap-4 w-full max-w-[300px]">
            <div className="h-px flex-1 bg-stone-300" />
            <div
              className="size-1.5 rounded-full"
              style={{ background: "linear-gradient(135deg, #4f46e5, #0ea5e9)" }}
            />
            <div className="h-px flex-1 bg-stone-300" />
          </div>

          <p
            className="mt-6 uppercase text-stone-500"
            style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.42em" }}
          >
            emonhossain.pro
          </p>
        </div>
      </section>

      {/* ============== 02 ICON / FAVICON ============== */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionTitle
          index="02"
          title="Icon & Favicon"
          caption="Optimized to remain legible at every scale, from app icon to browser tab."
        />

        {/* Browser window mock — realistic favicon context */}
        <div className="mt-14 mx-auto max-w-4xl rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-[0_30px_60px_-30px_rgba(15,23,42,0.25)]">
          <div className="flex items-center gap-2 px-4 py-3 bg-stone-100 border-b border-stone-200">
            <div className="size-2.5 rounded-full bg-red-400" />
            <div className="size-2.5 rounded-full bg-yellow-400" />
            <div className="size-2.5 rounded-full bg-green-400" />
            <div className="ml-4 flex items-center gap-2 px-3 py-1.5 bg-white rounded-t-md border border-stone-200 border-b-0">
              <LogoIcon size={16} />
              <span className="text-stone-700 truncate" style={{ fontSize: 12 }}>
                Emon Hossain — Portfolio
              </span>
              <span className="text-stone-400 ml-1" style={{ fontSize: 14, lineHeight: 1 }}>
                ×
              </span>
            </div>
          </div>
          <div className="px-6 py-3 flex items-center gap-3 text-stone-500 border-b border-stone-200" style={{ fontSize: 12 }}>
            <span style={{ fontSize: 11 }}>🔒</span>
            <span>https://emonhossain.pro</span>
          </div>
          {/* Empty page strip */}
          <div className="h-14 bg-white" />
        </div>

        {/* Size grid — preview + actual-size sample for every favicon size */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { px: 128, label: "App Tile", use: "LogoMark" as const },
            { px: 64, label: "Toolbar", use: "LogoMark" as const },
            { px: 32, label: "Favicon", use: "LogoIcon" as const },
            { px: 16, label: "Browser Tab", use: "LogoIcon" as const },
          ].map(({ px, label, use }) => {
            const Mark = use === "LogoMark" ? LogoMark : LogoIcon;
            return (
              <div
                key={px}
                className="rounded-2xl border border-stone-200 bg-white overflow-hidden flex flex-col"
              >
                {/* Preview area — same large size for visual comparison */}
                <div
                  className="flex items-center justify-center py-10"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 30%, #ffffff 0%, #f8fafc 100%)",
                  }}
                >
                  <Mark size={120} />
                </div>

                {/* Spec strip */}
                <div className="border-t border-stone-200 px-5 py-4 flex items-center justify-between gap-3">
                  <div className="flex flex-col">
                    <p
                      className="uppercase text-stone-500"
                      style={{
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: "0.28em",
                      }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-stone-900"
                      style={{ fontSize: 14, fontWeight: 700, marginTop: 2 }}
                    >
                      {px}×{px} px
                    </p>
                  </div>

                  {/* Actual-size rendering on a checker tile so tiny icons are visible */}
                  <div
                    className="flex items-center justify-center rounded-md border border-stone-200"
                    style={{
                      width: 56,
                      height: 56,
                      backgroundImage:
                        "linear-gradient(45deg, #f1f5f9 25%, transparent 25%), linear-gradient(-45deg, #f1f5f9 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f1f5f9 75%), linear-gradient(-45deg, transparent 75%, #f1f5f9 75%)",
                      backgroundSize: "10px 10px",
                      backgroundPosition: "0 0, 0 5px, 5px -5px, -5px 0",
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <Mark size={px > 48 ? 48 : px} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Construction note */}
        <div className="mt-10 mx-auto max-w-3xl rounded-2xl bg-white border border-stone-200 px-6 py-5 flex items-start gap-4">
          <div
            className="mt-1 size-2 rounded-full shrink-0"
            style={{ background: "linear-gradient(135deg, #4f46e5, #0ea5e9)" }}
          />
          <p className="text-stone-600" style={{ fontSize: 13, lineHeight: 1.7 }}>
            <span className="text-stone-900" style={{ fontWeight: 700 }}>
              How it scales —
            </span>{" "}
            at 64 px and above we use the full <em>LogoMark</em> with its gradient
            ring and white inset. At 32 px and below we switch to{" "}
            <em>LogoIcon</em>, a simplified variant where the face fills the
            disc edge-to-edge so it stays crisp inside browser tabs and OS
            favicons.
          </p>
        </div>
      </section>

      {/* ============== 03 PRIMARY LOGO ============== */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionTitle
          index="03"
          title="Primary Logo"
          caption="The official signature — mark and wordmark composed in proper optical proportion."
        />

        {/* Hero primary lockup */}
        <div className="mt-14 rounded-3xl border border-stone-200 bg-white px-6 sm:px-16 py-16 flex items-center justify-center overflow-hidden relative">
          {/* Soft brand glow behind the lockup */}
          <div
            className="absolute inset-0 pointer-events-none opacity-50"
            style={{
              background:
                "radial-gradient(500px 300px at 30% 50%, rgba(79,70,229,0.08), transparent 60%), radial-gradient(400px 280px at 70% 50%, rgba(14,165,233,0.08), transparent 60%)",
            }}
          />
          <div className="relative">
            <LogoLockup size="xl" orientation="horizontal" />
          </div>
        </div>

        {/* Lockup variants */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Horizontal — medium */}
          <div className="rounded-3xl border border-stone-200 bg-white p-12 flex flex-col items-center gap-8">
            <LogoLockup size="lg" orientation="horizontal" />
            <p
              className="uppercase text-stone-500"
              style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.32em" }}
            >
              Horizontal · Primary
            </p>
          </div>

          {/* Stacked */}
          <div className="rounded-3xl border border-stone-200 bg-white p-12 flex flex-col items-center gap-8">
            <LogoLockup size="lg" orientation="stacked" />
            <p
              className="uppercase text-stone-500"
              style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.32em" }}
            >
              Stacked · Secondary
            </p>
          </div>
        </div>

        {/* Size scale */}
        <div className="mt-6 rounded-3xl border border-stone-200 bg-white px-12 py-12">
          <p
            className="uppercase text-stone-500 text-center mb-10"
            style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.32em" }}
          >
            Size Scale · sm / md / lg
          </p>
          <div className="flex flex-col items-center gap-12">
            <LogoLockup size="lg" orientation="horizontal" />
            <LogoLockup size="md" orientation="horizontal" />
            <LogoLockup size="sm" orientation="horizontal" />
          </div>
        </div>
      </section>

      {/* ============== COLOR PALETTE ============== */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionTitle
          index="04"
          title="Color Palette"
          caption="A disciplined palette of indigo, sky, and emerald — anchored by deep ink and warm paper."
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-5">
          <ColorSwatch name="Indigo" hex="#4F46E5" bg="#4F46E5" />
          <ColorSwatch name="Sky" hex="#0EA5E9" bg="#0EA5E9" />
          <ColorSwatch name="Emerald" hex="#10B981" bg="#10B981" />
          <ColorSwatch name="Ink" hex="#0F172A" bg="#0F172A" />
          <ColorSwatch name="Paper" hex="#FAFAF9" bg="#FAFAF9" text="#0F172A" />
        </div>
      </section>

      {/* ============== TYPOGRAPHY ============== */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionTitle
          index="05"
          title="Typography"
          caption="Inter — a precise, modern grotesque used across the system."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-stone-200 bg-white p-10">
            <Eyebrow>Display · Inter Bold</Eyebrow>
            <p
              className="mt-6 text-stone-900"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 800,
                fontSize: 56,
                letterSpacing: "0.02em",
                lineHeight: 1,
              }}
            >
              Aa Bb Cc
            </p>
            <p
              className="mt-6 uppercase text-stone-700"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 800,
                fontSize: 22,
                letterSpacing: "0.24em",
                lineHeight: 1,
              }}
            >
              Emon Hossain
            </p>
          </div>
          <div className="rounded-3xl border border-stone-200 bg-white p-10">
            <Eyebrow>Body · Inter Regular</Eyebrow>
            <p className="mt-6 text-stone-700" style={{ fontSize: 16, lineHeight: 1.7 }}>
              The quick brown fox jumps over the lazy dog. Crafted typography
              brings clarity, rhythm, and trust to every touchpoint of the brand.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-stone-500" style={{ fontSize: 12 }}>
              <div>
                <p className="text-stone-900" style={{ fontWeight: 600 }}>Regular</p>
                <p>400</p>
              </div>
              <div>
                <p className="text-stone-900" style={{ fontWeight: 600 }}>Medium</p>
                <p>500</p>
              </div>
              <div>
                <p className="text-stone-900" style={{ fontWeight: 600 }}>Bold</p>
                <p>800</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== BACKGROUND TESTS ============== */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionTitle
          index="06"
          title="Background Tests"
          caption="The mark holds up across light, dark, and gradient surfaces."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="aspect-square rounded-3xl bg-white border border-stone-200 flex items-center justify-center">
            <LogoMark size={200} />
          </div>
          <div className="aspect-square rounded-3xl bg-stone-900 flex items-center justify-center">
            <LogoMark size={200} />
          </div>
          <div
            className="aspect-square rounded-3xl flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, #4f46e5, #0ea5e9, #10b981)",
            }}
          >
            <LogoMark size={200} />
          </div>
        </div>
      </section>

      {/* ============== APPLICATIONS ============== */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionTitle
          index="07"
          title="Brand Applications"
          caption="From business cards to social avatars — a system built to scale."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Business Card Front */}
          <div
            className="aspect-[1.6/1] rounded-2xl p-8 flex flex-col justify-between text-white shadow-[0_30px_60px_-30px_rgba(15,23,42,0.45)]"
            style={{
              background:
                "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            }}
          >
            <LogoMark size={70} />
            <div>
              <p
                className="uppercase"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 800,
                  fontSize: 18,
                  letterSpacing: "0.22em",
                }}
              >
                Emon Hossain
              </p>
              <p
                className="mt-1 uppercase text-white/60"
                style={{
                  fontSize: 9,
                  fontWeight: 500,
                  letterSpacing: "0.36em",
                }}
              >
                Founder · emonhossain.pro
              </p>
            </div>
          </div>

          {/* Business Card Back */}
          <div className="aspect-[1.6/1] rounded-2xl p-8 flex items-center justify-center bg-white border border-stone-200 shadow-[0_30px_60px_-30px_rgba(15,23,42,0.25)]">
            <LogoMark size={120} />
          </div>

          {/* Social Avatar */}
          <div
            className="aspect-[1.6/1] rounded-2xl p-8 flex items-center gap-6 border border-stone-200 bg-white"
          >
            <LogoMark size={96} />
            <div className="flex flex-col">
              <p
                className="text-stone-900"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                }}
              >
                Emon Hossain
              </p>
              <p className="text-stone-500" style={{ fontSize: 13 }}>
                @emonhossain
              </p>
              <p className="mt-2 text-stone-700" style={{ fontSize: 13, lineHeight: 1.5 }}>
                Designer & founder. Building with care at emonhossain.pro.
              </p>
            </div>
          </div>

          {/* Mobile App Icon */}
          <div
            className="aspect-[1.6/1] rounded-2xl p-6 sm:p-8 flex flex-wrap items-center justify-center gap-3 sm:gap-6"
            style={{
              background:
                "linear-gradient(135deg, #f5f3ff 0%, #e0f2fe 100%)",
            }}
          >
            {[120, 84, 56].map((s) => (
              <div
                key={s}
                className="rounded-[22%] bg-white shadow-[0_18px_36px_-12px_rgba(15,23,42,0.25)] flex items-center justify-center overflow-hidden"
                style={{ width: s, height: s }}
              >
                {s >= 96 ? (
                  <LogoMark size={Math.round(s * 0.82)} />
                ) : (
                  <LogoIcon size={Math.round(s * 0.82)} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <footer className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center gap-4 border-t border-stone-200">
        <LogoIcon size={40} />
        <p
          className="uppercase text-stone-500"
          style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.42em" }}
        >
          © 2026 Emon Hossain · emonhossain.pro
        </p>
      </footer>
    </div>
  );
}
