import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/data/blogPosts";

export function formatPostDate(date: string, month: "long" | "short" = "long") {
  return new Date(`${date}T00:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month,
    ...(month === "long" ? { year: "numeric" } : {}),
  });
}

export function BlogLatestItem({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.category}/${post.slug}`} className="group flex items-center gap-4 sm:gap-5">
      <div className="relative size-20 shrink-0 overflow-hidden rounded-control bg-brand-blue/5 sm:size-24">
        <Image
          src={post.cover ?? "/images/cover.jpeg"}
          alt=""
          fill
          sizes="96px"
          className="object-cover"
        />
      </div>

      <div className="min-w-0">
        <p className="line-clamp-2 text-base font-medium text-brand-black transition-colors group-hover:text-brand-blue dark:text-brand-white sm:text-lg">
          {post.title}
        </p>
        <p className="mt-1.5 text-sm text-brand-black/50 dark:text-brand-white/50">
          {formatPostDate(post.publishedAt, "short")} · {post.readingTime}
        </p>
      </div>
    </Link>
  );
}
