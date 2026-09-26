import Link from "next/link";
import Image from "next/image";

const DEFAULT_PROMO_IMAGE = "/images/hero/home.jpg";

export function PortraitPromo({
  href,
  src = DEFAULT_PROMO_IMAGE,
  alt = "",
}: {
  href: string;
  src?: string;
  alt?: string;
}) {
  return (
    <Link
      href={href}
      className="relative block aspect-3/4 w-full overflow-hidden rounded-card border border-brand-black/10 bg-brand-blue/5 dark:border-brand-white/10"
    >
      <Image src={src} alt={alt} fill sizes="320px" className="object-cover" />
    </Link>
  );
}
