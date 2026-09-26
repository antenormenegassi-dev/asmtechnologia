import { Logo } from "@/components/brand/Logo";
import { WhatsAppCTA } from "@/components/whatsapp/WhatsAppCTA";
import { SITE_DESCRIPTION } from "@/lib/constants";

export function AboutASMCard() {
  return (
    <div className="rounded-card border border-brand-black/10 p-6 dark:border-brand-white/10">
      <Logo size={32} />
      <h3 className="mt-4 text-lg font-semibold text-brand-black dark:text-brand-white">
        Sobre a ASM Technologia
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-black/70 dark:text-brand-white/70">
        {SITE_DESCRIPTION}
      </p>
      <WhatsAppCTA
        message="Olá! Vim pelo blog e gostaria de falar com a ASM Technologia."
        className="mt-5 w-full"
      >
        Falar no WhatsApp
      </WhatsAppCTA>
    </div>
  );
}
