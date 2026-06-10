import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Adv. Mayura Maru — Founder | Artha Juris Legal Consultancy",
  description:
    "Adv. Mayura Navnit Maru is the Founder of Artha Juris Legal Consultancy with over 25 years of practice at the Bombay High Court and courts across Maharashtra. Known for landmark PIL No. 138 of 2012 on illegal constructions in Navi Mumbai.",
};

const timeline = [
  {
    role: "Freelance Lawyer",
    firm: "Self Employed",
    period: "2007 – Present",
    desc: "Independent legal practice handling an array of litigation and non-litigation matters for corporate and individual clients before the Bombay High Court and various courts/tribunals across Pan India."
  },
  {
    role: "Associate Advocate",
    firm: "D. M. Harish & Co. Advocates",
    period: "2005 – 2007",
    desc: "Assisted and represented clients in comprehensive civil and corporate litigation, focusing on high-stakes business disputes and regulatory compliance."
  },
  {
    role: "Associate Advocate",
    firm: "Little & Co. Advocates and Solicitors",
    period: "2003 – 2005",
    desc: "Drafting, legal research, and representation in extensive corporate and civil cases at one of India's oldest and most prestigious law firms."
  },
  {
    role: "Legal Assistant",
    firm: "Mahimtura and Co. Advocates and Solicitors",
    period: "2002 – 2003",
    desc: "Supported senior advocates in property law, title searches, conveyancing, and dispute resolution mechanisms."
  },
  {
    role: "Legal Assistant",
    firm: "Kantawala & Co. Advocates and Solicitors",
    period: "2001 – 2002",
    desc: "Assisted in civil litigation, evidence preparation, documentation, and court filings."
  }
];

const practiceDetails = [
  {
    area: "Corporate & Business Law",
    icon: "🏗️",
    points: [
      "Corporate matters, business contracts, and commercial advisory",
      "Arbitration and alternative dispute resolution",
      "Winding up petitions before NCLT",
      "Drafting and filing proceedings under the Insolvency and Bankruptcy Code (IBC)",
      "Arguing NCLT matters and obtaining orders",
      "Debt Recovery Tribunal (DRT) and DRAT proceedings",
      "Corporate governance compliance",
      "Advocacy for investor protection, including representations to SEBI on unregulated online investment platforms.",
    ],
  },
  {
    area: "Real Estate & Property Law",
    icon: "🏨️",
    points: [
      "Title search reports and comprehensive property reviews",
      "All aspects of residential property transfers, RERA, CIDCO, MIDC matters",
      "Redevelopment projects, SRA, MLRC, Tenancy Act, and Land Laws",
      "Contract preparation, preparing and closing of documents and Statements",
      "Real estate and property cases for Trial",
      "Create and modify commercial lease, access agreements",
      "Review related loan documents related to financial agreements",
      "Maharashtra Ownership Flats Act (MOFA) and MRTP Act disputes",
    ],
  },
  {
    area: "Civil Litigation",
    icon: "⚖️",
    points: [
      "Consumer Forum cases and Banking litigation",
      "Recovery of money suits",
      "Motor accident claims",
      "Medical negligence cases",
      "Defamation suits and general Civil Suits",
      "Testamentary matters (Probate, Letters of Administration, Succession)",
      "Miscellaneous civil applications across courts in Maharashtra",
    ],
  },
  {
    area: "Family Law",
    icon: "👨‍👩‍👧",
    points: [
      "Divorce and matrimonial disputes",
      "Domestic violence matters",
      "Child custody and guardianship",
      "Maintenance and alimony proceedings",
      "Property-related family disputes",
      "Family court litigation across Mumbai & Maharashtra",
    ],
  },
  {
    area: "Banking & Finance",
    icon: "🏦",
    points: [
      "Debt recovery and banking tribunal matters",
      "SARFAESI Act proceedings",
      "NPA resolution and enforcement",
      "Loan documentation review and vetting",
      "Financial disputes and recovery suits before DRT, Mumbai",
    ],
  },
  {
    area: "Public Interest Litigation",
    icon: "📌",
    points: [
      "Landmark PIL No. 138 of 2012 — Bombay High Court",
      "Challenged illegal/unauthorized constructions in Navi Mumbai and Trans-Thane Creek industrial areas",
      "Resulted in bench-led orders by Justice A.S. Oka",
      "Forced CIDCO, NMMC, and MIDC to identify tens of thousands of illegal structures",
      "Established \"zero-tolerance\" policy toward unauthorized development",
      "Landmark precedent on MRTP Act and development control regulations",
    ],
  },
];

