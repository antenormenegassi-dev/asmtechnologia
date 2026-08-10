import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostTemplate } from "@/components/templates/BlogPostTemplate";
import { getPostBySlug } from "@/data/blogPosts";

const post = getPostBySlug("gestao-empresarial", "o-que-e-erp-e-por-que-sua-empresa-precisa");

export const metadata: Metadata = post
  ? { title: post.seoTitle, description: post.seoDescription }
  : {};

export default function Page() {
  if (!post) notFound();
  return <BlogPostTemplate post={post} />;
}
