import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const FIRM_EMAIL = process.env.NEXT_PUBLIC_FIRM_EMAIL || "arthajuris@gmail.com";
const GMAIL_USER = process.env.GMAIL_USER || "arthajuris@gmail.com";
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD || "kbuh ohba rios ymzk";

const getTransporter = () =>
  nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
  });

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, contact } = body;

    if (!name || !contact) {
      return NextResponse.json(
        { error: "Name and contact number are required." },
        { status: 400 }
      );
    }

    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
      return NextResponse.json(
        {
          error:
            "Email configuration missing. Please set GMAIL_USER and GMAIL_APP_PASSWORD in .env.local",
        },
        { status: 500 }
      );
    }

    const transporter = getTransporter();

    // ─────────────────────────────────────────────
    // EMAIL: Notify the firm of new website visitor
    // ─────────────────────────────────────────────
    const firmEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; background: #fff; border: 1px solid #e8e0d0;">
        <div style="background: linear-gradient(135deg, #0f1c35 0%, #1a2f52 100%); padding: 32px 36px; border-bottom: 3px solid #c9a84c;">
          <div style="font-family: Georgia, serif; font-size: 22px; font-weight: 700; color: #fff; letter-spacing: 0.03em;">Artha Juris</div>
          <div style="font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase; color: #c9a84c; margin-top: 4px;">Website Entry Notification</div>
        </div>
        <div style="padding: 32px 36px;">
          <h2 style="color: #0f1c35; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">New Website Visitor</h2>
          <p style="color: #4a4a6a; font-size: 15px; line-height: 1.7; margin-bottom: 24px;">
            A new user has just agreed to the disclaimer and entered the Artha Juris website. Their details are below:
          </p>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr style="background: #faf7f0;">
              <td style="padding: 11px 14px; border: 1px solid #e8e0d0; font-weight: 600; color: #0f1c35; width: 180px; font-size: 13px;">Full Name</td>
              <td style="padding: 11px 14px; border: 1px solid #e8e0d0; color: #4a4a6a; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 11px 14px; border: 1px solid #e8e0d0; font-weight: 600; color: #0f1c35; font-size: 13px;">Contact Number</td>
              <td style="padding: 11px 14px; border: 1px solid #e8e0d0; color: #4a4a6a; font-size: 14px;">
                <a href="tel:${contact}" style="color: #c9a84c; text-decoration: none;">${contact}</a>
              </td>
            </tr>
            <tr style="background: #faf7f0;">
              <td style="padding: 11px 14px; border: 1px solid #e8e0d0; font-weight: 600; color: #0f1c35; font-size: 13px;">Time of Entry</td>
              <td style="padding: 11px 14px; border: 1px solid #e8e0d0; color: #4a4a6a; font-size: 14px;">${new Date().toLocaleString("en-IN")}</td>
            </tr>
          </table>
        </div>
        <div style="padding: 20px 36px; background: #faf7f0; border-top: 1px solid #e8e0d0; font-size: 12px; color: #8888aa; text-align: center;">
          This is an auto-generated notification from the Artha Juris Website.
        </div>
      </div>
    `;

    // Send only to firm
    await transporter.sendMail({
      from: `"Artha Juris Website" <${GMAIL_USER}>`,
      to: FIRM_EMAIL,
      subject: `New Website Visitor: ${name} (${contact})`,
      html: firmEmailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Enquiry email send error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to send notification email. Please try again.",
      },
      { status: 500 }
    );
  }
}
