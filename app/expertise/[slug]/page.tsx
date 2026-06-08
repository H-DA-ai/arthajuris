import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

const expertiseData: Record<
  string,
  {
    title: string;
    subtitle: string;
    lead: string;
    intro: string;
    whatWeOffer: { heading: string; points: string[] }[];
    whoWeHelp: string[];
    importantNote: string;
  }
> = {
  "corporate-commercial-law": {
    title: "Corporate & Commercial Law",
    subtitle: "Strategic Legal Counsel for Business Entities & Commercial Matters",
    lead: "Adv. Mayura Maru",
    intro:
      "Navigating the corporate legal landscape requires not just knowledge of the law but an understanding of the commercial realities that businesses face. At Arthajuris, our Corporate & Commercial Law practice provides comprehensive legal advisory services to businesses at every stage — from incorporation and contracting to dispute resolution and insolvency.",
    whatWeOffer: [
      {
        heading: "Business Contracts & Agreements",
        points: [
          "Drafting, reviewing, and negotiating a wide range of commercial contracts",
          "Shareholder agreements, joint venture agreements, and MoUs",
          "Vendor and service agreements, NDAs, and licensing contracts",
          "Ensuring contractual obligations are legally sound and enforceable",
        ],
      },
      {
        heading: "Insolvency & NCLT Proceedings",
        points: [
          "Representation before the National Company Law Tribunal (NCLT)",
          "Filing and arguing proceedings under the Insolvency and Bankruptcy Code (IBC)",
          "Winding up petitions and corporate dissolution matters",
          "Advisory for creditors and debtors in insolvency proceedings",
        ],
      },
      {
        heading: "Arbitration & Dispute Resolution",
        points: [
          "Representation in domestic and commercial arbitration proceedings",
          "Negotiation and mediation of commercial disputes",
          "Enforcement and challenge of arbitral awards",
          "Pre-dispute advisory and risk assessment",
        ],
      },
      {
        heading: "Corporate Structuring & Compliance",
        points: [
          "Legal advice on corporate restructuring and mergers",
          "Regulatory compliance advisory",
          "Corporate governance guidance",
          "DRT (Debt Recovery Tribunal) and DRAT proceedings for corporate clients",
        ],
      },
    ],
    whoWeHelp: [
      "Startups and growing businesses entering into commercial contracts",
      "Established corporations facing disputes or restructuring needs",
      "Financial institutions involved in corporate credit matters",
      "Business owners navigating insolvency or winding up proceedings",
    ],
    importantNote:
      "Corporate law matters are often time-sensitive. Early legal counsel can make a decisive difference in protecting your business interests. We recommend seeking advice before disputes escalate.",
  },
  "property-real-estate-law": {
    title: "Property & Real Estate Law",
    subtitle: "Full-Spectrum Real Estate Legal Services Across Maharashtra",
    lead: "Adv. Uzma Khan & Adv. Mayura Maru",
    intro:
      "Real estate transactions involve significant financial commitment and legal complexity. Whether you are purchasing a home, investing in commercial property, navigating a redevelopment, or resolving a property dispute, our team provides informed, meticulous, and reliable legal guidance at every step.",
    whatWeOffer: [
      {
        heading: "Title Search & Due Diligence",
        points: [
          "Comprehensive title search reports for residential and commercial properties",
          "Approved Project Finance (APF) reports for banks and financial institutions",
          "Examination and verification of property ownership chain",
          "Identification of encumbrances, litigation risks, and title defects",
        ],
      },
      {
        heading: "RERA, SRA, CIDCO & MIDC Matters",
        points: [
          "RERA (Real Estate Regulatory Authority) advisory and representation",
          "Slum Rehabilitation Authority (SRA) project legal support",
          "CIDCO and MIDC property transactions",
          "Redevelopment project documentation and advisory",
        ],
      },
      {
        heading: "Property Documentation & Transactions",
        points: [
          "Sale deeds, purchase agreements, and conveyance deeds",
          "Leave and license agreements and commercial leases",
          "Power of Attorney and allied property documents",
          "IGR e-filing, CTC, and property registration at Sub-Registrar offices",
        ],
      },
      {
        heading: "Property Litigation",
        points: [
          "Representation in real estate disputes and civil suits",
          "RERA complaints and proceedings",
          "Possession disputes and eviction matters",
          "Recovery of earnest money and property-related civil claims",
        ],
      },
    ],
    whoWeHelp: [
      "Home buyers conducting due diligence before purchase",
      "Developers and builders seeking legal support for projects",
      "Banks and HFCs requiring APF reports and legal opinions",
      "Individuals involved in property disputes or inheritance matters",
    ],
    importantNote:
      "A proper title search and due diligence is essential before any property transaction. Do not proceed without verified legal documentation.",
  },
  "banking-debt-recovery": {
    title: "Banking & Debt Recovery",
    subtitle: "Expert Representation Before DRT, DRAT & Under SARFAESI",
    lead: "Adv. Pratap Temgire & Adv. Mayura Maru",
    intro:
      "Banking and financial disputes require specialised expertise in the complex interplay of recovery laws, tribunal procedures, and debtor-creditor rights. Our Banking & Debt Recovery practice represents banks, financial institutions, and borrowers in recovery proceedings, SARFAESI actions, and NI Act cases.",
    whatWeOffer: [
      {
        heading: "DRT & DRAT Proceedings",
        points: [
          "Filing and defending recovery applications before Debt Recovery Tribunals (DRT)",
          "Appeals and applications before the Debt Recovery Appellate Tribunal (DRAT)",
          "Recovery suits under the RDB Act",
          "Advisory on debt recovery strategies for lenders",
        ],
      },
      {
        heading: "SARFAESI Proceedings",
        points: [
          "Advisory and representation in SARFAESI (Securitisation and Reconstruction of Financial Assets) actions",
          "Challenging or defending possession and sale notices",
          "Response to SARFAESI notices for borrowers and guarantors",
          "e-Auction representation and related disputes",
        ],
      },
      {
        heading: "Section 138 NI Act (Cheque Bounce)",
        points: [
          "Filing and defending Section 138 complaints",
          "Legal notice drafting and response",
          "Representation in trial courts and appeals",
          "Advisory on compounding and settlement of NI Act matters",
        ],
      },
      {
        heading: "Banking Legal Documentation",
        points: [
          "Review and drafting of loan agreements, mortgage deeds, and pledge documents",
          "Legal opinions on security documentation for lending transactions",
          "Empanelment documentation and advisory for banks and HFCs",
        ],
      },
    ],
    whoWeHelp: [
      "Banks and NBFCs seeking to recover overdue loans",
      "Borrowers and guarantors facing SARFAESI or DRT action",
      "Individuals and companies dealing with dishonoured cheques",
      "Financial institutions requiring legal documentation review",
    ],
    importantNote:
      "Banking recovery matters are time-bound. Missing statutory deadlines can significantly affect your legal rights. We advise seeking prompt legal counsel upon receiving any bank notice or recovery action.",
  },
  "civil-litigation": {
    title: "Civil Litigation",
    subtitle: "Comprehensive Civil Representation Across Courts in Maharashtra",
    lead: "Adv. Mayura Maru",
    intro:
      "Civil litigation encompasses a broad range of disputes between individuals, companies, and institutions. Our civil litigation practice is anchored by over two decades of trial and appellate experience, offering strategic, well-prepared representation across all civil courts in Maharashtra.",
    whatWeOffer: [
      {
        heading: "Civil Suits & Money Recovery",
        points: [
          "Filing and defending civil suits for recovery of money and damages",
          "Summary suits under Order XXXVII CPC",
          "Injunction applications and stay orders",
          "Execution proceedings for decree enforcement",
        ],
      },
      {
        heading: "Consumer Forum Cases",
        points: [
          "Filing consumer complaints at District, State, and National Commission level",
          "Representation in service deficiency and product liability matters",
          "Medical negligence complaints before consumer forums",
          "Unfair trade practice cases",
        ],
      },
      {
        heading: "Motor Accident Claims",
        points: [
          "Claims before Motor Accident Claims Tribunals (MACT)",
          "Representation for injured claimants and legal heirs",
          "Advisory on compensation quantum and insurance proceedings",
        ],
      },
      {
        heading: "Other Civil Matters",
        points: [
          "Defamation suits and injunctions",
          "Medical negligence cases in civil court",
          "Testamentary and probate matters",
          "Partition and inheritance disputes",
          "Suit for specific performance of contracts",
        ],
      },
    ],
    whoWeHelp: [
      "Individuals seeking to recover money or enforce contractual rights",
      "Consumers aggrieved by defective goods or deficient services",
      "Accident victims or their families seeking compensation",
      "Parties in inheritance, property, or family-related civil disputes",
    ],
    importantNote:
      "Civil cases are subject to strict limitation periods. Delay in filing can result in loss of your legal right to claim. Please consult us at the earliest opportunity.",
  },
  "family-criminal-law": {
    title: "Family & Criminal Law",
    subtitle: "Compassionate & Vigorous Representation in Sensitive Legal Matters",
    lead: "Adv. Mayura Maru & Adv. Pratap Temgire",
    intro:
      "Family and criminal matters are among the most sensitive and personally significant legal challenges one can face. Our approach combines legal rigour with genuine empathy — ensuring that clients are represented with both effectiveness and dignity throughout the process.",
    whatWeOffer: [
      {
        heading: "Divorce & Matrimonial Disputes",
        points: [
          "Mutual consent and contested divorce petitions",
          "Judicial separation and maintenance applications",
          "Custody and guardianship of children",
          "Matrimonial property and alimony disputes",
          "NRI matrimonial matters and international family law advisory",
        ],
      },
      {
        heading: "Domestic Violence & Protection Orders",
        points: [
          "Applications under the Domestic Violence Act (PWDVA, 2005)",
          "Obtaining and enforcing Protection Orders, Residence Orders, and Monetary Relief",
          "Representation before Metropolitan Magistrate and Family Courts",
        ],
      },
      {
        heading: "Criminal Law Representation",
        points: [
          "Bail applications — regular, anticipatory, and interim",
          "Defence in criminal trials across Sessions and Magistrate Courts",
          "Criminal appeals before the Bombay High Court",
          "Advisory on FIR and complaint matters",
          "Representation in white-collar crime and financial offence cases",
        ],
      },
    ],
    whoWeHelp: [
      "Individuals going through matrimonial disputes or divorce proceedings",
      "Survivors of domestic violence seeking legal protection",
      "Accused persons requiring skilled criminal defence",
      "Families navigating custody, inheritance, and succession matters",
    ],
    importantNote:
      "All consultations regarding family and criminal matters are conducted with strict confidentiality. Your privacy and dignity are our foremost concern.",
  },
  "legal-documentation-compliance": {
    title: "Legal Documentation & Compliance",
    subtitle: "Precise Drafting, IGR Services & Regulatory Compliance Advisory",
    lead: "Adv. Uzma Khan",
    intro:
      "Sound legal documentation is the foundation of every enforceable agreement, reliable transaction, and compliant business operation. Our documentation and compliance practice delivers precision, clarity, and thoroughness — ensuring your interests are protected at every stage.",
    whatWeOffer: [
      {
        heading: "Legal Drafting & Opinions",
        points: [
          "Drafting of agreements, deeds, affidavits, and legal notices",
          "Legal opinions on property transactions and commercial matters",
          "Title certificates and compliance reports",
          "Drafting of demand notices and legal correspondence",
        ],
      },
      {
        heading: "IGR & Registration Services",
        points: [
          "IGR (Inspector General of Registration) property searches and e-filing",
          "Certified True Copy (CTC) of registered documents",
          "Assistance with property registration at Sub-Registrar offices",
          "Encumbrance Certificate applications and related proceedings",
        ],
      },
      {
        heading: "Banking Documentation",
        points: [
          "APF (Approved Project Finance) reports for banks and HFCs",
          "Legal opinion on mortgage and loan security documents",
          "Review of loan agreements, hypothecation deeds, and pledge documents",
          "Bank empanelment documentation and processes",
        ],
      },
      {
        heading: "Environmental & Cyber Law Advisory",
        points: [
          "Environmental law compliance advisory for projects and businesses",
          "Legal advisory on environmental clearances and regulations",
          "Cyber law advisory — data protection, digital contracts, online fraud",
          "Preliminary legal opinions on regulatory compliance matters",
        ],
      },
    ],
    whoWeHelp: [
      "Banks and HFCs requiring legal opinions and APF reports",
      "Individuals and companies needing legally sound contract drafting",
      "Property buyers and sellers requiring registration assistance",
      "Businesses seeking regulatory and compliance advisory",
    ],
    importantNote:
      "Legal documentation errors can be costly and difficult to remedy after the fact. Engaging a qualified legal professional to review or draft documents is a prudent and necessary step in any significant transaction.",
  },
};

