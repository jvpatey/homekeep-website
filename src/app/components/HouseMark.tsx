interface HouseMarkProps {
  size?: number;
  /** Size the box to the tallest bar so it can sit on a text baseline. */
  inline?: boolean;
  className?: string;
}

/**
 * Three-bar house mark — sage, copper, ink. Theme-aware via CSS variables.
 */
export default function HouseMark({
  size = 48,
  inline = false,
  className = "",
}: HouseMarkProps) {
  const barWidth = size * 0.22;
  const gap = size * 0.06;
  const radius = size * 0.08;
  const heights = [size * 0.55, size * 0.85, size * 0.42];
  const colors = [
    "var(--color-secondary)",
    "var(--color-primary)",
    "var(--color-text)",
  ];
  const boxHeight = inline ? size * 0.85 : size;

  return (
    <span
      className={`inline-flex items-end justify-center ${className}`}
      style={{ gap, height: boxHeight, width: size * 0.72 }}
      aria-hidden
    >
      {heights.map((height, index) => (
        <span
          key={index}
          style={{
            width: barWidth,
            height,
            borderRadius: radius,
            background: colors[index],
            display: "block",
          }}
        />
      ))}
    </span>
  );
}

export function Wordmark({
  markSize = 28,
  textClassName = "text-lg",
  className = "",
}: {
  markSize?: number;
  textClassName?: string;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-end gap-[0.55em] ${className}`}>
      <HouseMark size={markSize} inline />
      <span
        className={`font-extrabold leading-none text-[var(--color-text)] tracking-tight ${textClassName}`}
        style={{ letterSpacing: "-0.03em" }}
      >
        Home<span className="text-[var(--color-accent)]">Keep</span>
      </span>
    </span>
  );
}

