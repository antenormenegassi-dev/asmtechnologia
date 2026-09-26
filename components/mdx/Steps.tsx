/** `<Steps><Step title="…">…</Step></Steps>` inside an MDX post: a numbered list. */
export function Steps({ children }: { children: React.ReactNode }) {
  return (
    <ol className="not-prose my-8 list-none divide-y divide-brand-black/10 border-y border-brand-black/10 p-0 [counter-reset:step] dark:divide-brand-white/10 dark:border-brand-white/10">
      {children}
    </ol>
  );
}

export function Step({
  title,
  tag,
  children,
}: {
  title: string;
  tag?: string;
  children: React.ReactNode;
}) {
  return (
    <li className="grid grid-cols-[2.5rem_1fr] gap-4 py-5 [counter-increment:step] first:pt-0 last:pb-0">
      <span className="pt-0.5 font-mono text-sm font-bold text-brand-blue before:content-[counter(step,decimal-leading-zero)]" />
      <div>
        <h3 className="flex flex-wrap items-center gap-2 text-base font-semibold text-brand-black dark:text-brand-white">
          {title}
          {tag && (
            <span className="rounded-full bg-brand-blue/10 px-2 py-0.5 font-mono text-xs font-normal text-brand-blue">
              {tag}
            </span>
          )}
        </h3>
        <div className="mt-1.5 text-sm text-brand-black/70 dark:text-brand-white/70 [&_p]:m-0">
          {children}
        </div>
      </div>
    </li>
  );
}
