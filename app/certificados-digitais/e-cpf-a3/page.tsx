import type { Metadata } from "next";
import { CertificatePageTemplate } from "@/components/templates/CertificatePageTemplate";
import { getCertificateBySlug } from "@/data/certificates";

const certificate = getCertificateBySlug("e-cpf-a3")!;

export const metadata: Metadata = {
  title: certificate.seoTitle,
  description: certificate.seoDescription,
};

export default function Page() {
  return <CertificatePageTemplate certificate={certificate} />;
}
