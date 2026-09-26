import { Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { InlineCta } from "@/components/mdx/InlineCta";
import { Steps, Step } from "@/components/mdx/Steps";

const runtime = { Fragment, jsx, jsxs };

const mdxComponents = { CTA: InlineCta, Steps, Step };

/** Renders the MDX code velite compiled at build time (trusted, from content/blog). */
export function MdxContent({ code }: { code: string }) {
  const { default: Content } = new Function(String(code))(runtime) as {
    default: React.ComponentType<{ components?: typeof mdxComponents }>;
  };

  return (
    <div className="prose max-w-none dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-brand-black dark:prose-headings:text-brand-white prose-p:leading-relaxed prose-p:text-brand-black/70 dark:prose-p:text-brand-white/70 prose-li:text-brand-black/70 dark:prose-li:text-brand-white/70 prose-strong:text-brand-black dark:prose-strong:text-brand-white prose-a:text-brand-blue prose-blockquote:rounded-r-control prose-blockquote:border-l-4 prose-blockquote:border-brand-blue prose-blockquote:bg-brand-blue/5 prose-blockquote:py-2 prose-blockquote:not-italic">
      <Content components={mdxComponents} />
    </div>
  );
}
