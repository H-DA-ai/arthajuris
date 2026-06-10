import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const FIRM_EMAIL = process.env.NEXT_PUBLIC_FIRM_EMAIL || "arthajuris@gmail.com";
const GMAIL_USER = process.env.GMAIL_USER || "arthajuris@gmail.com";
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD || "kbuh ohba rios ymzk";
const CONSULTATION_FEE = process.env.NEXT_PUBLIC_CONSULTATION_FEE || "3500";
const RAZORPAY_KEY_ID = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "";
const UPI_ID = process.env.NEXT_PUBLIC_UPI_ID || "marumayura@okicici";

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
    const {
      fullName,
      email,
      phone,
      practiceArea,
      preferredDate,
      preferredTime,
      consultationType,
      message,
      transactionRef,
    } = body;

    // Backend enforcement: transaction reference is mandatory
    // Enhanced UTR validation: must be exactly 12 digits
    if (!transactionRef || !/^\d{12}$/.test(String(transactionRef).trim())) {
      return NextResponse.json(
        { error: "Please provide a valid 12-digit UTR/Transaction Reference number." },
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

    const formattedDate = preferredDate
      ? new Date(preferredDate).toLocaleDateString("en-IN", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : preferredDate;

    const transporter = getTransporter();

    // ─────────────────────────────────────────────
    // EMAIL 1: Notify the firm of new booking request
    // ─────────────────────────────────────────────
    const firmEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; background: #fff; border: 1px solid #e8e0d0;">
        <div style="background: linear-gradient(135deg, #0f1c35 0%, #1a2f52 100%); padding: 32px 36px; border-bottom: 3px solid #c9a84c;">
          <div style="font-family: Georgia, serif; font-size: 22px; font-weight: 700; color: #fff; letter-spacing: 0.03em;">Artha Juris</div>
          <div style="font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase; color: #c9a84c; margin-top: 4px;">Legal Consultancy · Premier Law Firm</div>
          <h2 style="color: #c9a84c; margin: 20px 0 0; font-size: 18px; font-weight: 600; font-family: Georgia, serif;">New Consultation Request Received</h2>
        </div>
        <div style="padding: 32px 36px;">
          <p style="color: #4a4a6a; font-size: 15px; line-height: 1.7; margin-bottom: 24px;">
            A new consultation request has been submitted via the Artha Juris website. The client details are as follows:
          </p>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr style="background: #faf7f0;">
              <td style="padding: 11px 14px; border: 1px solid #e8e0d0; font-weight: 600; color: #0f1c35; width: 180px; font-size: 13px;">Client Name</td>
              <td style="padding: 11px 14px; border: 1px solid #e8e0d0; color: #4a4a6a; font-size: 14px;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 11px 14px; border: 1px solid #e8e0d0; font-weight: 600; color: #0f1c35; font-size: 13px;">Email Address</td>
              <td style="padding: 11px 14px; border: 1px solid #e8e0d0; font-size: 14px;"><a href="mailto:${email}" style="color: #c9a84c;">${email}</a></td>
            </tr>
            <tr style="background: #faf7f0;">
              <td style="padding: 11px 14px; border: 1px solid #e8e0d0; font-weight: 600; color: #0f1c35; font-size: 13px;">Phone Number</td>
              <td style="padding: 11px 14px; border: 1px solid #e8e0d0; color: #4a4a6a; font-size: 14px;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 11px 14px; border: 1px solid #e8e0d0; font-weight: 600; color: #0f1c35; font-size: 13px; background: #fffbe6;">UPI UTR / Ref No.</td>
              <td style="padding: 11px 14px; border: 1px solid #e8e0d0; font-size: 14px; background: #fffbe6; color: #b7791f; font-weight: 700; letter-spacing: 0.04em;">${transactionRef}</td>
            </tr>
            <tr>
              <td style="padding: 11px 14px; border: 1px solid #e8e0d0; font-weight: 600; color: #0f1c35; font-size: 13px;">Practice Area</td>
              <td style="padding: 11px 14px; border: 1px solid #e8e0d0; color: #4a4a6a; font-size: 14px;">${practiceArea}</td>
            </tr>
            <tr style="background: #faf7f0;">
              <td style="padding: 11px 14px; border: 1px solid #e8e0d0; font-weight: 600; color: #0f1c35; font-size: 13px;">Consultation Type</td>
              <td style="padding: 11px 14px; border: 1px solid #e8e0d0; color: #4a4a6a; font-size: 14px;">${consultationType === "online" ? "Online (Video Call)" : "In-Person (Office Visit)"}</td>
            </tr>
            <tr>
              <td style="padding: 11px 14px; border: 1px solid #e8e0d0; font-weight: 600; color: #0f1c35; font-size: 13px;">Preferred Date</td>
              <td style="padding: 11px 14px; border: 1px solid #e8e0d0; color: #4a4a6a; font-size: 14px;">${formattedDate}</td>
            </tr>
            <tr style="background: #faf7f0;">
              <td style="padding: 11px 14px; border: 1px solid #e8e0d0; font-weight: 600; color: #0f1c35; font-size: 13px;">Preferred Time</td>
              <td style="padding: 11px 14px; border: 1px solid #e8e0d0; color: #4a4a6a; font-size: 14px;">${preferredTime}</td>
            </tr>
          </table>
          ${
            message
              ? `<div style="padding: 16px 20px; background: #faf7f0; border-left: 3px solid #c9a84c; margin-bottom: 24px;">
              <div style="font-weight: 600; color: #0f1c35; margin-bottom: 8px; font-size: 13px;">Matter Description:</div>
              <p style="color: #4a4a6a; font-size: 14px; line-height: 1.7; margin: 0;">${message.replace(/\n/g, "<br>")}</p>
            </div>`
              : ""
          }
          <div style="padding: 16px 20px; background: #fff8e8; border: 1px solid #c9a84c; border-radius: 4px;">
            <div style="font-size: 12px; font-weight: 700; color: #a07c2d; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px;">⚠ Pending Payment Confirmation</div>
            <p style="color: #4a4a6a; font-size: 13px; line-height: 1.6; margin: 0;">
              Please check if the payment of <strong>₹${CONSULTATION_FEE}</strong> has been received via the provided UTR number. This appointment remains <strong>pending</strong> until the payment is confirmed. 
              You must call the client to inform them of this pending status, and if their requested slot is unavailable, please assist them in rescheduling.
            </p>
          </div>
        </div>
        <div style="padding: 20px 36px; background: #faf7f0; border-top: 1px solid #e8e0d0; font-size: 12px; color: #8888aa;">
          To reply to the client, hit "Reply" to this email · Artha Juris Legal Consultancy · Mumbai, Maharashtra
        </div>
      </div>
    `;

    // ─────────────────────────────────────────────
    // EMAIL 2: Client confirmation with payment details
    // ─────────────────────────────────────────────
    const clientEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; background: #fff; border: 1px solid #e8e0d0;">
        <div style="background: linear-gradient(135deg, #0f1c35 0%, #1a2f52 100%); padding: 32px 36px; border-bottom: 3px solid #c9a84c;">
          <div style="font-family: Georgia, serif; font-size: 22px; font-weight: 700; color: #fff; letter-spacing: 0.03em;">Artha Juris</div>
          <div style="font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase; color: #c9a84c; margin-top: 4px;">Legal Consultancy · Premier Law Firm</div>
          <h2 style="color: #fff; margin: 20px 0 0; font-size: 20px; font-weight: 600; font-family: Georgia, serif;">Thank You for Your Consultation Request</h2>
        </div>
        <div style="padding: 32px 36px;">
          <p style="color: #4a4a6a; font-size: 15px; line-height: 1.7; margin-bottom: 20px;">
            Dear <strong style="color: #0f1c35;">${fullName}</strong>,
          </p>
          <p style="color: #4a4a6a; font-size: 15px; line-height: 1.7; margin-bottom: 20px;">
            Thank you for reaching out to <strong style="color: #0f1c35;">Artha Juris</strong>. We have received your confirmation request. Our team is looking into it and will send you a confirmed email for your appointment shortly.
          </p>
          <div style="background: #faf7f0; border: 1px solid #e8e0d0; border-radius: 4px; padding: 24px; margin-bottom: 28px;">
            <div style="font-size: 12px; font-weight: 700; color: #c9a84c; text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 16px;">Your Booking Summary</div>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 7px 0; color: #8888aa; font-size: 13px; width: 140px;">Practice Area</td><td style="padding: 7px 0; color: #0f1c35; font-size: 14px; font-weight: 500;">${practiceArea}</td></tr>
              <tr><td style="padding: 7px 0; color: #8888aa; font-size: 13px;">Consultation</td><td style="padding: 7px 0; color: #0f1c35; font-size: 14px; font-weight: 500;">${consultationType === "online" ? "Online (Video Call)" : "In-Person (Office Visit)"}</td></tr>
              <tr><td style="padding: 7px 0; color: #8888aa; font-size: 13px;">Preferred Date</td><td style="padding: 7px 0; color: #0f1c35; font-size: 14px; font-weight: 500;">${formattedDate}</td></tr>
              <tr><td style="padding: 7px 0; color: #8888aa; font-size: 13px;">Preferred Time</td><td style="padding: 7px 0; color: #0f1c35; font-size: 14px; font-weight: 500;">${preferredTime}</td></tr>
            </table>
          </div>

          <div style="background: #fff8e8; border: 1px solid #c9a84c; border-radius: 4px; padding: 24px; margin-bottom: 28px;">
            <div style="font-size: 12px; font-weight: 700; color: #a07c2d; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 12px;">✦ Payment Verification</div>
            <p style="color: #4a4a6a; font-size: 14px; line-height: 1.7; margin-bottom: 16px;">
              If you haven't paid yet, please complete the fee of <strong style="color: #0f1c35; font-size: 16px;">₹${CONSULTATION_FEE}</strong> to secure your slot.
            </p>
            <p style="color: #4a4a6a; font-size: 14px; line-height: 1.7; margin-bottom: 20px;">
              You can make the payment via UPI using the QR code on our website or the details below:
            </p>
            
            <div style="border-top: 1px solid #e8d5a0; padding-top: 16px;">
              <p style="color: #4a4a6a; font-size: 13px; line-height: 1.6; margin: 0;">
                UPI ID: <strong style="color: #0f1c35; font-size: 14px;">${UPI_ID}</strong><br>
                Amount: <strong>₹${CONSULTATION_FEE}</strong><br>
                Reference: Your name + "${formattedDate}"<br><br>
                <em style="color: #8888aa; font-size: 12px;">Note: Your requested slot is subject to availability. Our team will verify your payment via the UTR number provided and contact you to confirm the appointment or assist in rescheduling if the slot is full.</em>
              </p>
            </div>
          </div>

          <p style="color: #4a4a6a; font-size: 14px; line-height: 1.7; margin-bottom: 8px;">
            Once payment is confirmed, a member of our team will reach out to you with the final appointment confirmation and (for online consultations) the meeting link.
          </p>
          <p style="color: #8888aa; font-size: 13px; line-height: 1.7;">
            If you have any immediate questions, please do not hesitate to contact us at <a href="mailto:${FIRM_EMAIL}" style="color: #c9a84c;">${FIRM_EMAIL}</a>.
          </p>
        </div>
        <div style="padding: 24px 36px; background: linear-gradient(135deg, #0f1c35 0%, #1a2f52 100%); border-top: 3px solid #c9a84c;">
          <div style="font-family: Georgia, serif; font-size: 16px; font-weight: 700; color: #fff; margin-bottom: 4px;">Artha Juris</div>
          <div style="font-size: 11px; color: #c9a84c; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 16px;">Legal Consultancy · Premier Law Firm</div>
          <div style="font-size: 12px; color: rgba(255,255,255,0.5); line-height: 1.8;">
            Office No. 4/B, 4th Floor, Mahavir Chambers, 1/5 Banaji Street, Fort, Mumbai – 400 001<br>
            Email: ${FIRM_EMAIL}<br>
            Adv. Mayura Maru — Founder | Enrolment No. MAH/2976/2002
          </div>
        </div>
        <div style="padding: 16px 36px; background: #f0ebe0; font-size: 11px; color: #8888aa; text-align: center;">
          This is an auto-generated email from Arthajuris. All information shared is strictly confidential and protected by attorney-client privilege.
        </div>
      </div>
    `;

    // Send to firm
    await transporter.sendMail({
      from: `"Artha Juris Website" <${GMAIL_USER}>`,
      to: FIRM_EMAIL,
      subject: `New Consultation Request — ${fullName} (${practiceArea})`,
      html: firmEmailHtml,
      replyTo: email,
    });

    // Send to client
    await transporter.sendMail({
      from: `"Artha Juris Legal Consultancy" <${GMAIL_USER}>`,
      to: email,
      subject: `Your Consultation Request — Artha Juris | Processing`,
      html: clientEmailHtml,
      replyTo: FIRM_EMAIL,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Email send error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to send confirmation email. Please try again.",
      },
      { status: 500 }
    );
  }
}
