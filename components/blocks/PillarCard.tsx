import Link from "next/link";
import type { ComponentType } from "react";
import { ArrowRightIcon } from "@/components/ui/icons";

interface PillarCardProps {
  icon: ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
}

export function PillarCard({ icon: Icon, eyebrow, title, description, href, linkLabel }: PillarCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col justify-between rounded-card border border-brand-black/10 dark:border-brand-white/10 bg-brand-white dark:bg-brand-black p-8 transition-colors hover:border-brand-blue"
    >
      <div className="flex flex-col items-center text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-control bg-brand-blue/10 text-brand-blue">
          <Icon className="h-7 w-7" />
        </span>
        <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-brand-blue">
          {eyebrow}
        </p>
        <h3 className="mt-3 text-xl font-semibold text-brand-black dark:text-brand-white">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-brand-black/70 dark:text-brand-white/70">{description}</p>
      </div>
      <span className="mt-8 inline-flex items-center justify-center gap-2 self-center text-sm font-medium text-brand-blue">
        {linkLabel}
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
