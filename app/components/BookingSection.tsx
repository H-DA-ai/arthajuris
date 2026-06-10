"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any;
  }
}

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM",
];

const practiceOptions = [
  "Corporate & Commercial Law",
  "Property & Real Estate Law",
  "Banking & Debt Recovery",
  "Civil Litigation",
  "Family Law",
  "Criminal Law",
  "Legal Documentation",
  "Other / Not Sure",
];

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  practiceArea: string;
  consultationType: "online" | "offline";
  preferredDate: string;
  preferredTime: string;
  message: string;
};

type Status = "idle" | "loading" | "paying" | "upi" | "confirming" | "success" | "error";

const CONSULTATION_FEE = parseInt(process.env.NEXT_PUBLIC_CONSULTATION_FEE || "3500");
const UPI_ID = process.env.NEXT_PUBLIC_UPI_ID || "marumayura@okicici";

export default function BookingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [transactionRef, setTransactionRef] = useState("");
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    practiceArea: "",
    consultationType: "offline",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const resetForm = () => {
    setForm({
      fullName: "",
      email: "",
      phone: "",
      practiceArea: "",
      consultationType: "offline",
      preferredDate: "",
      preferredTime: "",
      message: "",
    });
  };

  const sendBookingEmails = async (paymentId: string = "UPI_MANUAL", utrRef: string = "") => {
    const res = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, paymentId, transactionRef: utrRef }),
    });
    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || "Failed to send confirmation email.");
    }
  };


  const handleUpiConfirm = async () => {
    if (!transactionRef.trim()) {
      setErrorMsg("Please enter your UPI Transaction / UTR reference number.");
      return;
    }
    setStatus("confirming");
    setErrorMsg("");
    try {
      await sendBookingEmails("UPI_PENDING_VERIFICATION", transactionRef.trim());
      setStatus("success");
      resetForm();
      setTransactionRef("");
    } catch (err: unknown) {
      setStatus("upi");
      setErrorMsg(err instanceof Error ? err.message : "Could not send confirmation. Please try again.");
    }
  };

  const validateForm = () => {
    if (!form.fullName || !form.email || !form.phone || !form.practiceArea || !form.preferredDate || !form.preferredTime) {
      setStatus("error");
      setErrorMsg("Please fill all required fields before proceeding.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    // Always show UPI QR payment screen
    setStatus("upi");
  };

  const today = new Date().toISOString().split("T")[0];

  // ─── UPI QR Payment Screen ────────────────────────────────────────────────
  if (status === "upi" || status === "confirming") {
    return (
      <section id="booking" ref={sectionRef} className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div style={{ maxWidth: "620px", margin: "0 auto" }}>
            <div style={{
              background: "var(--white)",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "var(--shadow-lg)",
              border: "1px solid var(--border-light)",
            }}>

              {/* Header */}
              <div style={{
                background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)",
                padding: "32px 40px",
                textAlign: "center",
              }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "10px" }}>
                  ✦ Consultation Booking
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", color: "var(--white)", fontWeight: 700, marginBottom: "8px" }}>
                  Complete Your Payment
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", margin: 0 }}>
                  Scan the QR below to pay the consultation fee to Adv. Mayura Maru
                </p>
              </div>

              {/* Body */}
              <div style={{ padding: "40px" }}>

                {/* Amount Banner */}
                <div style={{
                  background: "rgba(201,168,76,0.07)",
                  border: "1px solid rgba(201,168,76,0.25)",
                  borderRadius: "8px",
                  padding: "16px 24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "32px",
                }}>
                  <div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-light)", marginBottom: "4px" }}>Consultation Fee</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "var(--navy)", lineHeight: 1 }}>₹{CONSULTATION_FEE.toLocaleString("en-IN")}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "var(--text-light)", marginBottom: "4px" }}>UPI ID</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", fontWeight: 700, color: "var(--navy)" }}>{UPI_ID}</div>
                  </div>
                </div>

                {/* QR Code */}
                <div style={{ textAlign: "center", marginBottom: "24px" }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "16px" }}>
                    ✦ Scan with GPay, PhonePe, Paytm or Any UPI App
                  </div>
                  <div style={{ position: "relative", width: "240px", height: "240px", margin: "0 auto", borderRadius: "12px", overflow: "hidden", border: "2px solid rgba(201,168,76,0.3)", boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}>
                    <Image
                      src="/payment_qr_v4.jpg"
                      alt="Arthajuris UPI QR Code - Mayura Maru"
                      fill
                      style={{ objectFit: "contain", background: "#fff", padding: "16px" }}
                    />
                  </div>

                  {/* Download QR Button */}
                  <div style={{ marginTop: "16px" }}>
                    <a
                      href="/payment_qr_v4.jpg"
                      download="Adv-Mayura-Maru-QR.jpg"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: "var(--navy)",
                        background: "var(--cream)",
                        border: "1px solid var(--border)",
                        borderRadius: "4px",
                        padding: "8px 18px",
                        textDecoration: "none",
                        letterSpacing: "0.04em",
                        transition: "all 0.2s",
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                      Download QR Code
                    </a>
                  </div>
                </div>

                {/* Divider */}
                <div style={{ borderTop: "1px solid var(--border-light)", margin: "28px 0" }} />

                {/* UTR Input */}
                <div style={{ marginBottom: "24px" }}>
                  <label style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", fontWeight: 600, color: "var(--navy)", display: "block", marginBottom: "8px", letterSpacing: "0.04em" }}>
                    Transaction / UTR Reference Number <span style={{ color: "#e53e3e" }}>*</span>
                  </label>
                  <input
                    type="text"
                    value={transactionRef}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '').slice(0, 12);
                      setTransactionRef(val);
                    }}
                    maxLength={12}
                    minLength={12}
                    pattern="\d{12}"
                    title="Please enter exactly 12 digits"
                    placeholder="e.g. 512345678901"
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9375rem",
                      border: "1px solid var(--border)",
                      borderRadius: "4px",
                      outline: "none",
                      color: "var(--navy)",
                      background: "var(--cream)",
                      boxSizing: "border-box",
                    }}
                  />
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "var(--text-light)", marginTop: "6px", lineHeight: 1.5 }}>
                    After paying, enter the 12-digit UTR number shown in your UPI app. We will verify your payment and confirm your booking within 24 hours.
                  </p>
                </div>

                {/* Error */}
                {errorMsg && (
                  <div style={{ background: "#fff5f5", border: "1px solid #fc8181", borderRadius: "6px", padding: "12px 16px", marginBottom: "16px", fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "#c53030" }}>
                    {errorMsg}
                  </div>
                )}

                {/* Action Buttons */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <button
                    onClick={handleUpiConfirm}
                    disabled={status === "confirming" || !transactionRef.trim()}
                    style={{
                      width: "100%",
                      padding: "14px",
                      background: transactionRef.trim()
                        ? "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)"
                        : "var(--border)",
                      border: "none",
                      borderRadius: "4px",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: transactionRef.trim() ? "var(--navy)" : "var(--text-light)",
                      cursor: transactionRef.trim() ? "pointer" : "not-allowed",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                  >
                    {status === "confirming" ? (
                      <><span className="spinner" /><span>Confirming Booking...</span></>
                    ) : (
                      <><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg><span>Confirm Booking</span></>
                    )}
                  </button>

                  <button
                    onClick={() => { setStatus("idle"); setErrorMsg(""); setTransactionRef(""); }}
                    style={{ background: "none", border: "1px solid var(--border)", borderRadius: "4px", padding: "12px", fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "var(--text-mid)", cursor: "pointer" }}
                  >
                    ← Go Back & Edit Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="booking"
      ref={sectionRef}
      className="section"
      style={{ background: "var(--cream)" }}
    >
      <div className="container">
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "80px", alignItems: "start" }}
          className="booking-grid"
        >
          {/* Left — Info */}
          <div>
            <div className="reveal section-tag" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}>
              Book a Consultation
            </div>
            <h2 className="reveal section-title" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}>
              Schedule Your{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Legal Consultation</em>
            </h2>
            <div className="reveal gold-divider" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }} />
            <p className="reveal" style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "var(--text-mid)", lineHeight: 1.8, marginBottom: "36px", opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}>
              Choose your preferred consultation type, fill in your details, and complete a nominal payment to secure your appointment.
            </p>

            {/* Process Steps */}
            <div className="reveal" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}>
              {[
                { step: "01", title: "Fill Your Details", desc: "Choose consultation type (online/in-person), date, and describe your matter." },
                { step: "02", title: "Secure Your Slot", desc: `Pay ₹${CONSULTATION_FEE} via UPI (GPay, PhonePe, Paytm) to confirm your appointment.` },
                { step: "03", title: "Receive Confirmation", desc: "We send you a confirmation email with all details and next steps within 24 hours." },
              ].map((item, idx) => (
                <div key={item.step} style={{ display: "flex", gap: "20px", alignItems: "flex-start", marginBottom: idx < 2 ? "28px" : "0", position: "relative" }}>
                  {idx < 2 && (
                    <div style={{ position: "absolute", left: "19px", top: "42px", width: "2px", height: "calc(100% + 4px)", background: "linear-gradient(180deg, var(--gold), transparent)", opacity: 0.3 }} />
                  )}
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", border: "2px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 700, color: "var(--gold)", flexShrink: 0, background: "rgba(201, 168, 76, 0.05)" }}>
                    {item.step}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 600, color: "var(--navy)", marginBottom: "4px" }}>{item.title}</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "var(--text-mid)", lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Fee Notice */}
            <div className="reveal" style={{ marginTop: "36px", padding: "20px 24px", background: "rgba(201, 168, 76, 0.06)", border: "1px solid rgba(201, 168, 76, 0.25)", borderRadius: "4px", opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", fontWeight: 700, color: "var(--gold-dark)", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                ✦ Consultation Fee: ₹{CONSULTATION_FEE}
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "var(--text-mid)", lineHeight: 1.6, marginBottom: "8px" }}>
                A nominal fee of <strong>₹{CONSULTATION_FEE}</strong> confirms your appointment and is credited towards legal services.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "var(--text-light)", lineHeight: 1.6 }}>
                ✦ All information is protected by attorney-client privilege.
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div className="reveal" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease" }}>
            {status === "success" ? (
              <div style={{ background: "var(--white)", borderRadius: "8px", padding: "60px 48px", textAlign: "center", boxShadow: "var(--shadow-md)", border: "1px solid var(--border-light)" }}>
                <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "rgba(201, 168, 76, 0.1)", border: "2px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px" }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", color: "var(--navy)", marginBottom: "16px" }}>Booking Confirmed!</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "var(--text-mid)", lineHeight: 1.7, marginBottom: "12px" }}>
                  Your consultation request has been received and a confirmation email is on its way.
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "var(--text-light)", lineHeight: 1.7, marginBottom: "32px" }}>
                  Our team will confirm your appointment within 24 business hours.
                </p>
                <button onClick={() => setStatus("idle")} className="btn-outline" style={{ fontSize: "0.8125rem" }}>
                  <span>Book Another Consultation</span>
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ background: "var(--white)", borderRadius: "8px", padding: "48px", boxShadow: "var(--shadow-md)", border: "1px solid var(--border-light)" }}
              >
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "8px", fontWeight: 600 }}>
                  Consultation Request Form
                </div>
                <div style={{ width: "32px", height: "2px", background: "var(--gold)", marginBottom: "32px" }} />

                {/* Consultation Type Toggle */}
                <div className="form-group">
                  <label className="form-label">Consultation Type *</label>
                  <div style={{ display: "flex", gap: "12px", marginTop: "4px" }}>
                    {(["offline", "online"] as const).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, consultationType: type }))}
                        style={{
                          flex: 1,
                          padding: "12px 16px",
                          border: form.consultationType === type ? "2px solid var(--gold)" : "2px solid #ddd",
                          borderRadius: "4px",
                          background: form.consultationType === type ? "rgba(201, 168, 76, 0.06)" : "var(--white)",
                          cursor: "pointer",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          color: form.consultationType === type ? "var(--navy)" : "var(--text-light)",
                          transition: "all 0.25s ease",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "8px",
                        }}
                      >
                        {type === "offline" ? (
                          <>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                              <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                            In-Person
                          </>
                        ) : (
                          <>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polygon points="23 7 16 12 23 17 23 7" />
                              <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                            </svg>
                            Online (Video Call)
                          </>
                        )}
                      </button>
                    ))}
                  </div>
                  {form.consultationType === "offline" && (
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "var(--text-light)", marginTop: "8px" }}>
                      📍 Office No. 4/B, Mahavir Chambers, Banaji Street, Fort, Mumbai – 400 001
                    </p>
                  )}
                  {form.consultationType === "online" && (
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "var(--text-light)", marginTop: "8px" }}>
                      📹 A video call link will be shared with you upon confirmation.
                    </p>
                  )}
                </div>

                {/* Row 1 */}
                <div className="grid-2" style={{ gap: "16px" }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullName">Full Name *</label>
                    <input id="fullName" name="fullName" type="text" required value={form.fullName} onChange={handleChange} placeholder="Your full name" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className="form-input" />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid-2" style={{ gap: "16px" }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number *</label>
                    <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="practiceArea">Area of Law</label>
                    <select id="practiceArea" name="practiceArea" value={form.practiceArea} onChange={handleChange} className="form-select" style={{ cursor: "pointer" }}>
                      <option value="">Select an area</option>
                      {practiceOptions.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
                    </select>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid-2" style={{ gap: "16px" }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="preferredDate">Preferred Date *</label>
                    <input id="preferredDate" name="preferredDate" type="date" required min={today} value={form.preferredDate} onChange={handleChange} className="form-input" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="preferredTime">Preferred Time *</label>
                    <select id="preferredTime" name="preferredTime" required value={form.preferredTime} onChange={handleChange} className="form-select" style={{ cursor: "pointer" }}>
                      <option value="">Select a time</option>
                      {timeSlots.map((slot) => (<option key={slot} value={slot}>{slot}</option>))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Brief Description of Your Matter</label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Briefly describe your legal matter (optional)" className="form-textarea" style={{ minHeight: "90px" }} />
                </div>

                {/* Error */}
                {status === "error" && (
                  <div style={{ padding: "16px 20px", background: "rgba(180, 60, 60, 0.05)", border: "1px solid rgba(180, 60, 60, 0.25)", borderRadius: "4px", fontFamily: "'Inter', sans-serif", marginBottom: "20px" }}>
                    <div style={{ fontWeight: 600, color: "#c0392b", fontSize: "0.875rem" }}>
                      ⚠ {errorMsg || "Something went wrong. Please try again."}
                    </div>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading" || status === "paying"}
                  className="btn-primary w-full"
                  style={{ justifyContent: "center", fontSize: "0.875rem", opacity: (status === "loading" || status === "paying") ? 0.75 : 1, cursor: (status === "loading" || status === "paying") ? "not-allowed" : "pointer" }}
                >
                  {status === "loading" || status === "paying" ? (
                    <><span className="spinner" style={{ borderTopColor: "var(--navy)" }} /><span>Processing...</span></>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                        <line x1="1" y1="10" x2="23" y2="10" />
                      </svg>
                      <span>Pay ₹{CONSULTATION_FEE} & Book Consultation</span>
                    </>
                  )}
                </button>

                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "var(--text-light)", textAlign: "center", marginTop: "16px", lineHeight: 1.6 }}>
                  Payment via UPI · GPay, PhonePe, Paytm accepted · All information is strictly confidential
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .booking-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 600px) {
          .booking-grid form { padding: 28px 20px !important; }
        }
      `}</style>
    </section>
  );
}
