import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Adv. Pratap Temgire — Associate | Artha Juris Legal Consultancy",
  description:
    "Adv. Pratap Temgire is an Associate with expertise in Corporate Law, Banking, DRT proceedings, and Section 138 NI Act matters. LL.M from MNLU and CLAT PG AIR 242.",
};

const practiceDetails = [
  {
    area: "Banking & DRT Litigation",
    icon: "🏦",
    points: [
      "Drafting and arguing applications under SARFAESI Act and RDB Act for enforcement of securities",
      "Original Applications, Interim Applications in Recovery Proceedings before DRT and DRAT",
      "Defending Counter Claims, Securitization Applications, and Intervention Applications",
      "Extensive appearances before Chairperson, Presiding Officer & Recovery Officer on behalf of Banks and Financial Institutions",
    ],
  },
  {
    area: "Negotiable Instruments & Criminal Law",
    icon: "⚖️",
    points: [
      "Handling high-volume Section 138 NI Act (Cheque Bounce) cases on behalf of banks and financial institutions",
      "Drafting notices, complaints u/s 138, Evidence, and Summary Suits",
      "Appearances in Final hearings before The Metropolitan Magistrate Court",
      "Criminal and Civil Appeals in The Bombay City Civil Court",
      "Mentioning and appearances in the High Court of Bombay",
    ],
  },
  {
    area: "Corporate & Commercial Law",
    icon: "🏗️",
    points: [
      "Contract Drafting and Negotiation",
      "Legal Research and giving comprehensive legal opinions",
      "Assisting in preparing for final hearing proceedings",
      "Drafting Notice of Motion, DV Notices, and Divorce Petitions",
    ],
  },
];

const expertise = [
  "Litigation and Advocacy",
  "Legal Research and Analysis",
  "Contract Drafting and Negotiation",
  "Client Counselling & Relationship Management",
  "Legal Writing and Communication",
  "Case Management and Organization",
  "Attention to Details & Analytical Thinking",
];

const timeline = [
  {
    role: "Associate",
    firm: "Shamim and Co, Fort, Mumbai",
    period: "2024",
    desc: "Drafted notices and complaints u/s 138 NI Act, Evidence, Summary Suits. Appeared in all proceedings of Cheque Bounce matters and assisted senior advocates in final hearings. Mentioned matters in the High Court of Bombay and City Civil Court."
  },
  {
    role: "Associate",
    firm: "AKS Legal Consultant, Fort, Mumbai",
    period: "2023",
    desc: "Drafted applications under SARFAESI and RDB Act. Defended counter claims and securitization applications. Appeared before DRT and DRAT on behalf of Banks and Financial Institutions."
  },
  {
    role: "Intern",
    firm: "C.A Nilesh Shinde & Associates, CBD Belapur",
    period: "2021",
    desc: "Assisted Senior with basic GST-related compliances and Income tax-related filing."
  },
  {
    role: "Intern",
    firm: "Adv. Amit Sharma, CBD Belapur",
    period: "2019-2020",
    desc: "Assisted senior with bail matters at JMFC CBD Belapur. Conducted legal research and assisted with trial preparation."
  },
  {
    role: "Intern",
    firm: "Shinde and Company, CBD Belapur",
    period: "2019",
    desc: "Assisted in Consumer State forum cases. Provided legal advice and observed trials and hearings."
  }
];

export default function PratapPage() {
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
              Associate
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "60px", alignItems: "center" }} className="founder-hero-grid">
            <div>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "var(--white)", lineHeight: 1.1, marginBottom: "16px" }}>
                Adv. Pratap Temgire
              </h1>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "24px" }}>
                LL.M (MNLU) · Associate, Artha Juris
              </div>
              <div style={{ width: "50px", height: "2px", background: "linear-gradient(90deg, var(--gold), var(--gold-light))", marginBottom: "28px" }} />
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.8, maxWidth: "600px", marginBottom: "32px" }}>
                Adv. Pratap Temgire is a dynamic Associate with a strong academic foundation from Maharashtra National Law University (MNLU). He has significant hands-on experience representing clients before the Bombay High Court, DRT, DRAT, and district courts. He is also a celebrated national moot court champion with a passion for precise legal research and advocacy.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <div style={{ padding: "10px 20px", background: "rgba(201, 168, 76, 0.1)", border: "1px solid rgba(201, 168, 76, 0.3)", borderRadius: "2px" }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>Enrolment</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "var(--gold)", fontWeight: 600 }}>MAH/Goa 2022</div>
                </div>
                <div style={{ padding: "10px 20px", background: "rgba(201, 168, 76, 0.1)", border: "1px solid rgba(201, 168, 76, 0.3)", borderRadius: "2px" }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.45)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>Achievement</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "var(--gold)", fontWeight: 600 }}>CLAT PG AIR 242</div>
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
                src="/pratap_v2.jpg"
                alt="Adv. Pratap Temgire"
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
                Meticulous Approach to{" "}
                <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Advocacy</em>
              </h2>
              <div style={{ width: "40px", height: "2px", background: "var(--gold)", marginBottom: "24px" }} />
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "var(--text-mid)", lineHeight: 1.9, display: "flex", flexDirection: "column", gap: "16px" }}>
                <p>
                  With core expertise in banking litigation, SARFAESI proceedings, Section 138 NI Act matters, and corporate law, Pratap has a meticulous approach to drafting applications, defending counterclaims, and presenting evidence.
                </p>
                <p>
                  He has successfully represented banks and financial institutions in high-volume cases and is proficient in MS Office and legal research tools.
                </p>
                <p>
                  Languages spoken: <strong style={{ color: "var(--navy)" }}>English, Hindi, and Marathi</strong>
                </p>
              </div>

              {/* Education */}
              <div style={{ marginTop: "40px" }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "16px" }}>
                  Educational Qualifications
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { degree: "Post-Graduation (LL.M)", institution: "Maharashtra National Law University (MNLU)", year: "2025" },
                    { degree: "Graduation (BLS LLB)", institution: "University of Mumbai", year: "2022" },
                    { degree: "Certificate Course", institution: "Intellectual Property Rights (IPR)", year: "N/A" },
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

            {/* Key Expertise Tags & Achievements */}
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

              {/* Achievements */}
              <div style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)", borderRadius: "8px", padding: "32px", position: "relative", overflow: "hidden", marginBottom: "24px" }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "20px" }}>
                  ❖ Achievements
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[
                    "Won 2nd prize in National Bollywood moot at Lord Universal college of law, Goregaon",
                    "2nd Runner up in state-level moot competition held at Pune",
                    "1st prize at intra-college debate competition",
                    "Hosted National level moot court competition and seminars",
                    "Invited to Judge 'SPARKLE 6.0' - National Level Moot Court and Client Counselling",
                    "Secured AIR 242 in CLAT PG 2024",
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
