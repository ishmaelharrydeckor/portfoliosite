import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** Small rounded label used for section eyebrows and tags. */
export function Pill({
  children,
  tone = "mist",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "mist" | "sky" | "lime" | "grape" | "ink" | "paper";
  className?: string;
}) {
  const tones: Record<string, string> = {
    mist: "bg-mist text-ink",
    sky: "bg-sky text-white",
    lime: "bg-lime text-ink",
    grape: "bg-grape text-white",
    ink: "bg-ink-soft text-white",
    paper: "bg-paper text-ink",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium tracking-tight ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

/** Black pill button with a white circular arrow, as in the reference. */
export function ArrowButton({
  href,
  children,
  external = false,
  variant = "dark",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  variant?: "dark" | "light";
  className?: string;
}) {
  const styles =
    variant === "dark"
      ? "bg-ink-soft text-white"
      : "bg-paper text-ink";
  const circle =
    variant === "dark" ? "bg-white text-ink" : "bg-ink text-white";
  const inner = (
    <>
      <span>{children}</span>
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5 ${circle}`}
      >
        <ArrowRight className="h-5 w-5" aria-hidden="true" />
      </span>
    </>
  );
  const cls = `group inline-flex items-center gap-6 rounded-full py-2 pl-6 pr-2 text-base font-medium tracking-tight transition-transform duration-300 hover:scale-[1.02] ${styles} ${className}`;
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
