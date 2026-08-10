export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-medium text-brand-blue ${className ?? ""}`}
    >
      {children}
    </span>
  );
}
