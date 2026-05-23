"use client";
import { useEffect, useRef, useState } from "react";

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
  preferredDate: string;
  preferredTime: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

export default function BookingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    practiceArea: "",
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

  const handleMailtoFallback = (currentForm = form) => {
    const firmEmail = process.env.NEXT_PUBLIC_FIRM_EMAIL || "hiripvt@gmail.com";
    const subject = encodeURIComponent(`Consultation Booking Request - ${currentForm.fullName}`);
    
    const formattedDate = currentForm.preferredDate ? new Date(currentForm.preferredDate).toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }) : "";

    const body = encodeURIComponent(
      `Dear Arthajuris Team,\n\n` +
      `I would like to schedule a consultation with the following details:\n\n` +
      `CLIENT DETAILS:\n` +
      `- Full Name: ${currentForm.fullName}\n` +
      `- Email Address: ${currentForm.email}\n` +
      `- Phone Number: ${currentForm.phone}\n\n` +
      `APPOINTMENT PREFERENCES:\n` +
      `- Area of Law: ${currentForm.practiceArea}\n` +
      `- Preferred Date: ${formattedDate} (${currentForm.preferredDate})\n` +
      `- Preferred Time Slot: ${currentForm.preferredTime}\n\n` +
      `MATTER DESCRIPTION:\n` +
      `${currentForm.message || "No description provided."}\n\n` +
      `Please let me know if this slot is available or suggest alternative timings.\n\n` +
      `Best regards,\n` +
      `${currentForm.fullName}`
    );
    
    window.location.href = `mailto:${firmEmail}?subject=${subject}&body=${body}`;
    setStatus("success");
    setForm({
      fullName: "",
      email: "",
      phone: "",
      practiceArea: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setForm({
        fullName: "",
        email: "",
        phone: "",
        practiceArea: "",
        preferredDate: "",
        preferredTime: "",
        message: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send request.");
    }
  };

  // Min date = today
  const today = new Date().toISOString().split("T")[0];

  return (
    <section
      id="booking"
      ref={sectionRef}
      className="section"
      style={{ background: "var(--cream)" }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.6fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="booking-grid"
        >
          {/* Left — Info */}
          <div>
            <div
              className="reveal section-tag"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
            >
              Book a Consultation
            </div>
            <h2
              className="reveal section-title"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
            >
              Schedule Your{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
                Legal Consultation
              </em>
            </h2>
            <div
              className="reveal gold-divider"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
            />
            <p
              className="reveal"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                color: "var(--text-mid)",
                lineHeight: 1.8,
                marginBottom: "36px",
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.6s ease",
              }}
            >
              Fill in the form and our team will confirm your appointment via email within
              24 working hours. All consultations are confidential.
            </p>

            {/* Process Steps */}
            <div
              className="reveal"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.6s ease",
              }}
            >
              {[
                {
                  step: "01",
                  title: "Submit Request",
                  desc: "Fill out your details and preferred timing.",
                },
                {
                  step: "02",
                  title: "Confirmation Email",
                  desc: "We send you a confirmation within 24 hours.",
                },
                {
                  step: "03",
                  title: "Your Consultation",
                  desc: "Meet with our expert advocate at your scheduled time.",
                },
              ].map((item, idx) => (
                <div
                  key={item.step}
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "flex-start",
                    marginBottom: idx < 2 ? "28px" : "0",
                    position: "relative",
                  }}
                >
                  {/* Connector line */}
                  {idx < 2 && (
                    <div
                      style={{
                        position: "absolute",
                        left: "19px",
                        top: "42px",
                        width: "2px",
                        height: "calc(100% + 4px)",
                        background: "linear-gradient(180deg, var(--gold), transparent)",
                        opacity: 0.3,
                      }}
                    />
                  )}

                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      border: "2px solid var(--gold)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--gold)",
                      flexShrink: 0,
                      background: "rgba(201, 168, 76, 0.05)",
                      position: "relative",
                    }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        color: "var(--navy)",
                        marginBottom: "4px",
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.875rem",
                        color: "var(--text-mid)",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Notice */}
            <div
              className="reveal"
              style={{
                marginTop: "40px",
                padding: "20px 24px",
                background: "rgba(201, 168, 76, 0.06)",
                border: "1px solid rgba(201, 168, 76, 0.2)",
                borderRadius: "4px",
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.6s ease",
              }}
            >
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "var(--gold-dark)",
                  marginBottom: "6px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                ✦ Confidentiality Assured
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8125rem",
                  color: "var(--text-mid)",
                  lineHeight: 1.6,
                }}
              >
                All information shared is strictly confidential and protected by attorney-client privilege.
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div
            className="reveal"
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "all 0.7s ease",
            }}
          >
            {status === "success" ? (
              <div
                style={{
                  background: "var(--white)",
                  borderRadius: "8px",
                  padding: "60px 48px",
                  textAlign: "center",
                  boxShadow: "var(--shadow-md)",
                  border: "1px solid var(--border-light)",
                }}
              >
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    background: "rgba(201, 168, 76, 0.1)",
                    border: "2px solid var(--gold)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 28px",
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.75rem",
                    color: "var(--navy)",
                    marginBottom: "16px",
                  }}
                >
                  Request Received
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem",
                    color: "var(--text-mid)",
                    lineHeight: 1.7,
                    marginBottom: "32px",
                  }}
                >
                  Thank you for reaching out to ArthajurisLaw. We have received your consultation
                  request and will confirm your appointment via email within 24 working hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-outline"
                  style={{ fontSize: "0.8125rem" }}
                >
                  <span>Submit Another Request</span>
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: "var(--white)",
                  borderRadius: "8px",
                  padding: "48px",
                  boxShadow: "var(--shadow-md)",
                  border: "1px solid var(--border-light)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.25rem",
                    color: "var(--navy)",
                    marginBottom: "8px",
                    fontWeight: 600,
                  }}
                >
                  Consultation Request Form
                </div>
                <div style={{ width: "32px", height: "2px", background: "var(--gold)", marginBottom: "32px" }} />

                {/* Row 1 */}
                <div className="grid-2" style={{ gap: "16px" }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullName">Full Name *</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid-2" style={{ gap: "16px" }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="practiceArea">Area of Law *</label>
                    <select
                      id="practiceArea"
                      name="practiceArea"
                      required
                      value={form.practiceArea}
                      onChange={handleChange}
                      className="form-select"
                      style={{ cursor: "pointer" }}
                    >
                      <option value="">Select an area</option>
                      {practiceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid-2" style={{ gap: "16px" }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="preferredDate">Preferred Date *</label>
                    <input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      required
                      min={today}
                      value={form.preferredDate}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="preferredTime">Preferred Time *</label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      required
                      value={form.preferredTime}
                      onChange={handleChange}
                      className="form-select"
                      style={{ cursor: "pointer" }}
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Brief Description of Your Matter</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your legal matter (optional but helpful for us to prepare)"
                    className="form-textarea"
                    style={{ minHeight: "100px" }}
                  />
                </div>

                {/* Error */}
                {status === "error" && (
                  <div
                    style={{
                      padding: "20px",
                      background: "rgba(201, 168, 76, 0.05)",
                      border: "1px solid rgba(201, 168, 76, 0.3)",
                      borderRadius: "4px",
                      fontFamily: "'Inter', sans-serif",
                      marginBottom: "20px",
                    }}
                  >
                    <div style={{ fontWeight: 600, color: "#c0392b", marginBottom: "8px" }}>
                      ⚠ Email Server Unavailable
                    </div>
                    <p style={{ fontSize: "0.8125rem", color: "var(--text-mid)", lineHeight: 1.5, marginBottom: "14px" }}>
                      {errorMsg || "Failed to send request."} You can send this request instantly via your own email client (e.g. Gmail/Outlook) without configuring any passwords.
                    </p>
                    <button
                      type="button"
                      onClick={() => handleMailtoFallback()}
                      className="btn-primary"
                      style={{
                        width: "100%",
                        justifyContent: "center",
                        fontSize: "0.8125rem",
                        padding: "10px 16px",
                        cursor: "pointer",
                      }}
                    >
                      <span>Send via Email Client</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: "6px" }}>
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </button>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full"
                  style={{
                    justifyContent: "center",
                    fontSize: "0.875rem",
                    opacity: status === "loading" ? 0.75 : 1,
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                  }}
                >
                  {status === "loading" ? (
                    <>
                      <span className="spinner" style={{ borderTopColor: "var(--navy)" }} />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Consultation Request</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    color: "var(--text-light)",
                    textAlign: "center",
                    marginTop: "16px",
                    lineHeight: 1.6,
                  }}
                >
                  By submitting, you agree that all information shared is confidential.
                  We respond within 24 business hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .booking-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
        @media (max-width: 600px) {
          form {
            padding: 28px 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
