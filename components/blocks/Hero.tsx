import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { LogoMark } from "@/components/brand/Logo";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/Button";
import { WhatsAppCTA } from "@/components/whatsapp/WhatsAppCTA";
import { ShieldCheckIcon, WhatsAppIcon } from "@/components/ui/icons";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { SITE_TAGLINE, SITE_DESCRIPTION, FOOTER_LINKS } from "@/lib/constants";

const CERTIFICATE_LINKS = FOOTER_LINKS.certificados.filter(
  (link) => link.href !== "/certificados-digitais",
);

const TILE_CLASSES =
  "rounded-card border border-brand-black/10 bg-brand-white dark:border-brand-white/10 dark:bg-brand-black";

export function Hero() {
  return (
    <section className="border-b border-brand-black/10 py-12 dark:border-brand-white/10 lg:py-16">
      <Container className="flex flex-col gap-4 lg:gap-6">
        {/* Row 1: headline + visual */}
        <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-12 lg:gap-6">
          <div className={`${TILE_CLASSES} flex flex-col justify-center p-8 lg:col-span-7 lg:p-10`}>
            <span className="inline-flex w-fit items-center rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-medium text-brand-blue">
              Certificados digitais &middot; Gestão &middot; Tecnologia sob medida
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-brand-black dark:text-brand-white sm:text-5xl">
              {SITE_TAGLINE}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-black/70 dark:text-brand-white/70">
              {SITE_DESCRIPTION}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <WhatsAppCTA message="Olá! Vim pelo site e quero saber mais sobre certificados digitais.">
                Comprar certificado
              </WhatsAppCTA>
              <Button href="/solucoes-empresariais" variant="secondary">
                Conhecer nossas soluções
              </Button>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <ImagePlaceholder
              alt=""
              aspectClassName="aspect-video lg:aspect-auto lg:h-full"
              className="h-full"
            />
            <div className="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-full border border-brand-black/10 bg-brand-white dark:border-brand-white/10 dark:bg-brand-black">
              <LogoMark className="h-8 w-8" />
            </div>
          </div>
        </div>

        {/* Row 2: quick links, trust, whatsapp */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          <div className={`${TILE_CLASSES} p-6 sm:col-span-2 lg:col-span-5`}>
            <p className="text-sm font-medium text-brand-black dark:text-brand-white">
              Certificados em alta
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {CERTIFICATE_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center rounded-full bg-brand-blue/10 px-3 py-1.5 text-sm font-medium text-brand-blue transition-colors hover:bg-brand-blue/20"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={`${TILE_CLASSES} p-6 lg:col-span-3`}>
            <ShieldCheckIcon className="h-8 w-8 text-brand-blue" />
            <p className="mt-4 text-sm font-medium text-brand-black dark:text-brand-white">
              Certificação segura
            </p>
            <p className="mt-1 text-sm text-brand-black/70 dark:text-brand-white/70">
              Válida em todo o Brasil, dentro dos padrões ICP-Brasil.
            </p>
          </div>

          <a
            href={buildWhatsAppLink("Olá! Tenho uma dúvida e gostaria de falar com um especialista.")}
            target="_blank"
            rel="noopener noreferrer"
            className={`${TILE_CLASSES} flex flex-col p-6 transition-colors hover:border-brand-blue lg:col-span-4`}
          >
            <WhatsAppIcon className="h-8 w-8 text-brand-blue" />
            <p className="mt-4 text-sm font-medium text-brand-black dark:text-brand-white">
              Fale com um especialista agora
            </p>
            <p className="mt-1 text-sm text-brand-black/70 dark:text-brand-white/70">
              Tire suas dúvidas diretamente pelo WhatsApp.
            </p>
          </a>
        </div>
      </Container>
    </section>
  );
}
