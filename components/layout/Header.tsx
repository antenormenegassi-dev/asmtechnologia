import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/brand/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { NAV_ITEMS } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-black/10 bg-brand-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" aria-label="ASM Technologia página inicial">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-black/80 transition-colors hover:text-brand-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/certificados-digitais"
            className="hidden rounded-control bg-brand-blue px-5 py-2.5 text-sm font-medium text-brand-white transition-colors hover:bg-brand-blue-dark lg:inline-flex"
          >
            Comprar Certificado
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
