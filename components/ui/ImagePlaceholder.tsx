import Image from "next/image";

export function ImagePlaceholder({
  src = "/images/cover.jpeg",
  alt = "",
  aspectClassName = "aspect-video",
  borderClassName = "border-brand-black/15 dark:border-brand-white/15",
  className,
}: {
  src?: string;
  alt?: string;
  aspectClassName?: string;
  borderClassName?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-card border border-dashed bg-brand-blue/5 ${aspectClassName} ${borderClassName} ${className ?? ""}`}
    >
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}
