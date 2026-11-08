"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/** A live-site browser frame overlapping the hero photo; drifts gently as you scroll. */
export default function HeroFrame({ slug, url }: { slug: string; url: string }) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, -70]);
  const rotate = useTransform(scrollY, [0, 700], [-3, 0]);

  return (
    <motion.div
      style={reduce ? { rotate: -3 } : { y, rotate }}
      className="absolute bottom-10 left-4 w-[300px] overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/10 sm:w-[360px] lg:-left-20 lg:w-[430px]"
    >
      <div className="flex items-center gap-2 border-b border-black/10 bg-mist px-3 py-2">
        <span className="flex gap-1" aria-hidden="true">
          <i className="h-2 w-2 rounded-full bg-black/20" />
          <i className="h-2 w-2 rounded-full bg-black/20" />
          <i className="h-2 w-2 rounded-full bg-black/20" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded bg-white px-2 py-0.5 text-[11px] text-body">{url}</span>
        <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700">
          <i className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" /> Live
        </span>
      </div>
      <Image src={`/projects/${slug}/desktop.png`} alt="" width={1440} height={900} className="block w-full" />
    </motion.div>
  );
}
