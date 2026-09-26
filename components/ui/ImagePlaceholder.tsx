import Image from "next/image";

/**
 * Image slot used across the site. Without `src` it renders the generic
 * cover with a dashed border, signalling the slot still needs a real photo.
 */
export function ImagePlaceholder({
  src,
  alt = "",
  aspectClassName = "aspect-video",
  borderClassName = "border-brand-black/15 dark:border-brand-white/15",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className,
}: {
  src?: string;
  alt?: string;
  aspectClassName?: string;
  borderClassName?: string;
  sizes?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-card border bg-brand-blue/5 ${src ? "" : "border-dashed"} ${aspectClassName} ${borderClassName} ${className ?? ""}`}
    >
      <Image src={src ?? "/images/cover.jpeg"} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}
