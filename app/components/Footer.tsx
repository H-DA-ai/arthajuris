"use client";
import Link from "next/link";
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
              Artha Juris
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "20px",
              }}
            >
              Advocates & Consultants
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
              A Mumbai-based legal consultancy (Proprietary Concern) led by Adv. Mayura Maru — a team of expert and experienced lawyers to help you with every aspect of your legal needs across Maharashtra.
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
              { label: "Our Team", id: "partners" },
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
            <Link
              href="/blog"
              style={{
                display: "block",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.45)",
                padding: "5px 0",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)"; }}
            >
              Legal Blog
            </Link>
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
              Our Team
            </div>
            {[
              { name: "Adv. Mayura Maru", role: "Proprietor" },
              { name: "Adv. Uzma Khan", role: "Senior Associate" },
              { name: "Adv. Pratap Tengire", role: "Associate" },
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
            © {year} Artha Juris Legal Consultancy. All rights reserved.
          </div>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              gap: "24px",
              flexWrap: "wrap",
            }}
          >
            <span>Legal Consultancy (Proprietary Concern) · Mumbai, Maharashtra</span>
            <a 
              href="https://wa.me/919930883358" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#25D366",
                textDecoration: "none",
                fontWeight: 600,
                opacity: 0.9,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.9"; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
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
