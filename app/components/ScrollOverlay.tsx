"use client";
import { useEffect, useState } from "react";

export default function ScrollOverlay() {
  const [triggered, setTriggered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger when user scrolls past 300px
      if (!triggered && window.scrollY > 300) {
        setTriggered(true);
        setVisible(true);
        
        // Hide it after the animation completes (approx 3 seconds)
        setTimeout(() => {
          setVisible(false);
        }, 3000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [triggered]);

  if (!triggered) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(10, 22, 40, 0.95)", // Transparent blue of the theme
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.8s ease-in-out",
      }}
    >
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "3rem",
          color: "var(--gold)",
          fontWeight: 700,
          textAlign: "center",
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.9)",
          transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
          transitionDelay: "0.2s",
          padding: "0 20px",
        }}
      >
        An Excellent Choice for <br />
        <span style={{ fontStyle: "italic", color: "var(--white)" }}>Your Justice</span>
      </div>
    </div>
  );
}
