import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { NoASM } from "@/components/brand/NoASM";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function PartnerTeaser() {
  return (
    <section className="relative overflow-hidden bg-brand-black py-24">
      <NoASM className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 text-brand-white/5" />
      <Container className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="max-w-xl">
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

        <ImagePlaceholder borderClassName="border-brand-white/15" />
      </Container>
    </section>
  );
}
