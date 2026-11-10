import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell Ishmael about your business and the website you need, and get a quote.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactSection as="h1" />;
}
