import { ChevronDownIcon } from "@/components/ui/icons";

export interface AccordionItem {
  question: string;
  answer: string;
}

/**
 * Hand-rolled FAQ accordion using native <details>/<summary> no JS
 * required, works without a "use client" boundary.
 */
export function Accordion({ items }: { items: AccordionItem[] }) {
  return (
    <div className="divide-y divide-brand-black/10 dark:divide-brand-white/10 rounded-card border border-brand-black/10 dark:border-brand-white/10">
      {items.map((item) => (
        <details key={item.question} className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-brand-black dark:text-brand-white marker:content-none">
            {item.question}
            <ChevronDownIcon className="h-5 w-5 shrink-0 text-brand-black/50 dark:text-brand-white/50 transition-transform group-open:rotate-180" />
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-brand-black/70 dark:text-brand-white/70">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
