"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const team = [
  {
    id: "mayura-maru",
    name: "Adv. Mayura Maru",
    role: "Founder",
    enrolment: "Enrolment No. MAH/2976/2002",
    highCourt: "High Court O.S. Reg. No. 15412",
    experience: "25+ Years",
    education: [
      "LLB — Kishanchand Chhellaram College, Mumbai University (2002)",
      "BSc — Wilson College, Mumbai University (1998)",
    ],
    expertise: [
      "Corporate & Commercial Law",
      "Real Estate & Property Law",
      "Civil & Family Law",
      "Banking & Finance",
    ],
    bio: "Advocate Mayura Navnit Maru is a senior legal practitioner based in Mumbai, with over 25 years of independent practice before the Bombay High Court and various courts/tribunals across Pan India. Enrolled with the Bar Council of Maharashtra & Goa in 2002, she is proficient in English, Hindi, Gujarati, and Marathi.",
    practiceHighlights: [
      "Landmark PIL (PIL No. 138 of 2012) – Mayura Maru v. State of Maharashtra before the Bombay High Court, challenging unauthorized constructions in Navi Mumbai and Trans-Thane Creek. The case led to strict judicial directions enforcing a 'zero-tolerance' policy against illegal development, compelling authorities like CIDCO, NMMC, and MIDC to act against thousands of unauthorized structures.",
      "Advocacy for investor protection, including representations to SEBI on unregulated online investment platforms.",
      "Bombay High Court, Debts Recovery Tribunal (DRT), Family Courts, District Courts in Mumbai and Raigad."
    ],
    initials: "MM",
    image: "/new_mayura.jpg",
    hasDedicatedPage: true,
    dedicatedPageUrl: "/founder",
  },
  {
    id: "uzma-khan",
    name: "Adv. Uzma Khan",
    role: "Senior Associate",
    enrolment: "Bar Council Registered Advocate",
    highCourt: "LL.M. Environmental Law — Mumbai University (2025)",
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
      "Business Development & Client Management",
      "IGR & Property Registration",
      "Legal Compliance & Audits",
    ],
    bio: "Adv. Uzma Khan is the firm's Senior Associate, specialising in real estate law, banking documentation, and property due diligence. With extensive experience at Xpress Legal and AAN Legal & Associates, she has successfully led the preparation of retail title search reports, APF reports, and complex property due diligence for major financial institutions including Punjab National Bank, Bank of India, and CANFIN Homes. She is highly skilled in conducting advanced property due diligence, examining encumbrances, scrutinizing sale deeds, and managing mutation processes.",
    practiceHighlights: [
      "Led preparation of Retail Title Search Reports and APF Reports.",
      "Facilitated empanelment of major financial institutions for legal services.",
      "Extensive verification of 7/12 Extract, Property Card, and Village Form records.",
      "Conducted legal audits, IGR e-filing, and title chains analysis.",
      "Managed end-to-end client communication and business development for banking clients.",
    ],
    initials: "UK",
    image: "/uzma_v2.jpg",
    hasDedicatedPage: true,
    dedicatedPageUrl: "/uzma-khan",
  },
  {
    id: "pratap-temgire",
    name: "Adv. Pratap Temgire",
    role: "Associate",
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
    bio: "Adv. Pratap Temgire is a dynamic Associate with a strong academic foundation from Maharashtra National Law University (MNLU). He has significant hands-on experience representing clients before the Bombay High Court, DRT, DRAT, and district courts. With core expertise in banking litigation, SARFAESI proceedings, Section 138 NI Act matters, and corporate law, Pratap has a meticulous approach to drafting applications, defending counterclaims, and presenting evidence. He is also a celebrated national moot court champion with a passion for precise legal research and advocacy.",
    practiceHighlights: [
      "Drafting and arguing SARFAESI and RDB Act applications before DRT and DRAT.",
      "Handling high-volume Section 138 NI Act cases on behalf of banks and financial institutions.",
      "Extensive appearances in Bombay City Civil Court and Metropolitan Magistrate Court.",
      "Defending counter claims and securitization applications before DRT.",
      "Secured AIR 242 in CLAT PG 2024 and won multiple national moot court competitions.",
    ],
    initials: "PT",
    image: "/pratap_v2.jpg",
    hasDedicatedPage: true,
    dedicatedPageUrl: "/pratap-temgire",
  },
];

