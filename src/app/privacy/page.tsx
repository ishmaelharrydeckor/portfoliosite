import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "What information this website collects, why, and how to ask for it to be corrected or deleted.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="10 November 2026"
      intro="This explains what information this website collects when you use it, what I do with it, and the choices you have. I have tried to keep it short and in plain language."
      sections={[
        {
          heading: "Who I am",
          body: (
            <p>
              This website is run by {site.name} (&quot;I&quot;, &quot;me&quot;). You can reach me about anything
              in this policy at <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          ),
        },
        {
          heading: "What I collect",
          body: (
            <>
              <ul>
                <li>
                  <strong>The contact form:</strong> your name, email address, the type of project and your message.
                </li>
                <li>
                  <strong>The testimonial form:</strong> your name, role, company, your testimonial, your permission
                  to publish it, and, if you choose to give them, your email address and a photo or logo.
                </li>
                <li>
                  <strong>If you email or message me on WhatsApp:</strong> whatever you send, plus your email address
                  or phone number.
                </li>
                <li>
                  <strong>Technical information:</strong> the company that hosts this site (Vercel) may record things
                  like your IP address and browser details in its server logs, to run the site and keep it secure.
                </li>
              </ul>
              <p>This site does not use cookies, analytics or advertising trackers.</p>
            </>
          ),
        },
        {
          heading: "How I use it",
          body: (
            <ul>
              <li>To reply to your message and send you a quote.</li>
              <li>To work with you on a project, if you hire me.</li>
              <li>To publish a testimonial, but only if you have given your permission.</li>
              <li>To keep the website running and secure.</li>
            </ul>
          ),
        },
        {
          heading: "Testimonials",
          body: (
            <p>
              A testimonial, and the name, role, company and photo that go with it, is published on this website only
              if you have ticked the box giving permission. You can ask me to change or remove it at any time.
            </p>
          ),
        },
        {
          heading: "Who I share it with",
          body: (
            <>
              <p>
                I do not sell your information or use it for advertising. It is handled only by the services that run
                the site and my communication:
              </p>
              <ul>
                <li>Vercel, which hosts the website.</li>
                <li>My email provider, which delivers form messages (and any attached photo) to my inbox.</li>
                <li>WhatsApp, if you choose to message me there. Its own privacy policy applies.</li>
              </ul>
              <p>I may also share information if the law requires me to.</p>
            </>
          ),
        },
        {
          heading: "How long I keep it",
          body: (
            <p>
              I keep your messages for as long as I need them to reply to you and for my records. If you would like me
              to delete them, ask and I will.
            </p>
          ),
        },
        {
          heading: "Your choices",
          body: (
            <p>
              You can ask me what information I hold about you, ask me to correct it, or ask me to delete it. Email{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a> and I will respond.
            </p>
          ),
        },
        {
          heading: "Security",
          body: (
            <p>
              I take reasonable steps to protect the information you send me. No website or email service can be made
              completely secure, so please do not send me passwords or sensitive personal details through the forms.
            </p>
          ),
        },
        {
          heading: "Links to other sites",
          body: (
            <p>
              This website links to websites I have built for clients and to profiles such as LinkedIn and GitHub.
              Those sites have their own privacy practices, which I do not control.
            </p>
          ),
        },
        {
          heading: "Children",
          body: <p>This website is not aimed at children, and I do not knowingly collect information from them.</p>,
        },
        {
          heading: "Changes to this policy",
          body: (
            <p>
              If I change this policy, I will update the date at the top of this page. See also my{" "}
              <Link href="/terms">Terms of Service</Link>.
            </p>
          ),
        },
      ]}
    />
  );
}
