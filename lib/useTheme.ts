"use client";

import { useState } from "react";

const STORAGE_KEY = "theme";

function readInitialTheme(): boolean {
  if (typeof document === "undefined") return false;
  return document.documentElement.classList.contains("dark");
}

export function useTheme() {
  const [isDark, setIsDark] = useState<boolean>(readInitialTheme);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
    } catch {
      // localStorage unavailable (e.g. private browsing) — theme still applies for this session
    }
  }

  return { isDark, toggle };
}
