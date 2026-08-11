/**
 * "Nó ASM" the decorative graphic derived from the brand mark's diamond
 * "node" module. Used as a subtle section-divider / background accent
 * (behind headings, in footer corners, between content blocks) rather than
 * generic icons or dividers.
 */
export function NoASM({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="70"
        y="70"
        width="60"
        height="60"
        rx="10"
        transform="rotate(45 100 100)"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect x="94" y="24" width="12" height="12" rx="3" fill="currentColor" />
      <rect x="94" y="164" width="12" height="12" rx="3" fill="currentColor" />
      <rect x="24" y="94" width="12" height="12" rx="3" fill="currentColor" />
      <rect x="164" y="94" width="12" height="12" rx="3" fill="currentColor" />
      <line x1="100" y1="36" x2="100" y2="70" stroke="currentColor" strokeWidth="2" />
      <line x1="100" y1="130" x2="100" y2="164" stroke="currentColor" strokeWidth="2" />
      <line x1="36" y1="100" x2="70" y2="100" stroke="currentColor" strokeWidth="2" />
      <line x1="130" y1="100" x2="164" y2="100" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
