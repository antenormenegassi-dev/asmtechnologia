import { Container } from "@/components/layout/Container";
import { ShieldCheckIcon, HeadsetIcon, LayersIcon, BoltIcon } from "@/components/ui/icons";

const ITEMS = [
  { icon: ShieldCheckIcon, label: "Certificação digital" },
  { icon: HeadsetIcon, label: "Atendimento especializado" },
  { icon: LayersIcon, label: "Soluções empresariais" },
  { icon: BoltIcon, label: "Tecnologia e segurança" },
];

function Badge({ icon: Icon, label }: (typeof ITEMS)[number]) {
  return (
    <div className="flex shrink-0 items-center gap-4 px-8">
      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-control bg-brand-blue/10 text-brand-blue">
        <Icon className="h-8 w-8" />
      </span>
      <span className="whitespace-nowrap text-lg font-medium text-brand-black/80 dark:text-brand-white/80">{label}</span>
    </div>
  );
}

export function TrustBadges() {
  return (
    <section className="border-b border-brand-black/10 dark:border-brand-white/10 bg-brand-white dark:bg-brand-black py-10">
      <Container>
        <div
          className="group flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
        >
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            {ITEMS.map((item) => (
              <Badge key={`a-${item.label}`} {...item} />
            ))}
            {ITEMS.map((item) => (
              <Badge key={`b-${item.label}`} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
