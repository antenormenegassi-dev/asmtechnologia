import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PillarCard } from "@/components/blocks/PillarCard";
import { BlogPostCard } from "@/components/blocks/BlogPostCard";
import { BlogLatestItem, formatPostDate } from "@/components/blocks/BlogLatestItem";
import { AboutASMCard } from "@/components/blocks/AboutASMCard";
import { PortraitPromo } from "@/components/blocks/PortraitPromo";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { blogPosts } from "@/data/blogPosts";
import { ShieldCheckIcon, LayersIcon, BoltIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Conteúdos",
  description:
    "Conteúdos sobre certificados digitais, gestão empresarial e tecnologia produzidos pela ASM Technologia.",
};

const LATEST_COUNT = 3;

export default function BlogPage() {
  // blogPosts is already sorted newest first.
  const [featured, ...rest] = blogPosts;
  const latest = rest.slice(0, LATEST_COUNT);
  const gridPosts = rest.slice(LATEST_COUNT);

  return (
    <>
      <section className="border-b border-brand-black/10 dark:border-brand-white/10 py-16">
        <Container>
          <SectionHeading
            eyebrow="Conteúdos"
            title="Aprenda sobre certificados, gestão e tecnologia"
          />

          {featured && (
            <div className="mt-10 grid gap-10 lg:grid-cols-3">
              <Link
                href={`/blog/${featured.category}/${featured.slug}`}
                className="group block lg:col-span-2"
              >
                <article className="flex flex-col gap-4">
                  <ImagePlaceholder
                    src={featured.cover}
                    sizes="(min-width: 1024px) 66vw, 100vw"
                    borderClassName="border-brand-black/10 dark:border-brand-white/10"
                  />
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
                      {featured.categoryLabel}
                    </span>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-brand-black transition-colors group-hover:text-brand-blue dark:text-brand-white sm:text-3xl">
                      {featured.title}
                    </h2>
                    <p className="mt-3 text-sm text-brand-black/50 dark:text-brand-white/50">
                      {formatPostDate(featured.publishedAt)} · {featured.readingTime}
                    </p>
                  </div>
                </article>
              </Link>

              <div className="lg:col-span-1">
                <h2 className="mb-6 text-lg font-semibold text-brand-black dark:text-brand-white">
                  Últimos posts
                </h2>
                <div className="flex flex-col gap-6">
                  {latest.map((post) => (
                    <BlogLatestItem key={post.slug} post={post} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>

      <section className="border-b border-brand-black/10 dark:border-brand-white/10 py-16">
        <Container>
          <SectionHeading title="Categorias" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <PillarCard
              icon={ShieldCheckIcon}
              eyebrow="Categoria"
              title="Certificados Digitais"
              description="e-CNPJ, e-CPF, NF-e, NFC-e e tudo sobre certificação digital."
              href="/blog/certificados-digitais"
              linkLabel="Ver conteúdos"
            />
            <PillarCard
              icon={LayersIcon}
              eyebrow="Categoria"
              title="Gestão Empresarial"
              description="ERP, controle de estoque, financeiro, DRE e gestão do negócio."
              href="/blog/gestao-empresarial"
              linkLabel="Ver conteúdos"
            />
            <PillarCard
              icon={BoltIcon}
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
          <SectionHeading title="Mais publicações" />
          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px] lg:items-start lg:gap-16">
            <div className="grid min-w-0 gap-6 sm:grid-cols-2">
              {gridPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>

            <aside className="hidden flex-col gap-6 lg:sticky lg:top-24 lg:flex">
              <AboutASMCard />
              <PortraitPromo href="/certificados-digitais" />
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
