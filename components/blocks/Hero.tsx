import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppCTA } from "@/components/whatsapp/WhatsAppCTA";
import { SITE_TAGLINE, SITE_DESCRIPTION } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Image src="/images/hero.png" alt="" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-linear-to-t from-brand-black via-brand-black/70 to-brand-black/30" />

      <Container className="relative flex min-h-140 flex-col justify-end py-16 lg:min-h-160 lg:py-24">
        <span className="inline-flex w-fit items-center rounded-full border border-brand-white/20 bg-brand-white/10 px-3 py-1 text-xs font-medium text-brand-white backdrop-blur-sm">
          Certificados digitais &middot; Gestão &middot; Tecnologia sob medida
        </span>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-brand-white sm:text-6xl">
          {SITE_TAGLINE}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-white/80">
          {SITE_DESCRIPTION}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <WhatsAppCTA message="Olá! Vim pelo site e quero saber mais sobre certificados digitais.">
            Comprar certificado
          </WhatsAppCTA>
          <Button href="/solucoes-empresariais" variant="secondary" className="border-brand-white/30 text-brand-white hover:border-brand-white hover:text-brand-white">
            Conhecer nossas soluções
          </Button>
        </div>
      </Container>
    </section>
  );
}
