import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckIcon } from "@/components/ui/icons";
import { CertificatePageTemplate } from "@/components/templates/CertificatePageTemplate";
import { getCertificateBySlug } from "@/data/certificates";

const certificate = getCertificateBySlug("e-cpf")!;

export const metadata: Metadata = {
  title: certificate.seoTitle,
  description: certificate.seoDescription,
};

const BENEFITS = [
  "Assinatura digital de documentos com validade jurídica",
  "Acesso a serviços da Receita Federal e outros órgãos",
  "Maior segurança em operações realizadas pela internet",
  "Praticidade, evitando deslocamentos e documentos impressos",
  "Agilidade para assinar contratos, declarações e outros documentos",
  "Possibilidade de utilizar serviços que exigem certificação digital",
  "Mais facilidade para profissionais e empresários realizarem operações em seu próprio nome",
];

export default function Page() {
  return (
    <CertificatePageTemplate certificate={certificate}>
      <section className="border-b border-brand-black/10 dark:border-brand-white/10 py-24">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="O que é"
            title="O que é o Certificado Digital e-CPF?"
            description="O e-CPF é a versão digital do CPF e funciona como uma identidade eletrônica da pessoa física. Ele permite comprovar sua identidade pela internet, acessar serviços digitais e assinar documentos eletronicamente com validade jurídica."
          />

          <div className="mt-16">
            <h3 className="text-lg font-semibold text-brand-black dark:text-brand-white">
              Principais benefícios do e-CPF
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
            <h3 className="text-lg font-semibold text-brand-black dark:text-brand-white">Para quem é indicado?</h3>
            <p className="mt-3 text-base leading-relaxed text-brand-black/70 dark:text-brand-white/70">
              O e-CPF pode ser utilizado por pessoas físicas, empresários, profissionais liberais,
              sócios e administradores, entre outros, conforme a necessidade. Por exemplo, um
              empresário pode utilizar o e-CPF para realizar determinadas operações em seu próprio
              nome, enquanto o e-CNPJ representa a empresa.
            </p>
          </div>

          <div className="mt-16 rounded-card border border-brand-black/10 dark:border-brand-white/10 p-8">
            <h3 className="text-lg font-semibold text-brand-black dark:text-brand-white">e-CPF x e-CNPJ</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-brand-black/70 dark:text-brand-white/70">
              <li>
                <strong className="text-brand-black dark:text-brand-white">e-CPF:</strong> identifica a pessoa física.
              </li>
              <li>
                <strong className="text-brand-black dark:text-brand-white">e-CNPJ:</strong> identifica a
                empresa/pessoa jurídica.
              </li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-brand-black/70 dark:text-brand-white/70">
              Ambos podem ser utilizados para identificação, autenticação e assinatura digital,
              mas cada um está vinculado a um titular diferente.
            </p>
          </div>
        </Container>
      </section>
    </CertificatePageTemplate>
  );
}
