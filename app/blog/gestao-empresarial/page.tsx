import type { Metadata } from "next";
import { BlogListing } from "@/components/blocks/BlogListing";

export const metadata: Metadata = {
  title: "Conteúdos sobre Gestão Empresarial",
  description:
    "Artigos sobre ERP, controle de estoque, financeiro, DRE e gestão empresarial produzidos pela ASM Tecnologia.",
};

export default function BlogGestaoEmpresarialPage() {
  return (
    <BlogListing
      category="gestao-empresarial"
      title="Gestão Empresarial"
      description="Aprenda a organizar vendas, estoque e financeiro com processos e sistemas de gestão."
    />
  );
}
