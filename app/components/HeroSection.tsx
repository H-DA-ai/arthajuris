"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showFirmPopup, setShowFirmPopup] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
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

      // Draw connecting lines
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(201, 168, 76, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animFrame = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        id="home"
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Image with Dark Overlay */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/hero_bg.png"
            alt="Arthajuris Background"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(7, 14, 26, 0.92) 0%, rgba(15, 28, 53, 0.85) 40%, rgba(22, 40, 71, 0.75) 100%)",
            }}
          />
        </div>

        {/* Animated Canvas Background */}
        <canvas
          ref={canvasRef}
          style={{ position: "absolute", inset: 0, zIndex: 1, opacity: 0.5 }}
        />

        {/* Decorative Elements */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "8%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            border: "1px solid rgba(201, 168, 76, 0.08)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "15%",
            right: "10%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "1px solid rgba(201, 168, 76, 0.12)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            left: "5%",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            border: "1px solid rgba(201, 168, 76, 0.06)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* Gold corner accents */}
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: "40px",
            width: "60px",
            height: "60px",
            borderTop: "2px solid var(--gold)",
            borderLeft: "2px solid var(--gold)",
            opacity: 0.4,
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "40px",
            width: "60px",
            height: "60px",
            borderBottom: "2px solid var(--gold)",
            borderRight: "2px solid var(--gold)",
            opacity: 0.4,
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "120px", paddingBottom: "100px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: "60px",
              alignItems: "center",
            }}
            className="hero-grid"
          >
            {/* Left Column — Text content */}
            <div>
              {/* Eyebrow */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "28px",
                  animation: "fadeInUp 0.8s ease forwards",
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "1px",
                    background: "var(--gold)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                  }}
                >
                  Established 2025 · Mumbai, India
                </span>
              </div>

              {/* Main Heading with Interactive Firm Name */}
              <h1
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(3rem, 5.5vw, 4.8rem)",
                  fontWeight: 800,
                  color: "var(--white)",
                  lineHeight: 1.1,
                  marginBottom: "0",
                  animation: "fadeInUp 0.8s 0.1s ease forwards",
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                Where{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    color: "var(--gold)",
                    fontWeight: 700,
                  }}
                >
                  Justice
                </em>
                <br />
                Meets{" "}
                <button
                  onClick={() => setShowFirmPopup(true)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "inherit",
                    fontWeight: "inherit",
                    color: "inherit",
                    padding: 0,
                    display: "inline",
                    lineHeight: "inherit",
                    position: "relative",
                    textDecoration: "underline",
                    textDecorationColor: "rgba(201, 168, 76, 0.4)",
                    textUnderlineOffset: "6px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--gold)";
                    (e.currentTarget as HTMLButtonElement).style.textDecorationColor = "var(--gold)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = "var(--white)";
                    (e.currentTarget as HTMLButtonElement).style.textDecorationColor = "rgba(201, 168, 76, 0.4)";
                  }}
                  title="Click to learn more about ArthajurisLaw"
                >
                  Arthajuris
                </button>
              </h1>

              {/* Subtitle */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(0.9375rem, 1.8vw, 1.125rem)",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.8,
                  marginTop: "28px",
                  marginBottom: "48px",
                  maxWidth: "580px",
                  animation: "fadeInUp 0.8s 0.2s ease forwards",
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                A distinguished legal practice at the intersection of corporate excellence
                and compassionate client advocacy. Three experienced advocates, one unified vision.
              </p>

              {/* CTA Buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  flexWrap: "wrap",
                  animation: "fadeInUp 0.8s 0.3s ease forwards",
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                <button onClick={scrollToBooking} className="btn-primary" style={{ fontSize: "0.8125rem" }}>
                  <span>Book a Consultation</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <button onClick={scrollToAbout} className="btn-outline" style={{ fontSize: "0.8125rem" }}>
                  <span>Discover Our Firm</span>
                </button>
              </div>

              {/* Stats */}
              <div
                style={{
                  display: "flex",
                  gap: "48px",
                  marginTop: "64px",
                  flexWrap: "wrap",
                  animation: "fadeInUp 0.8s 0.4s ease forwards",
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                {[
                  { number: "22+", label: "Years Combined Experience" },
                  { number: "3", label: "Expert Partners" },
                  { number: "6+", label: "Practice Areas" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "2.5rem",
                        fontWeight: 700,
                        color: "var(--gold)",
                        lineHeight: 1,
                      }}
                    >
                      {stat.number}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.5)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginTop: "6px",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column — Elegant visual image */}
            <div
              className="hero-image-container"
              style={{
                position: "relative",
                width: "100%",
                height: "440px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: "fadeInUp 1s 0.3s ease forwards",
                opacity: 0,
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "2px solid rgba(201, 168, 76, 0.25)",
                  boxShadow: "0 20px 50px rgba(15, 28, 53, 0.4)",
                  background: "var(--navy-light)",
                }}
              >
                <Image
                  src="/scales_justice.png"
                  alt="Arthajuris Law"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 900px) 100vw, 40vw"
                  priority
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(15, 28, 53, 0.6) 0%, transparent 100%)",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Decorative gold outline frame */}
              <div
                style={{
                  position: "absolute",
                  inset: "15px -15px -15px 15px",
                  border: "1px solid var(--gold)",
                  borderRadius: "12px",
                  zIndex: -1,
                  opacity: 0.35,
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            animation: "heroFloat 2s ease-in-out infinite",
            cursor: "pointer",
            zIndex: 2,
          }}
          onClick={scrollToAbout}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.625rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "24px",
              height: "36px",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "12px",
              display: "flex",
              justifyContent: "center",
              paddingTop: "6px",
            }}
          >
            <div
              style={{
                width: "3px",
                height: "8px",
                background: "var(--gold)",
                borderRadius: "2px",
                animation: "scrollBob 1.5s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </section>

      {/* Firm Name Popup */}
      {showFirmPopup && (
        <div
          className="overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowFirmPopup(false);
          }}
        >
          <div className="popup" style={{ maxWidth: "520px", padding: "0" }}>
            {/* Popup Header */}
            <div
              style={{
                background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)",
                padding: "40px 40px 32px",
                borderRadius: "8px 8px 0 0",
                position: "relative",
              }}
            >
              <button
                onClick={() => setShowFirmPopup(false)}
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
                  fontSize: "1rem",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.15)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)";
                }}
              >
                ✕
              </button>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "12px",
                }}
              >
                About Our Name
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2rem",
                  color: "var(--white)",
                  fontWeight: 700,
                }}
              >
                Arthajuris
              </h2>
              <div
                style={{
                  width: "40px",
                  height: "2px",
                  background: "var(--gold)",
                  margin: "16px 0",
                }}
              />
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.1rem",
                  color: "rgba(255,255,255,0.7)",
                  fontStyle: "italic",
                  lineHeight: 1.6,
                }}
              >
                From Sanskrit <em style={{ color: "var(--gold-light)" }}>&ldquo;Artha&rdquo;</em> (meaning, purpose, wealth) and
                Latin <em style={{ color: "var(--gold-light)" }}>&ldquo;Juris&rdquo;</em> (of law, justice)
              </p>
            </div>

            {/* Popup Body */}
            <div style={{ padding: "32px 40px 40px" }}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9375rem",
                  color: "var(--text-mid)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                <strong style={{ color: "var(--navy)" }}>Arthajuris</strong> is where meaning meets the law. Our name reflects
                our belief that legal practice is not merely procedural — it is purposeful. We exist to bring
                clarity, protection, and resolution to those who seek it.
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9375rem",
                  color: "var(--text-mid)",
                  lineHeight: 1.8,
                }}
              >
                Founded by three experienced Mumbai advocates — Adv. Mayura Maru, Adv. Pratap Temgire,
                and Adv. Uzma Khan — the firm brings together over two decades of combined expertise in
                civil, corporate, property, and family law.
              </p>
              <button
                onClick={() => {
                  setShowFirmPopup(false);
                  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-primary"
                style={{ marginTop: "28px", fontSize: "0.8125rem" }}
              >
                <span>Learn More About Us</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes scrollBob {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.3; }
        }
        @keyframes heroFloat {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-8px); }
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center !important;
          }
          .hero-grid > div:first-child {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .hero-grid h1 {
            text-align: center !important;
          }
          .hero-grid p {
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .hero-grid div {
            justify-content: center !important;
          }
          .hero-image-container {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
