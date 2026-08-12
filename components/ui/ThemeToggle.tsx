"use client";

import { useTheme } from "@/lib/useTheme";
import { SunIcon, MoonIcon } from "@/components/ui/icons";

interface ThemeToggleProps {
  /** "onDark" is for use inside permanently-dark surfaces (e.g. the mobile menu overlay) —
   * it keeps light-on-dark styling regardless of the current site theme. */
  variant?: "default" | "onDark";
  className?: string;
}

export function ThemeToggle({ variant = "default", className }: ThemeToggleProps) {
  const { isDark, toggle } = useTheme();

  const trackClasses =
    variant === "onDark"
      ? "border-brand-white/20 bg-transparent"
      : "border-brand-black/25 bg-brand-black/10 dark:border-brand-white/15 dark:bg-brand-white/10";

  const thumbClasses =
    variant === "onDark"
      ? "bg-brand-white text-brand-black"
      : "bg-brand-black text-brand-white shadow-sm dark:bg-brand-white dark:text-brand-black";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Alternar tema escuro"
      onClick={toggle}
      className={`relative inline-flex h-8 w-14 shrink-0 items-center rounded-full border transition-colors ${trackClasses} ${className ?? ""}`}
    >
      <span
        className={`inline-flex h-6 w-6 items-center justify-center rounded-full transition-transform ${thumbClasses} ${isDark ? "translate-x-7" : "translate-x-1"
          }`}
      >
        {isDark ? <MoonIcon className="h-3.5 w-3.5" /> : <SunIcon className="h-3.5 w-3.5" />}
      </span>
    </button>
  );
}
