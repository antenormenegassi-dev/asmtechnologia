import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Badge } from "@/components/ui/Badge";
import { BlogPostCard } from "@/components/blocks/BlogPostCard";
import { formatPostDate } from "@/components/blocks/BlogLatestItem";
import { ServicesCTA } from "@/components/blocks/ServicesCTA";
import { PortraitPromo } from "@/components/blocks/PortraitPromo";
import { CTASection } from "@/components/blocks/CTASection";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { JsonLd } from "@/components/blog/JsonLd";
import { MdxContent } from "@/components/mdx/MdxContent";
import { SITE_URL } from "@/lib/constants";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { blogPosts, getPostBySlug, getRelatedPosts, isBlogCategory } from "@/data/blogPosts";

type Params = Promise<{ category: string; slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ category: post.category, slug: post.slug }));
}

async function resolvePost(params: Params) {
  const { category, slug } = await params;
  return isBlogCategory(category) ? getPostBySlug(category, slug) : undefined;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const post = await resolvePost(params);
  if (!post) return {};

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    openGraph: {
      type: "article",
      title: post.seoTitle,
      description: post.seoDescription,
      publishedTime: post.publishedAt,
      images: [post.cover],
    },
  };
}

export default async function BlogArticlePage({ params }: { params: Params }) {
  const post = await resolvePost(params);
  if (!post) notFound();

  const path = `/blog/${post.category}/${post.slug}`;
  const postUrl = new URL(path, SITE_URL).toString();
  const relatedPosts = getRelatedPosts(post, 3);

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.excerpt,
          path,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
          authorName: post.author,
          image: post.cover,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Conteúdos", path: "/blog" },
          { name: post.categoryLabel, path: `/blog/${post.category}` },
          { name: post.title, path },
        ])}
      />

      <section className="pt-8 pb-16 sm:pt-12">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px] lg:items-start lg:gap-16">
            <div className="min-w-0">
              <p className="text-sm text-brand-black/50 dark:text-brand-white/50">
                <Link href="/blog" className="hover:text-brand-blue">
                  Conteúdos
                </Link>{" "}
                /{" "}
                <Link href={`/blog/${post.category}`} className="hover:text-brand-blue">
                  {post.categoryLabel}
                </Link>
              </p>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-brand-black dark:text-brand-white sm:text-4xl">
                {post.title}
              </h1>
              <p className="mt-4 text-sm text-brand-black/50 dark:text-brand-white/50">
                {formatPostDate(post.publishedAt)} · {post.readingTime}
              </p>

              <ImagePlaceholder
                src={post.cover}
                sizes="(min-width: 1024px) 60vw, 100vw"
                borderClassName="border-brand-black/10 dark:border-brand-white/10"
                className="mt-6 shadow-md"
              />

              <article className="mt-8">
                <p className="text-xl leading-relaxed text-brand-black dark:text-brand-white sm:text-2xl">
                  {post.excerpt}
                </p>

                <div className="mt-8">
                  <MdxContent code={post.content} />
                </div>

                {post.tags.length > 0 && (
                  <div className="mt-12 flex flex-wrap gap-2 border-t border-brand-black/10 pt-6 dark:border-brand-white/10">
                    {post.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                )}

                <div className="mt-6">
                  <ShareButtons title={post.title} url={postUrl} />
                </div>
              </article>
            </div>

            <aside className="hidden flex-col gap-6 lg:sticky lg:top-24 lg:flex">
              <ServicesCTA />
              <PortraitPromo href="/certificados-digitais" />
            </aside>
          </div>
        </Container>
      </section>

      {relatedPosts.length > 0 && (
        <section className="border-t border-brand-black/10 bg-brand-blue/3 py-16 dark:border-brand-white/10">
          <Container>
            <h2 className="mb-10 text-3xl font-semibold tracking-tight text-brand-black dark:text-brand-white">
              Veja mais
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <BlogPostCard key={related.slug} post={related} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection />
    </>
  );
}
