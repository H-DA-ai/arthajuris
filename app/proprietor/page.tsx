import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Adv. Mayura Maru — Proprietor | Arthajuris Legal Consultancy",
  description:
    "Adv. Mayura Maru is the Proprietor of Arthajuris Legal Consultancy with over 22 years of practice at the Bombay High Court and courts across Maharashtra in Civil, Corporate, Property, Banking, and Family Law.",
};



const practiceDetails = [
  {
    area: "Business Law",
    icon: "🏛️",
    points: [
      "Corporate matters and business contracts",
      "Arbitration and alternative dispute resolution",
      "Winding up petitions before NCLT",
      "Drafting and filing proceedings under the Insolvency and Bankruptcy Code (IBC)",
      "Arguing NCLT matters and obtaining orders",
      "Debt Recovery Tribunal (DRT) and DRAT proceedings",
    ],
  },
  {
    area: "Property Law",
    icon: "🏘️",
    points: [
      "Title search reports and comprehensive property reviews",
      "All aspects of residential property transfers",
      "RERA, CIDCO, MIDC matters",
      "Redevelopment projects, SRA and MLRC",
      "Tenancy Act and Land Laws",
      "Contract preparation, drafting, and closing of documents",
      "Real estate and property cases for trial",
      "Commercial lease and access agreement drafting",
      "Review of loan documents and financial agreements",
    ],
  },
  {
    area: "Civil Law",
    icon: "⚖️",
    points: [
      "Consumer Forum cases",
      "Banking and financial recovery matters",
      "Recovery of money suits",
      "Motor accident claims",
      "Medical negligence cases",
      "Defamation suits",
      "Civil suits across courts",
      "Testamentary matters",
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

export default function ProprietorPage() {
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
            <div style={{ position: "relative", width: "40px", height: "40px" }}>
              <Image src="/logo.png" alt="Arthajuris" fill style={{ objectFit: "contain" }} />
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700, color: "var(--white)", lineHeight: 1 }}>
                Arthajuris
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.25em", color: "var(--gold)", textTransform: "uppercase", marginTop: "2px" }}>
                Proprietary Concern
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
              Proprietor & Founder
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "60px", alignItems: "center" }} className="proprietor-hero-grid">
            <div>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "var(--white)", lineHeight: 1.1, marginBottom: "16px" }}>
                Adv. Mayura Maru
              </h1>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "24px" }}>
                BSc. LLB · Proprietor, Arthajuris · 22+ Years Practice
              </div>
              <div style={{ width: "50px", height: "2px", background: "linear-gradient(90deg, var(--gold), var(--gold-light))", marginBottom: "28px" }} />
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.8, maxWidth: "600px", marginBottom: "32px" }}>
                With over 22 years of sustained and distinguished practice at the Bombay High Court and courts across Maharashtra, Adv. Mayura Maru is the founding Proprietor of Arthajuris. Her career is defined by an unwavering commitment to her clients, a formidable courtroom presence, and the rare ability to navigate the most complex legal terrain with clarity and conviction.
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
                src="/mayura.png"
                alt="Adv. Mayura Maru — Proprietor, Arthajuris"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,28,53,0.4) 0%, transparent 60%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 20px" }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.7)", letterSpacing: "0.08em" }}>📸 Photo placeholder — Upload professional photograph</div>
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
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "start" }} className="proprietor-two-col">
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
                  Adv. Mayura Maru has spent over two decades at the intersection of law and real-world impact. Her practice spans the Bombay High Court and all district courts and tribunals in Maharashtra — including Mumbai, Navi Mumbai, Panvel, Thane, Khalapur, Khopoli, and Alibaug.
                </p>
                <p>
                  She has represented a wide spectrum of clients — from corporate entities and financial institutions to individuals navigating complex personal legal challenges. Her ability to handle an array of litigation and legal matters, from complex commercial disputes to sensitive family matters, reflects the breadth and depth of her expertise.
                </p>
                <p>
                  A highly organised, dedicated, and strategic professional, Adv. Maru is known for her ability to set effective priorities, manage multiple assignments under pressure, and deliver consistently strong outcomes for her clients.
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

              {/* Court Presence */}
              <div style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)", borderRadius: "8px", padding: "32px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "-30px", right: "-30px", width: "120px", height: "120px", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.1)" }} />
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "20px" }}>
                  ✦ Court Presence
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    "Bombay High Court (Appellate & Original Side)",
                    "NCLT — Insolvency & Winding Up",
                    "DRT & DRAT Proceedings",
                    "RERA, CIDCO, MIDC & SRA Matters",
                    "Consumer Forum & Civil Courts",
                    "Criminal Courts across Maharashtra",
                    "District Courts: Panvel, Thane, Alibaug, Khopoli",
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

      {/* Areas of Practice */}
      <section style={{ padding: "80px 0", background: "linear-gradient(180deg, var(--cream-dark) 0%, var(--cream) 100%)" }}>
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
          .proprietor-hero-grid {
            grid-template-columns: 1fr !important;
          }
          .proprietor-two-col {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </div>
  );
}
