import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/blocks/Hero";
import { Button } from "@/components/ui/Button";
import { CheckIcon, LayersIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureList } from "@/components/blocks/FeatureList";
import { CTASection } from "@/components/blocks/CTASection";

export const metadata: Metadata = {
  title: "Soluções Empresariais",
  description:
    "Sistemas de gestão empresarial em parceria com a ASM Technologia, com o InfinityFy: vendas, PDV, estoque, financeiro e mais em um só lugar.",
};

const AREAS = [
  { title: "Gestão de Vendas", description: "Do orçamento ao fechamento, com histórico completo por cliente." },
  { title: "PDV", description: "Frente de caixa ágil, integrada ao estoque e à emissão fiscal." },
  { title: "Estoque", description: "Controle em tempo real, com alertas de reposição e rastreabilidade." },
  { title: "Financeiro", description: "Contas a pagar, a receber e fluxo de caixa organizados." },
  { title: "Compras", description: "Pedidos, fornecedores e reposição de estoque centralizados." },
  { title: "Relatórios e DRE", description: "Indicadores e demonstrativo de resultado para decisões rápidas." },
];

export default function SolucoesEmpresariaisPage() {
  return (
    <>
      <Hero
        title="Soluções Empresariais para gerenciar o seu negócio"
        description="A ASM é parceira comercial do InfinityFy, sistema de gestão que organiza vendas, estoque, financeiro e operação."
        image={{ src: "/images/hero/solucoes.jpg", alt: "Lojista usando o sistema de gestão no balcão da loja" }}
        cta={<Button href="/solucoes-empresariais/infinityfy" className="px-6 py-3.5">Conhecer o InfinityFy</Button>}
        highlights={[
          { icon: LayersIcon, label: "Estoque", value: "Sincronizado" },
          { icon: CheckIcon, label: "Venda", value: "Caixa atualizado" },
        ]}
      />

      <section className="border-b border-brand-black/10 dark:border-brand-white/10 py-16">
        <Container>
          <SectionHeading eyebrow="Áreas de gestão" title="O que você organiza com a ASM" />
          <div className="mt-10">
            <FeatureList features={AREAS} />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
