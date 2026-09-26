import Image from "next/image";
import { Container } from "@/components/layout/Container";

export interface HeroHighlight {
  icon: (props: { className?: string }) => React.ReactNode;
  label: string;
  value: string;
}

interface HeroProps {
  title: string;
  description: string;
  cta: React.ReactNode;
  image: { src: string; alt: string };
  highlights?: [] | [HeroHighlight] | [HeroHighlight, HeroHighlight];
}

const PHOTO_CORNER = "rounded-br-[4rem] sm:rounded-br-[6rem] lg:rounded-br-[8rem]";

const HIGHLIGHT_POSITIONS = [
  "top-3 left-3 sm:top-8 sm:-left-6 lg:-left-10 motion-safe:[animation-delay:300ms]",
  "-bottom-6 left-3 sm:left-10 lg:-left-6 lg:bottom-16 motion-safe:[animation-delay:450ms]",
];

export function Hero({ title, description, cta, image, highlights = [] }: HeroProps) {
  return (
    <section className="overflow-hidden border-b border-brand-black/10 pt-6 pb-12 dark:border-brand-white/10 sm:pt-12 sm:pb-16 lg:pt-16">
      {/* Narrow container (InfinityFy's 80rem) so the 4:5 photo keeps the same
          size instead of growing with the 1440px site container. */}
      <Container size="narrow" className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="motion-safe:animate-[fade-up_0.6s_ease-out_both]">
          <h1 className="text-4xl font-medium leading-none tracking-[-0.04em] text-brand-black dark:text-brand-white md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-black/70 dark:text-brand-white/70">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">{cta}</div>
        </div>

        <div className="relative order-first w-full lg:order-last motion-safe:animate-[fade-up_0.6s_ease-out_both] motion-safe:[animation-delay:150ms]">
          <div className="pointer-events-none absolute -top-10 right-0 h-64 w-64 rounded-full bg-brand-blue/20 blur-3xl" />
          <div
            className={`absolute inset-0 translate-x-3 translate-y-3 bg-brand-blue/10 sm:translate-x-5 sm:translate-y-5 ${PHOTO_CORNER}`}
          />
          <div
            className={`relative aspect-5/4 overflow-hidden bg-brand-blue/5 shadow-lg sm:aspect-16/10 lg:aspect-4/5 ${PHOTO_CORNER}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              preload
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          {highlights.map(({ icon: Icon, label, value }, index) => (
            <div
              key={label}
              className={`absolute z-10 flex items-center gap-3 rounded-card border border-brand-black/10 bg-background/90 p-2.5 shadow-lg backdrop-blur-md dark:border-brand-white/15 sm:p-3.5 motion-safe:animate-[fade-up_0.6s_ease-out_both] ${HIGHLIGHT_POSITIONS[index]}`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-control bg-brand-blue/10 text-brand-blue sm:h-10 sm:w-10">
                <Icon className="h-5 w-5" />
              </span>
              <span className="pr-1">
                <span className="block text-[11px] text-brand-black/60 dark:text-brand-white/60 sm:text-xs">
                  {label}
                </span>
                <span className="block text-sm font-semibold text-brand-black dark:text-brand-white">
                  {value}
                </span>
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
