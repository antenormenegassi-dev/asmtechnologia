import { WhatsAppCTA } from "@/components/whatsapp/WhatsAppCTA";

/** `<CTA />` inside an MDX post: a highlighted box that opens WhatsApp. */
export function InlineCta({
  label = "Falar com a ASM",
  title = "Quer ajuda especializada com esse assunto?",
  description = "Fale com a equipe da ASM Technologia e receba orientação personalizada.",
  message = "Olá! Vim pelo blog e gostaria de falar com a ASM Technologia.",
}: {
  label?: string;
  title?: string;
  description?: string;
  message?: string;
}) {
  return (
    <div className="not-prose my-10 rounded-card border border-brand-blue/20 bg-brand-blue/5 p-6 sm:p-8">
      <p className="text-lg font-semibold text-brand-black dark:text-brand-white">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-brand-black/70 dark:text-brand-white/70">
        {description}
      </p>
      <WhatsAppCTA message={message} className="mt-6">
        {label}
      </WhatsAppCTA>
    </div>
  );
}
