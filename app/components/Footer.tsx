"use client";
export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #070e1a 0%, #0a1628 100%)",
        borderTop: "1px solid rgba(201, 168, 76, 0.1)",
      }}
    >
      {/* Top Section */}
      <div
        className="container"
        style={{ padding: "64px 24px 48px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: "48px",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "var(--white)",
                marginBottom: "4px",
              }}
            >
              Arthajuris
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "20px",
              }}
            >
              Law Firm
            </div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.8,
                marginBottom: "24px",
                maxWidth: "280px",
              }}
            >
              A distinguished Mumbai law firm where meaning meets the law. Serving clients
              across Maharashtra with integrity and excellence.
            </p>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.25)",
                letterSpacing: "0.05em",
              }}
            >
              Office No. 4/B, 4th Floor, Mahavir Chambers,<br />
              1/5, Banaji Street, Fort, Mumbai – 400 001
            </div>
          </div>

          {/* Quick Links */}
          <div>
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
              Quick Links
            </div>
            {[
              { label: "Home", id: "home" },
              { label: "About Us", id: "about" },
              { label: "Our Partners", id: "partners" },
              { label: "Practice Areas", id: "practice" },
              { label: "Book Consultation", id: "booking" },
              { label: "Contact", id: "contact" },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                style={{
                  display: "block",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.45)",
                  padding: "5px 0",
                  textAlign: "left",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "var(--gold)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.45)"; }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Practice Areas */}
          <div>
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
              Practice Areas
            </div>
            {[
              "Corporate & Commercial",
              "Property & Real Estate",
              "Banking & DRT",
              "Civil Litigation",
              "Family & Criminal",
              "Legal Documentation",
            ].map((area) => (
              <div
                key={area}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.4)",
                  padding: "5px 0",
                }}
              >
                {area}
              </div>
            ))}
          </div>

          {/* Partners */}
          <div>
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
              Partners
            </div>
            {[
              { name: "Adv. Mayura Maru", role: "Senior Partner" },
              { name: "Adv. Pratap Temgire", role: "Partner" },
              { name: "Adv. Uzma Khan", role: "Partner" },
            ].map((p) => (
              <div key={p.name} style={{ marginBottom: "14px" }}>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.55)",
                    fontWeight: 500,
                  }}
                >
                  {p.name}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.25)",
                    marginTop: "2px",
                  }}
                >
                  {p.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container" style={{ padding: "24px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.25)",
            }}
          >
            © {year} ArthajurisLaw. All rights reserved.
          </div>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.2)",
            }}
          >
            Advocates & Legal Consultants · Mumbai, Maharashtra
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 550px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
