const SIZE_CLASSES = {
  default: "max-w-[1440px]",
  /** 80rem, matching the InfinityFy container, used by the hero. */
  narrow: "max-w-7xl",
};

export function Container({
  className,
  size = "default",
  children,
}: {
  className?: string;
  size?: keyof typeof SIZE_CLASSES;
  children: React.ReactNode;
}) {
  return (
    <div className={`mx-auto w-full ${SIZE_CLASSES[size]} px-6 lg:px-8 ${className ?? ""}`}>
      {children}
    </div>
  );
}
