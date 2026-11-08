"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Work", href: "/projects" },
  { name: "Services", href: "/#services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-paper">
      <nav
        className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-9"
        aria-label="Global"
      >
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          Ishmael Harry-Deckor
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-base font-semibold tracking-tight transition-opacity hover:opacity-60 ${
                  active ? "underline decoration-accent decoration-4 underline-offset-8" : ""
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 md:hidden"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Toggle menu</span>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-paper px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-extrabold tracking-tight"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
