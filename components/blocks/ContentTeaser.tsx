import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRightIcon } from "@/components/ui/icons";
import { blogPosts } from "@/data/blogPosts";

export function ContentTeaser() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="border-b border-brand-black/10 py-24">
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
              className="group flex flex-col rounded-card border border-brand-black/10 p-6 transition-colors hover:border-brand-blue"
            >
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-blue">
                {post.categoryLabel}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-brand-black group-hover:text-brand-blue">
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-black/70">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
