import { Container } from "@/components/layout/Container";
import { ShieldCheckIcon, HeadsetIcon, LayersIcon, BoltIcon } from "@/components/ui/icons";

const ITEMS = [
  { icon: ShieldCheckIcon, label: "Certificação digital" },
  { icon: HeadsetIcon, label: "Atendimento especializado" },
  { icon: LayersIcon, label: "Soluções empresariais" },
  { icon: BoltIcon, label: "Tecnologia e segurança" },
];

export function TrustBadges() {
  return (
    <section className="border-b border-brand-black/10 bg-brand-white py-10">
      <Container className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-control bg-brand-blue/10 text-brand-blue">
              <Icon className="h-5 w-5" />
            </span>
            <span className="text-sm font-medium text-brand-black/80">{label}</span>
          </div>
        ))}
      </Container>
    </section>
  );
}
