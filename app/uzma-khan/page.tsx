import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Adv. Uzma Khan — Senior Associate | Artha Juris Legal Consultancy",
  description:
    "Adv. Uzma Khan is a Senior Associate specialising in real estate law, banking documentation, and property due diligence. LL.M in Environmental Law.",
};

const practiceDetails = [
  {
    area: "Real Estate & Property Due Diligence",
    icon: "🏨️",
    points: [
      "Preparation and finalization of Retail Title Search Reports with independent analysis of title chain, marketability, and legal risk assessment.",
      "Reviewing and approving APF (Approved Project Finance) Reports for submission to banks and financial institutions.",
      "Conducting advanced property due diligence, including scrutiny of Sale Deeds, Development Agreements, Conveyance Deeds, Mortgage Deeds, and statutory approvals.",
      "Examining encumbrances, charges, litigation status, and revenue records.",
      "Extraction and analysis of 7/12 Extract, Property Card, and Village Form records.",
      "Handling mutation (Ferfar) processes including preparation, submission, and tracking.",
      "Online and offline property searches through revenue department portals and government offices.",
    ],
  },
  {
    area: "Banking Legal Documentation",
    icon: "🏦",
    points: [
      "Facilitated empanelment of major financial institutions, including CANFIN Homes Finance Limited and Punjab National Bank.",
      "Prepared and presented Non-Litigation Status Reports for APF and Construction Finance matters.",
      "Coordinating directly with banks, NBFCs, developers, and clients for complex clarifications and compliance issues.",
      "Ensured accuracy and compliance of land records documentation for bank financing approvals.",
      "Provided legal opinions for individual loan disbursement cases.",
      "Executed IGR-related work such as property searches, document registration procedures, e-filing, and obtaining Certified True Copies (CTC).",
      "Index II searches and encumbrance verification to confirm property transaction history.",
    ],
  },
  {
    area: "Business Development & Client Management",
    icon: "🤝",
    points: [
      "Actively drove business development initiatives for legal and property documentation services.",
      "Built and maintained strong professional relationships with bank officials, finance companies, and developers.",
      "Managed end-to-end client communication, follow-ups, and documentation workflows.",
      "Coordinated cross-functionally with internal legal teams to streamline processes.",
      "Overseeing file verification, documentation control, and quality review of junior staff work.",
    ],
  },
];

const expertise = [
  "Title Search & Property Due Diligence",
  "Drafting & Vetting Legal Documents",
  "Legal Audits & Compliance",
  "IGR Processes (Searches, E-filing, CTC)",
  "Legal Research & Client Advisory",
  "MS Office | Tally ERP | Legal Tech Tools",
  "Administrative & Office Coordination",
];

const timeline = [
  {
    role: "Senior Associate",
    firm: "Xpress Legal – Advocates & Legal Consultants",
    period: "Nov 2023 – Present",
    desc: "Leading preparation of Retail Title Search Reports and APF Reports. Supervising drafting of CF Reports. Conducting detailed land record verification and mutation processes."
  },
  {
    role: "Legal Associate",
    firm: "AAN Legal & Associates",
    period: "Oct 2023 – Sept 2024",
    desc: "Prepared Non-Litigation Status Reports for APF for leading banks. Drafted Title Certificates, Legal Vetting Reports, Interim Reports. Executed IGR-related work."
  },
  {
    role: "Executive Legal",
    firm: "Advocate Poonam A. Khare",
    period: "Jan 2023 – Aug 2023",
    desc: "Drafted legal reports for APF projects. Provided legal opinions for individual loan disbursements. Supported accounting and administrative functions."
  },
  {
    role: "Legal Associate",
    firm: "M.A. Khan & Associates",
    period: "March 2022 – Dec 2022",
    desc: "Specialized in real estate legal documentation. Conducted in-depth legal research for court procedures, family law, and civil litigation. Managed IGR-related tasks."
  },
  {
    role: "Intern",
    firm: "Lex Juris",
    period: "June 2020 – Dec 2020",
    desc: "Conducted Title Search Reports, IGR searches, legal audits, and due diligence of property documents."
  }
];

export default function UzmaPage() {
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
              <Image src="/new_logo.jpg" alt="Arthajuris" fill style={{ objectFit: "contain" }} />
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
              Senior Associate
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "60px", alignItems: "center" }} className="founder-hero-grid">
            <div>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "var(--white)", lineHeight: 1.1, marginBottom: "16px" }}>
                Adv. Uzma Khan
              </h1>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "24px" }}>
                LL.M (Environmental Law) · Senior Associate
              </div>
              <div style={{ width: "50px", height: "2px", background: "linear-gradient(90deg, var(--gold), var(--gold-light))", marginBottom: "28px" }} />
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.8, maxWidth: "600px", marginBottom: "32px" }}>
                Adv. Uzma Khan is the firm's Senior Associate, specialising in real estate law, banking documentation, and property due diligence. She has successfully led the preparation of retail title search reports, APF reports, and complex property due diligence for major financial institutions including Punjab National Bank, Bank of India, and CANFIN Homes.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <div style={{ padding: "10px 20px", background: "rgba(201, 168, 76, 0.1)", border: "1px solid rgba(201, 168, 76, 0.3)", borderRadius: "2px" }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>Certifications</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "var(--gold)", fontWeight: 600 }}>Diploma in Cyber Law</div>
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
                src="/uzma_v2.jpg"
                alt="Adv. Uzma Khan"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,28,53,0.4) 0%, transparent 60%)", pointerEvents: "none" }} />
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
                Excellence in <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Property & Legal Diligence</em>
              </h2>
              <div style={{ width: "40px", height: "2px", background: "var(--gold)", marginBottom: "24px" }} />
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "var(--text-mid)", lineHeight: 1.9, display: "flex", flexDirection: "column", gap: "16px" }}>
                <p>
                  Dedicated and detail-oriented Legal Associate with hands-on experience in real estate law, banking legal processes, litigation management, and legal compliance.
                </p>
                <p>
                  Proficient in legal drafting, property documentation, IGR procedures, and administrative coordination. Advanced competency in 7/12 records, mutation entries, and historical land records.
                </p>
                <p>
                  Actively drives business development initiatives, having successfully facilitated the empanelment of major financial institutions for legal and documentation services.
                </p>
              </div>

              {/* Education */}
              <div style={{ marginTop: "40px" }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "16px" }}>
                  Educational Qualifications
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { degree: "LL.M. in Environmental Law", institution: "Mumbai University", year: "2025" },
                    { degree: "Bachelor of Education (B.Ed.)", institution: "Aligarh University", year: "2024" },
                    { degree: "BLS LLB", institution: "Dr. D.Y. Patil College of Law, Navi Mumbai", year: "2021" },
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
              </div>
            </div>

            {/* Key Expertise Tags & Extra Curriculars */}
            <div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "16px" }}>
                Core Competencies
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

              {/* Extras */}
              <div style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)", borderRadius: "8px", padding: "32px", position: "relative", overflow: "hidden", marginBottom: "24px" }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "20px" }}>
                  ❖ Interests & Activities
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    "National-Level Athlete (Running)",
                    "Passionate about Trekking and outdoor adventure",
                    "English Typing Speed: 35 WPM",
                  ].map((court) => (
                    <div key={court} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--gold)", display: "inline-block", flexShrink: 0, marginTop: "6px" }} />
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
