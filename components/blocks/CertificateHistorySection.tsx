import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckIcon } from "@/components/ui/icons";

const REASONS = [
  "Uma pessoa realmente era quem dizia ser",
  "Uma empresa estava realizando determinada operação",
  "Um documento eletrônico não havia sido alterado",
  "Uma assinatura digital realmente pertencia ao seu titular",
];

const FLOW = ["Identifique-se", "Acesse sistemas", "Assine documentos", "Realize operações"];

export function CertificateHistorySection() {
  return (
    <section className="border-b border-brand-black/10 dark:border-brand-white/10 py-24">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Origem"
          title="Por que surgiu o Certificado Digital?"
          description="O certificado digital surgiu para resolver um problema que cresceu junto com a internet: como identificar uma pessoa ou empresa no ambiente digital e garantir que uma operação eletrônica fosse realmente autêntica e segura."
        />

        <div className="mt-14">
          <h3 className="text-lg font-semibold text-brand-black dark:text-brand-white">Quando surgiu?</h3>
          <p className="mt-3 text-base leading-relaxed text-brand-black/70 dark:text-brand-white/70">
            A tecnologia de certificados digitais começou a se desenvolver na década de 1990,
            acompanhando a expansão da internet e da criptografia de chave pública. No Brasil, um
            marco importante foi a criação da ICP-Brasil (Infraestrutura de Chaves Públicas
            Brasileira) pela Medida Provisória nº 2.200-2, de 24 de agosto de 2001. A partir daí,
            o país estabeleceu uma estrutura oficial para certificados digitais e assinaturas
            eletrônicas com validade jurídica.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="text-lg font-semibold text-brand-black dark:text-brand-white">Por que foi criado?</h3>
          <p className="mt-3 text-base leading-relaxed text-brand-black/70 dark:text-brand-white/70">
            Antes dos certificados digitais, era muito mais difícil garantir, pela internet, que:
          </p>
          <ul className="mt-5 space-y-4">
            {REASONS.map((reason) => (
              <li key={reason} className="flex gap-3 text-sm leading-relaxed text-brand-black/70 dark:text-brand-white/70">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                {reason}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-base leading-relaxed text-brand-black/70 dark:text-brand-white/70">
            O certificado digital surgiu justamente para proporcionar identidade, segurança,
            autenticidade e integridade nas operações eletrônicas.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-lg font-semibold text-brand-black dark:text-brand-white">Como isso funciona?</h3>
          <p className="mt-3 text-base leading-relaxed text-brand-black/70 dark:text-brand-white/70">
            De maneira simplificada, o certificado digital utiliza criptografia para vincular uma
            identidade a uma chave digital. Por isso, ele pode permitir que uma pessoa ou empresa:
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-medium text-brand-blue">
            {FLOW.map((step, index) => (
              <span key={step} className="flex items-center gap-3">
                <span className="rounded-control bg-brand-blue/10 px-4 py-2">{step}</span>
                {index < FLOW.length - 1 && <span className="text-brand-black/30 dark:text-brand-white/30">→</span>}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-lg font-semibold text-brand-black dark:text-brand-white">E no Brasil?</h3>
          <p className="mt-3 text-base leading-relaxed text-brand-black/70 dark:text-brand-white/70">
            A criação da ICP-Brasil em 2001 foi fundamental para a expansão do uso do certificado
            digital no país. Com o passar dos anos, ele passou a fazer parte da rotina de
            empresas, contadores, profissionais e órgãos públicos, sendo utilizado em atividades
            como emissão de notas fiscais, obrigações fiscais, acesso a sistemas governamentais e
            assinatura digital de documentos.
          </p>
        </div>

        <p className="mt-16 rounded-card border border-brand-black/10 dark:border-brand-white/10 bg-brand-blue/5 p-6 text-base leading-relaxed text-brand-black/70 dark:text-brand-white/70">
          <strong className="text-brand-black dark:text-brand-white">Em resumo:</strong> o certificado digital nasceu da
          necessidade de levar a confiança que existe no mundo físico para o ambiente digital
          substituindo, em muitas situações, a necessidade de presença física, papel e assinatura
          manuscrita.
        </p>
      </Container>
    </section>
  );
}
