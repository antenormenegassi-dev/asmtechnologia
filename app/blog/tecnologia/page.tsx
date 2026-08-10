import type { Metadata } from "next";
import { BlogListing } from "@/components/blocks/BlogListing";

export const metadata: Metadata = {
  title: "Conteúdos sobre Tecnologia",
  description:
    "Artigos sobre sistemas sob medida, automação, integrações e transformação digital produzidos pela ASM Tecnologia.",
};

export default function BlogTecnologiaPage() {
  return (
    <BlogListing
      category="tecnologia"
      title="Tecnologia"
      description="Descubra quando vale a pena automatizar, integrar ou desenvolver tecnologia sob medida."
    />
  );
}
