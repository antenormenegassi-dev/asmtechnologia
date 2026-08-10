import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostTemplate } from "@/components/templates/BlogPostTemplate";
import { getPostBySlug } from "@/data/blogPosts";

const post = getPostBySlug("tecnologia", "automacao-de-processos-por-onde-comecar");

export const metadata: Metadata = post
  ? { title: post.seoTitle, description: post.seoDescription }
  : {};

export default function Page() {
  if (!post) notFound();
  return <BlogPostTemplate post={post} />;
}
