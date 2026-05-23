"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const partners = [
  {
    id: "mayura-maru",
    name: "Adv. Mayura Maru",
    role: "Senior Partner & Founder",
    email: "advmarumayura@gmail.com",
    phone: "+91 9930883358 / 8369513026",
    enrolment: "Enrolment No. MAH/2976/2002",
    highCourt: "High Court O.S. Reg. No. 15412",
    experience: "22+ Years",
    education: [
      "Bachelor of Science (BSc) — Wilson College, Mumbai University (1998)",
      "Bachelor of Law (LLB) — Kishanchand Chhellaram College, Mumbai University (2002)",
    ],
    expertise: [
      "Civil Litigation",
      "Corporate & Business Law",
      "Property & Real Estate Law",
      "Banking & DRT/DRAT",
      "Criminal Law",
      "Family Law",
    ],
    bio: "With over 22 years of practice at the Bombay High Court and courts across Maharashtra — including Mumbai, Navi Mumbai, Panvel, Thane, Alibaug, and Khopoli — Adv. Mayura Maru brings unparalleled courtroom experience to ArthajurisLaw. She has represented corporate and individual clients in complex civil, criminal, banking, and family law matters. Founder of Maru & Associates, she has proven expertise in NCLT proceedings, insolvency code filings, RERA, SRA, redevelopment projects, and all aspects of property law.",
    practiceHighlights: [
      "Bombay High Court (Appellate & Original Side)",
      "NCLT — Insolvency & Winding Up",
      "DRT & DRAT Proceedings",
      "RERA, CIDCO, MIDC, SRA matters",
      "Criminal, Consumer & Civil Courts",
    ],
    color: "#8B6914",
    initials: "MM",
    image: "/mayura.png",
  },
  {
    id: "pratap-temgire",
    name: "Adv. Pratap Temgire",
    role: "Partner",
    email: "prataptemgire@gmail.com",
    phone: "+91 88282 51141",
    enrolment: "Bar Council of Maharashtra & Goa (2022)",
    highCourt: "Bar Council of India (2023) | CLAT PG AIR 242",
    experience: "3+ Years",
    education: [
      "LL.M. — Maharashtra National Law University (MNLU), 2025 (72.01%)",
      "BLS LLB — University of Mumbai, 2022 (63.75%)",
      "Certificate Course in IPR",
    ],
    expertise: [
      "Corporate & Commercial Law",
      "Banking & DRT (SARFAESI, RDB Act)",
      "Negotiable Instruments Act (Sec. 138)",
      "Civil & Criminal Litigation",
      "Legal Research & Drafting",
      "Intellectual Property Rights",
    ],
    bio: "Adv. Pratap Temgire is a dynamic young advocate with a strong academic foundation from Maharashtra National Law University (MNLU) and hands-on experience at leading Mumbai law firms. He has appeared before the Bombay High Court, DRT, DRAT, and various district courts. His work at AKS Legal Consultant and Shamim & Co. gave him deep expertise in banking litigation, SARFAESI proceedings, and NI Act matters. A national moot court champion and invited judge at prestigious competitions.",
    practiceHighlights: [
      "Bombay High Court (Writ & Civil Appeals)",
      "Debt Recovery Tribunal (DRT & DRAT)",
      "SARFAESI & Banking Recovery",
      "Section 138 NI Act",
      "Metropolitan Magistrate & Session Courts",
    ],
    color: "#1a4a6e",
    initials: "PT",
    image: "/pratap.png",
  },
  {
    id: "uzma-khan",
    name: "Adv. Uzma Khan",
    role: "Partner",
    email: "uzma2163@gmail.com",
    phone: "+91 8291244249",
    enrolment: "Bar Council Registered Advocate",
    highCourt: "LL.M. Environmental Law — Mumbai University",
    experience: "4+ Years",
    education: [
      "LL.M. in Environmental Law — Mumbai University (2025)",
      "Bachelor of Education (B.Ed.) — Aligarh University (2023–2024)",
      "BLS LLB — Dr. D.Y. Patil College of Law, Navi Mumbai (2021)",
      "Diploma in Cyber Law — Dr. D.Y. Patil University (2017)",
    ],
    expertise: [
      "Real Estate & Property Law",
      "Title Search & Due Diligence",
      "Banking Legal Documentation",
      "Environmental Law",
      "IGR & Property Registration",
      "Legal Compliance & Audits",
    ],
    bio: "Adv. Uzma Khan specializes in real estate law, banking legal processes, and property documentation. As Senior Associate at Xpress Legal (Advocates & Legal Consultants), she leads preparation of title search reports, APF reports for banks, and complex property due diligence. She has facilitated empanelment with major financial institutions including CANFIN Homes Finance and Punjab National Bank. Her additional qualifications in Cyber Law, Tally ERP, and education bring a multidimensional perspective to client service.",
    practiceHighlights: [
      "Title Search & APF Reports",
      "RERA & Property Documentation",
      "Bank Empanelment & Loan Due Diligence",
      "IGR — E-filing, CTC, Property Searches",
      "Environmental & Cyber Law",
    ],
    color: "#2d5a27",
    initials: "UK",
    image: "/uzma.png",
  },
];

