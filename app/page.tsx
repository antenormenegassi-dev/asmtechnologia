import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Hero } from "@/components/blocks/Hero";
import { TrustBadges } from "@/components/blocks/TrustBadges";
import { PillarCard } from "@/components/blocks/PillarCard";
import { ShieldCheckIcon, LayersIcon, BoltIcon } from "@/components/ui/icons";
import { BenefitsGrid } from "@/components/blocks/BenefitsGrid";
import { PartnerTeaser } from "@/components/blocks/PartnerTeaser";
import { ContentTeaser } from "@/components/blocks/ContentTeaser";
import { CTASection } from "@/components/blocks/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />

      <section className="border-b border-brand-black/10 dark:border-brand-white/10 py-24">
        <Container>
          <SectionHeading
            eyebrow="Como podemos ajudar"
            title="Três frentes, uma única empresa de tecnologia"
            description="Encontre o ponto de partida certo para o momento da sua empresa e descubra o restante conforme sua necessidade cresce."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <PillarCard
              icon={ShieldCheckIcon}
              eyebrow="Protege"
              title="Certificados Digitais"
              description="e-CNPJ, e-CPF, NF-e e NF-C com atendimento especializado, do modelo A1 ao A3, para pessoas físicas e empresas."
              href="/certificados-digitais"
              linkLabel="Ver certificados"
            />
            <PillarCard
              icon={LayersIcon}
              eyebrow="Organiza"
              title="Soluções Empresariais"
              description="Conheça o InfinityFy: gestão de vendas, PDV, estoque, financeiro, compras, DRE e catálogo digital em um só sistema."
              href="/solucoes-empresariais"
              linkLabel="Ver soluções"
            />
            <PillarCard
              icon={BoltIcon}
              eyebrow="Transforma"
              title="Tecnologia Sob Medida"
              description="Sistemas personalizados, plataformas web, aplicativos, APIs e automações desenvolvidos para o seu problema específico."
              href="/tecnologia-sob-medida"
              linkLabel="Ver tecnologia sob medida"
            />
          </div>
        </Container>
      </section>

      <BenefitsGrid />
      <PartnerTeaser />
      <ContentTeaser />
      <CTASection />
    </>
  );
}
