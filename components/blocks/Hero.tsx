import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { LogoMark } from "@/components/brand/Logo";
import { NoASM } from "@/components/brand/NoASM";
import { SITE_TAGLINE, SITE_DESCRIPTION } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-brand-black/10">
      <Container className="grid items-center gap-16 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="inline-flex items-center rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-medium text-brand-blue">
            Certificados digitais &middot; Gestão &middot; Tecnologia sob medida
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-brand-black sm:text-5xl">
            {SITE_TAGLINE}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-black/70">
            {SITE_DESCRIPTION}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/certificados-digitais"
              className="inline-flex items-center justify-center rounded-control bg-brand-blue px-6 py-3.5 text-sm font-medium text-brand-white transition-colors hover:bg-brand-blue-dark"
            >
              Comprar certificado
            </Link>
            <Link
              href="/solucoes-empresariais"
              className="inline-flex items-center justify-center rounded-control border border-brand-black/15 px-6 py-3.5 text-sm font-medium text-brand-black transition-colors hover:border-brand-blue hover:text-brand-blue"
            >
              Conhecer nossas soluções
            </Link>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <NoASM className="absolute h-[26rem] w-[26rem] text-brand-blue/10" />
          <div className="relative flex h-72 w-72 items-center justify-center rounded-card border border-brand-black/10 bg-brand-white shadow-[0_1px_0_0_rgba(17,17,17,0.04)] sm:h-96 sm:w-96">
            <LogoMark className="h-40 w-40 sm:h-52 sm:w-52" />
          </div>
        </div>
      </Container>
    </section>
  );
}
