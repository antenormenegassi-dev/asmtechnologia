import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckIcon } from "@/components/ui/icons";

const BENEFITS = [
  { title: "Segurança", description: "Protege a identidade digital e reduz riscos de fraudes." },
  {
    title: "Validade jurídica",
    description: "Permite assinar documentos eletronicamente com validade jurídica.",
  },
  {
    title: "Praticidade",
    description: "Elimina a necessidade de imprimir, assinar e digitalizar documentos.",
  },
  {
    title: "Agilidade",
    description: "Processos que antes levavam horas ou dias podem ser realizados em poucos minutos.",
  },
  {
    title: "Acesso a sistemas",
    description: "Facilita o acesso a serviços da Receita Federal, eSocial, SEFAZ e outros sistemas.",
  },
  {
    title: "Redução de custos",
    description: "Diminui gastos com papel, impressão, armazenamento e deslocamentos.",
  },
  {
    title: "Emissão de notas fiscais",
    description: "Possibilita a utilização de sistemas que exigem certificação digital.",
  },
  {
    title: "Mobilidade",
    description: "Dependendo do tipo de certificado, é possível utilizá-lo em diferentes dispositivos.",
  },
];

export function CertificateWhatIsSection() {
  return (
    <section className="border-b border-brand-black/10 dark:border-brand-white/10 py-24">
      <Container>
        <SectionHeading
          eyebrow="O básico"
          title="O que é um Certificado Digital?"
          description="Funciona como uma identidade eletrônica de uma pessoa ou empresa. Ele permite assinar documentos digitalmente, acessar sistemas oficiais e realizar operações pela internet com segurança e validade jurídica."
          className="max-w-3xl"
        />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-black/70 dark:text-brand-white/70">
          Para empresas, o certificado digital é utilizado em diversas atividades do dia a dia,
          como emissão de notas fiscais, acesso a sistemas governamentais e cumprimento de
          obrigações fiscais.
        </p>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {BENEFITS.map((benefit) => (
            <div key={benefit.title} className="flex gap-4">
              <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-control bg-brand-blue/10 text-brand-blue">
                <CheckIcon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-semibold text-brand-black dark:text-brand-white">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-black/70 dark:text-brand-white/70">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
