import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell me about your business and the website you need.",
};

export default function ContactPage() {
  return <ContactSection as="h1" />;
}
