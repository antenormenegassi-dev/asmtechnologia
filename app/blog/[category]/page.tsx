import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogListing } from "@/components/blocks/BlogListing";
import { BLOG_CATEGORIES, CATEGORIES, isBlogCategory } from "@/data/blogPosts";

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  if (!isBlogCategory(category)) return {};

  return {
    title: CATEGORIES[category].metaTitle,
    description: CATEGORIES[category].metaDescription,
  };
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  if (!isBlogCategory(category)) notFound();

  const { title, description } = CATEGORIES[category];

  return <BlogListing category={category} title={title} description={description} />;
}
