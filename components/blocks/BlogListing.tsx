import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogPostCard } from "@/components/blocks/BlogPostCard";
import { getPostsByCategory, type BlogCategory } from "@/data/blogPosts";

interface BlogListingProps {
  category: BlogCategory;
  title: string;
  description: string;
}

export function BlogListing({ category, title, description }: BlogListingProps) {
  const posts = getPostsByCategory(category);

  return (
    <section className="py-20">
      <Container>
        <SectionHeading eyebrow="Conteúdos" title={title} description={description} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
