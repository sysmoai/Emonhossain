import { LogoMark, LogoIcon } from "./logo-mark";

type Size = "sm" | "md" | "lg" | "xl";
type Orientation = "horizontal" | "stacked";

const SIZES: Record<
  Size,
  { mark: number; name: number; tagline: number; gap: number; nameTracking: string }
> = {
  sm: { mark: 56, name: 14, tagline: 8, gap: 14, nameTracking: "0.22em" },
  md: { mark: 96, name: 20, tagline: 9, gap: 20, nameTracking: "0.24em" },
  lg: { mark: 140, name: 28, tagline: 10, gap: 28, nameTracking: "0.26em" },
  xl: { mark: 200, name: 38, tagline: 12, gap: 36, nameTracking: "0.28em" },
};

export function LogoLockup({
  size = "lg",
  orientation = "horizontal",
  showTagline = true,
  showDivider = true,
}: {
  size?: Size;
  orientation?: Orientation;
  showTagline?: boolean;
  showDivider?: boolean;
}) {
  const s = SIZES[size];
  const Mark = s.mark >= 64 ? LogoMark : LogoIcon;

  const Wordmark = (
    <p
      className="uppercase"
      style={{
        fontFamily: "Inter, sans-serif",
        fontWeight: 800,
        fontSize: s.name,
        letterSpacing: s.nameTracking,
        lineHeight: 1,
        marginRight: `-${s.nameTracking}`,
        backgroundImage:
          "linear-gradient(95deg, #4f46e5 0%, #0ea5e9 45%, #10b981 100%)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
      }}
    >
      Emon Hossain
    </p>
  );

  const Tagline = showTagline && (
    <p
      className="uppercase text-stone-500"
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: s.tagline,
        fontWeight: 500,
        letterSpacing: "0.42em",
        lineHeight: 1,
        marginRight: "-0.42em",
      }}
    >
      emonhossain.pro
    </p>
  );

  if (orientation === "stacked") {
    return (
      <div
        className="flex flex-col items-center"
        style={{ gap: s.gap * 0.85 }}
      >
        <Mark size={s.mark} />
        <div
          className="flex flex-col items-center"
          style={{ gap: s.tagline * 0.9 }}
        >
          {Wordmark}
          {Tagline}
        </div>
      </div>
    );
  }

  // Horizontal lockup — mark on the left, name + tagline on the right.
  // Name optically baseline-aligned to mark's vertical center via flex.
  return (
    <div className="flex items-center" style={{ gap: s.gap }}>
      <Mark size={s.mark} />
      {showDivider && (
        <div
          className="self-stretch w-px"
          style={{
            background:
              "linear-gradient(180deg, transparent, #e7e5e4 25%, #e7e5e4 75%, transparent)",
          }}
        />
      )}
      <div
        className="flex flex-col justify-center"
        style={{ gap: s.tagline * 1.1 }}
      >
        {Wordmark}
        {Tagline}
      </div>
    </div>
  );
}
