import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { FeatureList } from "@/components/blocks/FeatureList";
import { WhatsAppCTA } from "@/components/whatsapp/WhatsAppCTA";

export const metadata: Metadata = {
  title: "InfinityFy — Sistema de Gestão Empresarial",
  description:
    "Conheça o InfinityFy, o sistema de gestão empresarial da ASM Technologia: vendas, PDV, estoque, financeiro, compras, DRE, WMS e catálogo digital.",
};

const MODULES = [
  { title: "Gestão de vendas", description: "Orçamentos, pedidos e histórico de vendas centralizados." },
  { title: "PDV", description: "Frente de caixa rápida, com emissão fiscal integrada." },
  { title: "Estoque", description: "Controle em tempo real com alertas de estoque mínimo." },
  { title: "Financeiro", description: "Contas a pagar e a receber, conciliação e fluxo de caixa." },
  { title: "Produtos", description: "Catálogo interno com variações, categorias e precificação." },
  { title: "Compras", description: "Pedidos de compra e gestão de fornecedores." },
  { title: "Clientes", description: "Cadastro completo com histórico de relacionamento." },
  { title: "Relatórios", description: "Indicadores de vendas, estoque e financeiro em tempo real." },
  { title: "DRE", description: "Demonstrativo de resultado do exercício gerado automaticamente." },
  { title: "WMS", description: "Gestão de armazém para operações com múltiplos depósitos." },
  { title: "Catálogo digital", description: "Vitrine online integrada ao estoque da loja física." },
];

export default function InfinityFyPage() {
  return (
    <>
      <section className="border-b border-brand-black/10 py-20">
        <Container>
          <Badge>Uma solução ASM Technologia</Badge>
          <h1 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight text-brand-black">
            InfinityFy: gestão completa para sua empresa
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-brand-black/70">
            Vendas, PDV, estoque, financeiro, compras, relatórios e muito mais em uma única
            plataforma — desenvolvida e mantida pela ASM Technologia.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <WhatsAppCTA message="Olá! Gostaria de conhecer o InfinityFy para minha empresa.">
              Solicitar demonstração
            </WhatsAppCTA>
          </div>
        </Container>
      </section>

      <section className="border-b border-brand-black/10 py-16">
        <Container>
          <SectionHeading eyebrow="Módulos" title="Tudo o que sua operação precisa, integrado" />
          <div className="mt-10">
            <FeatureList features={MODULES} />
          </div>
        </Container>
      </section>

      <section className="bg-brand-blue py-16">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl text-2xl font-semibold tracking-tight text-brand-white sm:text-3xl">
            Veja o InfinityFy funcionando na prática
          </h2>
          <WhatsAppCTA
            message="Olá! Gostaria de agendar uma demonstração do InfinityFy."
            className="bg-brand-white text-brand-blue hover:bg-brand-white/90"
          >
            Agendar demonstração
          </WhatsAppCTA>
        </Container>
      </section>
    </>
  );
}
