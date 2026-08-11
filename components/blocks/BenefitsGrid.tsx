import { SectionHeading } from "@/components/ui/SectionHeading";
import { Container } from "@/components/layout/Container";
import { CheckIcon } from "@/components/ui/icons";

const BENEFITS = [
  {
    title: "Segurança de ponta a ponta",
    description:
      "Certificação digital dentro dos padrões ICP-Brasil e processos internos auditados para proteger seus dados e transações.",
  },
  {
    title: "Atendimento consultivo",
    description:
      "Nossa equipe orienta cada cliente sobre qual certificado, módulo ou solução realmente faz sentido para o seu negócio.",
  },
  {
    title: "Tecnologia integrada",
    description:
      "Certificados, sistemas de gestão e projetos sob medida conversam entre si uma única empresa acompanha sua maturidade digital.",
  },
  {
    title: "Suporte contínuo",
    description:
      "Renovação, atualização e suporte técnico acompanham o cliente após a compra não apenas durante a venda.",
  },
];

export function BenefitsGrid() {
  return (
    <section className="border-b border-brand-black/10 py-24">
      <Container>
        <SectionHeading
          eyebrow="Por que a ASM"
          title="Uma empresa de tecnologia pensada para acompanhar o seu negócio"
          description="Do primeiro certificado digital ao sistema mais complexo, a ASM entrega segurança, clareza e capacidade técnica em cada etapa."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {BENEFITS.map((benefit) => (
            <div key={benefit.title} className="flex gap-4">
              <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-control bg-brand-blue/10 text-brand-blue">
                <CheckIcon className="h-4 w-4" />
              </span>
              <div>
                <h3 className="font-semibold text-brand-black">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-black/70">
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
