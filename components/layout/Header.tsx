"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/brand/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { NAV_ITEMS } from "@/lib/constants";

const SCROLL_THRESHOLD = 40;

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`${isHome ? "fixed" : "sticky"} top-0 inset-x-0 z-40 border-b transition-colors duration-300 ${
        transparent
          ? "border-transparent bg-transparent"
          : "border-brand-black/10 bg-brand-white/95 backdrop-blur dark:border-brand-white/10 dark:bg-brand-black/95"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" aria-label="ASM Technologia página inicial">
          <Logo tone={transparent ? "inverted" : "default"} />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-brand-blue ${
                transparent ? "text-brand-white/90" : "text-brand-black/80 dark:text-brand-white/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/certificados-digitais"
            className={`hidden rounded-control px-5 py-2.5 text-sm font-medium transition-colors lg:inline-flex ${
              transparent
                ? "bg-brand-white text-brand-blue hover:bg-brand-white/90"
                : "bg-brand-blue text-brand-white hover:bg-brand-blue-dark"
            }`}
          >
            Comprar Certificado
          </Link>
          <ThemeToggle variant={transparent ? "onDark" : "default"} />
          <MobileNav variant={transparent ? "onDark" : "default"} />
        </div>
      </Container>
    </header>
  );
}
