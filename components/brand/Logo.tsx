import { SITE_NAME } from "@/lib/constants";

/**
 * The ASM modular mark: three geometric modules — two angled strokes and a
 * diamond "node" — that read together as an abstract letter A. Deliberately
 * avoids literal tech-company iconography (locks, shields, certificates).
 * The gap between the two strokes at the apex is intentional negative space.
 *
 * Keep this path data in sync with app/icon.svg (the static favicon copy).
 */
export function LogoMark({
  className,
  style,
  tone = "default",
}: {
  className?: string;
  style?: React.CSSProperties;
  tone?: "default" | "inverted";
}) {
  const secondaryStroke = tone === "inverted" ? "var(--color-brand-white)" : "var(--color-brand-black)";

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <polygon points="8,42 19,8 23,8 14,42" fill="var(--color-brand-blue)" />
      <polygon points="40,42 29,8 25,8 34,42" fill={secondaryStroke} />
      <rect
        x="19"
        y="21"
        width="10"
        height="10"
        rx="2"
        transform="rotate(45 24 26)"
        fill="var(--color-brand-blue)"
      />
    </svg>
  );
}

interface LogoProps {
  variant?: "full" | "mark";
  tone?: "default" | "inverted";
  size?: number;
  className?: string;
}

export function Logo({ variant = "full", tone = "default", size = 32, className }: LogoProps) {
  const wordmarkClass =
    tone === "inverted" ? "text-brand-white" : "text-brand-black";
  const wordmarkSubClass =
    tone === "inverted" ? "font-normal text-brand-white/70" : "font-normal text-brand-black/70";

  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className ?? ""}`}
      aria-label={SITE_NAME}
    >
      <LogoMark className="shrink-0" style={{ width: size, height: size }} tone={tone} />
      {variant === "full" && (
        <span className={`text-lg font-semibold tracking-tight ${wordmarkClass}`}>
          ASM <span className={wordmarkSubClass}>Tecnologia</span>
        </span>
      )}
    </span>
  );
}
