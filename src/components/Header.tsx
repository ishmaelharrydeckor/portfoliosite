"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Work", href: "/projects" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/#contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-ink text-paper">
      <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-9" aria-label="Global">
        <Link href="/" onClick={() => setOpen(false)} className="font-display text-2xl font-extrabold tracking-tight">
          Ishmael<span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`text-base font-semibold transition-colors hover:text-accent ${pathname === item.href ? "text-accent" : ""}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Link href="/#contact" className="hidden rounded-md bg-accent px-5 py-2.5 text-sm font-bold text-ink transition-colors hover:bg-paper md:inline-block">
          Start a project
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Toggle menu</span>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} onClick={() => setOpen(false)} className="font-display text-2xl font-bold">
                {item.name}
              </Link>
            ))}
            <Link href="/#contact" onClick={() => setOpen(false)} className="mt-2 inline-block w-fit rounded-md bg-accent px-5 py-3 text-base font-bold text-ink">
              Start a project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
