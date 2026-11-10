import type { Metadata } from "next";
import { Eyebrow, Mark } from "@/components/ui";
import TestimonialForm from "@/components/TestimonialForm";

export const metadata: Metadata = {
  title: "Share your experience",
  description: "Worked with Ishmael? Leave a short testimonial and a photo.",
  robots: { index: false, follow: false },
};

export default function TestimonialPage() {
  return (
    <section className="bg-mist">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-9 lg:py-24">
        <div>
          <Eyebrow>Testimonial</Eyebrow>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-6xl">
            Share your <Mark>experience</Mark>
          </h1>
          <p className="mt-6 max-w-md text-xl leading-relaxed text-body">
            Thank you for working with me. A few honest lines about the project help other businesses decide, and it takes about two minutes.
          </p>
        </div>
        <TestimonialForm />
      </div>
    </section>
  );
}
