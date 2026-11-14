import nodemailer from "nodemailer";

/** Makes visitor text safe to place inside an HTML email. */
export const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Removes line breaks, so visitor text cannot add extra headers to an email. */
export const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

export const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export interface Mailer {
  send: (mail: {
    subject: string;
    text: string;
    html: string;
    replyTo?: string;
    fromName: string;
    attachments?: { filename: string; content: Buffer; contentType: string }[];
  }) => Promise<void>;
}

/**
 * Builds the mailer from the SMTP_* environment variables (see .env.example).
 * Returns null when they are not set, so a route can answer with a clear message.
 */
export function getMailer(): Mailer | null {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT) || 587;
  const to = process.env.SMTP_TO || user;
  if (!host || !user || !pass || !to) return null;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, STARTTLS for 587
    auth: { user, pass },
  });

  return {
    async send({ subject, text, html, replyTo, fromName, attachments }) {
      await transporter.sendMail({
        // Mail providers only allow sending from the account's own address; the visitor goes in Reply-To.
        from: `"${oneLine(fromName).replace(/["<>]/g, "")}" <${user}>`,
        replyTo,
        to,
        subject: oneLine(subject),
        text,
        html,
        attachments,
      });
    },
  };
}
