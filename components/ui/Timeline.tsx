import type { ComponentType } from "react";
import { ChatIcon, DocumentIcon, ShieldCheckIcon, CheckIcon } from "@/components/ui/icons";
import type { AcquisitionStep } from "@/data/certificates";

const STEP_ICONS: ComponentType<{ className?: string }>[] = [
  ChatIcon,
  DocumentIcon,
  ShieldCheckIcon,
  CheckIcon,
];

const BADGE_COLORS = ["bg-brand-blue", "bg-brand-black"];

export function Timeline({ items }: { items: AcquisitionStep[] }) {
  return (
    <ol className="relative mt-14">
      <div
        aria-hidden="true"
        className="absolute left-5 top-5 bottom-5 w-px bg-brand-black/15 dark:bg-brand-white/15 sm:left-1/2 sm:-translate-x-1/2"
      />

      <div className="space-y-10 sm:space-y-16">
        {items.map((item, index) => {
          const isRight = index % 2 === 1;
          const Icon = STEP_ICONS[index % STEP_ICONS.length];
          const badgeColor = BADGE_COLORS[index % BADGE_COLORS.length];
          return (
            <li key={item.title} className="relative">
              {/* Mobile: icon and card side by side, single column */}
              <div className="flex gap-6 sm:hidden">
                <span
                  className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-brand-white ${badgeColor}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex-1 rounded-card border border-brand-black/10 dark:border-brand-white/10 p-5">
                  <h3 className="font-semibold text-brand-black dark:text-brand-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-black/70 dark:text-brand-white/70">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Desktop: card alternating sides around a centered line */}
              <div className="hidden sm:block">
                <span
                  className={`absolute left-1/2 top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-brand-white ${badgeColor}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div
                  aria-hidden="true"
                  className={`absolute top-1/2 h-px w-8 -translate-y-1/2 bg-brand-black/15 dark:bg-brand-white/15 ${
                    isRight ? "left-1/2" : "right-1/2"
                  }`}
                />
                <div className="grid grid-cols-2 gap-x-16">
                  <div className={isRight ? "col-start-2" : "col-start-1"}>
                    <div className="rounded-card border border-brand-black/10 dark:border-brand-white/10 p-5">
                      <h3 className="font-semibold text-brand-black dark:text-brand-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-brand-black/70 dark:text-brand-white/70">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </div>
    </ol>
  );
}
