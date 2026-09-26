import { defineConfig, s } from "velite";

const postSchema = s
  .object({
    title: s.string().max(99),
    description: s.string().max(300),
    slug: s.slug("blog"),
    category: s.enum(["certificados-digitais", "gestao-empresarial", "tecnologia"]),
    date: s.isodate(),
    updated: s.isodate().optional(),
    author: s.string().default("Equipe ASM Technologia"),
    cover: s.string().optional(),
    tags: s.array(s.string()).default([]),
    seoTitle: s.string().optional(),
    seoDescription: s.string().optional(),
    metadata: s.metadata(),
    content: s.mdx(),
  })
  .transform(({ metadata, ...data }) => ({
    ...data,
    readingMinutes: Math.max(1, metadata.readingTime),
  }));

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: {
    blog: {
      name: "Post",
      pattern: "blog/**/*.mdx",
      schema: postSchema,
    },
  },
});
