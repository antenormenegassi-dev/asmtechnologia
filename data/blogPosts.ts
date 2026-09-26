import { blog } from "#velite";

/**
 * Blog posts live as MDX files in content/blog and are compiled by velite
 * (`npm run content:build`, also run before dev/build). This module adapts
 * velite's output to the shape the site's components use.
 */

export type BlogCategory = "certificados-digitais" | "gestao-empresarial" | "tecnologia";

export interface BlogCategoryInfo {
  label: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
}

export const CATEGORIES: Record<BlogCategory, BlogCategoryInfo> = {
  "certificados-digitais": {
    label: "Certificados Digitais",
    title: "Certificados Digitais",
    description:
      "Entenda como funcionam os certificados digitais e escolha o modelo certo para sua empresa.",
    metaTitle: "Conteúdos sobre Certificados Digitais",
    metaDescription:
      "Artigos sobre e-CNPJ, e-CPF, NF-e, NFC-e e certificação digital produzidos pela ASM Technologia.",
  },
  "gestao-empresarial": {
    label: "Gestão Empresarial",
    title: "Gestão Empresarial",
    description:
      "Aprenda a organizar vendas, estoque e financeiro com processos e sistemas de gestão.",
    metaTitle: "Conteúdos sobre Gestão Empresarial",
    metaDescription:
      "Artigos sobre ERP, controle de estoque, financeiro, DRE e gestão empresarial produzidos pela ASM Technologia.",
  },
  tecnologia: {
    label: "Tecnologia",
    title: "Tecnologia",
    description:
      "Descubra quando vale a pena automatizar, integrar ou desenvolver tecnologia sob medida.",
    metaTitle: "Conteúdos sobre Tecnologia",
    metaDescription:
      "Artigos sobre sistemas sob medida, automação, integrações e transformação digital produzidos pela ASM Technologia.",
  },
};

export const BLOG_CATEGORIES = Object.keys(CATEGORIES) as BlogCategory[];

const DEFAULT_BLOG_COVER = "/images/cover.jpeg";

export interface BlogPost {
  slug: string;
  cover: string;
  category: BlogCategory;
  categoryLabel: string;
  title: string;
  excerpt: string;
  /** YYYY-MM-DD */
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  author: string;
  tags: string[];
  /** Compiled MDX code, rendered by components/mdx/MdxContent. */
  content: string;
  seoTitle: string;
  seoDescription: string;
}

export const blogPosts: BlogPost[] = blog
  .map((post) => ({
    slug: post.slug,
    cover: post.cover || DEFAULT_BLOG_COVER,
    category: post.category,
    categoryLabel: CATEGORIES[post.category].label,
    title: post.title,
    excerpt: post.description,
    publishedAt: post.date.slice(0, 10),
    updatedAt: post.updated?.slice(0, 10),
    readingTime: `${post.readingMinutes} min de leitura`,
    author: post.author,
    tags: post.tags,
    content: post.content,
    seoTitle: post.seoTitle ?? post.title,
    seoDescription: post.seoDescription ?? post.description,
  }))
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export function isBlogCategory(value: string): value is BlogCategory {
  return value in CATEGORIES;
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getPostBySlug(category: BlogCategory, slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.category === category && post.slug === slug);
}

export function getCategoryLabel(category: BlogCategory): string {
  return CATEGORIES[category].label;
}

function relatedScore(candidate: BlogPost, current: BlogPost) {
  const sameCategory = candidate.category === current.category ? 2 : 0;
  const sharedTags = candidate.tags.filter((tag) => current.tags.includes(tag)).length;
  return sameCategory + sharedTags;
}

export function getRelatedPosts(post: BlogPost, count = 3): BlogPost[] {
  return blogPosts
    .filter((candidate) => candidate.slug !== post.slug)
    .sort((a, b) => relatedScore(b, post) - relatedScore(a, post))
    .slice(0, count);
}
