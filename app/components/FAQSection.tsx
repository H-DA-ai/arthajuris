"use client";
import { useState, useEffect, useRef } from "react";

const faqs = [
  {
    question: "Where is Artha Juris located?",
    answer: "Our primary office is located in Fort, Mumbai, but our practice extends extensively across Navi Mumbai, Panvel, Thane, and the Raigad district. We regularly appear before all major courts and tribunals in Maharashtra.",
  },
  {
    question: "Do you handle property and real estate matters in Navi Mumbai?",
    answer: "Yes, absolutely. Adv. Mayura Maru has immense experience with Navi Mumbai property matters, RERA, and CIDCO regulations. She is well-known for her landmark PIL No. 138 of 2012 concerning unauthorized constructions in Navi Mumbai and the Trans-Thane Creek area.",
  },
  {
    question: "What are your primary areas of practice?",
    answer: "We specialize in Corporate & Business Law, Real Estate & Property Due Diligence, Civil Litigation, Family Law, and Banking & Finance (including DRT, DRAT, and NCLT proceedings).",
  },
  {
    question: "How do I book a consultation?",
    answer: "You can book a consultation directly through our website by filling out the Booking Form in the section below. There is a standard consultation fee of ₹3,500 which can be paid securely via our UPI QR code.",
  },
  {
    question: "Can I get a consultation online or over the phone?",
    answer: "Yes, we offer both in-person consultations at our office and remote consultations (online/telephonic) depending on your preference and location.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal-left, .reveal-up");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: "80px 0", background: "var(--white)", overflow: "hidden" }} id="faqs">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "56px" }} className="reveal-up">
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "14px" }}>
            Common Queries
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--navy)", marginBottom: "0" }}>
            Frequently Asked <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Questions</em>
          </h2>
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="reveal-left"
              style={{
                marginBottom: "16px",
                border: "1px solid var(--border-light)",
                borderRadius: "6px",
                background: "var(--cream)",
                overflow: "hidden",
                transitionDelay: \`\${index * 0.1}s\`,
              }}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "20px 24px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--navy)",
                }}
              >
                <span>{faq.question}</span>
                <span style={{ 
                  color: "var(--gold)", 
                  transform: activeIndex === index ? "rotate(45deg)" : "rotate(0)",
                  transition: "transform 0.3s ease",
                  fontSize: "1.5rem",
                  lineHeight: 1
                }}>
                  +
                </span>
              </button>
              
              <div
                style={{
                  maxHeight: activeIndex === index ? "300px" : "0",
                  padding: activeIndex === index ? "0 24px 20px" : "0 24px 0",
                  opacity: activeIndex === index ? 1 : 0,
                  transition: "all 0.3s ease",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9375rem",
                  color: "var(--text-mid)",
                  lineHeight: 1.6,
                }}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .reveal-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .reveal-up {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .reveal-visible {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }
      `}</style>
    </section>
  );
}
