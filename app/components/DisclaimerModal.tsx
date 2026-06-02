"use client";
import { useEffect, useState } from "react";

export default function DisclaimerModal() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("arthajuris_disclaimer_accepted");
    if (!accepted) {
      // Small delay so page loads first
      const t = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(t);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem("arthajuris_disclaimer_accepted", "true");
    setExiting(true);
    setTimeout(() => setVisible(false), 400);
  };

  const handleDisagree = () => {
    // Redirect away — user doesn't agree to terms
    window.location.href = "https://www.google.com";
  };

  if (!visible) return null;

  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99999,
          background: "rgba(5, 10, 22, 0.88)",
          backdropFilter: "blur(14px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          animation: exiting
            ? "disclaimerFadeOut 0.4s ease forwards"
            : "disclaimerFadeIn 0.4s ease forwards",
        }}
      >
        <div
          style={{
            background: "var(--white)",
            borderRadius: "8px",
            maxWidth: "600px",
            width: "100%",
            maxHeight: "92vh",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 40px 100px rgba(0,0,0,0.7)",
            border: "1px solid rgba(201,168,76,0.2)",
            animation: exiting
              ? "disclaimerSlideOut 0.4s ease forwards"
              : "disclaimerSlideIn 0.5s cubic-bezier(0.16,1,0.3,1) forwards",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)",
              padding: "32px 40px 28px",
              flexShrink: 0,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Gold accent line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background: "linear-gradient(90deg, transparent, var(--gold), transparent)",
              }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "8px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "2px solid rgba(201,168,76,0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "1.1rem",
                }}
              >
                ⚖️
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.75rem",
                  fontWeight: 700,
                  color: "var(--white)",
                  margin: 0,
                }}
              >
                Disclaimer
              </h2>
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginTop: "4px",
              }}
            >
              ✦ Bar Council of India — Notice
            </div>
          </div>

          {/* Scrollable Body */}
          <div style={{ overflowY: "auto", padding: "32px 40px 8px", flex: 1 }}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9375rem",
                color: "var(--text-mid)",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              The rules of the Bar Council of India prohibit Law Firms and Lawyers from soliciting
              work or advertising in any manner and impose restrictions on maintaining a web page
              and do not permit lawyers to provide information concerning their areas of practice.
            </p>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9375rem",
                color: "var(--text-mid)",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              By clicking on <strong style={{ color: "var(--navy)" }}>&lsquo;I AGREE&rsquo;</strong>, the user acknowledges that:
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "The user is independently looking to gain more information about Artha Juris, its practice areas and its attorneys, for his/her own information and use.",
                "None of the information contained on the website is in the nature of a legal opinion or otherwise amounts to any legal advice.",
                "No advertisements, personal communications, solicitations, invitations, or other forms of inducement of any kind have been made by or on behalf of Artha Juris or any of its members to solicit work through this website.",
              ].map((point, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "14px 16px",
                    background: "rgba(201,168,76,0.04)",
                    border: "1px solid rgba(201,168,76,0.12)",
                    borderRadius: "4px",
                  }}
                >
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      border: "1.5px solid var(--gold)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "1px",
                    }}
                  >
                    <span
                      style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        background: "var(--gold)",
                        display: "inline-block",
                      }}
                    />
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      color: "var(--text-mid)",
                      lineHeight: 1.7,
                    }}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Buttons */}
          <div
            style={{
              padding: "20px 40px 28px",
              flexShrink: 0,
              borderTop: "1px solid var(--border-light)",
              display: "flex",
              gap: "14px",
              justifyContent: "center",
              background: "var(--white)",
            }}
          >
            <button
              id="disclaimer-agree-btn"
              onClick={handleAgree}
              style={{
                flex: 1,
                maxWidth: "200px",
                padding: "14px 24px",
                background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%)",
                border: "none",
                borderRadius: "3px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--navy)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 16px rgba(201,168,76,0.3)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 24px rgba(201,168,76,0.5)";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 16px rgba(201,168,76,0.3)";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
              }}
            >
              I Agree
            </button>
            <button
              id="disclaimer-disagree-btn"
              onClick={handleDisagree}
              style={{
                flex: 1,
                maxWidth: "200px",
                padding: "14px 24px",
                background: "transparent",
                border: "1.5px solid var(--border)",
                borderRadius: "3px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--navy)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--navy)";
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(15,28,53,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
              }}
            >
              I Disagree
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes disclaimerFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes disclaimerFadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes disclaimerSlideIn {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes disclaimerSlideOut {
          from { opacity: 1; transform: scale(1) translateY(0); }
          to { opacity: 0; transform: scale(0.95) translateY(-10px); }
        }
      `}</style>
    </>
  );
}
