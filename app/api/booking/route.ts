import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const FIRM_EMAIL = process.env.NEXT_PUBLIC_FIRM_EMAIL || "hiripvt@gmail.com";
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, practiceArea, preferredDate, preferredTime, message } = body;

    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
      return NextResponse.json(
        { error: "Server email configuration is missing. Please set GMAIL_USER and GMAIL_APP_PASSWORD in .env.local" },
        { status: 500 }
      );
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0f1c35; border-bottom: 2px solid #c9a84c; padding-bottom: 10px;">New Consultation Request</h2>
        <p>You have received a new consultation request from the Arthajuris website.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; width: 150px;"><strong>Client Name:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Practice Area:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${practiceArea}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Preferred Slot:</strong></td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${preferredDate} at ${preferredTime}</td>
          </tr>
        </table>
        
        <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #c9a84c;">
          <strong>Message / Matter Description:</strong><br><br>
          ${message ? message.replace(/\n/g, '<br>') : "<i>No additional details provided.</i>"}
        </div>
        
        <p style="margin-top: 30px; font-size: 12px; color: #888;">
          To reply to the client, simply hit "Reply" to this email.
        </p>
      </div>
    `;

    const info = await transporter.sendMail({
      from: `"Arthajuris Website" <${GMAIL_USER}>`,
      to: FIRM_EMAIL,
      subject: `New Appointment Request from ${fullName}`,
      html: emailHtml,
      replyTo: email,
    });

    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error: any) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: error.message || "Failed to send the email. Please try again later." }, { status: 500 });
  }
}