export async function generateStaticParams() {
  return Object.keys(expertiseData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = expertiseData[slug];
  if (!data) return { title: "Not Found" };
  return {
    title: `${data.title} | Arthajuris Legal Consultancy`,
    description: data.intro.substring(0, 160),
  };
}

export default async function ExpertisePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = expertiseData[slug];
  if (!data) notFound();

  return (
    <div style={{ background: "var(--cream)", minHeight: "100vh" }}>
      {/* Navigation */}
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
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700, color: "var(--white)" }}>
              Arthajuris
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.25em", color: "var(--gold)", textTransform: "uppercase" }}>
              Premier Law Firm
            </div>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Link
              href="/#practice"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8125rem", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}
            >
              ← All Practice Areas
            </Link>
            <Link href="/#booking" className="btn-primary" style={{ padding: "10px 20px", fontSize: "0.75rem" }}>
              <span>Book Consultation</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          paddingTop: "80px",
          background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "300px", height: "300px", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.06)", pointerEvents: "none" }} />
        <div className="container" style={{ paddingTop: "60px", paddingBottom: "64px", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
            <div style={{ width: "28px", height: "1px", background: "var(--gold)" }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)" }}>
              Practice Area
            </span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 800, color: "var(--white)", lineHeight: 1.1, marginBottom: "16px", maxWidth: "700px" }}>
            {data.title}
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", color: "rgba(255,255,255,0.6)", marginBottom: "28px", maxWidth: "560px" }}>
            {data.subtitle}
          </p>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.04em" }}>
            Practice lead: <span style={{ color: "var(--gold)", fontWeight: 600 }}>{data.lead}</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "64px 0", background: "var(--cream)" }}>
        <div className="container">
          <div style={{ maxWidth: "760px" }}>
            <div style={{ width: "40px", height: "2px", background: "var(--gold)", marginBottom: "24px" }} />
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.0625rem", color: "var(--text-mid)", lineHeight: 1.9 }}>
              {data.intro}
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section style={{ padding: "0 0 72px 0", background: "var(--cream)" }}>
        <div className="container">
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px" }}>
            Our Services
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", color: "var(--navy)", marginBottom: "40px" }}>
            What We{" "}<em style={{ fontStyle: "italic", color: "var(--gold)" }}>Offer</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="expertise-grid">
            {data.whatWeOffer.map((section) => (
              <div
                key={section.heading}
                style={{
                  background: "var(--white)",
                  borderRadius: "6px",
                  padding: "32px 36px",
                  border: "1px solid var(--border-light)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.125rem", color: "var(--navy)", fontWeight: 600, marginBottom: "16px" }}>
                  {section.heading}
                </h3>
                <div style={{ width: "28px", height: "2px", background: "var(--gold)", marginBottom: "16px" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {section.points.map((point) => (
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

      {/* Who We Help + Note */}
      <section style={{ padding: "64px 0", background: "linear-gradient(180deg, var(--cream-dark) 0%, var(--cream) 100%)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "48px", alignItems: "start" }} className="expertise-info-grid">
            <div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px" }}>
                Who We Help
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "var(--navy)", marginBottom: "24px" }}>
                Our Clients in This Practice Area
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {data.whoWeHelp.map((who) => (
                  <div
                    key={who}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "14px",
                      padding: "14px 16px",
                      background: "var(--white)",
                      border: "1px solid var(--border-light)",
                      borderRadius: "4px",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <span style={{ color: "var(--gold)", fontSize: "1rem", flexShrink: 0 }}>✦</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "var(--text-mid)", lineHeight: 1.6 }}>{who}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div
                style={{
                  background: "rgba(201, 168, 76, 0.06)",
                  border: "1px solid rgba(201, 168, 76, 0.25)",
                  borderRadius: "6px",
                  padding: "28px 32px",
                  marginBottom: "24px",
                }}
              >
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold-dark)", marginBottom: "10px" }}>
                  ⚠ Important to Know
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "var(--text-mid)", lineHeight: 1.7 }}>
                  {data.importantNote}
                </p>
              </div>

              {/* BCI Disclaimer */}
              <div
                style={{
                  background: "var(--white)",
                  border: "1px solid var(--border-light)",
                  borderRadius: "6px",
                  padding: "24px 28px",
                  borderLeft: "3px solid var(--gold)",
                }}
              >
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "8px" }}>
                  ✦ Bar Council of India — Notice
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", color: "var(--text-mid)", lineHeight: 1.7, margin: 0 }}>
                  As per Bar Council of India rules, advocates are restricted from certain practices. This page provides general information only. Viewing this page does not constitute legal advice or create an attorney-client relationship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "64px 0", background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "var(--white)", marginBottom: "16px" }}>
            Speak With Our Legal Team
          </h3>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "rgba(255,255,255,0.6)", maxWidth: "460px", margin: "0 auto 32px", lineHeight: 1.7 }}>
            Book a confidential consultation to discuss your matter with {data.lead}.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/#booking" className="btn-primary" style={{ fontSize: "0.875rem" }}>
              <span>Book Consultation</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/#practice" className="btn-outline" style={{ fontSize: "0.875rem" }}>
              <span>All Practice Areas</span>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .expertise-grid {
            grid-template-columns: 1fr !important;
          }
          .expertise-info-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
