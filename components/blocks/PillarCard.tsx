import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";

interface PillarCardProps {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}

export function PillarCard({ eyebrow, title, description, href, linkLabel }: PillarCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col justify-between rounded-card border border-brand-black/10 bg-brand-white p-8 transition-colors hover:border-brand-blue"
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue">
          {eyebrow}
        </p>
        <h3 className="mt-3 text-xl font-semibold text-brand-black">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-brand-black/70">{description}</p>
      </div>
      <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-brand-blue">
        {linkLabel}
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
