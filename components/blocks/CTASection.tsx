import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { WhatsAppCTA } from "@/components/whatsapp/WhatsAppCTA";

export function CTASection() {
  return (
    <section className="bg-brand-blue py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-brand-white sm:text-4xl">
          Pronto para proteger, organizar e impulsionar sua empresa?
        </h2>
        <p className="max-w-xl text-base leading-relaxed text-brand-white/85">
          Fale com um especialista da ASM e descubra o certificado digital ou a solução
          tecnológica ideal para o seu negócio.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <WhatsAppCTA
            message="Olá! Gostaria de falar com um especialista da ASM Tecnologia."
            className="bg-brand-white text-brand-blue hover:bg-brand-white/90"
          >
            Falar no WhatsApp
          </WhatsAppCTA>
          <Link
            href="/certificados-digitais"
            className="inline-flex items-center justify-center rounded-control border border-brand-white/40 px-5 py-3 text-sm font-medium text-brand-white transition-colors hover:border-brand-white"
          >
            Ver certificados digitais
          </Link>
        </div>
      </Container>
    </section>
  );
}
