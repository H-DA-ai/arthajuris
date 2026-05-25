"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const practiceAreas = [
  {
    slug: "corporate-commercial-law",
    title: "Corporate & Commercial Law",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    description:
      "Comprehensive corporate advisory covering business contracts, arbitration, NCLT proceedings, winding up petitions, and insolvency code filings under the IBC.",
    highlights: [
      "Business Contracts & Agreements",
      "NCLT — Insolvency & Winding Up",
      "Arbitration & Dispute Resolution",
      "Corporate Restructuring",
    ],
    lead: "Adv. Mayura Maru",
  },
  {
    slug: "property-real-estate-law",
    title: "Property & Real Estate Law",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    description:
      "Full-spectrum real estate legal services including title searches, RERA matters, SRA, CIDCO, MIDC, redevelopment projects, and comprehensive property transaction documentation.",
    highlights: [
      "Title Search & Due Diligence",
      "RERA, SRA & CIDCO Matters",
      "Property Documentation & Contracts",
      "Redevelopment Projects",
    ],
    lead: "Adv. Uzma Khan & Adv. Mayura Maru",
  },
  {
    slug: "banking-debt-recovery",
    title: "Banking & Debt Recovery",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    description:
      "Expert representation before Debt Recovery Tribunals (DRT & DRAT), SARFAESI proceedings, RDB Act applications, Section 138 NI Act, and banking recovery matters.",
    highlights: [
      "DRT & DRAT Proceedings",
      "SARFAESI & RDB Act",
      "Section 138 NI Act",
      "Loan Recovery & Banking",
    ],
    lead: "Adv. Pratap Tengire & Adv. Mayura Maru",
  },
  {
    slug: "civil-litigation",
    title: "Civil Litigation",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    description:
      "Handling civil suits, consumer forum cases, motor accident claims, medical negligence, defamation, recovery of money, and testamentary matters across courts in Maharashtra.",
    highlights: [
      "Civil Suits & Money Recovery",
      "Consumer Forum Cases",
      "Motor Accident Claims",
      "Medical Negligence & Defamation",
    ],
    lead: "Adv. Mayura Maru",
  },
  {
    slug: "family-criminal-law",
    title: "Family & Criminal Law",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    description:
      "Compassionate and strategically sound representation in family law matters including divorce, domestic violence, as well as bail applications, criminal trials, and appellate proceedings.",
    highlights: [
      "Divorce & Matrimonial Disputes",
      "Domestic Violence (DV Act)",
      "Bail Applications & Criminal Trials",
      "Criminal Appeals",
    ],
    lead: "Adv. Mayura Maru & Adv. Pratap Tengire",
  },
  {
    slug: "legal-documentation-compliance",
    title: "Legal Documentation & Compliance",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    description:
      "Precise legal drafting, IGR-related procedures, APF reports, title certificates, legal audit reports, loan documentation review, and environmental & cyber law compliance advisory.",
    highlights: [
      "IGR Searches & E-filing",
      "APF & Title Reports for Banks",
      "Legal Opinions & Contract Drafting",
      "Environmental & Cyber Law",
    ],
    lead: "Adv. Uzma Khan",
  },
];

export default function PracticeSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="practice"
      ref={sectionRef}
      className="section"
      style={{
        background: "linear-gradient(180deg, var(--navy) 0%, var(--navy-mid) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "400px", height: "400px", borderRadius: "50%", border: "1px solid rgba(201, 168, 76, 0.05)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-50px", left: "-50px", width: "250px", height: "250px", borderRadius: "50%", border: "1px solid rgba(201, 168, 76, 0.06)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div
            className="reveal section-tag"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease", display: "inline-flex" }}
          >
            What We Do
          </div>
          <h2
            className="reveal section-title light"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
          >
            Practice{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Areas</em>
          </h2>
          <p
            className="reveal section-subtitle light"
            style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease", margin: "0 auto", maxWidth: "560px" }}
          >
            Click on any practice area to learn more about what it covers, the services we provide, and how we can assist you.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid-3" style={{ gap: "24px" }}>
          {practiceAreas.map((area) => (
            <div
              key={area.title}
              className="reveal"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: "all 0.7s ease",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Link
                href={`/expertise/${area.slug}`}
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(201, 168, 76, 0.12)",
                  borderRadius: "6px",
                  padding: "36px 32px",
                  height: "100%",
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201, 168, 76, 0.35)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-6px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.04)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201, 168, 76, 0.12)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "4px",
                      background: "rgba(201, 168, 76, 0.08)",
                      border: "1px solid rgba(201, 168, 76, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--gold)",
                      marginBottom: "24px",
                    }}
                  >
                    {area.icon}
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.25rem",
                      color: "var(--white)",
                      fontWeight: 600,
                      marginBottom: "12px",
                    }}
                  >
                    {area.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: 1.7,
                      marginBottom: "20px",
                    }}
                  >
                    {area.description}
                  </p>

                  <ul style={{ listStyle: "none", padding: 0, marginBottom: "24px" }}>
                    {area.highlights.map((h) => (
                      <li
                        key={h}
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.8125rem",
                          color: "rgba(255,255,255,0.6)",
                          padding: "5px 0",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <span
                          style={{
                            width: "4px",
                            height: "4px",
                            borderRadius: "50%",
                            background: "var(--gold)",
                            display: "inline-block",
                            flexShrink: 0,
                          }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderTop: "1px solid rgba(201, 168, 76, 0.1)",
                    paddingTop: "16px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(201, 168, 76, 0.6)",
                    }}
                  >
                    {area.lead}
                  </div>
                  <div style={{ color: "var(--gold)", fontSize: "0.8rem", fontWeight: 600 }}>
                    Learn More →
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: "60px" }}>
          <p
            className="reveal"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.55)",
              marginBottom: "24px",
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.6s ease",
            }}
          >
            Not sure which area applies to your matter? We&apos;re here to guide you.
          </p>
          <button
            className="reveal btn-primary"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.6s ease",
              fontSize: "0.8125rem",
            }}
            onClick={() => {
              document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>Schedule a Consultation</span>
          </button>
        </div>
      </div>
    </section>
  );
}
