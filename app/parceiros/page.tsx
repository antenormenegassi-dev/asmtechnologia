import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureList } from "@/components/blocks/FeatureList";
import { WhatsAppCTA } from "@/components/whatsapp/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Seja Parceiro",
  description:
    "Programa de Parceiros da ASM Tecnologia: indique certificados digitais e soluções empresariais e receba condições especiais.",
};

const BENEFITS = [
  { title: "Comissionamento por indicação", description: "Receba comissão sobre cada certificado ou solução vendida a partir da sua indicação." },
  { title: "Materiais de apoio", description: "Conteúdos e argumentos comerciais prontos para facilitar a indicação aos seus clientes." },
  { title: "Atendimento prioritário", description: "Canal direto com a equipe ASM para tirar dúvidas rapidamente." },
  { title: "Condições especiais", description: "Preços e prazos diferenciados para parceiros ativos." },
];

const STEPS = [
  "Cadastre-se como parceiro pelo WhatsApp",
  "Receba seu link e materiais de indicação",
  "Indique certificados e soluções aos seus clientes",
  "Acompanhe suas comissões com a equipe ASM",
];

export default function ParceirosPage() {
  return (
    <>
      <section className="border-b border-brand-black/10 py-20">
        <Container>
          <SectionHeading
            eyebrow="Programa de Parceiros"
            title="Transforme sua rede de relacionamento em receita"
            description="Contadores, escritórios de contabilidade e parceiros comerciais indicam certificados digitais e soluções ASM e recebem comissão por isso."
          />
          <div className="mt-10 flex flex-wrap gap-4">
            <WhatsAppCTA message="Olá! Gostaria de me cadastrar no programa de parceiros da ASM.">
              Quero ser parceiro
            </WhatsAppCTA>
          </div>
        </Container>
      </section>

      <section className="border-b border-brand-black/10 py-16">
        <Container>
          <SectionHeading eyebrow="Vantagens" title="O que você ganha como parceiro" />
          <div className="mt-10">
            <FeatureList features={BENEFITS} />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading eyebrow="Como funciona" title="Cadastro em quatro passos" />
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, index) => (
              <li key={step} className="rounded-card border border-brand-black/10 p-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-control bg-brand-blue text-sm font-semibold text-brand-white">
                  {index + 1}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-brand-black/70">{step}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
