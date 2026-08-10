import type { Metadata } from "next";
import { BlogListing } from "@/components/blocks/BlogListing";

export const metadata: Metadata = {
  title: "Conteúdos sobre Certificados Digitais",
  description:
    "Artigos sobre e-CNPJ, e-CPF, NF-e, NFC-e e certificação digital produzidos pela ASM Tecnologia.",
};

export default function BlogCertificadosDigitaisPage() {
  return (
    <BlogListing
      category="certificados-digitais"
      title="Certificados Digitais"
      description="Entenda como funcionam os certificados digitais e escolha o modelo certo para sua empresa."
    />
  );
}
