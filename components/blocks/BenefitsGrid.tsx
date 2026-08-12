import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/layout/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ArrowRightIcon } from "@/components/ui/icons";

export function BenefitsGrid() {
  return (
    <section className="border-b border-brand-black/10 dark:border-brand-white/10 py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <ImagePlaceholder aspectClassName="aspect-4/3" />

          <div>
            <SectionHeading
              eyebrow="Por que a ASM"
              title="Uma empresa de tecnologia pensada para acompanhar o seu negócio"
            />
            <p className="mt-6 text-base leading-relaxed text-brand-black/70 dark:text-brand-white/70">
              Do primeiro certificado digital ao sistema mais complexo, a ASM entrega segurança de
              ponta a ponta com certificação dentro dos padrões ICP-Brasil, atendimento consultivo
              que orienta cada cliente sobre a solução certa, tecnologia integrada em que
              certificados, sistemas de gestão e projetos sob medida conversam entre si, e suporte
              contínuo que acompanha o cliente muito além da venda.
            </p>
            <Link
              href="/sobre"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-blue"
            >
              Conheça a ASM
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
