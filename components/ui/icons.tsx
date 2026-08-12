type IconProps = { className?: string };

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M4 10.5L8 14.5L16 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M3 5.5H17M3 10H17M3 14.5H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function ShieldCheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3L20 6.5V11C20 16 16.8 19.7 12 21C7.2 19.7 4 16 4 11V6.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8.5 12L11 14.5L15.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HeadsetIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 13V12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 19C20 20.1 19.1 21 18 21H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function LayersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3L21 8L12 13L3 8L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M3 12L12 17L21 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M3 16L12 21L21 16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function BoltIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M13 2L4 14H11L10 22L20 9H13L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function DocumentIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7 3.5H14L18 7.5V20.5H7V3.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14 3.5V7.5H18" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9.5 12H15.5M9.5 15.5H15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ChatIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 12C4 7.58 7.8 4 12.5 4C17.2 4 21 7.58 21 12C21 16.42 17.2 20 12.5 20C11.13 20 9.83 19.68 8.68 19.1L4 20.5L5.35 16.68C4.5 15.35 4 13.73 4 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ImageIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 16L8.5 11.5L12.5 15L16 12L21 16.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SunIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 2V4M12 20V22M4 12H2M22 12H20M4.9 4.9L6.3 6.3M17.7 17.7L19.1 19.1M19.1 4.9L17.7 6.3M6.3 17.7L4.9 19.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MoonIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 13.85 2.5 15.58 3.38 17.07L2 22L7.09 20.65C8.53 21.42 10.21 21.86 12 21.86C17.52 21.86 22 17.38 22 11.86C22 6.34 17.52 2 12 2ZM12 20.08C10.41 20.08 8.94 19.63 7.69 18.85L7.37 18.65L4.34 19.45L5.16 16.5L4.94 16.16C4.08 14.85 3.6 13.29 3.6 11.86C3.6 7.29 7.34 3.6 12 3.6C16.5 3.6 20.4 7.34 20.4 11.86C20.4 16.42 16.5 20.08 12 20.08ZM16.53 14.15C16.28 14.02 15.03 13.41 14.8 13.32C14.57 13.24 14.4 13.2 14.24 13.45C14.07 13.7 13.6 14.24 13.45 14.41C13.31 14.57 13.16 14.59 12.91 14.47C12.66 14.34 11.84 14.07 10.87 13.2C10.11 12.53 9.6 11.7 9.45 11.45C9.31 11.2 9.43 11.07 9.56 10.94C9.67 10.83 9.81 10.65 9.93 10.51C10.06 10.36 10.1 10.26 10.19 10.09C10.27 9.92 10.23 9.78 10.17 9.65C10.1 9.53 9.6 8.28 9.4 7.78C9.2 7.29 9 7.35 8.85 7.35C8.71 7.34 8.54 7.34 8.38 7.34C8.21 7.34 7.94 7.4 7.71 7.65C7.48 7.9 6.83 8.5 6.83 9.75C6.83 11.01 7.73 12.22 7.85 12.38C7.98 12.55 9.6 15.05 12.08 16.16C12.67 16.42 13.13 16.58 13.49 16.7C14.09 16.89 14.63 16.86 15.06 16.8C15.54 16.73 16.53 16.2 16.74 15.62C16.94 15.03 16.94 14.53 16.87 14.42C16.81 14.31 16.65 14.24 16.53 14.15Z" />
    </svg>
  );
}