export default function PartnersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activePartner, setActivePartner] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = "1";
                (el as HTMLElement).style.transform = "translateY(0)";
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const selectedPartner = activePartner !== null ? partners[activePartner] : null;

  return (
    <>
      <section
        id="partners"
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
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.6s ease",
                display: "inline-flex",
              }}
            >
              Our Partners
            </div>
            <h2
              className="reveal section-title"
              style={{
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.6s ease",
              }}
            >
              Meet the{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--gold)",
                }}
              >
                Founding Partners
              </em>
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
              Three experienced advocates united by a shared commitment to justice,
              bringing complementary expertise across all areas of law.
            </p>
          </div>

          {/* Partner Cards */}
          <div className="grid-3" style={{ gap: "32px" }}>
            {partners.map((partner, idx) => (
              <div
                key={partner.id}
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
                <div
                  style={{
                    background: "var(--white)",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "var(--shadow-sm)",
                    border: "1px solid var(--border-light)",
                    transition: "all 0.4s ease",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    flex: 1,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-lg)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-8px)";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201, 168, 76, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-sm)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201, 168, 76, 0.1)";
                  }}
                  onClick={() => setActivePartner(idx)}
                >
                  {/* Card Header */}
                  <div
                    style={{
                      background: `linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)`,
                      padding: "36px 32px 28px",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Background pattern */}
                    <div
                      style={{
                        position: "absolute",
                        top: "-40px",
                        right: "-40px",
                        width: "120px",
                        height: "120px",
                        borderRadius: "50%",
                        border: "1px solid rgba(201, 168, 76, 0.15)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: "-20px",
                        left: "20px",
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        background: "rgba(201, 168, 76, 0.04)",
                      }}
                    />

                    {/* Avatar */}
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        border: "2px solid rgba(201, 168, 76, 0.4)",
                        position: "relative",
                        marginBottom: "20px",
                        overflow: "hidden",
                        backgroundColor: "#111",
                      }}
                    >
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>

                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.375rem",
                        color: "var(--white)",
                        fontWeight: 700,
                        marginBottom: "6px",
                        position: "relative",
                      }}
                    >
                      {partner.name}
                    </h3>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--gold)",
                        position: "relative",
                      }}
                    >
                      {partner.role}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: "28px 32px", display: "flex", flexDirection: "column", flex: 1 }}>
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", marginBottom: "24px" }}>
                      {/* Experience Badge */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          marginBottom: "20px",
                        }}
                      >
                        <span className="badge">{partner.experience} Experience</span>
                      </div>

                      {/* Key expertise */}
                      <div style={{ marginBottom: "24px" }}>
                        <div
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            color: "var(--text-light)",
                            marginBottom: "12px",
                          }}
                        >
                          Key Practice Areas
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                          {partner.expertise.slice(0, 4).map((exp) => (
                            <span
                              key={exp}
                              style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: "0.75rem",
                                color: "var(--text-mid)",
                                background: "var(--cream)",
                                padding: "4px 10px",
                                borderRadius: "2px",
                                border: "1px solid var(--border-light)",
                              }}
                            >
                              {exp}
                            </span>
                          ))}
                          {partner.expertise.length > 4 && (
                            <span
                              style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: "0.75rem",
                                color: "var(--gold)",
                                padding: "4px 10px",
                              }}
                            >
                              +{partner.expertise.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Short Bio */}
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.875rem",
                          color: "var(--text-mid)",
                          lineHeight: 1.7,
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {partner.bio}
                      </p>
                    </div>

                    {/* View Profile Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePartner(idx);
                      }}
                      style={{
                        width: "100%",
                        padding: "12px",
                        background: "transparent",
                        border: "1px solid var(--border)",
                        borderRadius: "2px",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--navy)",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = "var(--navy)";
                        (e.currentTarget as HTMLButtonElement).style.color = "var(--gold)";
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--navy)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                        (e.currentTarget as HTMLButtonElement).style.color = "var(--navy)";
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
                      }}
                    >
                      View Full Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Detail Popup */}
      {selectedPartner && (
        <div
          className="overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActivePartner(null);
          }}
        >
          <div
            className="popup"
            style={{
              maxWidth: "700px",
              maxHeight: "90vh",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Header */}
            <div
              style={{
                background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)",
                padding: "36px 40px 28px",
                flexShrink: 0,
                position: "relative",
              }}
            >
              <button
                onClick={() => setActivePartner(null)}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  background: "rgba(255,255,255,0.08)",
                  border: "none",
                  color: "var(--white)",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.9rem",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.18)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)"; }}
              >
                ✕
              </button>

              <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    border: "2px solid rgba(201, 168, 76, 0.4)",
                    position: "relative",
                    flexShrink: 0,
                    overflow: "hidden",
                    backgroundColor: "#111",
                  }}
                >
                  <Image
                    src={selectedPartner.image}
                    alt={selectedPartner.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h2
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.625rem",
                      color: "var(--white)",
                      fontWeight: 700,
                      marginBottom: "4px",
                    }}
                  >
                    {selectedPartner.name}
                  </h2>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                    }}
                  >
                    {selectedPartner.role}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8rem",
                      color: "rgba(255,255,255,0.5)",
                      marginTop: "6px",
                    }}
                  >
                    {selectedPartner.enrolment}
                  </div>
                </div>
              </div>
            </div>

            {/* Scrollable Body */}
            <div style={{ overflow: "auto", padding: "36px 40px" }}>
              {/* Contact */}
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  flexWrap: "wrap",
                  marginBottom: "28px",
                }}
              >
                <a
                  href={`mailto:${selectedPartner.email}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    color: "var(--navy)",
                    textDecoration: "none",
                    padding: "8px 16px",
                    background: "var(--cream)",
                    borderRadius: "2px",
                    border: "1px solid var(--border-light)",
                    transition: "all 0.2s",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  {selectedPartner.email}
                </a>
                <a
                  href={`tel:${selectedPartner.phone.split("/")[0].trim()}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    color: "var(--navy)",
                    textDecoration: "none",
                    padding: "8px 16px",
                    background: "var(--cream)",
                    borderRadius: "2px",
                    border: "1px solid var(--border-light)",
                    transition: "all 0.2s",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.22 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {selectedPartner.phone}
                </a>
              </div>

              {/* About */}
              <div style={{ marginBottom: "28px" }}>
                <h4
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.125rem",
                    color: "var(--navy)",
                    marginBottom: "12px",
                  }}
                >
                  About
                </h4>
                <div style={{ width: "32px", height: "2px", background: "var(--gold)", marginBottom: "16px" }} />
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9375rem",
                    color: "var(--text-mid)",
                    lineHeight: 1.8,
                  }}
                >
                  {selectedPartner.bio}
                </p>
              </div>

              {/* Education */}
              <div style={{ marginBottom: "28px" }}>
                <h4
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.125rem",
                    color: "var(--navy)",
                    marginBottom: "12px",
                  }}
                >
                  Education
                </h4>
                <div style={{ width: "32px", height: "2px", background: "var(--gold)", marginBottom: "16px" }} />
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {selectedPartner.education.map((edu) => (
                    <li
                      key={edu}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.875rem",
                        color: "var(--text-mid)",
                        padding: "8px 0",
                        borderBottom: "1px solid var(--border-light)",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span style={{ color: "var(--gold)", fontSize: "0.5rem" }}>◆</span>
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expertise */}
              <div style={{ marginBottom: "28px" }}>
                <h4
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.125rem",
                    color: "var(--navy)",
                    marginBottom: "12px",
                  }}
                >
                  Areas of Expertise
                </h4>
                <div style={{ width: "32px", height: "2px", background: "var(--gold)", marginBottom: "16px" }} />
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {selectedPartner.expertise.map((exp) => (
                    <span
                      key={exp}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.8125rem",
                        color: "var(--navy)",
                        background: "rgba(201, 168, 76, 0.08)",
                        border: "1px solid rgba(201, 168, 76, 0.2)",
                        padding: "6px 14px",
                        borderRadius: "2px",
                      }}
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Court Presence */}
              <div>
                <h4
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.125rem",
                    color: "var(--navy)",
                    marginBottom: "12px",
                  }}
                >
                  Court Presence & Highlights
                </h4>
                <div style={{ width: "32px", height: "2px", background: "var(--gold)", marginBottom: "16px" }} />
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {selectedPartner.practiceHighlights.map((h) => (
                    <li
                      key={h}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.875rem",
                        color: "var(--text-mid)",
                        padding: "6px 0",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
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
            </div>
          </div>
        </div>
      )}
    </>
  );
}
