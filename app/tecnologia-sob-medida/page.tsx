import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureList } from "@/components/blocks/FeatureList";
import { WhatsAppCTA } from "@/components/whatsapp/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Tecnologia Sob Medida",
  description:
    "Sistemas personalizados, plataformas web, aplicativos, APIs e automações desenvolvidos sob medida pela ASM Technologia.",
};

const SERVICES = [
  { title: "Sistemas personalizados", description: "Desenvolvidos a partir do processo real da sua empresa." },
  { title: "Plataformas web", description: "Portais, painéis e aplicações web sob medida." },
  { title: "Aplicativos", description: "Apps móveis para operação interna ou para o seu cliente final." },
  { title: "APIs e integrações", description: "Conectamos seus sistemas para eliminar retrabalho manual." },
  { title: "Automação de processos", description: "Rotinas repetitivas transformadas em fluxos automáticos." },
  { title: "Portais empresariais", description: "Ambientes para clientes, fornecedores ou colaboradores." },
  { title: "Sistemas internos", description: "Ferramentas específicas para times e operações internas." },
  { title: "Projetos tecnológicos específicos", description: "Da concepção à entrega, com acompanhamento técnico." },
];

const STEPS = [
  "Entendemos seu problema de negócio, não apenas o pedido técnico",
  "Projetamos a arquitetura da solução mais adequada",
  "Desenvolvemos com checkpoints de acompanhamento",
  "Entregamos, damos suporte e evoluímos com você",
];

export default function TecnologiaSobMedidaPage() {
  return (
    <>
      <section className="border-b border-brand-black/10 py-20">
        <Container>
          <SectionHeading
            eyebrow="Transforma"
            title="Sua necessidade não cabe em um sistema pronto? Nós criamos a solução."
            description="Quando um produto pronto não resolve, a ASM projeta e desenvolve a tecnologia certa para o seu problema específico."
          />
          <div className="mt-10 flex flex-wrap gap-4">
            <WhatsAppCTA message="Olá! Tenho um projeto de tecnologia sob medida para discutir com a ASM.">
              Solicitar projeto
            </WhatsAppCTA>
          </div>
        </Container>
      </section>

      <section className="border-b border-brand-black/10 py-16">
        <Container>
          <SectionHeading eyebrow="O que desenvolvemos" title="Tecnologia projetada para o seu problema" />
          <div className="mt-10">
            <FeatureList features={SERVICES} />
          </div>
        </Container>
      </section>

      <section className="border-b border-brand-black/10 py-16">
        <Container>
          <SectionHeading eyebrow="Como trabalhamos" title="Do problema à solução" />
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

      <section className="bg-brand-black py-16">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-xl text-2xl font-semibold tracking-tight text-brand-white sm:text-3xl">
            Conte seu desafio para a nossa equipe
          </h2>
          <WhatsAppCTA message="Olá! Gostaria de solicitar um projeto de tecnologia sob medida.">
            Falar sobre meu projeto
          </WhatsAppCTA>
        </Container>
      </section>
    </>
  );
}
