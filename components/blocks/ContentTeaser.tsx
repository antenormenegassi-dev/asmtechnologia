import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRightIcon } from "@/components/ui/icons";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { blogPosts } from "@/data/blogPosts";

export function ContentTeaser() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="border-b border-brand-black/10 dark:border-brand-white/10 py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Conteúdos"
            title="Aprenda sobre certificados, gestão e tecnologia"
            className="max-w-xl"
          />
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-blue"
          >
            Ver todos os conteúdos
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.category}/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-card border border-brand-black/10 dark:border-brand-white/10 transition-colors hover:border-brand-blue"
            >
              <ImagePlaceholder className="rounded-none border-0 border-b border-dashed border-brand-black/15 dark:border-brand-white/15" />
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
                  {post.categoryLabel}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-brand-black dark:text-brand-white group-hover:text-brand-blue">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-black/70 dark:text-brand-white/70">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
