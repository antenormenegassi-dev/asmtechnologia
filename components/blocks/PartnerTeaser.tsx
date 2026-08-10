import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { NoASM } from "@/components/brand/NoASM";

export function PartnerTeaser() {
  return (
    <section className="border-b border-brand-black/10 py-24">
      <Container>
        <div className="relative overflow-hidden rounded-card bg-brand-black px-8 py-14 sm:px-14">
          <NoASM className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 text-brand-white/5" />
          <div className="relative max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue">
              Programa de Parceiros
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-white">
              Indique certificados digitais e transforme sua rede em receita
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-white/70">
              Contadores, escritórios de contabilidade e parceiros comerciais recebem condições
              especiais, materiais de apoio e comissionamento por indicação.
            </p>
            <Link
              href="/parceiros"
              className="mt-8 inline-flex items-center justify-center rounded-control bg-brand-blue px-6 py-3.5 text-sm font-medium text-brand-white transition-colors hover:bg-brand-blue-dark"
            >
              Conhecer o programa de parceiros
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
