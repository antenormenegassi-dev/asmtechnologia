import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckIcon } from "@/components/ui/icons";
import { CertificatePageTemplate } from "@/components/templates/CertificatePageTemplate";
import { getCertificateBySlug } from "@/data/certificates";

const certificate = getCertificateBySlug("e-cnpj")!;

export const metadata: Metadata = {
  title: certificate.seoTitle,
  description: certificate.seoDescription,
};

const BENEFITS = [
  "Emissão de notas fiscais eletrônicas",
  "Acesso a serviços da Receita Federal e outros órgãos",
  "Assinatura digital de documentos e contratos",
  "Cumprimento de obrigações fiscais e tributárias",
  "Acesso a sistemas empresariais que exigem certificado digital",
  "Maior segurança nas transações eletrônicas",
  "Agilidade e redução de burocracia",
  "Validade jurídica nas assinaturas digitais, conforme a legislação aplicável",
];

export default function Page() {
  return (
    <CertificatePageTemplate certificate={certificate}>
      <section className="border-b border-brand-black/10 dark:border-brand-white/10 py-24">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="O que é"
            title="O que é o Certificado Digital e-CNPJ?"
            description="O e-CNPJ é o certificado digital utilizado para identificar uma empresa no ambiente digital. Ele funciona como uma espécie de “documento de identidade eletrônico da empresa”, permitindo comprovar sua identidade e realizar operações online com segurança."
          />
          <p className="mt-6 text-base leading-relaxed text-brand-black/70 dark:text-brand-white/70">
            Com ele, a empresa pode realizar diversas atividades sem precisar comparecer
            presencialmente a órgãos públicos ou assinar documentos manualmente.
          </p>

          <div className="mt-16">
            <h3 className="text-lg font-semibold text-brand-black dark:text-brand-white">
              Principais benefícios do e-CNPJ
            </h3>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {BENEFITS.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-brand-black/70 dark:text-brand-white/70">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14">
            <h3 className="text-lg font-semibold text-brand-black dark:text-brand-white">Quem precisa do e-CNPJ?</h3>
            <p className="mt-3 text-base leading-relaxed text-brand-black/70 dark:text-brand-white/70">
              Ele é utilizado principalmente por empresas que precisam emitir notas fiscais,
              acessar sistemas governamentais, realizar obrigações fiscais ou assinar documentos
              eletronicamente. O e-CNPJ pode ser emitido em diferentes modelos, principalmente A1
              e A3. Para muitas empresas, o A1 é bastante conveniente, pois é um arquivo digital
              que pode ser integrado a sistemas de emissão de notas fiscais e softwares de gestão.
            </p>
          </div>

          <p className="mt-16 rounded-card border border-brand-black/10 dark:border-brand-white/10 bg-brand-blue/5 p-6 text-base leading-relaxed text-brand-black/70 dark:text-brand-white/70">
            <strong className="text-brand-black dark:text-brand-white">Em resumo:</strong> o e-CNPJ dá à empresa uma
            identidade digital segura, facilitando operações fiscais, administrativas e comerciais
            pela internet.
          </p>
        </Container>
      </section>
    </CertificatePageTemplate>
  );
}
