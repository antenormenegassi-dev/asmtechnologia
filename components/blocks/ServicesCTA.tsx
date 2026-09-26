import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";

const SERVICES = [
  { label: "Certificados Digitais", href: "/certificados-digitais" },
  { label: "Soluções Empresariais", href: "/solucoes-empresariais" },
  { label: "Tecnologia Sob Medida", href: "/tecnologia-sob-medida" },
  { label: "Seja Parceiro", href: "/parceiros" },
];

export function ServicesCTA() {
  return (
    <div className="rounded-card border border-brand-black/10 p-6 dark:border-brand-white/10">
      <h3 className="text-lg font-semibold text-brand-black dark:text-brand-white">
        Como a ASM pode ajudar sua empresa?
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-black/70 dark:text-brand-white/70">
        Conheça as soluções da ASM Technologia para proteger, organizar e impulsionar o seu negócio.
      </p>
      <ul className="mt-5 flex flex-col">
        {SERVICES.map((service) => (
          <li key={service.href}>
            <Link
              href={service.href}
              className="flex items-center justify-between gap-2 rounded-control px-3 py-2.5 text-sm font-medium text-brand-black transition-colors hover:bg-brand-blue/5 hover:text-brand-blue dark:text-brand-white"
            >
              {service.label}
              <ArrowRightIcon className="h-4 w-4 shrink-0 text-brand-black/40 dark:text-brand-white/40" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
