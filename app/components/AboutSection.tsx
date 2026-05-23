"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AboutSection() {
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
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Integrity",
      desc: "We uphold the highest ethical standards in every engagement, ensuring transparent and honest counsel.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
        </svg>
      ),
      title: "Diligence",
      desc: "Every case receives our full attention and thorough preparation — we leave nothing to chance.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Client First",
      desc: "Your interests are our priority. We build long-term relationships rooted in trust and results.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      title: "Excellence",
      desc: "We pursue exceptional outcomes through deep expertise, strategic thinking, and rigorous execution.",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section"
      style={{ background: "var(--cream)" }}
    >
      <div className="container">
        {/* Top Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
            marginBottom: "80px",
          }}
          className="about-grid"
        >
          {/* Left */}
          <div>
            <div
              className="reveal section-tag"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
            >
              About the Firm
            </div>
            <h2
              className="reveal section-title"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
            >
              A New Chapter in{" "}
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--gold)",
                  background: "linear-gradient(135deg, var(--gold), var(--gold-light))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Legal Excellence
              </em>
            </h2>
            <div
              className="reveal gold-divider"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease" }}
            />
            <p
              className="reveal"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                color: "var(--text-mid)",
                lineHeight: 1.8,
                marginBottom: "20px",
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.6s ease",
              }}
            >
              ArthajurisLaw is a newly established Mumbai-based law firm founded by three accomplished legal
              professionals who bring together decades of combined experience across diverse areas of law.
              Our firm is built on the conviction that clients deserve not just legal representation, but a
              trusted partner who understands the full context of their needs.
            </p>
            <p
              className="reveal"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                color: "var(--text-mid)",
                lineHeight: 1.8,
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0.6s ease",
              }}
            >
              With a strong presence at the Bombay High Court and courts across Maharashtra, we handle
              matters for individual clients, corporations, banks, and financial institutions with equal
              dedication and professionalism.
            </p>
          </div>

          {/* Right — Visual Card */}
          <div
            className="reveal"
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "all 0.6s ease",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {/* Image Container */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "260px",
                borderRadius: "8px",
                overflow: "hidden",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <Image
                src="/office_interior.png"
                alt="Arthajuris Corporate Office"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 900px) 100vw, 50vw"
                priority
              />
            </div>

            <div
              style={{
                background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)",
                borderRadius: "8px",
                padding: "48px 40px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative circles */}
              <div
                style={{
                  position: "absolute",
                  top: "-30px",
                  right: "-30px",
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  border: "1px solid rgba(201, 168, 76, 0.12)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  left: "-20px",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  border: "1px solid rgba(201, 168, 76, 0.08)",
                }}
              />

              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.5rem",
                  color: "rgba(255,255,255,0.6)",
                  fontStyle: "italic",
                  lineHeight: 1.4,
                  marginBottom: "32px",
                  position: "relative",
                }}
              >
                &ldquo;The law is reason, free from passion.&rdquo;
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  color: "var(--gold)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                — Aristotle
              </div>
              <div style={{ height: "1px", background: "rgba(201, 168, 76, 0.15)", margin: "32px 0" }} />

              {/* Key facts */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                {[
                  { label: "High Court Bombay", sublabel: "Registered & Active" },
                  { label: "Pan-Maharashtra", sublabel: "Court Coverage" },
                  { label: "Multi-Disciplinary", sublabel: "Practice Areas" },
                  { label: "Individual & Corporate", sublabel: "Clientele" },
                ].map((fact) => (
                  <div key={fact.label}>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "var(--white)",
                        marginBottom: "4px",
                      }}
                    >
                      {fact.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.4)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {fact.sublabel}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative offset block */}
            <div
              style={{
                position: "absolute",
                bottom: "-16px",
                right: "-16px",
                width: "80px",
                height: "80px",
                background: "rgba(201, 168, 76, 0.12)",
                borderRadius: "4px",
                zIndex: -1,
              }}
            />
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="reveal section-tag" style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease", display: "inline-flex" }}>
              Our Core Values
            </div>
          </div>
          <div className="grid-4">
            {values.map((val) => (
              <div
                key={val.title}
                className="reveal card"
                style={{
                  opacity: 0,
                  transform: "translateY(20px)",
                  transition: "all 0.6s ease",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    background: "rgba(201, 168, 76, 0.08)",
                    border: "1px solid rgba(201, 168, 76, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    color: "var(--gold)",
                    transition: "all 0.3s ease",
                  }}
                  className="value-icon"
                >
                  {val.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.25rem",
                    color: "var(--navy)",
                    marginBottom: "12px",
                    fontWeight: 600,
                  }}
                >
                  {val.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    color: "var(--text-mid)",
                    lineHeight: 1.7,
                  }}
                >
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        .card:hover .value-icon {
          background: rgba(201, 168, 76, 0.15) !important;
          border-color: var(--gold) !important;
          box-shadow: 0 0 24px rgba(201, 168, 76, 0.2) !important;
        }
      `}</style>
    </section>
  );
}