export default function PartnersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [photoPopup, setPhotoPopup] = useState<{ src: string; name: string; role: string } | null>(null);

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

  const selected = activeIdx !== null ? team[activeIdx] : null;

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
              Expert Lawyers
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
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>
                Legal Team
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
              A team of expert and experienced lawyers to help you with every aspect of your legal needs
              — bringing complementary expertise across all major areas of law in Maharashtra.
            </p>
          </div>

          {/* Team Cards */}
          <div className="grid-3" style={{ gap: "32px" }}>
            {team.map((member, idx) => (
              <div
                key={member.id}
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
                    border: member.role === "Founder"
                      ? "1px solid rgba(201, 168, 76, 0.35)"
                      : "1px solid var(--border-light)",
                    transition: "all 0.4s ease",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    flex: 1,
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-lg)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-8px)";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201, 168, 76, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-sm)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.borderColor = member.role === "Founder"
                      ? "rgba(201, 168, 76, 0.35)"
                      : "rgba(201, 168, 76, 0.1)";
                  }}
                  onClick={() => setActiveIdx(idx)}
                >
                  {/* Founder badge */}
                  {member.role === "Founder" && (
                    <div style={{
                      position: "absolute",
                      top: "14px",
                      right: "14px",
                      background: "var(--gold)",
                      color: "var(--navy)",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      padding: "3px 10px",
                      borderRadius: "2px",
                      zIndex: 2,
                    }}>
                      Founder
                    </div>
                  )}

                  {/* Card Header */}
                  <div
                    style={{
                      background: `linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)`,
                      padding: "36px 32px 28px",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
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
                    {/* Avatar with hover photo popup */}
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        border: member.role === "Founder"
                          ? "2px solid rgba(201, 168, 76, 0.7)"
                          : "2px solid rgba(201, 168, 76, 0.35)",
                        position: "relative",
                        marginBottom: "20px",
                        overflow: "hidden",
                        backgroundColor: "#111",
                        cursor: "zoom-in",
                        transition: "box-shadow 0.3s ease",
                      }}
                      title={`View photo of ${member.name}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setPhotoPopup({ src: member.image, name: member.name, role: member.role });
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 0 3px var(--gold)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                      }}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        style={{
                          objectFit: "cover",
                          objectPosition: "top center",
                          transition: "transform 0.5s ease",
                          filter: "contrast(1.06) brightness(0.96) saturate(1.12)",
                        }}
                        className="advocate-img"
                      />
                    </div>

                    <h3
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.375rem",
                        color: "var(--white)",
                        fontWeight: 700,
                        marginBottom: "6px",
                      }}
                    >
                      {member.name}
                    </h3>
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
                      {member.role}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div style={{ padding: "28px 32px", display: "flex", flexDirection: "column", flex: 1 }}>
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", marginBottom: "24px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
                        <span className="badge">{member.experience} Experience</span>
                      </div>

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
                          {member.expertise.slice(0, 4).map((exp) => (
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
                          {member.expertise.length > 4 && (
                            <span
                              style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: "0.75rem",
                                color: "var(--gold)",
                                padding: "4px 10px",
                              }}
                            >
                              +{member.expertise.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

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
                        {member.bio}
                      </p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveIdx(idx);
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
                        View Profile
                      </button>

                      {member.hasDedicatedPage && (
                        <Link
                          href={member.dedicatedPageUrl || "#"}
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            width: "100%",
                            padding: "12px",
                            background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)",
                            border: "none",
                            borderRadius: "2px",
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.8125rem",
                            fontWeight: 600,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "var(--navy)",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            textAlign: "center",
                            display: "block",
                            textDecoration: "none",
                          }}
                        >
                          Full Profile →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Detail */}
      {selected && (
        <div
          className="overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveIdx(null);
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
                onClick={() => setActiveIdx(null)}
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
                    border: "2px solid rgba(201, 168, 76, 0.5)",
                    position: "relative",
                    flexShrink: 0,
                    overflow: "hidden",
                    backgroundColor: "#111",
                  }}
                >
                  <Image
                    src={selected.image}
                    alt={selected.name}
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
                    {selected.name}
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
                    {selected.role} · Artha Juris Legal Consultancy
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8rem",
                      color: "rgba(255,255,255,0.45)",
                      marginTop: "6px",
                    }}
                  >
                    {selected.enrolment}
                  </div>
                </div>
              </div>
            </div>

            {/* Scrollable Body */}
            <div style={{ overflow: "auto", padding: "36px 40px" }}>
              {/* About */}
              <div style={{ marginBottom: "28px" }}>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.125rem", color: "var(--navy)", marginBottom: "12px" }}>
                  Professional Profile
                </h4>
                <div style={{ width: "32px", height: "2px", background: "var(--gold)", marginBottom: "16px" }} />
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "var(--text-mid)", lineHeight: 1.8 }}>
                  {selected.bio}
                </p>
              </div>

              {/* Education */}
              <div style={{ marginBottom: "28px" }}>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.125rem", color: "var(--navy)", marginBottom: "12px" }}>
                  Education
                </h4>
                <div style={{ width: "32px", height: "2px", background: "var(--gold)", marginBottom: "16px" }} />
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {selected.education.map((edu) => (
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
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.125rem", color: "var(--navy)", marginBottom: "12px" }}>
                  Areas of Expertise
                </h4>
                <div style={{ width: "32px", height: "2px", background: "var(--gold)", marginBottom: "16px" }} />
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {selected.expertise.map((exp) => (
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
              <div style={{ marginBottom: selected.hasDedicatedPage ? "28px" : "0" }}>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.125rem", color: "var(--navy)", marginBottom: "12px" }}>
                  Court Presence & Highlights
                </h4>
                <div style={{ width: "32px", height: "2px", background: "var(--gold)", marginBottom: "16px" }} />
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {selected.practiceHighlights.map((h) => (
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
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--gold)", display: "inline-block", flexShrink: 0 }} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dedicated Page CTA for Mayura */}
              {selected.hasDedicatedPage && (
                <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: "24px" }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "var(--text-mid)", marginBottom: "16px" }}>
                    Read the complete professional profile of Adv. Mayura Maru, including her career timeline and detailed areas of practice.
                  </p>
                  <Link
                    href={selected.dedicatedPageUrl || "#"}
                    onClick={() => setActiveIdx(null)}
                    className="btn-primary"
                    style={{ fontSize: "0.8125rem" }}
                  >
                    <span>View Full Profile</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Full Photo Lightbox */}
      {photoPopup && (
        <div
          onClick={() => setPhotoPopup(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(5, 10, 22, 0.9)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            animation: "fadeInOverlay 0.25s ease",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              background: "var(--navy)",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(201,168,76,0.3)",
              boxShadow: "0 40px 100px rgba(0,0,0,0.7)",
              maxWidth: "420px",
              width: "100%",
              animation: "scaleInPopup 0.3s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setPhotoPopup(null)}
              style={{
                position: "absolute",
                top: "14px",
                right: "14px",
                zIndex: 10,
                background: "rgba(5,10,22,0.6)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#fff",
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                cursor: "pointer",
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ✕
            </button>

            {/* Portrait */}
            <div style={{ position: "relative", width: "100%", paddingTop: "120%" }}>
              <Image
                src={photoPopup.src}
                alt={photoPopup.name}
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "top center",
                  filter: "contrast(1.06) brightness(0.96) saturate(1.12)",
                }}
              />
            </div>

            {/* Name bar */}
            <div style={{
              padding: "20px 24px",
              background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)",
              borderTop: "1px solid rgba(201,168,76,0.2)",
            }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", color: "#fff", fontWeight: 700 }}>
                {photoPopup.name}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginTop: "4px" }}>
                {photoPopup.role} · Artha Juris
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .advocate-img:hover { transform: scale(1.08); }
        @keyframes fadeInOverlay { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleInPopup { from { opacity: 0; transform: scale(0.88); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </>
  );
}
