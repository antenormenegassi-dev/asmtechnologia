import Link from "next/link";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { BlogPost } from "@/data/blogPosts";

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
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
        <p className="mt-4 text-xs text-brand-black/40 dark:text-brand-white/40">{post.readingTime}</p>
      </div>
    </Link>
  );
}
