import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-brand-blue text-brand-white hover:bg-brand-blue-dark",
  secondary:
    "border border-brand-black/15 text-brand-black hover:border-brand-blue hover:text-brand-blue dark:border-brand-white/15 dark:text-brand-white",
  ghost: "text-brand-blue hover:text-brand-blue-dark",
};

const BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 rounded-control px-5 py-3 text-sm font-medium transition-colors";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  external?: boolean;
  children: React.ReactNode;
}

export function Button({
  href,
  variant = "primary",
  external = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className ?? ""}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
