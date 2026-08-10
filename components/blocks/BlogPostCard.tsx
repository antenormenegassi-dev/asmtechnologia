import Link from "next/link";
import type { BlogPost } from "@/data/blogPosts";

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
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
      <p className="mt-4 text-xs text-brand-black/40">{post.readingTime}</p>
    </Link>
  );
}
