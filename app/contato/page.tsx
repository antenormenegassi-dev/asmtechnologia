import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppCTA } from "@/components/whatsapp/WhatsAppCTA";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a ASM Tecnologia pelo WhatsApp, e-mail ou telefone. Atendimento especializado para certificados digitais e soluções empresariais.",
};

export default function ContatoPage() {
  return (
    <section className="py-20">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contato"
            title="Fale com a ASM Tecnologia"
            description="O caminho mais rápido para falar com a nossa equipe é o WhatsApp — respondemos com atendimento especializado sobre certificados, sistemas e projetos sob medida."
          />

          <div className="mt-8">
            <WhatsAppCTA message="Olá! Gostaria de falar com a equipe da ASM Tecnologia.">
              Chamar no WhatsApp
            </WhatsAppCTA>
          </div>

          <dl className="mt-10 space-y-4 text-sm">
            <div>
              <dt className="text-brand-black/50">E-mail</dt>
              <dd className="mt-1 font-medium text-brand-black">{CONTACT_EMAIL}</dd>
            </div>
            <div>
              <dt className="text-brand-black/50">Telefone</dt>
              <dd className="mt-1 font-medium text-brand-black">{CONTACT_PHONE_DISPLAY}</dd>
            </div>
          </dl>
        </div>

        {/*
          Static form UI only — not wired to a backend. Given the site's
          WhatsApp-first conversion strategy, this is a secondary path;
          hook up a real submit handler / endpoint before launch if this
          form should actually send messages.
        */}
        <form className="rounded-card border border-brand-black/10 p-8">
          <div className="grid gap-5">
            <label className="text-sm font-medium text-brand-black">
              Nome
              <input
                type="text"
                name="name"
                placeholder="Seu nome completo"
                className="mt-2 w-full rounded-control border border-brand-black/15 px-4 py-3 text-sm text-brand-black placeholder:text-brand-black/40 focus:border-brand-blue focus:outline-none"
              />
            </label>
            <label className="text-sm font-medium text-brand-black">
              E-mail
              <input
                type="email"
                name="email"
                placeholder="voce@empresa.com.br"
                className="mt-2 w-full rounded-control border border-brand-black/15 px-4 py-3 text-sm text-brand-black placeholder:text-brand-black/40 focus:border-brand-blue focus:outline-none"
              />
            </label>
            <label className="text-sm font-medium text-brand-black">
              Assunto
              <input
                type="text"
                name="subject"
                placeholder="Ex: Certificado e-CNPJ A1"
                className="mt-2 w-full rounded-control border border-brand-black/15 px-4 py-3 text-sm text-brand-black placeholder:text-brand-black/40 focus:border-brand-blue focus:outline-none"
              />
            </label>
            <label className="text-sm font-medium text-brand-black">
              Mensagem
              <textarea
                name="message"
                rows={4}
                placeholder="Como podemos ajudar?"
                className="mt-2 w-full rounded-control border border-brand-black/15 px-4 py-3 text-sm text-brand-black placeholder:text-brand-black/40 focus:border-brand-blue focus:outline-none"
              />
            </label>
            <button
              type="button"
              className="mt-2 inline-flex items-center justify-center rounded-control bg-brand-blue px-5 py-3 text-sm font-medium text-brand-white transition-colors hover:bg-brand-blue-dark"
            >
              Enviar mensagem
            </button>
            <p className="text-xs text-brand-black/50">
              Prefere resposta imediata? Use o WhatsApp ao lado — é o canal mais rápido com a
              nossa equipe.
            </p>
          </div>
        </form>
      </Container>
    </section>
  );
}