const expertise = [
  "Handling Complex Negotiations",
  "Litigation Strategy & Management",
  "Client Advocacy & Trial Preparation",
  "Legal Research & Documentation",
  "Detail-Oriented & Keen Observation",
  "Patience & Ability to Argue",
  "Insolvency & NCLT Proceedings",
  "SARFAESI & Banking Recovery",
];

export default function FounderPage() {
  return (
    <div style={{ background: "var(--cream)", minHeight: "100vh" }}>
      {/* Navigation Bar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          background: "rgba(15, 28, 53, 0.97)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(201, 168, 76, 0.15)",
          padding: "14px 0",
        }}
      >
        <div
          className="container"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
        >
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ position: "relative", width: "70px", height: "70px" }}>
              <Image src="/new_logo.jpg" alt="Artha Juris" fill style={{ objectFit: "contain" }} />
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 700, color: "var(--white)", lineHeight: 1 }}>
                Artha Juris
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase", marginTop: "3px" }}>
                Advocates & Consultants
              </div>
            </div>
          </Link>
          <Link
            href="/"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8125rem",
              fontWeight: 500,
              color: "rgba(255,255,255,0.8)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "color 0.2s",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          paddingTop: "100px",
          background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative elements */}
        <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "300px", height: "300px", borderRadius: "50%", border: "1px solid rgba(201, 168, 76, 0.07)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "0", left: "-40px", width: "200px", height: "200px", borderRadius: "50%", border: "1px solid rgba(201, 168, 76, 0.05)", pointerEvents: "none" }} />

        <div className="container" style={{ paddingTop: "60px", paddingBottom: "72px", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px" }}>
            <div style={{ width: "28px", height: "1px", background: "var(--gold)" }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)" }}>
              Founder & Partner
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "60px", alignItems: "center" }} className="founder-hero-grid">
            <div>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "var(--white)", lineHeight: 1.1, marginBottom: "16px" }}>
                Adv. Mayura Navnit Maru
              </h1>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "24px" }}>
                BSc. LLB · Founder, Artha Juris · 25+ Years Practice
              </div>
              <div style={{ width: "50px", height: "2px", background: "linear-gradient(90deg, var(--gold), var(--gold-light))", marginBottom: "28px" }} />
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.8, maxWidth: "600px", marginBottom: "32px" }}>
                Advocate Mayura Navnit Maru is a senior legal practitioner based in Mumbai, with over 25 years of independent practice before the Bombay High Court and various courts/tribunals across Pan India. An accomplished professional with a proven ability to represent clients in complex and challenging environments, she brings exceptional litigation strategy, client advocacy, and meticulous case management to the table.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <div style={{ padding: "10px 20px", background: "rgba(201, 168, 76, 0.1)", border: "1px solid rgba(201, 168, 76, 0.3)", borderRadius: "2px" }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>Enrolment</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "var(--gold)", fontWeight: 600 }}>MAH/2976/2002</div>
                </div>
                <div style={{ padding: "10px 20px", background: "rgba(201, 168, 76, 0.1)", border: "1px solid rgba(201, 168, 76, 0.3)", borderRadius: "2px" }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>High Court</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "var(--gold)", fontWeight: 600 }}>O.S. Reg. No. 15412</div>
                </div>
              </div>
            </div>

            <div
              style={{
                position: "relative",
                width: "100%",
                height: "360px",
                borderRadius: "8px",
                overflow: "hidden",
                border: "2px solid rgba(201, 168, 76, 0.4)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                background: "#111",
              }}
            >
              <Image
                src="/new_mayura_v2.jpg"
                alt="Adv. Mayura Maru — Founder, Artha Juris"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,28,53,0.4) 0%, transparent 60%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 20px" }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.7)", letterSpacing: "0.08em" }}>Adv. Mayura Navnit Maru</div>
              </div>
              {/* Gold offset frame */}
              <div style={{ position: "absolute", inset: "12px -12px -12px 12px", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "8px", pointerEvents: "none", zIndex: -1 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section style={{ padding: "80px 0", background: "var(--cream)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "start" }} className="founder-two-col">
            <div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px" }}>
                Professional Summary
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", color: "var(--navy)", marginBottom: "20px", lineHeight: 1.2 }}>
                A Career Built on{" "}
                <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Courtroom Excellence</em>
              </h2>
              <div style={{ width: "40px", height: "2px", background: "var(--gold)", marginBottom: "24px" }} />
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "var(--text-mid)", lineHeight: 1.9, display: "flex", flexDirection: "column", gap: "16px" }}>
                <p>
                  Advocate Mayura Navnit Maru has spent over two and a half decades at the intersection of law and real-world impact. Her practice spans the Bombay High Court, District Courts, and all key tribunals across Maharashtra — including Mumbai, Navi Mumbai, Panvel, Thane, Khalapur, Khopoli, and Alibaug.
                </p>
                <p>
                  She has acquired the best knowledge of the legal system to represent various types of clients in courts. Having handled an array of litigation and legal matters, she successfully represents the interests of corporate and individual clients on complex issues, transactions, agreements, and lawsuits.
                </p>
                <p>
                  A highly organised, dedicated, and strategic professional, Adv. Maru possesses solid interpersonal and communication skills essential for building key alliances and partnerships. She handles multiple assignments under high pressure with a positive attitude, ensuring effective case preparation and court proceedings.
                </p>
                <p>
                  Languages spoken: <strong style={{ color: "var(--navy)" }}>English, Hindi, Gujarati, and Marathi</strong>
                </p>
              </div>

              {/* Education */}
              <div style={{ marginTop: "40px" }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "16px" }}>
                  Educational Qualifications
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { degree: "Bachelor of Law (LLB)", institution: "Kishanchand Chhellaram College, University of Mumbai", year: "2002" },
                    { degree: "Bachelor of Science (BSc)", institution: "Wilson College, University of Mumbai", year: "1998" },
                  ].map((edu) => (
                    <div
                      key={edu.degree}
                      style={{
                        padding: "16px 20px",
                        background: "var(--white)",
                        border: "1px solid var(--border-light)",
                        borderRadius: "4px",
                        display: "flex",
                        gap: "16px",
                        alignItems: "flex-start",
                        boxShadow: "var(--shadow-sm)",
                      }}
                    >
                      <span style={{ color: "var(--gold)", fontSize: "0.5rem", marginTop: "6px", flexShrink: 0 }}>◆</span>
                      <div>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", fontWeight: 600, color: "var(--navy)", marginBottom: "3px" }}>{edu.degree}</div>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "var(--text-mid)" }}>{edu.institution}</div>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "var(--gold)", marginTop: "4px", fontWeight: 600 }}>{edu.year}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Info */}
                <div style={{ marginTop: "24px", padding: "20px", background: "rgba(201, 168, 76, 0.05)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "4px" }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "12px" }}>Additional Details</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {[
                      { label: "Bar Enrolment", value: "Bar Council of Maharashtra & Goa, 2002" },
                      { label: "High Court Reg.", value: "Bombay High Court O.S. No. 15412" },
                      { label: "Appellate Side", value: "Enrollment No. I9788" },
                      { label: "Office", value: "Fort, Mumbai, Maharashtra" },
                      { label: "Languages", value: "English, Hindi, Gujarati, Marathi" },
                    ].map((item) => (
                      <div key={item.label} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "var(--text-light)", fontWeight: 600, minWidth: "120px", flexShrink: 0 }}>{item.label}:</span>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "var(--text-mid)" }}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Key Expertise Tags */}
            <div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "16px" }}>
                Core Expertise
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "40px" }}>
                {expertise.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8125rem",
                      color: "var(--navy)",
                      background: "rgba(201, 168, 76, 0.08)",
                      border: "1px solid rgba(201, 168, 76, 0.25)",
                      padding: "8px 16px",
                      borderRadius: "2px",
                      fontWeight: 500,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Notable PIL */}
              <div style={{ marginBottom: "24px", background: "linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(201,168,76,0.03) 100%)", borderRadius: "8px", padding: "28px", border: "1px solid rgba(201,168,76,0.2)" }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px" }}>
                  ❖ Notable PIL
                </div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "var(--navy)", fontWeight: 600, marginBottom: "10px" }}>
                  Mayura Maru v. State of Maharashtra
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "var(--gold)", fontWeight: 600, marginBottom: "12px" }}>
                  PIL No. 138 of 2012 · Bombay High Court
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "var(--text-mid)", lineHeight: 1.75, margin: 0 }}>
                  Challenged illegal and unauthorized constructions in Navi Mumbai and Trans-Thane Creek industrial areas. The bench led by Justice A.S. Oka ordered CIDCO, NMMC, and MIDC to identify tens of thousands of illegal structures and adopt a strict zero-tolerance policy against unauthorized development, establishing a landmark precedent under the MRTP Act.
                </p>
              </div>

              {/* Court Presence */}
              <div style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)", borderRadius: "8px", padding: "32px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "-30px", right: "-30px", width: "120px", height: "120px", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.1)" }} />
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "20px" }}>
                  ❖ Court Presence
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    "Bombay High Court (Appellate & Original Side)",
                    "NCLT — Insolvency & Winding Up",
                    "DRT & DRAT Proceedings",
                    "RERA, CIDCO, MIDC & SRA Matters",
                    "Consumer Forum & Civil Courts",
                    "Criminal Courts across Maharashtra",
                    "Debts Recovery Tribunal (DRT), Mumbai",
                    "Family Courts, Mumbai",
                    "District Courts: Mumbai, Raigad, Panvel, Thane, Alibaug, Khopoli",
                  ].map((court) => (
                    <div key={court} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--gold)", display: "inline-block", flexShrink: 0 }} />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "rgba(255,255,255,0.7)" }}>{court}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section style={{ padding: "80px 0", background: "linear-gradient(180deg, var(--cream-dark) 0%, var(--cream) 100%)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px" }}>
              Career Timeline
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--navy)", marginBottom: "0" }}>
              Professional <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Experience</em>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "800px", margin: "0 auto" }}>
            {timeline.map((item, idx) => (
              <div key={idx} style={{ background: "var(--white)", padding: "24px", borderRadius: "8px", borderLeft: "4px solid var(--gold)", boxShadow: "var(--shadow-sm)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 600, color: "var(--navy)" }}>{item.role} <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "var(--text-mid)", fontWeight: 400 }}>at {item.firm}</span></div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "var(--gold)", fontWeight: 700 }}>{item.period}</div>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "var(--text-mid)", margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Practice */}
      <section style={{ padding: "80px 0", background: "var(--cream)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px" }}>
              Areas of Practice
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "var(--navy)", marginBottom: "0" }}>
              Detailed Practice{" "}<em style={{ fontStyle: "italic", color: "var(--gold)" }}>Areas</em>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {practiceDetails.map((practice) => (
              <div
                key={practice.area}
                style={{
                  background: "var(--white)",
                  borderRadius: "8px",
                  padding: "36px 40px",
                  boxShadow: "var(--shadow-sm)",
                  border: "1px solid var(--border-light)",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
                  <span style={{ fontSize: "1.5rem" }}>{practice.icon}</span>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.375rem", color: "var(--navy)", fontWeight: 600 }}>
                    {practice.area}
                  </h3>
                </div>
                <div style={{ width: "32px", height: "2px", background: "var(--gold)", marginBottom: "20px" }} />
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "10px" }}>
                  {practice.points.map((point) => (
                    <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--gold)", display: "inline-block", flexShrink: 0, marginTop: "6px" }} />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "var(--text-mid)", lineHeight: 1.6 }}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer & CTA */}
      <section style={{ padding: "60px 0", background: "var(--cream)" }}>
        <div className="container">
          {/* Bar Council of India Notice */}
          <div style={{
            background: "var(--white)",
            border: "1px solid var(--border-light)",
            borderRadius: "6px",
            padding: "24px 32px",
            marginBottom: "40px",
            borderLeft: "3px solid var(--gold)",
          }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "8px" }}>
              ✦ Bar Council of India — Notice
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "var(--text-mid)", lineHeight: 1.7, margin: 0 }}>
              As per the rules of the Bar Council of India, advocates are restricted from certain practices. This website is provided for informational purposes only. The information provided on this page is for general information only and does not constitute legal advice. No attorney-client relationship is created by viewing this information. For legal advice specific to your situation, please consult directly with Adv. Mayura Maru by booking a consultation.
            </p>
          </div>

          <div style={{ textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", color: "var(--navy)", marginBottom: "16px" }}>
              Ready to Discuss Your Matter?
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "var(--text-mid)", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto 32px" }}>
              Book a confidential consultation with Adv. Mayura Maru and receive informed, strategic legal guidance for your matter.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/#booking" className="btn-primary" style={{ fontSize: "0.875rem" }}>
                <span>Book a Consultation</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/" className="btn-outline" style={{ fontSize: "0.875rem" }}>
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .founder-hero-grid {
            grid-template-columns: 1fr !important;
          }
          .founder-two-col {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </div>
  );
}
