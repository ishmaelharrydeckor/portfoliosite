"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, ImagePlus } from "lucide-react";

const MAX_BYTES = 4 * 1024 * 1024;
const input =
  "w-full rounded-md border border-ink/25 bg-white px-4 py-3 text-lg text-ink placeholder:text-ink/40 outline-none transition-colors focus:border-ink";

export default function TestimonialForm() {
  const [photo, setPhoto] = useState<File | null>(null);
  const [consent, setConsent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const preview = useMemo(() => (photo ? URL.createObjectURL(photo) : null), [photo]);
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const pickPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    setError(null);
    if (f && !/^image\/(jpeg|png|webp)$/.test(f.type)) {
      setError("Please choose a JPG, PNG or WebP image.");
      e.target.value = "";
      setPhoto(null);
      return;
    }
    if (f && f.size > MAX_BYTES) {
      setError("That photo is over 4 MB. Please choose a smaller one.");
      e.target.value = "";
      setPhoto(null);
      return;
    }
    setPhoto(f);
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    fd.delete("photoFile"); // the file input's own copy, so the photo is not sent twice
    fd.set("consent", consent ? "true" : "false");
    if (photo) fd.set("photo", photo);

    if (!consent) {
      setError("Please tick the box to give permission to publish.");
      return;
    }
    setSending(true);
    try {
      const res = await fetch("/api/testimonial", { method: "POST", body: fd });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(result.error || "Something went wrong. Please try again.");
      setSent(true);
      form.reset();
      setPhoto(null);
      setConsent(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div role="status" className="flex flex-col items-start gap-4 rounded-md bg-white p-8">
        <CheckCircle2 className="h-10 w-10 text-emerald-600" aria-hidden="true" />
        <p className="font-display text-3xl font-extrabold tracking-tight">Thank you.</p>
        <p className="text-lg text-body">I have received your testimonial, and I appreciate it.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-5">
      {/* Honeypot: hidden from people, often filled by bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-base font-bold">Your name *</span>
        <input name="name" required maxLength={100} autoComplete="name" className={input} />
      </label>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-base font-bold">Your role</span>
          <input name="role" maxLength={120} className={input} placeholder="e.g. Founder" />
        </label>
        <label className="block">
          <span className="mb-2 block text-base font-bold">Company</span>
          <input name="company" maxLength={120} autoComplete="organization" className={input} />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-base font-bold">Your email (optional)</span>
        <input name="email" type="email" maxLength={200} autoComplete="email" className={input} />
        <span className="mt-1 block text-sm text-body">Only so I can thank you or ask a question. It will not be published.</span>
      </label>

      <label className="block">
        <span className="mb-2 block text-base font-bold">Your testimonial *</span>
        <textarea name="quote" required minLength={20} maxLength={2000} rows={6} className={`${input} resize-y`} />
        <span className="mt-1 block text-sm text-body">
          A few lines are enough. What was the situation before? What was it like working with me? What has changed since?
        </span>
      </label>

      <div>
        <span className="mb-2 block text-base font-bold">A photo or your logo (optional)</span>
        <label className="flex cursor-pointer items-center gap-4 rounded-md border border-dashed border-ink/30 bg-white p-4 hover:border-ink">
          {preview ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={preview} alt="Preview of your photo" className="h-16 w-16 rounded-md object-cover" />
          ) : (
            <span className="flex h-16 w-16 items-center justify-center rounded-md bg-mist">
              <ImagePlus className="h-6 w-6 text-body" aria-hidden="true" />
            </span>
          )}
          <span className="text-base text-body">{photo ? photo.name : "Choose an image (JPG, PNG or WebP, under 4 MB)"}</span>
          <input type="file" name="photoFile" accept="image/jpeg,image/png,image/webp" onChange={pickPhoto} className="sr-only" />
        </label>
      </div>

      <label className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-1.5 h-5 w-5 accent-ink"
        />
        <span className="text-base text-body">
          I give Ishmael permission to publish my words, name, role, company and photo on his website. I can ask him to remove them at any time. *
        </span>
      </label>

      {error && (
        <p role="alert" className="text-base font-bold text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="group inline-flex w-fit items-center gap-3 rounded-md bg-accent px-6 py-4 text-base font-bold tracking-tight text-ink transition-colors hover:bg-ink hover:text-accent disabled:opacity-60"
      >
        {sending ? "Sending…" : "Send testimonial"}
        <ArrowRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </form>
  );
}
