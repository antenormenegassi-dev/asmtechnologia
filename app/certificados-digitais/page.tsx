import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { CertificateCard } from "@/components/blocks/CertificateCard";
import { CertificateWhatIsSection } from "@/components/blocks/CertificateWhatIsSection";
import { CertificateHistorySection } from "@/components/blocks/CertificateHistorySection";
import { A1A3ComparisonSection } from "@/components/blocks/A1A3ComparisonSection";
import { WhatsAppCTA } from "@/components/whatsapp/WhatsAppCTA";
import { certificates } from "@/data/certificates";

export const metadata: Metadata = {
  title: "Certificados Digitais",
  description:
    "e-CNPJ, e-CPF, NF-e e NFC-e em A1 e A3. Encontre o certificado digital ideal para sua empresa com a ASM Technologia.",
};

const GROUPS = [
  { category: "e-cnpj" as const, title: "e-CNPJ", description: "Certificados para empresas." },
  { category: "e-cpf" as const, title: "e-CPF", description: "Certificados para pessoa física." },
  { category: "nf-e" as const, title: "NF-e", description: "Emissão de nota fiscal eletrônica." },
  { category: "nf-c" as const, title: "NFC-e", description: "Emissão de nota fiscal ao consumidor." },
  { category: "outros" as const, title: "Outros", description: "Necessidades específicas." },
];

export default function CertificadosDigitaisPage() {
  return (
    <>
      <section className="border-b border-brand-black/10 dark:border-brand-white/10 py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Protege"
                title="Certificados Digitais para empresas e profissionais"
                description="Segurança, clareza e atendimento especializado para você encontrar, entender, escolher e comprar o certificado certo."
              />
              <div className="mt-10 flex flex-wrap gap-4">
                <WhatsAppCTA message="Olá! Gostaria de orientação para escolher meu certificado digital.">
                  Falar com um especialista
                </WhatsAppCTA>
              </div>
            </div>

            <ImagePlaceholder />
          </div>
        </Container>
      </section>

      <CertificateWhatIsSection />
      <CertificateHistorySection />
      <A1A3ComparisonSection />

      {GROUPS.map((group) => {
        const items = certificates.filter((cert) => cert.category === group.category);
        if (items.length === 0) return null;
        return (
          <section key={group.category} className="border-b border-brand-black/10 dark:border-brand-white/10 py-16">
            <Container>
              <SectionHeading title={group.title} description={group.description} />
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((cert) => (
                  <CertificateCard key={cert.slug} certificate={cert} />
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      <section className="py-16">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="Programa de Parceiros" title="Indique certificados e ganhe comissão" description="Contadores e parceiros comerciais têm condições especiais para indicar certificados digitais aos seus clientes." />
        </Container>
      </section>
    </>
  );
}
