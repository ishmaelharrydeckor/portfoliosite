import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/60">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-9">
        <p>© {new Date().getFullYear()} Ishmael Harry-Deckor. All rights reserved.</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/projects" className="hover:text-white">Work</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
          <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
        </div>
      </div>
    </footer>
  );
}
