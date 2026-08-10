import { buildWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/icons";

type WhatsAppCTAVariant = "primary" | "secondary";

const VARIANT_CLASSES: Record<WhatsAppCTAVariant, string> = {
  primary: "bg-brand-blue text-brand-white hover:bg-brand-blue-dark",
  secondary:
    "border border-brand-black/15 text-brand-black hover:border-brand-blue hover:text-brand-blue",
};

interface WhatsAppCTAProps {
  message: string;
  children: React.ReactNode;
  variant?: WhatsAppCTAVariant;
  className?: string;
}

/**
 * Every purchase/contact CTA on the site routes through here so the
 * conversation always opens on WhatsApp with the right product context
 * pre-filled, per ASM's WhatsApp-first conversion strategy.
 */
export function WhatsAppCTA({
  message,
  children,
  variant = "primary",
  className,
}: WhatsAppCTAProps) {
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-control px-5 py-3 text-sm font-medium transition-colors ${VARIANT_CLASSES[variant]} ${className ?? ""}`}
    >
      <WhatsAppIcon className="h-4 w-4" />
      {children}
    </a>
  );
}
