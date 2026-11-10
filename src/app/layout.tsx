import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/bricolage-grotesque";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Ishmael Harry-Deckor | Websites for Businesses",
    template: "%s | Ishmael Harry-Deckor",
  },
  description:
    "I build websites for businesses that match your brand, get found on Google and in AI answers, and bring in customers.",
  openGraph: {
    title: "Ishmael Harry-Deckor | Websites for Businesses",
    description:
      "I build websites for businesses that match your brand, get found on Google and in AI answers, and bring in customers.",
    url: "https://ishmaelharrydeckor.dev",
    siteName: "Ishmael Harry-Deckor",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishmael Harry-Deckor | Websites for Businesses",
    description:
      "I build websites for businesses that match your brand, get found on Google and in AI answers, and bring in customers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Header />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
