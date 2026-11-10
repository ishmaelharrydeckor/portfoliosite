"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";

const projectOptions = [
  "Business website",
  "Landing page / waitlist",
  "Web app or portal",
  "Redesign of my current site",
  "Something else",
];

const field =
  "w-full border-b border-paper/25 bg-transparent py-4 text-lg text-paper placeholder:text-paper/50 outline-none transition-colors focus:border-accent";

export default function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    projectType: projectOptions[0],
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!data.name.trim()) e.name = "Please enter your name";
    if (!data.email.trim()) e.email = "Please enter your email";
    else if (!/\S+@\S+\.\S+/.test(data.email)) e.email = "That email doesn't look right";
    if (data.message.trim().length < 10) e.message = "Tell me a little more (10+ characters)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const change = (
    ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = ev.target;
    setData((d) => ({ ...d, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: "" }));
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to send message.");
      setSent(true);
      setData({ name: "", email: "", projectType: projectOptions[0], message: "" });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please email me directly."
      );
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div role="status" className="flex flex-col items-start gap-4 py-8 text-paper">
        <CheckCircle2 className="h-10 w-10 text-accent" aria-hidden="true" />
        <p className="text-3xl font-medium tracking-tight">Message sent.</p>
        <p className="text-lg text-paper/70">Thanks for reaching out. I&apos;ll reply by email soon.</p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="text-lg underline underline-offset-4 hover:text-accent"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="flex flex-col gap-2">
      <p className="text-xl text-paper/60">Message me:</p>

      <label className="block">
        <span className="sr-only">Your name</span>
        <input name="name" value={data.name} onChange={change} placeholder="Your name *" autoComplete="name" className={field} aria-invalid={!!errors.name} />
        {errors.name && <span className="text-sm text-accent">{errors.name}</span>}
      </label>

      <label className="block">
        <span className="sr-only">Your email</span>
        <input name="email" type="email" value={data.email} onChange={change} placeholder="Your email *" autoComplete="email" className={field} aria-invalid={!!errors.email} />
        {errors.email && <span className="text-sm text-accent">{errors.email}</span>}
      </label>

      <label className="relative block">
        <span className="sr-only">What do you need?</span>
        <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-5 w-5 -translate-y-1/2 text-paper/60" aria-hidden="true" />
        <select name="projectType" value={data.projectType} onChange={change} className={`${field} appearance-none`}>
          {projectOptions.map((o) => (
            <option key={o} value={o} className="bg-ink text-paper">
              {o}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="sr-only">Your message</span>
        <textarea name="message" rows={3} value={data.message} onChange={change} placeholder="Your message *" className={`${field} resize-none`} aria-invalid={!!errors.message} />
        {errors.message && <span className="text-sm text-accent">{errors.message}</span>}
      </label>

      {error && (
        <p role="alert" className="pt-2 text-base text-accent">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-6 pt-6">
        <button
          type="submit"
          disabled={sending}
          className="group inline-flex items-center gap-3 rounded-md bg-accent px-6 py-4 text-base font-bold tracking-tight text-ink transition-colors hover:bg-paper disabled:opacity-60"
        >
          {sending ? "Sending…" : "Send message"}
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </button>
        <p className="max-w-[240px] text-sm text-paper/50">
          I only use your details to reply to you. See the{" "}
          <Link href="/privacy" className="underline underline-offset-2 hover:text-accent">privacy policy</Link>.
        </p>
      </div>
    </form>
  );
}
