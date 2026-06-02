"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "../api/blogs/route";

const categoryColors: Record<string, { bg: string; color: string }> = {
  "New Law":      { bg: "rgba(43,108,176,0.12)",  color: "#2b6cb0" },
  "Case Study":   { bg: "rgba(39,103,73,0.12)",   color: "#276749" },
  "Legal Tip":    { bg: "rgba(183,121,31,0.12)",  color: "#b7791f" },
  "Court Update": { bg: "rgba(112,36,89,0.12)",   color: "#702459" },
};

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function readTime(content: string) {
  const words = content.split(/\s+/).length;
  return `${Math.max(2, Math.ceil(words / 200))} min read`;
}

export default function BlogPreviewSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Intersection observer for reveal animations
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
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Fetch posts
  useEffect(() => {
    fetch("/api/blogs")
      .then((r) => r.json())
      .then((data: BlogPost[]) => {
        setPosts(data.slice(0, 3));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section
      id="blog-preview"
      ref={sectionRef}
      className="section"
      style={{
        background: "linear-gradient(180deg, var(--cream) 0%, var(--cream-dark) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background decorations */}
      <div style={{
        position: "absolute", top: "-80px", right: "-80px",
        width: "400px", height: "400px", borderRadius: "50%",
        border: "1px solid rgba(201,168,76,0.06)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-60px", left: "-60px",
        width: "280px", height: "280px", borderRadius: "50%",
        border: "1px solid rgba(201,168,76,0.05)", pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* ── Section Header ── */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "60px",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
            <div
              className="reveal section-tag"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease", display: "inline-flex" }}
            >
              Legal Insights
            </div>
            <h2
              className="reveal section-title"
              style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease", marginBottom: "12px" }}
            >
              From Our{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Legal Blog</em>
            </h2>
            <p
              className="reveal"
              style={{
                opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease",
                fontFamily: "'Inter', sans-serif", fontSize: "1rem",
                color: "var(--text-mid)", lineHeight: 1.7, maxWidth: "480px",
              }}
            >
              Expert analysis, landmark judgements, and practical legal tips — straight from our advocates.
            </p>
          </div>

          <Link
            href="/blog"
            className="reveal btn-outline"
            style={{
              opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease",
              fontSize: "0.8125rem", display: "inline-flex", alignItems: "center", gap: "8px",
            }}
          >
            <span>View All Articles</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* ── Loading skeleton ── */}
        {loading && (
          <div className="grid-3" style={{ gap: "28px" }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  background: "var(--white)", borderRadius: "8px",
                  border: "1px solid var(--border-light)", overflow: "hidden",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div style={{ height: "8px", background: "rgba(201,168,76,0.15)", width: "100%" }} />
                <div style={{ padding: "28px 28px 32px" }}>
                  <div style={{ height: "12px", background: "rgba(201,168,76,0.12)", borderRadius: "4px", width: "30%", marginBottom: "20px" }} />
                  <div style={{ height: "22px", background: "rgba(15,28,53,0.06)", borderRadius: "4px", width: "90%", marginBottom: "10px" }} />
                  <div style={{ height: "22px", background: "rgba(15,28,53,0.06)", borderRadius: "4px", width: "70%", marginBottom: "20px" }} />
                  <div style={{ height: "14px", background: "rgba(15,28,53,0.04)", borderRadius: "4px", width: "100%", marginBottom: "8px" }} />
                  <div style={{ height: "14px", background: "rgba(15,28,53,0.04)", borderRadius: "4px", width: "80%", marginBottom: "8px" }} />
                  <div style={{ height: "14px", background: "rgba(15,28,53,0.04)", borderRadius: "4px", width: "60%" }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Blog Cards ── */}
        {!loading && posts.length > 0 && (
          <div className="grid-3" style={{ gap: "28px", alignItems: "stretch" }}>
            {posts.map((post, idx) => {
              const catStyle = categoryColors[post.category] || { bg: "rgba(201,168,76,0.1)", color: "var(--gold)" };
              const isFeatured = idx === 0;
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="reveal"
                  style={{
                    opacity: 0, transform: "translateY(30px)",
                    transition: `all 0.7s ease ${idx * 0.1}s`,
                    textDecoration: "none", display: "flex", flexDirection: "column",
                  }}
                >
                  <article
                    style={{
                      background: "var(--white)",
                      borderRadius: "8px",
                      border: isFeatured
                        ? "1px solid rgba(201,168,76,0.3)"
                        : "1px solid var(--border-light)",
                      overflow: "hidden",
                      boxShadow: isFeatured ? "var(--shadow-md)" : "var(--shadow-sm)",
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                      transition: "all 0.35s ease",
                      position: "relative",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "translateY(-8px)";
                      el.style.boxShadow = "var(--shadow-lg)";
                      el.style.borderColor = "rgba(201,168,76,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "translateY(0)";
                      el.style.boxShadow = isFeatured ? "var(--shadow-md)" : "var(--shadow-sm)";
                      el.style.borderColor = isFeatured ? "rgba(201,168,76,0.3)" : "rgba(201,168,76,0.1)";
                    }}
                  >
                    {/* Top gold accent bar */}
                    <div style={{
                      height: isFeatured ? "3px" : "2px",
                      background: isFeatured
                        ? "linear-gradient(90deg, var(--gold), var(--gold-light))"
                        : "linear-gradient(90deg, rgba(201,168,76,0.4), transparent)",
                    }} />

                    {/* Image (if available) */}
                    {post.imageUrl && (
                      <div style={{ position: "relative", height: "180px", flexShrink: 0, overflow: "hidden" }}>
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          fill
                          style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                          className="blog-card-img"
                        />
                        <div style={{
                          position: "absolute", inset: 0,
                          background: "linear-gradient(to top, rgba(15,28,53,0.5) 0%, transparent 60%)",
                        }} />
                      </div>
                    )}

                    {/* Card Body */}
                    <div style={{ padding: "28px 28px 24px", display: "flex", flexDirection: "column", flex: 1 }}>

                      {/* Category + date row */}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px", flexWrap: "wrap", gap: "8px" }}>
                        <span style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: catStyle.color,
                          background: catStyle.bg,
                          padding: "4px 12px",
                          borderRadius: "100px",
                        }}>
                          {post.category || "Article"}
                        </span>
                        <span style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.72rem",
                          color: "var(--text-light)",
                          letterSpacing: "0.04em",
                        }}>
                          {formatDate(post.date)}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: isFeatured ? "1.25rem" : "1.0625rem",
                        color: "var(--navy)",
                        fontWeight: 700,
                        lineHeight: 1.35,
                        marginBottom: "12px",
                        flex: 1,
                      }}>
                        {post.title}
                      </h3>

                      {/* Divider */}
                      <div style={{ width: "28px", height: "1.5px", background: "var(--gold)", marginBottom: "14px", opacity: 0.6 }} />

                      {/* Excerpt */}
                      <p style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.875rem",
                        color: "var(--text-mid)",
                        lineHeight: 1.7,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        marginBottom: "20px",
                      }}>
                        {post.excerpt}
                      </p>

                      {/* Footer row */}
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "16px",
                        borderTop: "1px solid var(--border-light)",
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          {/* Author avatar initials */}
                          <div style={{
                            width: "28px", height: "28px", borderRadius: "50%",
                            background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            flexShrink: 0,
                          }}>
                            <span style={{
                              fontFamily: "'Inter', sans-serif", fontSize: "0.55rem",
                              fontWeight: 700, color: "var(--gold)", letterSpacing: "0.05em",
                            }}>
                              {post.author.split(" ").filter(w => w !== "Adv.").map(w => w[0]).join("").slice(0,2).toUpperCase()}
                            </span>
                          </div>
                          <span style={{
                            fontFamily: "'Inter', sans-serif", fontSize: "0.78rem",
                            color: "var(--text-mid)", fontWeight: 500,
                          }}>
                            {post.author.replace("Adv. ", "")}
                          </span>
                        </div>
                        <div style={{
                          fontFamily: "'Inter', sans-serif", fontSize: "0.72rem",
                          color: "var(--text-light)", display: "flex", alignItems: "center", gap: "4px",
                        }}>
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                          </svg>
                          {readTime(post.content)}
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        )}

        {/* ── Empty state ── */}
        {!loading && posts.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 0" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "10px" }}>
              Articles coming soon
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "var(--text-light)" }}>
              Stay tuned for expert legal insights from our team.
            </p>
          </div>
        )}

        {/* ── Bottom CTA strip ── */}
        {!loading && posts.length > 0 && (
          <div
            className="reveal"
            style={{
              opacity: 0, transform: "translateY(20px)", transition: "all 0.6s ease",
              marginTop: "56px",
              background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)",
              borderRadius: "8px",
              padding: "36px 40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "24px",
              border: "1px solid rgba(201,168,76,0.15)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative circles */}
            <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "180px", height: "180px", borderRadius: "50%", border: "1px solid rgba(201,168,76,0.08)", pointerEvents: "none" }} />

            <div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "8px" }}>
                ✦ Artha Juris Legal Blog
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.1rem, 2vw, 1.4rem)", color: "var(--white)", fontWeight: 700, lineHeight: 1.3 }}>
                Stay informed on laws that matter to you
              </div>
            </div>
            <Link
              href="/blog"
              className="btn-primary"
              style={{ fontSize: "0.8125rem", flexShrink: 0 }}
            >
              <span>Explore All Articles</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>

      <style>{`
        .blog-card-img:hover { transform: scale(1.05); }
      `}</style>
    </section>
  );
}
