"use client";
import { useEffect, useRef, useState } from "react";

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

const CONSULTATION_FEE = parseInt(process.env.NEXT_PUBLIC_CONSULTATION_FEE || "500");
const RAZORPAY_KEY_ID = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "";
const UPI_ID = process.env.NEXT_PUBLIC_UPI_ID || "arthajurisfirm@gmail.com";

const isRazorpayConfigured =
  RAZORPAY_KEY_ID &&
  RAZORPAY_KEY_ID !== "rzp_test_placeholder" &&
  RAZORPAY_KEY_ID.startsWith("rzp_");

export default function BookingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
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

  // Dynamically load Razorpay script only if configured
  useEffect(() => {
    if (!isRazorpayConfigured) return;
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
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

  const sendBookingEmails = async (paymentId: string = "UPI_MANUAL") => {
    const res = await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, paymentId }),
    });
    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || "Failed to send confirmation email.");
    }
  };

  const handleRazorpayPayment = async () => {
    setStatus("paying");
    try {
      const orderRes = await fetch("/api/create-razorpay-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: CONSULTATION_FEE, currency: "INR", receipt: `consult_${Date.now()}` }),
      });
      const orderData = await orderRes.json();
      if (!orderRes.ok || !orderData.orderId) throw new Error(orderData.error || "Could not initiate payment.");

      const options = {
        key: RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Arthajuris Legal Consultancy",
        description: `Consultation Fee — ${form.practiceArea || "Legal Consultation"}`,
        order_id: orderData.orderId,
        prefill: { name: form.fullName, email: form.email, contact: form.phone },
        theme: { color: "#c9a84c" },
        handler: async (response: { razorpay_payment_id: string }) => {
          setStatus("loading");
          await sendBookingEmails(response.razorpay_payment_id);
          setStatus("success");
          resetForm();
        },
        modal: { ondismiss: () => setStatus("idle") },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Payment initiation failed.");
    }
  };

  const handleUpiConfirm = async () => {
    setStatus("confirming");
    try {
      await sendBookingEmails("UPI_PENDING_CONFIRMATION");
      setStatus("success");
      resetForm();
    } catch (err: unknown) {
      setStatus("error");
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
    if (isRazorpayConfigured) {
      await handleRazorpayPayment();
    } else {
      // Fallback: show UPI payment screen
      setStatus("upi");
    }
  };

  const today = new Date().toISOString().split("T")[0];

  // ─── UPI Payment Screen ───────────────────────────────────────────────────
  if (status === "upi" || status === "confirming") {
    const upiLink = `upi://pay?pa=${UPI_ID}&pn=Arthajuris&am=${CONSULTATION_FEE}&cu=INR&tn=Consultation Fee`;
    return (
      <section id="booking" ref={sectionRef} className="section" style={{ background: "var(--cream)" }}>
        <div className="container">
          <div style={{ maxWidth: "580px", margin: "0 auto" }}>
            <div style={{
              background: "var(--white)",
              borderRadius: "12px",
              padding: "48px",
              boxShadow: "var(--shadow-lg)",
              border: "1px solid var(--border-light)",
              textAlign: "center",
            }}>
              <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(201,168,76,0.1)", border: "2px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.625rem", color: "var(--navy)", marginBottom: "8px" }}>
                Complete Your Payment
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "var(--text-mid)", lineHeight: 1.7, marginBottom: "32px" }}>
                Please pay the consultation fee of <strong style={{ color: "var(--navy)" }}>₹{CONSULTATION_FEE}</strong> using any UPI app (GPay, PhonePe, Paytm) and then click the confirm button below.
              </p>

              {/* UPI Details */}
              <div style={{ background: "var(--cream)", border: "1px solid var(--border)", borderRadius: "8px", padding: "24px", marginBottom: "24px" }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "16px" }}>
                  ✦ Pay via UPI
                </div>
                <div style={{ marginBottom: "16px" }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "var(--text-light)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>UPI ID</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.125rem", fontWeight: 700, color: "var(--navy)", letterSpacing: "0.02em" }}>{UPI_ID}</div>
                </div>
                <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginBottom: "16px" }}>
                  <div style={{ padding: "10px 20px", background: "var(--white)", border: "1px solid var(--border-light)", borderRadius: "4px" }}>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "var(--text-light)", marginBottom: "4px" }}>Amount</div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.375rem", fontWeight: 700, color: "var(--navy)" }}>₹{CONSULTATION_FEE}</div>
                  </div>
                </div>
                <a
                  href={upiLink}
                  style={{
                    display: "inline-block",
                    background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)",
                    color: "var(--navy)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "12px 28px",
                    borderRadius: "2px",
                    textDecoration: "none",
                    marginBottom: "8px",
                  }}
                >
                  Open UPI App to Pay
                </a>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "var(--text-light)", marginTop: "8px" }}>
                  Or open any UPI app and pay to <strong>{UPI_ID}</strong>
                </p>
              </div>

              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "var(--text-mid)", lineHeight: 1.7, marginBottom: "24px" }}>
                After completing the payment, click below to confirm your booking. We will verify your payment and send a confirmation email to <strong>{form.email}</strong>.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <button
                  onClick={handleUpiConfirm}
                  disabled={status === "confirming"}
                  className="btn-primary w-full"
                  style={{ justifyContent: "center", opacity: status === "confirming" ? 0.7 : 1 }}
                >
                  {status === "confirming" ? (
                    <><span className="spinner" /><span>Confirming...</span></>
                  ) : (
                    <><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                    <span>I&apos;ve Completed the Payment</span></>
                  )}
                </button>
                <button
                  onClick={() => { setStatus("idle"); setErrorMsg(""); }}
                  style={{ background: "none", border: "1px solid var(--border)", borderRadius: "2px", padding: "12px", fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "var(--text-mid)", cursor: "pointer", transition: "all 0.2s" }}
                >
                  Go Back & Edit Details
                </button>
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
                { step: "02", title: "Secure Your Slot", desc: `Pay ₹${CONSULTATION_FEE} via ${isRazorpayConfigured ? "Razorpay (cards, UPI, net banking)" : "UPI"} to confirm your appointment.` },
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
                    <label className="form-label" htmlFor="practiceArea">Area of Law *</label>
                    <select id="practiceArea" name="practiceArea" required value={form.practiceArea} onChange={handleChange} className="form-select" style={{ cursor: "pointer" }}>
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
                  {isRazorpayConfigured
                    ? "Secure payment via Razorpay · UPI, Net Banking, Cards accepted"
                    : "Payment via UPI · GPay, PhonePe, Paytm accepted"} · All information is strictly confidential
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
