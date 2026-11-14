import { NextResponse } from "next/server";
import { esc, oneLine, isEmail, getMailer } from "@/lib/mail";

const PROJECT_TYPES = [
  "Business website",
  "Landing page / waitlist",
  "Web app or portal",
  "Redesign of my current site",
  "Something else",
];

export async function POST(request: Request) {
  try {
    const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
    if (!body) return NextResponse.json({ error: "That request could not be read." }, { status: 400 });

    // Hidden field that real people never fill in; bots often do. Answer normally, send nothing.
    if (String(body.website ?? "").trim()) return NextResponse.json({ success: true });

    const name = oneLine(String(body.name ?? ""));
    const email = oneLine(String(body.email ?? ""));
    const message = String(body.message ?? "").trim();
    const requested = oneLine(String(body.projectType ?? ""));
    const projectType = PROJECT_TYPES.includes(requested) ? requested : "Something else";

    if (!name || name.length > 100) return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
    if (!isEmail(email) || email.length > 200)
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    if (message.length < 10 || message.length > 5000)
      return NextResponse.json({ error: "Please write between 10 and 5000 characters." }, { status: 400 });

    const mailer = getMailer();
    if (!mailer) {
      console.warn("SMTP environment variables are not fully configured.");
      return NextResponse.json(
        { error: "Sending is not set up yet. Please email me directly instead." },
        { status: 500 }
      );
    }

    await mailer.send({
      fromName: `${name} (website)`,
      replyTo: email,
      subject: `New enquiry: ${projectType} from ${name}`,
      text: [`Name: ${name}`, `Email: ${email}`, `Project type: ${projectType}`, "", message].join("\n"),
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #222;">
          <h2 style="margin-top: 0; border-bottom: 3px solid #f2d230; padding-bottom: 10px;">New enquiry</h2>
          <p><strong>Name:</strong> ${esc(name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
          <p><strong>Project type:</strong> ${esc(projectType)}</p>
          <blockquote style="margin: 20px 0; padding: 12px 16px; border-left: 4px solid #f2d230; background: #f7f7f7; white-space: pre-wrap;">${esc(message)}</blockquote>
          <p style="color: #777; font-size: 13px;">Reply to this email to answer ${esc(name)} directly.</p>
        </div>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in contact API route:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again or email me directly." }, { status: 500 });
  }
}
