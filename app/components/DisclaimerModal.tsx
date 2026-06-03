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
          background: "rgba(0, 0, 0, 0.75)",
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
            background: "#ffffff",
            maxWidth: "600px",
            width: "100%",
            maxHeight: "92vh",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            fontFamily: "Arial, sans-serif",
            animation: exiting
              ? "disclaimerSlideOut 0.4s ease forwards"
              : "disclaimerSlideIn 0.5s ease forwards",
          }}
        >
          {/* Scrollable Body */}
          <div style={{ overflowY: "auto", padding: "40px", flex: 1 }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 800,
                color: "#444444",
                textAlign: "center",
                margin: "0 0 24px 0",
              }}
            >
              Disclaimer
            </h2>

            <p
              style={{
                fontSize: "1.05rem",
                fontWeight: 700,
                lineHeight: 1.6,
                marginBottom: "20px",
                color: "#666666",
              }}
            >
              The rules of the Bar Council of India prohibit Law Firms and Lawyers from soliciting work or advertising in any manner and impose restrictions on maintaining a web page and do not permit lawyers to provide information concerning their areas of practice.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                fontWeight: 700,
                lineHeight: 1.6,
                marginBottom: "24px",
                color: "#666666",
              }}
            >
              By clicking on 'I AGREE', the user acknowledges that:
            </p>

            <ul style={{ paddingLeft: "40px", margin: "0 0 40px 0", display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "The user independently looking to gain more information about Arthajuris, its practice areas and its attorneys, for his/her own information and use.",
                "None of the information contained on the website is in the nature of a legal opinion or otherwise amounts to any legal advice.",
                "No advertisements, personal communications, solicitations, invitations, or other forms of inducement of any kind have been made by or on behalf of Arthajuris or any of its members to solicit work through this website"
              ].map((point, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    lineHeight: 1.6,
                    color: "#666666",
                    listStyleType: "disc",
                  }}
                >
                  {point}
                </li>
              ))}
            </ul>

            {/* Footer Buttons */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
              }}
            >
              <button
                id="disclaimer-agree-btn"
                onClick={handleAgree}
                style={{
                  flex: 1,
                  maxWidth: "180px",
                  padding: "14px 24px",
                  background: "transparent",
                  border: "2px solid #0f1c35",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "#0f1c35",
                  cursor: "pointer",
                  borderRadius: "3px",
                  textTransform: "uppercase",
                }}
              >
                I Agree
              </button>
              <button
                id="disclaimer-disagree-btn"
                onClick={handleDisagree}
                style={{
                  flex: 1,
                  maxWidth: "180px",
                  padding: "14px 24px",
                  background: "transparent",
                  border: "2px solid #0f1c35",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "#0f1c35",
                  cursor: "pointer",
                  borderRadius: "3px",
                  textTransform: "uppercase",
                }}
              >
                I Disagree
              </button>
            </div>
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
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
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

