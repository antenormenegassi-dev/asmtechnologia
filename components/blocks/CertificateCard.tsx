import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";
import type { Certificate } from "@/data/certificates";

export function CertificateCard({ certificate }: { certificate: Certificate }) {
  return (
    <Link
      href={`/certificados-digitais/${certificate.slug}`}
      className="group flex flex-col justify-between rounded-card border border-brand-black/10 bg-brand-white p-6 transition-colors hover:border-brand-blue"
    >
      <div>
        <h3 className="text-lg font-semibold text-brand-black">{certificate.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-black/70">
          {certificate.shortDescription}
        </p>
      </div>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-blue">
        Ver detalhes
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
