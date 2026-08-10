import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/brand/Logo";
import { NoASM } from "@/components/brand/NoASM";
import { FOOTER_LINKS, SITE_TAGLINE, CONTACT_EMAIL, CONTACT_PHONE_DISPLAY } from "@/lib/constants";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-brand-white">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-brand-white/60 transition-colors hover:text-brand-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-black text-brand-white">
      <NoASM className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 text-brand-white/5" />

      <Container className="relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="ASM Tecnologia — página inicial">
              <Logo tone="inverted" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-white/60">
              {SITE_TAGLINE}
            </p>
            <div className="mt-6 space-y-1 text-sm text-brand-white/60">
              <p>{CONTACT_EMAIL}</p>
              <p>{CONTACT_PHONE_DISPLAY}</p>
            </div>
          </div>

          <FooterColumn title="Certificados" links={FOOTER_LINKS.certificados} />
          <FooterColumn title="Empresa" links={FOOTER_LINKS.empresa} />
          <FooterColumn title="Conteúdo & Legal" links={[...FOOTER_LINKS.conteudo, ...FOOTER_LINKS.legal]} />
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-brand-white/10 pt-8 text-xs text-brand-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} ASM Tecnologia. Todos os direitos reservados.</p>
          <p>CNPJ: 00.000.000/0001-00</p>
        </div>
      </Container>
    </footer>
  );
}
