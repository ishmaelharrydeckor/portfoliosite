import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource-variable/bricolage-grotesque";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteUrl, indexable, tagline } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ishmael Harry-Deckor | Websites for Businesses",
    template: "%s | Ishmael Harry-Deckor",
  },
  description: tagline,
  robots: indexable ? { index: true, follow: true } : { index: false, follow: false },
  openGraph: {
    title: "Ishmael Harry-Deckor | Websites for Businesses",
    description: tagline,
    url: "/",
    siteName: "Ishmael Harry-Deckor",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishmael Harry-Deckor | Websites for Businesses",
    description: tagline,
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
