/** Re-mounts on every post navigation, so each article fades in like on first load. */
export default function BlogArticleTemplate({ children }: { children: React.ReactNode }) {
  return <div className="motion-safe:animate-[fade-up_0.35s_ease-out_both]">{children}</div>;
}
