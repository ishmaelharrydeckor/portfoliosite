import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms for using this website, and how enquiries and projects work.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="10 November 2026"
      intro="These are the terms for using this website. By using it, you agree to them. If you do not agree, please do not use the site."
      sections={[
        {
          heading: "About this website",
          body: (
            <p>
              This website is run by {site.name}. It shows my work as a web developer and lets you contact me about a
              project.
            </p>
          ),
        },
        {
          heading: "Using the website",
          body: (
            <p>
              Please use the site lawfully and fairly. Do not try to break or disrupt it, send spam or harmful content
              through its forms, or collect its content in a way that harms the site or other people.
            </p>
          ),
        },
        {
          heading: "My services and quotes",
          body: (
            <>
              <p>
                The services described on this site are for information. They are not a binding offer. Sending a
                message or asking for a quote does not create a contract.
              </p>
              <p>
                If we decide to work together, the scope, price, timeline and payment terms are agreed separately in
                writing before the work starts.
              </p>
            </>
          ),
        },
        {
          heading: "Ownership of the content",
          body: (
            <>
              <p>
                The text, design and code of this website belong to me, unless stated otherwise. Please do not copy
                them without my permission.
              </p>
              <p>
                The projects shown here were built for clients or are my own concept work. Their names, logos,
                photographs and content belong to their owners, and I show them to demonstrate my work.
              </p>
            </>
          ),
        },
        {
          heading: "Testimonials you send me",
          body: (
            <p>
              If you send a testimonial, you confirm that you wrote it, that it is honest, and that you give me
              permission to publish it with the name, role, company and photo you provide. You can ask me to remove it
              at any time. See my <Link href="/privacy">Privacy Policy</Link> for how I handle your information.
            </p>
          ),
        },
        {
          heading: "Links to other websites",
          body: (
            <p>
              This site links to other websites, including client projects. I do not control them and am not
              responsible for their content or how they work.
            </p>
          ),
        },
        {
          heading: "No guarantees",
          body: (
            <p>
              I try to keep the information on this site accurate and up to date, but I provide it as it is. Nothing
              on this site is a promise of a particular result, such as a search ranking or a number of enquiries.
            </p>
          ),
        },
        {
          heading: "Limit on my responsibility",
          body: (
            <p>
              As far as the law allows, I am not responsible for any loss that comes from using this website or
              relying on its content.
            </p>
          ),
        },
        {
          heading: "Changes to these terms",
          body: <p>I may update these terms. When I do, I will change the date at the top of this page.</p>,
        },
        {
          heading: "Contact",
          body: (
            <p>
              Questions about these terms? Email <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
