import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { WhatsAppCTA } from "@/components/whatsapp/WhatsAppCTA";
import type { BlogPost } from "@/data/blogPosts";

export function BlogPostTemplate({ post }: { post: BlogPost }) {
  return (
    <article className="py-16">
      <Container className="max-w-3xl">
        <p className="text-sm text-brand-black/50">
          <Link href="/blog" className="hover:text-brand-blue">
            Conteúdos
          </Link>{" "}
          /{" "}
          <Link href={`/blog/${post.category}`} className="hover:text-brand-blue">
            {post.categoryLabel}
          </Link>
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-brand-black">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-brand-black/50">
          {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}{" "}
          &middot; {post.readingTime}
        </p>

        <div className="mt-10 space-y-8">
          {post.content.map((section, index) => (
            <div key={section.heading ?? index}>
              {section.heading && (
                <h2 className="text-xl font-semibold text-brand-black">{section.heading}</h2>
              )}
              <div className="mt-3 space-y-4">
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-base leading-relaxed text-brand-black/70">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-card border border-brand-black/10 p-8 text-center">
          <p className="text-lg font-semibold text-brand-black">
            Quer ajuda especializada com esse assunto?
          </p>
          <p className="mt-2 text-sm text-brand-black/70">
            Fale com a time da ASM Technologia e receba orientação personalizada.
          </p>
          <div className="mt-6 flex justify-center">
            <WhatsAppCTA message={`Olá! Li o conteúdo "${post.title}" e gostaria de saber mais.`}>
              Falar com a ASM
            </WhatsAppCTA>
          </div>
        </div>
      </Container>
    </article>
  );
}
