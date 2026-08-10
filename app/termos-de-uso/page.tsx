import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de Uso da ASM Tecnologia.",
};

export default function TermosDeUsoPage() {
  return (
    <section className="py-20">
      <Container className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue">Legal</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-brand-black">
          Termos de Uso
        </h1>
        <p className="mt-4 text-sm text-brand-black/50">
          Última atualização: 10 de agosto de 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-brand-black/70">
          <p className="rounded-control bg-brand-blue/5 p-4 text-brand-black/70">
            Este é um texto placeholder para fins de estrutura do site. Substitua pelo conteúdo
            jurídico definitivo, revisado por um profissional habilitado, antes da publicação.
          </p>

          <div>
            <h2 className="text-lg font-semibold text-brand-black">1. Aceitação dos termos</h2>
            <p className="mt-2">
              Ao utilizar o site da ASM Tecnologia, você concorda com estes Termos de Uso e com a
              nossa Política de Privacidade.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-brand-black">2. Uso do site</h2>
            <p className="mt-2">
              O conteúdo deste site é destinado a informar sobre certificados digitais, soluções
              empresariais e serviços de tecnologia da ASM. Não é permitido reproduzir o conteúdo
              sem autorização prévia.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-brand-black">3. Contratação de serviços</h2>
            <p className="mt-2">
              A contratação de certificados digitais e demais serviços ocorre por meio dos canais
              de atendimento indicados no site (WhatsApp, e-mail ou telefone) e está sujeita a
              condições comerciais específicas, informadas no momento da contratação.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-brand-black">4. Limitação de responsabilidade</h2>
            <p className="mt-2">
              As informações publicadas no site têm caráter informativo e não substituem a
              orientação de um especialista para o seu caso específico.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-brand-black">5. Alterações destes termos</h2>
            <p className="mt-2">
              A ASM Tecnologia pode atualizar estes Termos de Uso periodicamente. A versão vigente
              estará sempre disponível nesta página.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
