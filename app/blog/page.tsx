import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PillarCard } from "@/components/blocks/PillarCard";
import { BlogPostCard } from "@/components/blocks/BlogPostCard";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Conteúdos",
  description:
    "Conteúdos sobre certificados digitais, gestão empresarial e tecnologia produzidos pela ASM Tecnologia.",
};

export default function BlogPage() {
  return (
    <>
      <section className="border-b border-brand-black/10 py-20">
        <Container>
          <SectionHeading
            eyebrow="Conteúdos"
            title="Aprenda sobre certificados, gestão e tecnologia"
            description="Conteúdos práticos para ajudar sua empresa a tomar decisões melhores sobre certificação digital, gestão e tecnologia."
          />
        </Container>
      </section>

      <section className="border-b border-brand-black/10 py-16">
        <Container>
          <SectionHeading title="Categorias" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <PillarCard
              eyebrow="Categoria"
              title="Certificados Digitais"
              description="e-CNPJ, e-CPF, NF-e, NFC-e e tudo sobre certificação digital."
              href="/blog/certificados-digitais"
              linkLabel="Ver conteúdos"
            />
            <PillarCard
              eyebrow="Categoria"
              title="Gestão Empresarial"
              description="ERP, controle de estoque, financeiro, DRE e gestão do negócio."
              href="/blog/gestao-empresarial"
              linkLabel="Ver conteúdos"
            />
            <PillarCard
              eyebrow="Categoria"
              title="Tecnologia"
              description="Sistemas sob medida, automação, integrações e transformação digital."
              href="/blog/tecnologia"
              linkLabel="Ver conteúdos"
            />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading title="Publicações recentes" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
