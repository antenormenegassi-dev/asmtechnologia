import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { Certificate } from "@/data/certificates";

export function CertificateCard({ certificate }: { certificate: Certificate }) {
  return (
    <Link
      href={`/certificados-digitais/${certificate.slug}`}
      className="group flex flex-col overflow-hidden rounded-card border border-brand-black/10 dark:border-brand-white/10 bg-brand-white dark:bg-brand-black transition-colors hover:border-brand-blue"
    >
      <ImagePlaceholder className="rounded-none border-0 border-b border-dashed border-brand-black/15 dark:border-brand-white/15" />
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <h3 className="text-lg font-semibold text-brand-black dark:text-brand-white">{certificate.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-brand-black/70 dark:text-brand-white/70">
            {certificate.shortDescription}
          </p>
        </div>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-blue">
          Ver detalhes
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
