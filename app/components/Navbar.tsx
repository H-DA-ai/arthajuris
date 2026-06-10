"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Update active section based on scroll position
      const sections = ["home", "about", "partners", "practice", "booking", "contact"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home", id: "home" },
    { href: "#about", label: "About", id: "about" },
    { href: "#partners", label: "Expert Lawyers", id: "partners" },
    { href: "#practice", label: "Practice Areas", id: "practice" },
    { href: "#booking", label: "Consultation", id: "booking" },
    { href: "#contact", label: "Contact", id: "contact" },
  ];

  const blogLink = { href: "/blog", label: "Blog", id: "blog" };

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    if (pathname !== "/") {
      router.push(`/#${id}`);
      setMenuOpen(false);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          transition: "all 0.4s ease",
          padding: scrolled ? "12px 0" : "20px 0",
          background: scrolled
            ? "rgba(15, 28, 53, 0.97)"
            : "linear-gradient(180deg, rgba(15, 28, 53, 0.95) 0%, transparent 100%)",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201, 168, 76, 0.15)" : "none",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: 0,
            }}
          >
            <div style={{ position: "relative", width: "64px", height: "64px" }}>
              <Image
                src="/new_logo.jpg"
                alt="Artha Juris Law Logo"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "var(--white)",
                  lineHeight: 1,
                  letterSpacing: "0.02em",
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
                  color: "var(--gold)",
                  textTransform: "uppercase",
                  marginTop: "3px",
                }}
              >
                Advocates & Consultants
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              gap: "4px",
              alignItems: "center",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.href)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                    color:
                      activeSection === link.id
                        ? "var(--gold)"
                        : "rgba(255,255,255,0.85)",
                    padding: "8px 14px",
                    borderRadius: "2px",
                    transition: "all 0.25s ease",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== link.id) {
                      (e.target as HTMLButtonElement).style.color = "var(--white)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== link.id) {
                      (e.target as HTMLButtonElement).style.color = "rgba(255,255,255,0.85)";
                    }
                  }}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: "4px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "16px",
                        height: "1px",
                        background: "var(--gold)",
                        borderRadius: "1px",
                        display: "block",
                      }}
                    />
                  )}
                </button>
              </li>
            ))}
            {/* Blog — external page link */}
            <li>
              <Link
                href={blogLink.href}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  color: "rgba(255,255,255,0.85)",
                  padding: "8px 14px",
                  borderRadius: "2px",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "color 0.25s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.85)"; }}
              >
                Blog
              </Link>
            </li>
            <li style={{ marginLeft: "12px" }}>
              <button
                onClick={() => scrollTo("#booking")}
                className="btn-primary"
                style={{ padding: "10px 22px", fontSize: "0.75rem" }}
              >
                <span>Book Consultation</span>
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "none",
              flexDirection: "column",
              gap: "5px",
              padding: "8px",
            }}
            aria-label="Toggle navigation"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "22px",
                  height: "1.5px",
                  background: "var(--white)",
                  borderRadius: "2px",
                  transition: "all 0.3s ease",
                  transform:
                    menuOpen
                      ? i === 0
                        ? "translateY(6.5px) rotate(45deg)"
                        : i === 1
                        ? "scaleX(0)"
                        : "translateY(-6.5px) rotate(-45deg)"
                      : "none",
                }}
              />
            ))}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            style={{
              background: "rgba(15, 28, 53, 0.98)",
              backdropFilter: "blur(20px)",
              borderTop: "1px solid rgba(201, 168, 76, 0.2)",
              padding: "16px 0",
            }}
          >
            <div className="container">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.href)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    color:
                      activeSection === link.id ? "var(--gold)" : "var(--white)",
                    padding: "12px 0",
                    borderBottom: "1px solid rgba(201, 168, 76, 0.08)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {link.label}
                </button>
              ))}
              {/* Blog mobile link */}
              <Link
                href="/blog"
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  color: "var(--white)",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(201, 168, 76, 0.08)",
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                }}
              >
                Blog
              </Link>
              <button
                onClick={() => scrollTo("#booking")}
                className="btn-primary w-full"
                style={{ marginTop: "16px", justifyContent: "center" }}
              >
                <span>Book Consultation</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
