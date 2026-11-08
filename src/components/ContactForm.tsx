"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";

const projectOptions = [
  "Business website",
  "Landing page / waitlist",
  "Web app or portal",
  "Redesign of my current site",
  "Something else",
];

const field =
  "w-full border-b border-white/25 bg-transparent py-4 text-lg text-white placeholder:text-white/50 outline-none transition-colors focus:border-lime";

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
      <div role="status" className="flex flex-col items-start gap-4 py-8 text-white">
        <CheckCircle2 className="h-10 w-10 text-lime" aria-hidden="true" />
        <p className="text-3xl font-medium tracking-tight">Message sent.</p>
        <p className="text-lg text-white/70">Thanks for reaching out. I&apos;ll reply by email soon.</p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="text-lg underline underline-offset-4 hover:text-lime"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="flex flex-col gap-2">
      <p className="text-xl text-white/60">Message me:</p>

      <label className="block">
        <span className="sr-only">Your name</span>
        <input name="name" value={data.name} onChange={change} placeholder="Your name *" autoComplete="name" className={field} aria-invalid={!!errors.name} />
        {errors.name && <span className="text-sm text-lime">{errors.name}</span>}
      </label>

      <label className="block">
        <span className="sr-only">Your email</span>
        <input name="email" type="email" value={data.email} onChange={change} placeholder="Your email *" autoComplete="email" className={field} aria-invalid={!!errors.email} />
        {errors.email && <span className="text-sm text-lime">{errors.email}</span>}
      </label>

      <label className="relative block">
        <span className="sr-only">What do you need?</span>
        <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-5 w-5 -translate-y-1/2 text-white/60" aria-hidden="true" />
        <select name="projectType" value={data.projectType} onChange={change} className={`${field} appearance-none`}>
          {projectOptions.map((o) => (
            <option key={o} value={o} className="bg-ink text-white">
              {o}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="sr-only">Your message</span>
        <textarea name="message" rows={3} value={data.message} onChange={change} placeholder="Your message *" className={`${field} resize-none`} aria-invalid={!!errors.message} />
        {errors.message && <span className="text-sm text-lime">{errors.message}</span>}
      </label>

      {error && (
        <p role="alert" className="pt-2 text-base text-lime">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-6 pt-6">
        <button
          type="submit"
          disabled={sending}
          className="group inline-flex items-center gap-6 rounded-full bg-white py-2 pl-6 pr-2 text-base font-medium tracking-tight text-ink transition-transform hover:scale-[1.02] disabled:opacity-60"
        >
          {sending ? "Sending…" : "Send message"}
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white">
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </span>
        </button>
        <p className="max-w-[220px] text-sm text-white/50">
          Your information stays private and is never shared.
        </p>
      </div>
    </form>
  );
}
