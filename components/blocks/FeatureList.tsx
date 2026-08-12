import { CheckIcon } from "@/components/ui/icons";

export interface Feature {
  title: string;
  description: string;
}

export function FeatureList({ features }: { features: Feature[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <div key={feature.title} className="rounded-card border border-brand-black/10 dark:border-brand-white/10 p-6">
          <span className="flex h-9 w-9 items-center justify-center rounded-control bg-brand-blue/10 text-brand-blue">
            <CheckIcon className="h-4 w-4" />
          </span>
          <h3 className="mt-4 font-semibold text-brand-black dark:text-brand-white">{feature.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-brand-black/70 dark:text-brand-white/70">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
