import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NoASM } from "@/components/brand/NoASM";

export const metadata: Metadata = {
  title: "Sobre a ASM Tecnologia",
  description:
    "Conheça a ASM Tecnologia: uma empresa de tecnologia que protege, organiza e impulsiona empresas por meio de certificados digitais, sistemas de gestão e tecnologia sob medida.",
};

export default function SobrePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-brand-black/10 py-20">
        <NoASM className="pointer-events-none absolute -right-24 top-0 h-96 w-96 text-brand-blue/5" />
        <Container className="relative max-w-2xl">
          <SectionHeading
            eyebrow="Sobre a ASM"
            title="Tecnologia que protege, organiza e impulsiona empresas"
            description="A ASM Tecnologia nasceu para ser mais do que uma vendedora de certificados digitais: somos uma empresa de tecnologia capaz de acompanhar o cliente em diferentes níveis de maturidade digital."
          />
        </Container>
      </section>

      <section className="border-b border-brand-black/10 py-16">
        <Container className="max-w-3xl space-y-6 text-base leading-relaxed text-brand-black/70">
          <p>
            Tudo começa com uma necessidade simples — um certificado digital para emitir notas
            fiscais, por exemplo. Mas a jornada não termina ali. À medida que a empresa cresce,
            novas necessidades de gestão e tecnologia surgem, e a ASM está preparada para atender
            cada uma delas.
          </p>
          <p>
            Por isso, estruturamos nossa atuação em três pilares que se conectam: certificados
            digitais para proteger a identidade digital da empresa, soluções empresariais como o
            InfinityFy para organizar a operação, e tecnologia sob medida para transformar
            processos que não cabem em um sistema pronto.
          </p>
          <p>
            Um visitante pode chegar buscando apenas um certificado digital e descobrir uma
            solução de gestão. Pode chegar procurando um sistema de gestão e conhecer outros
            serviços. Pode chegar com um problema específico e contratar uma solução desenvolvida
            sob medida. Em qualquer um desses casos, a ASM é a mesma empresa confiável do início ao
            fim.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading eyebrow="Nossos pilares" title="Protege, organiza e transforma" />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-card border border-brand-black/10 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue">Protege</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-black/70">
                Certificados digitais com segurança, clareza e atendimento especializado.
              </p>
            </div>
            <div className="rounded-card border border-brand-black/10 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue">Organiza</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-black/70">
                Soluções empresariais como o InfinityFy, que centralizam a gestão do negócio.
              </p>
            </div>
            <div className="rounded-card border border-brand-black/10 p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue">Transforma</p>
              <p className="mt-3 text-sm leading-relaxed text-brand-black/70">
                Tecnologia sob medida para problemas que exigem uma solução própria.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
