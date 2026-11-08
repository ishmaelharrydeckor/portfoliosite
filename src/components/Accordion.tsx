"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export interface AccordionItem {
  title: string;
  body: string;
}

const DOTS = ["bg-mist", "bg-sky text-white", "bg-lime", "bg-grape text-white"];

/**
 * One-open-at-a-time accordion. With `numbered`, each row gets a coloured
 * numbered dot (the Prolens look); without it, it's a plain FAQ list.
 */
export default function Accordion({
  items,
  numbered = false,
  tone = "light",
}: {
  items: AccordionItem[];
  numbered?: boolean;
  tone?: "light" | "dark";
}) {
  const [open, setOpen] = useState<number | null>(0);
  const line = tone === "dark" ? "border-white/15" : "border-ink/15";
  const text = tone === "dark" ? "text-white" : "text-ink";
  const sub = tone === "dark" ? "text-white/70" : "text-body";

  return (
    <div className={`border-t ${line}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title} className={`border-b ${line}`}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className={`flex w-full items-center gap-4 py-6 text-left ${text}`}
              >
                {numbered && (
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-base ${DOTS[i % DOTS.length]}`}
                  >
                    {i + 1}
                  </span>
                )}
                <span className="flex-1 text-2xl font-medium tracking-tight sm:text-3xl">
                  {item.title}
                </span>
                {isOpen ? (
                  <Minus className="h-5 w-5 shrink-0" aria-hidden="true" />
                ) : (
                  <Plus className="h-5 w-5 shrink-0" aria-hidden="true" />
                )}
              </button>
            </h3>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className={`max-w-xl pb-6 text-lg leading-relaxed ${sub} ${
                    numbered ? "pl-[52px]" : ""
                  }`}
                >
                  {item.body}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
