import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade da ASM Technologia.",
};

export default function PoliticaDePrivacidadePage() {
  return (
    <section className="py-20">
      <Container className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue">Legal</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-brand-black dark:text-brand-white">
          Política de Privacidade
        </h1>
        <p className="mt-4 text-sm text-brand-black/50 dark:text-brand-white/50">
          Última atualização: 10 de agosto de 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-brand-black/70 dark:text-brand-white/70">
          <p className="rounded-control bg-brand-blue/5 p-4 text-brand-black/70 dark:text-brand-white/70">
            Este é um texto placeholder para fins de estrutura do site. Substitua pelo conteúdo
            jurídico definitivo, revisado por um profissional habilitado, antes da publicação.
          </p>

          <div>
            <h2 className="text-lg font-semibold text-brand-black dark:text-brand-white">1. Dados que coletamos</h2>
            <p className="mt-2">
              A ASM Technologia pode coletar dados como nome, e-mail, telefone e CNPJ/CPF quando
              você entra em contato, solicita um certificado digital ou preenche formulários no
              site.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-brand-black dark:text-brand-white">2. Como usamos seus dados</h2>
            <p className="mt-2">
              Utilizamos seus dados para prestar atendimento, processar a emissão de certificados
              digitais, enviar comunicações comerciais e cumprir obrigações legais e regulatórias.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-brand-black dark:text-brand-white">3. Compartilhamento de dados</h2>
            <p className="mt-2">
              Seus dados podem ser compartilhados com Autoridades Certificadoras e órgãos
              reguladores, quando necessário para a emissão do certificado digital, e não são
              vendidos a terceiros para fins de marketing.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-brand-black dark:text-brand-white">4. Seus direitos</h2>
            <p className="mt-2">
              Você pode solicitar acesso, correção ou exclusão dos seus dados pessoais a qualquer
              momento, entrando em contato pelos canais informados na página de Contato.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-brand-black dark:text-brand-white">5. Contato</h2>
            <p className="mt-2">
              Em caso de dúvidas sobre esta política, entre em contato pelos canais listados na
              nossa página de Contato.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
