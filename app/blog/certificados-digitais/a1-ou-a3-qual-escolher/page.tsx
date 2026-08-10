import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostTemplate } from "@/components/templates/BlogPostTemplate";
import { getPostBySlug } from "@/data/blogPosts";

const post = getPostBySlug("certificados-digitais", "a1-ou-a3-qual-escolher");

export const metadata: Metadata = post
  ? { title: post.seoTitle, description: post.seoDescription }
  : {};

export default function Page() {
  if (!post) notFound();
  return <BlogPostTemplate post={post} />;
}
