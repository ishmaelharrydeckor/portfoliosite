import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/** Small square-cornered tag. */
export function Tag({
  children,
  tone = "outline",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "outline" | "solid" | "accent" | "light";
  className?: string;
}) {
  const tones: Record<string, string> = {
    outline: "border border-current/30",
    solid: "bg-ink text-paper",
    accent: "bg-accent text-ink",
    light: "bg-paper text-ink",
  };
  return (
    <span
      className={`inline-flex items-center rounded-sm px-2.5 py-1 text-xs font-semibold uppercase tracking-wider ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

/** Section eyebrow: a short rule plus small caps label. */
export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] ${className}`}>
      <span className="h-px w-8 bg-current" aria-hidden="true" />
      {children}
    </p>
  );
}

/** Flat, square-cornered button with an inline arrow. */
export function Button({
  href,
  children,
  external = false,
  variant = "accent",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  variant?: "accent" | "dark" | "light" | "ghost";
  className?: string;
}) {
  const styles: Record<string, string> = {
    accent: "bg-accent text-ink hover:bg-ink hover:text-accent",
    dark: "bg-ink text-paper hover:bg-accent hover:text-ink",
    light: "bg-paper text-ink hover:bg-accent",
    ghost: "border border-current/40 hover:bg-paper hover:text-ink",
  };
  const cls = `group inline-flex items-center gap-3 rounded-md px-6 py-4 text-base font-bold tracking-tight transition-colors duration-200 ${styles[variant]} ${className}`;
  const inner = (
    <>
      {children}
      <ArrowUpRight
        className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/** Highlighter-marker emphasis for one phrase in a headline. */
export function Mark({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative isolate whitespace-nowrap">
      <span className="absolute -inset-x-1.5 inset-y-[0.1em] -z-10 -skew-x-6 bg-accent" aria-hidden="true" />
      <span className="text-ink">{children}</span>
    </span>
  );
}
