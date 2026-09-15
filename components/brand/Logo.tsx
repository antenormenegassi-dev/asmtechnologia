import Image from "next/image";
import { SITE_NAME } from "@/lib/constants";
import asmIconColor from "@/public/brand/asm-icon.png";
import asmIconInverted from "@/public/brand/asm-icon-inverted.png";
import asmLogoHorizontal from "@/public/brand/asm-logo-horizontal.png";
import asmLogoHorizontalInverted from "@/public/brand/asm-logo-horizontal-inverted.png";

/**
 * The ASM brand mark, cropped from the official identity sheet
 * (public/identity.jpeg). "default" is the full-color version for light
 * backgrounds; "inverted" swaps the dark strokes for light ones so the mark
 * stays legible on dark backgrounds.
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
  return (
    <Image
      src={tone === "inverted" ? asmIconInverted : asmIconColor}
      alt=""
      aria-hidden="true"
      className={className}
      style={style}
    />
  );
}

interface LogoProps {
  variant?: "full" | "mark";
  tone?: "default" | "inverted";
  size?: number;
  className?: string;
}

/**
 * The full icon + wordmark lockup, cropped straight from the identity sheet
 * (public/brand/asm-logo-horizontal(-inverted).png) rather than reassembled
 * from separate icon/text pieces. tone="inverted" (footer, permanently dark
 * background) always renders the light lockup; tone="default" (header)
 * renders the dark-on-light lockup and swaps to the light lockup under the
 * `dark` class so it stays legible when the theme toggle is switched.
 */
export function Logo({ variant = "full", tone = "default", size = 40, className }: LogoProps) {
  if (variant === "mark") {
    return (
      <span className={`inline-flex ${className ?? ""}`} aria-label={SITE_NAME}>
        <LogoMark style={{ width: size, height: size }} tone={tone} />
      </span>
    );
  }

  const lockupStyle = { height: size, width: "auto" as const };

  if (tone === "inverted") {
    return (
      <Image
        src={asmLogoHorizontalInverted}
        alt={SITE_NAME}
        className={className}
        style={lockupStyle}
      />
    );
  }

  return (
    <span className={`inline-flex ${className ?? ""}`}>
      <Image src={asmLogoHorizontal} alt={SITE_NAME} className="dark:hidden" style={lockupStyle} />
      <Image
        src={asmLogoHorizontalInverted}
        alt={SITE_NAME}
        className="hidden dark:block"
        style={lockupStyle}
      />
    </span>
  );
}
