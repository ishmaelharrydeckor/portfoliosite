import { NextResponse } from "next/server";
import { esc, oneLine, isEmail, getMailer } from "@/lib/mail";

// Vercel serverless functions accept request bodies up to about 4.5 MB, so keep the photo under that.
const MAX_PHOTO_BYTES = 4 * 1024 * 1024;

/** Identify the real image type from the file's first bytes, not from its name or declared type. */
function sniffImage(buf: Buffer): { ext: string; type: string } | null {
  if (buf.length > 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return { ext: "jpg", type: "image/jpeg" };
  if (buf.length > 8 && buf.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return { ext: "png", type: "image/png" };
  if (buf.length > 12 && buf.subarray(0, 4).toString() === "RIFF" && buf.subarray(8, 12).toString() === "WEBP") return { ext: "webp", type: "image/webp" };
  return null;
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();

    // Hidden field that real people never fill in; bots often do.
    if (String(form.get("website") ?? "").trim()) {
      return NextResponse.json({ success: true });
    }

    const name = oneLine(String(form.get("name") ?? ""));
    const role = oneLine(String(form.get("role") ?? ""));
    const company = oneLine(String(form.get("company") ?? ""));
    const email = oneLine(String(form.get("email") ?? ""));
    const quote = String(form.get("quote") ?? "").trim();
    const consent = form.get("consent") === "true";
    const photo = form.get("photo");

    if (!name || name.length > 100) return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
    if (quote.length < 20 || quote.length > 2000)
      return NextResponse.json({ error: "Please write between 20 and 2000 characters." }, { status: 400 });
    if (role.length > 120 || company.length > 120 || email.length > 200)
      return NextResponse.json({ error: "One of the fields is too long." }, { status: 400 });
    if (email && !isEmail(email))
      return NextResponse.json({ error: "That email address doesn't look right." }, { status: 400 });
    if (!consent)
      return NextResponse.json({ error: "Please tick the box to give permission to publish." }, { status: 400 });

    let attachment: { filename: string; content: Buffer; contentType: string } | undefined;
    if (photo instanceof File && photo.size > 0) {
      if (photo.size > MAX_PHOTO_BYTES)
        return NextResponse.json({ error: "The photo is too large. Please use one under 4 MB." }, { status: 400 });
      const buf = Buffer.from(await photo.arrayBuffer());
      const kind = sniffImage(buf);
      if (!kind) return NextResponse.json({ error: "Please upload a JPG, PNG or WebP image." }, { status: 400 });
      const safeName = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "photo";
      attachment = { filename: `${safeName}.${kind.ext}`, content: buf, contentType: kind.type };
    }

    const mailer = getMailer();
    if (!mailer) {
      console.warn("SMTP environment variables are not fully configured.");
      return NextResponse.json({ error: "Email is not set up on the server yet." }, { status: 500 });
    }

    const who = [role, company].filter(Boolean).join(", ");
    const textLines = [`Name: ${name}`];
    if (who) textLines.push(`Role and company: ${who}`);
    if (email) textLines.push(`Email: ${email}`);
    textLines.push("Permission to publish: yes", `Photo: ${attachment ? "attached" : "none"}`, "", quote);

    await mailer.send({
      fromName: "Portfolio testimonials",
      replyTo: email || undefined,
      subject: `New testimonial from ${name}`,
      text: textLines.join("\n"),
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #222;">
          <h2 style="margin-top: 0;">New testimonial</h2>
          <p><strong>Name:</strong> ${esc(name)}</p>
          ${who ? `<p><strong>Role and company:</strong> ${esc(who)}</p>` : ""}
          ${email ? `<p><strong>Email:</strong> ${esc(email)}</p>` : ""}
          <p><strong>Permission to publish:</strong> yes</p>
          <p><strong>Photo:</strong> ${attachment ? "attached" : "none"}</p>
          <blockquote style="margin: 20px 0; padding: 12px 16px; border-left: 4px solid #f2d230; background: #f7f7f7; white-space: pre-wrap;">${esc(quote)}</blockquote>
        </div>`,
      attachments: attachment ? [attachment] : [],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in testimonial API route:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
