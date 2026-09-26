// ASM Technologia WhatsApp number in E.164 format
// (digits only, country + area code, no "+" or symbols): (11) 91042-1414.
export const WHATSAPP_NUMBER = "5511910421414";

/**
 * Builds a wa.me link that opens WhatsApp with a pre-filled message.
 * Used across the site so every CTA carries product/context information,
 * per ASM's WhatsApp-first conversion strategy.
 */
export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
