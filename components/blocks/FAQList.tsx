import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";

export function FAQList({ items }: { items: AccordionItem[] }) {
  return (
    <div>
      <SectionHeading eyebrow="Dúvidas frequentes" title="Perguntas frequentes" />
      <div className="mt-8">
        <Accordion items={items} />
      </div>
    </div>
  );
}
