import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Ask Ishmael for a free look-up, or tell him what you need and get a quote.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactSection as="h1" />;
}
