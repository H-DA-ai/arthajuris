"use client";
import { useEffect, useState } from "react";

export default function DisclaimerModal() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [step, setStep] = useState<"disclaimer" | "enquiry">("disclaimer");

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const disclaimerAccepted = localStorage.getItem("arthajuris_disclaimer_accepted");
    const enquirySubmitted = localStorage.getItem("arthajuris_enquiry_submitted");

    if (!disclaimerAccepted) {
      setStep("disclaimer");
      setVisible(true);
      document.body.style.overflow = "hidden";
    } else if (!enquirySubmitted) {
      setStep("enquiry");
      setVisible(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem("arthajuris_disclaimer_accepted", "true");
    const enquirySubmitted = localStorage.getItem("arthajuris_enquiry_submitted");
    if (!enquirySubmitted) {
      setStep("enquiry");
    } else {
      setExiting(true);
      document.body.style.overflow = "auto";
      setTimeout(() => setVisible(false), 400);
    }
  };

  const handleDisagree = () => {
    // Redirect away — user doesn't agree to terms
    window.location.href = "https://www.google.com";
  };

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) {
      setError("Name and Contact Number are required.");
      return;
    }
    
    // Mark as submitted in local storage
    localStorage.setItem("arthajuris_enquiry_submitted", "true");
    
    // Optional: Could send data to an API here if needed in the future
    // await fetch('/api/enquiry', { method: 'POST', body: JSON.stringify({ name, contact }) });

    setExiting(true);
    document.body.style.overflow = "auto";
    setTimeout(() => setVisible(false), 400);
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
            maxWidth: step === "disclaimer" ? "600px" : "450px",
            width: "100%",
            maxHeight: "92vh",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            fontFamily: "Arial, sans-serif",
            borderRadius: "8px",
            transition: "max-width 0.4s ease",
            animation: exiting
              ? "disclaimerSlideOut 0.4s ease forwards"
              : "disclaimerSlideIn 0.5s ease forwards",
          }}
        >
          {/* Scrollable Body */}
          <div style={{ overflowY: "auto", padding: "40px", flex: 1 }}>
            {step === "disclaimer" ? (
              <>
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
                    "The user independently looking to gain more information about Artha Juris, its practice areas and its attorneys, for his/her own information and use.",
                    "None of the information contained on the website is in the nature of a legal opinion or otherwise amounts to any legal advice.",
                    "No advertisements, personal communications, solicitations, invitations, or other forms of inducement of any kind have been made by or on behalf of Artha Juris or any of its members to solicit work through this website"
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
                      transition: "all 0.2s ease"
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = "#0f1c35";
                      e.currentTarget.style.color = "#ffffff";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#0f1c35";
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
                      transition: "all 0.2s ease"
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = "#0f1c35";
                      e.currentTarget.style.color = "#ffffff";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#0f1c35";
                    }}
                  >
                    I Disagree
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: 800,
                    color: "#0f1c35",
                    textAlign: "center",
                    margin: "0 0 10px 0",
                  }}
                >
                  Welcome
                </h2>
                <p
                  style={{
                    textAlign: "center",
                    color: "#666666",
                    marginBottom: "28px",
                    lineHeight: 1.5,
                  }}
                >
                  Please provide your details to proceed to the Artha Juris website.
                </p>
                
                <form
                  onSubmit={handleEnquirySubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  {error && (
                    <div style={{ color: "#d93025", fontSize: "0.9rem", textAlign: "center", fontWeight: 600 }}>
                      {error}
                    </div>
                  )}
                  
                  <div>
                    <label style={{ display: "block", marginBottom: "6px", fontSize: "0.9rem", fontWeight: 600, color: "#444" }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        fontSize: "1rem",
                        fontFamily: "Arial, sans-serif",
                        boxSizing: "border-box"
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", marginBottom: "6px", fontSize: "0.9rem", fontWeight: 600, color: "#444" }}>
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      required
                      style={{
                        width: "100%",
                        padding: "12px 14px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        fontSize: "1rem",
                        fontFamily: "Arial, sans-serif",
                        boxSizing: "border-box"
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      marginTop: "12px",
                      padding: "14px",
                      background: "#0f1c35",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "4px",
                      fontSize: "1rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      textTransform: "uppercase",
                      transition: "background 0.2s ease"
                    }}
                    onMouseOver={(e) => e.currentTarget.style.background = "#1a2f58"}
                    onMouseOut={(e) => e.currentTarget.style.background = "#0f1c35"}
                  >
                    Enter Website
                  </button>
                </form>
              </>
            )}
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
