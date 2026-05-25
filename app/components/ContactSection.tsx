"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [copyState, setCopyState] = useState<string | null>(null);

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

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyState(id);
      setTimeout(() => setCopyState(null), 2000);
    });
  };

  const contacts = [
    {
      id: "email-firm",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: "Firm Email — All Enquiries Welcome",
      value: "arthajurisfirm@gmail.com",
      href: "mailto:arthajurisfirm@gmail.com",
      copy: true,
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section"
      style={{
        background: "linear-gradient(180deg, var(--cream-dark) 0%, var(--cream) 100%)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div
            className="reveal section-tag"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease", display: "inline-flex" }}
          >
            Get In Touch
          </div>
          <h2
            className="reveal section-title"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
          >
            Contact{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>ArthajurisLaw</em>
          </h2>
          <p
            className="reveal section-subtitle"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.6s ease",
              margin: "0 auto",
            }}
          >
          Reach out to us at our firm email or contact any member of the team. We respond within 24 business hours.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "60px",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left — Contact Cards */}
          <div>
            {/* Email */}
            <div style={{ marginBottom: "32px" }}>
              <div
                className="reveal"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--text-light)",
                  marginBottom: "16px",
                  opacity: 0,
                  transform: "translateY(20px)",
                  transition: "all 0.6s ease",
                }}
              >
                Email
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {contacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="reveal"
                    style={{
                      opacity: 0,
                      transform: "translateY(20px)",
                      transition: "all 0.6s ease",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "16px 20px",
                        background: "var(--white)",
                        border: "1px solid var(--border-light)",
                        borderRadius: "4px",
                        gap: "12px",
                        boxShadow: "var(--shadow-sm)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "14px", flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            color: "var(--gold)",
                            display: "flex",
                            alignItems: "center",
                            flexShrink: 0,
                          }}
                        >
                          {contact.icon}
                        </div>
                        <div style={{ minWidth: 0 }}>
                          <div
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "0.7rem",
                              fontWeight: 600,
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                              color: "var(--text-light)",
                              marginBottom: "2px",
                            }}
                          >
                            {contact.label}
                          </div>
                          <a
                            href={contact.href}
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "0.875rem",
                              color: "var(--navy)",
                              textDecoration: "none",
                              fontWeight: 500,
                              display: "block",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {contact.value}
                          </a>
                        </div>
                      </div>
                      {contact.copy && (
                        <button
                          onClick={() => copyToClipboard(contact.value, contact.id)}
                          title="Copy to clipboard"
                          style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            color: copyState === contact.id ? "var(--gold)" : "var(--text-light)",
                            display: "flex",
                            alignItems: "center",
                            padding: "4px",
                            transition: "color 0.2s",
                            flexShrink: 0,
                          }}
                        >
                          {copyState === contact.id ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preferred contact note */}
            <div
              className="reveal"
              style={{
                padding: "20px 24px",
                background: "var(--navy)",
                borderRadius: "6px",
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.6s ease",
              }}
            >
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "10px" }}>
                ✦ How to Reach Us
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: 0 }}>
                For all enquiries, please write to us at <a href="mailto:arthajurisfirm@gmail.com" style={{ color: "var(--gold)", fontWeight: 600 }}>arthajurisfirm@gmail.com</a>. For urgent matters, you may also book a consultation directly — our team will respond within 24 business hours.
              </p>
            </div>

            {/* Location Image (Moved to left to balance layout) */}
            <div
              className="reveal"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.6s ease",
                position: "relative",
                width: "100%",
                aspectRatio: "16/9",
                height: "auto",
                borderRadius: "8px",
                overflow: "hidden",
                marginTop: "32px",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <Image
                src="/bombay_court_bg.png"
                alt="Bombay High Court Location"
                fill
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
          </div>

          {/* Right — Office & Hours */}
          <div>
            {/* Office Address */}
            <div
              className="reveal"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.6s ease",
                background: "var(--navy)",
                borderRadius: "8px",
                padding: "36px 32px",
                marginBottom: "24px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-20px",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  border: "1px solid rgba(201, 168, 76, 0.1)",
                }}
              />
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "16px",
                }}
              >
                ✦ Office Address
              </div>
              <div
                style={{
                  color: "var(--white)",
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                  marginBottom: "24px",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--gold)"
                  strokeWidth="1.5"
                  style={{ flexShrink: 0, marginTop: "2px" }}
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9375rem",
                      color: "var(--white)",
                      lineHeight: 1.7,
                      fontWeight: 500,
                    }}
                  >
                    Office No. 4/B, 4th Floor,<br />
                    Mahavir Chambers,<br />
                    1/5, Banaji Street, Fort,<br />
                    Mumbai – 400 001
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8rem",
                      color: "rgba(255,255,255,0.4)",
                      marginTop: "8px",
                    }}
                  >
                    Maharashtra, India
                  </div>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Banaji+Street+Fort+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "var(--gold)",
                  textDecoration: "none",
                  letterSpacing: "0.06em",
                  transition: "opacity 0.2s",
                }}
              >
                View on Maps
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            </div>

            {/* Office Hours */}
            <div
              className="reveal"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.6s ease",
                background: "var(--white)",
                borderRadius: "8px",
                padding: "32px",
                border: "1px solid var(--border-light)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "20px",
                }}
              >
                ✦ Office Hours
              </div>
              {[
                { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
                { day: "Saturday", time: "10:00 AM – 2:00 PM" },
                { day: "Sunday & Public Holidays", time: "By Appointment Only" },
              ].map((row) => (
                <div
                  key={row.day}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 0",
                    borderBottom: "1px solid var(--border-light)",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      color: "var(--text-mid)",
                    }}
                  >
                    {row.day}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--navy)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {row.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
