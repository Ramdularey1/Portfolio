import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

const directEmailConfig = {
  service: "gmail",
  user: "ramdulareyyadav2002@gmail.com",
  password: "ksem yoru nhml qrqa",
  recipient: "ramdulareyyadav2002@gmail.com",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailUser = directEmailConfig.user || process.env.EMAIL_USER;
    const emailPassword =
      directEmailConfig.password || process.env.EMAIL_PASSWORD;
    const emailRecipient =
      directEmailConfig.recipient || process.env.EMAIL_RECIPIENT || emailUser;
    const emailService =
      directEmailConfig.service || process.env.EMAIL_SERVICE || "gmail";

    if (!emailUser || !emailPassword || !emailRecipient) {
      return NextResponse.json(
        {
          error:
            "Email is not configured yet. Add your sender Gmail and app password in src/app/api/send-email/route.ts.",
        },
        { status: 503 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: emailService,
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    // Email to owner
    await transporter.sendMail({
      from: `"${safeName} via Portfolio" <${emailUser}>`,
      replyTo: email,
      to: emailRecipient,
      subject: `New Contact Form Submission from ${safeName}`,
      html: `
        <h2>New Message from Your Portfolio</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    // Confirmation email to visitor
    await transporter.sendMail({
      from: `"Ram Dularey Yadav" <${emailUser}>`,
      to: email,
      subject: "We received your message",
      html: `
        <h2>Thank you, ${safeName}!</h2>
        <p>I received your message and will get back to you soon.</p>
        <br>
        <p>Best regards,<br>Ram Dularey Yadav</p>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
