"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const stats = [
  { number: "25+", label: "Years at Bombay High Court" },
  { number: "6+", label: "Practice Areas" },
  { number: "500+", label: "Matters Handled" },
  { number: "Team", label: "of Expert Lawyers" },
];

const features = [
  "Corporate & Commercial Law",
  "Property & Real Estate",
  "Banking & Debt Recovery",
  "Civil & Family Law",
];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showFirmPopup, setShowFirmPopup] = useState(false);
  const [activeWord, setActiveWord] = useState(0);

  const rotatingWords = ["Excellence", "Justice", "Integrity", "Precision"];

  // Rotating headline effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.4 + 0.08,
      });
    }

    let animFrame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 168, 76, ${p.alpha})`;
        ctx.fill();
      });
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(201, 168, 76, ${0.05 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animFrame = requestAnimationFrame(animate);
    };
    animate();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const scrollToBooking = () => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  const scrollToAbout = () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <section
        id="home"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Background */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0, background: "#050a15" }}>
          <Image
            src="/wide_law_room.png"
            alt="Arthajuris"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          {/* Multi-layer overlay for depth */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, rgba(5, 10, 22, 0.97) 0%, rgba(10, 22, 40, 0.93) 45%, rgba(15, 28, 53, 0.82) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 70% 50%, rgba(201, 168, 76, 0.04) 0%, transparent 60%)" }} />
        </div>

        {/* Canvas */}
        <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, zIndex: 1, opacity: 0.6 }} />

        {/* Decorative gold lines */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)", zIndex: 2 }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)", zIndex: 2 }} />

        {/* Corner accents */}
        <div style={{ position: "absolute", top: "80px", left: "32px", width: "48px", height: "48px", borderTop: "1.5px solid rgba(201,168,76,0.5)", borderLeft: "1.5px solid rgba(201,168,76,0.5)", zIndex: 2 }} />
        <div style={{ position: "absolute", bottom: "80px", right: "32px", width: "48px", height: "48px", borderBottom: "1.5px solid rgba(201,168,76,0.5)", borderRight: "1.5px solid rgba(201,168,76,0.5)", zIndex: 2 }} />

        {/* Floating circles */}
        <div style={{ position: "absolute", top: "12%", right: "6%", width: "340px", height: "340px", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.06)", zIndex: 1, animation: "float 8s ease-in-out infinite" }} />
        <div style={{ position: "absolute", top: "18%", right: "9%", width: "220px", height: "220px", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.09)", zIndex: 1 }} />

        {/* Main Content */}
        <div className="container" style={{ position: "relative", zIndex: 3, paddingTop: "140px", paddingBottom: "80px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: "64px", alignItems: "center" }} className="hero-grid">

            {/* LEFT — Text */}
            <div>
              {/* Top badge */}
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "32px",
                padding: "6px 16px 6px 8px",
                background: "rgba(201,168,76,0.08)",
                border: "1px solid rgba(201,168,76,0.2)",
                borderRadius: "2px",
                animation: "fadeInUp 0.7s ease forwards",
                opacity: 0,
                animationFillMode: "forwards",
              }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--gold)", display: "inline-block" }} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)" }}>
                  Proprietary Concern · Est. 2025 · Mumbai
                </span>
              </div>

              {/* Headline with rotating word */}
              <h1 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.75rem, 5vw, 4.5rem)",
                fontWeight: 800,
                color: "var(--white)",
                lineHeight: 1.1,
                marginBottom: "0",
                animation: "fadeInUp 0.7s 0.1s ease forwards",
                opacity: 0,
                animationFillMode: "forwards",
              }}>
                Legal{" "}
                <span style={{
                  display: "inline-block",
                  color: "var(--gold)",
                  fontStyle: "italic",
                  minWidth: "280px",
                  position: "relative",
                  transition: "opacity 0.3s ease",
                }}>
                  {rotatingWords[activeWord]}
                </span>
                <br />
                <span style={{ color: "var(--white)" }}>Starts Here</span>
              </h1>

              {/* Divider */}
              <div style={{
                width: "64px",
                height: "2px",
                background: "linear-gradient(90deg, var(--gold), transparent)",
                margin: "24px 0",
                animation: "fadeInUp 0.7s 0.15s ease forwards",
                opacity: 0,
                animationFillMode: "forwards",
              }} />

              {/* Sub-headline */}
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(0.9rem, 1.6vw, 1.0625rem)",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.85,
                maxWidth: "520px",
                marginBottom: "32px",
                animation: "fadeInUp 0.7s 0.2s ease forwards",
                opacity: 0,
                animationFillMode: "forwards",
              }}>
                A distinguished legal consultancy led by{" "}
                <button
                  onClick={() => setShowFirmPopup(true)}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(201,168,76,0.9)", fontFamily: "'Inter', sans-serif", fontSize: "inherit", fontWeight: 600, padding: 0, display: "inline", textDecoration: "underline", textDecorationColor: "rgba(201,168,76,0.4)", textUnderlineOffset: "3px" }}
                >
                  Adv. Mayura Maru
                </button>
                {" "}— 25+ years at the Bombay High Court, serving individuals, corporations, and institutions across Maharashtra with excellence and integrity.
              </p>

              {/* Practice area pills */}
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "40px",
                animation: "fadeInUp 0.7s 0.25s ease forwards",
                opacity: 0,
                animationFillMode: "forwards",
              }}>
                {features.map((f) => (
                  <span key={f} style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.7)",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "5px 12px",
                    borderRadius: "2px",
                    letterSpacing: "0.04em",
                  }}>
                    {f}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                animation: "fadeInUp 0.7s 0.3s ease forwards",
                opacity: 0,
                animationFillMode: "forwards",
              }}>
                <button onClick={scrollToBooking} className="btn-primary" style={{ fontSize: "0.8125rem", padding: "14px 28px" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>Book a Consultation</span>
                </button>
                <button onClick={scrollToAbout} className="btn-outline" style={{ fontSize: "0.8125rem", padding: "14px 28px" }}>
                  <span>Discover Our Firm</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Stats row */}
              <div style={{
                display: "flex",
                gap: "0",
                marginTop: "64px",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                paddingTop: "32px",
                animation: "fadeInUp 0.7s 0.4s ease forwards",
                opacity: 0,
                animationFillMode: "forwards",
              }} className="hero-stats">
                {stats.map((stat, i) => (
                  <div key={stat.label} style={{
                    flex: 1,
                    paddingRight: i < stats.length - 1 ? "24px" : "0",
                    marginRight: i < stats.length - 1 ? "24px" : "0",
                    borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  }}>
                    <div style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(1.75rem, 2.5vw, 2.25rem)",
                      fontWeight: 700,
                      color: "var(--gold)",
                      lineHeight: 1,
                      marginBottom: "4px",
                    }}>
                      {stat.number}
                    </div>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.68rem",
                      color: "rgba(255,255,255,0.4)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Elegant visual card */}
            <div className="hero-image-container" style={{
              position: "relative",
              animation: "fadeInUp 1s 0.35s ease forwards",
              opacity: 0,
              animationFillMode: "forwards",
            }}>
              {/* Main image frame */}
              <div style={{
                position: "relative",
                borderRadius: "3px",
                overflow: "hidden",
                boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
                border: "1px solid rgba(201,168,76,0.25)",
                background: "#050a15", // dark background in case of letterboxing
              }}>
                <div style={{ position: "relative", width: "100%", paddingTop: "90%" }}>
                  <Image
                    src="/scales_justice.png"
                    alt="Arthajuris Legal Consultancy"
                    fill
                    style={{ objectFit: "contain", objectPosition: "center" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,10,22,0.85) 0%, rgba(5,10,22,0.2) 50%, transparent 100%)" }} />
                </div>

                {/* Bottom overlay on image */}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "28px 28px 24px",
                }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "8px" }}>
                    ✦ Artha Juris Legal Consultancy
                  </div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.125rem", color: "var(--white)", fontWeight: 600, lineHeight: 1.3 }}>
                    Where Justice Meets<br />Artha Juris
                  </div>
                </div>
              </div>

              {/* Gold offset frame */}
              <div style={{
                position: "absolute",
                inset: "14px -14px -14px 14px",
                border: "1px solid rgba(201,168,76,0.2)",
                borderRadius: "3px",
                zIndex: -1,
              }} />

              {/* Floating info card */}
              <div style={{
                position: "absolute",
                top: "24px",
                right: "-32px",
                background: "rgba(15, 28, 53, 0.95)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(201,168,76,0.2)",
                borderRadius: "6px",
                padding: "16px 20px",
                minWidth: "180px",
                boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
              }} className="hero-floating-card">
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80", flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.06em" }}>Accepting Consultations</span>
                </div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", color: "var(--white)", fontWeight: 700 }}>
                  Book Today
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "var(--gold)", marginTop: "4px" }}>
                  Response within 24 hours
                </div>
              </div>


            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          animation: "fadeIn 1s 1.2s forwards",
          opacity: 0,
          animationFillMode: "forwards",
          cursor: "pointer",
        }} onClick={scrollToAbout}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Scroll</span>
          <div style={{
            width: "22px",
            height: "36px",
            border: "1.5px solid rgba(255,255,255,0.15)",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "6px",
          }}>
            <div style={{
              width: "3px",
              height: "8px",
              background: "var(--gold)",
              borderRadius: "2px",
              animation: "scrollBob 1.8s ease-in-out infinite",
            }} />
          </div>
        </div>
      </section>

      {/* Firm Name Popup */}
      {showFirmPopup && (
        <div className="overlay" onClick={() => setShowFirmPopup(false)}>
          <div className="popup" style={{ maxWidth: "520px" }} onClick={(e) => e.stopPropagation()}>
            <div style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)", padding: "36px 40px 28px", borderBottom: "1px solid rgba(201,168,76,0.15)", position: "relative" }}>
              <button onClick={() => setShowFirmPopup(false)} style={{ position: "absolute", top: "16px", right: "16px", background: "rgba(255,255,255,0.08)", border: "none", color: "var(--white)", width: "30px", height: "30px", borderRadius: "50%", cursor: "pointer", fontSize: "0.9rem", display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "10px" }}>About the Name</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", color: "var(--white)", marginBottom: "0" }}>
                Artha<em style={{ color: "var(--gold)" }}> Juris</em>
              </h3>
            </div>
            <div style={{ padding: "32px 40px" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9375rem", color: "var(--text-mid)", lineHeight: 1.8, marginBottom: "16px" }}>
                <strong style={{ color: "var(--navy)" }}>Artha Juris</strong> is where meaning meets the law. Our name reflects our conviction that legal practice is not merely procedural — it is purposeful. We exist to bring clarity, protection, and resolution to all who seek it.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.95rem", color: "rgba(15, 28, 53, 0.7)", lineHeight: 1.8 }}>
                 Led by <strong style={{ color: "var(--navy)" }}>Adv. Mayura Maru</strong> — Proprietor and founder — with over 25 years of practice at the Bombay High Court, Artha Juris is supported by a team of expert and experienced lawyers bringing deep expertise across every aspect of law in Maharashtra.
              </p>
              <div style={{ display: "flex", gap: "12px" }}>
                <button onClick={() => { setShowFirmPopup(false); scrollToAbout(); }} className="btn-primary" style={{ fontSize: "0.8125rem" }}>
                  <span>Learn More</span>
                </button>
                <button onClick={() => setShowFirmPopup(false)} className="btn-outline" style={{ fontSize: "0.8125rem" }}>
                  <span>Close</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes scrollBob {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(10px); opacity: 0.3; }
        }
        @media (max-width: 1024px) {
          .hero-floating-card { right: -12px !important; }
          .hero-badge-card { left: -12px !important; }
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-image-container { display: none !important; }
          .hero-stats { gap: 0 !important; }
        }
        @media (max-width: 600px) {
          .hero-stats { flex-wrap: wrap; gap: 20px !important; }
          .hero-stats > div { border-right: none !important; min-width: 40%; }
        }
      `}</style>
    </>
  );
}
