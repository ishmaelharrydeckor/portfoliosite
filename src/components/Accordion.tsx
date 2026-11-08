"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export interface AccordionItem {
  title: string;
  body: string;
}

/** One-open-at-a-time accordion. `numbered` prefixes each row with 01, 02… */
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
  const line = tone === "dark" ? "border-white/15" : "border-ink/20";
  const text = tone === "dark" ? "text-paper" : "text-ink";
  const sub = tone === "dark" ? "text-paper/70" : "text-body";

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
                className={`flex w-full items-baseline gap-5 py-6 text-left ${text}`}
              >
                {numbered && (
                  <span className="w-8 shrink-0 text-sm font-semibold tabular-nums text-body">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                )}
                <span className="flex-1 text-xl font-bold tracking-tight sm:text-2xl">
                  {item.title}
                </span>
                {isOpen ? (
                  <Minus className="h-5 w-5 shrink-0 self-center" aria-hidden="true" />
                ) : (
                  <Plus className="h-5 w-5 shrink-0 self-center" aria-hidden="true" />
                )}
              </button>
            </h3>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className={`max-w-xl pb-6 text-lg leading-relaxed ${sub} ${numbered ? "pl-[52px]" : ""}`}>
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
