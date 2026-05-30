"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { BlogPost } from "../api/blogs/route";

const CATEGORIES = ["All", "New Law", "Case Study", "Legal Tip", "Court Update"];

const categoryColors: Record<string, string> = {
  "New Law": "#2b6cb0",
  "Case Study": "#276749",
  "Legal Tip": "#b7791f",
  "Court Update": "#702459",
};

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
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

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/blogs")
      .then((r) => r.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      search.trim() === "" ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <Navbar />
      <main style={{ background: "var(--cream)", minHeight: "100vh" }}>
        {/* Hero Banner */}
        <div
          style={{
            background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)",
            padding: "120px 0 64px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-80px",
              right: "-80px",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              border: "1px solid rgba(201,168,76,0.08)",
            }}
          />
          <div className="container" style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "16px",
              }}
            >
              ✦ Arthajuris Legal Blog
            </div>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#fff",
                fontWeight: 700,
                marginBottom: "16px",
                lineHeight: 1.2,
              }}
            >
              Legal Insights &{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Commentary</em>
            </h1>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                maxWidth: "520px",
                lineHeight: 1.7,
              }}
            >
              Stay informed with expert analysis on new laws, landmark judgements, case studies,
              and legal tips from the advocates at Arthajuris.
            </p>
          </div>
        </div>

        <div className="container" style={{ padding: "48px 24px 80px" }}>
          {/* Search + Filter Bar */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              alignItems: "center",
              marginBottom: "48px",
            }}
          >
            {/* Search */}
            <div style={{ position: "relative", flex: "1", minWidth: "220px" }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--text-light)"
                strokeWidth="2"
                style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)" }}
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: "100%",
                  padding: "11px 14px 11px 42px",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.875rem",
                  border: "1px solid var(--border)",
                  borderRadius: "6px",
                  background: "var(--white)",
                  color: "var(--navy)",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* Category Pills */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "8px 18px",
                    borderRadius: "100px",
                    border: "1px solid",
                    borderColor: activeCategory === cat ? "var(--gold)" : "var(--border)",
                    background: activeCategory === cat ? "var(--gold)" : "var(--white)",
                    color: activeCategory === cat ? "var(--navy)" : "var(--text-mid)",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: activeCategory === cat ? 700 : 400,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    letterSpacing: "0.03em",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Loading */}
          {loading && (
            <div style={{ textAlign: "center", padding: "80px 0", fontFamily: "'Inter', sans-serif", color: "var(--text-light)" }}>
              Loading articles...
            </div>
          )}

          {/* Empty State */}
          {!loading && filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "var(--navy)", marginBottom: "12px" }}>
                No articles found
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", color: "var(--text-light)" }}>
                Try a different search term or category.
              </p>
            </div>
          )}

          {/* Featured Post */}
          {!loading && featured && (
            <Link
              href={`/blog/${featured.slug}`}
              style={{ textDecoration: "none", display: "block", marginBottom: "48px" }}
            >
              <div
                style={{
                  background: "var(--white)",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid var(--border-light)",
                  boxShadow: "var(--shadow-sm)",
                  display: "grid",
                  gridTemplateColumns: featured.imageUrl ? "1fr 1fr" : "1fr",
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-lg)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-sm)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                }}
              >
                {featured.imageUrl && (
                  <div style={{ position: "relative", minHeight: "300px" }}>
                    <Image
                      src={featured.imageUrl}
                      alt={featured.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                )}
                <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <div style={{ display: "flex", gap: "10px", marginBottom: "16px", alignItems: "center" }}>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#fff",
                        background: categoryColors[featured.category] || "var(--navy)",
                        padding: "4px 12px",
                        borderRadius: "100px",
                      }}
                    >
                      {featured.category}
                    </span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "var(--gold)", fontWeight: 700, letterSpacing: "0.1em" }}>
                      ✦ FEATURED
                    </span>
                  </div>
                  <h2
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(1.4rem, 2.5vw, 1.875rem)",
                      color: "var(--navy)",
                      fontWeight: 700,
                      lineHeight: 1.3,
                      marginBottom: "14px",
                    }}
                  >
                    {featured.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9375rem",
                      color: "var(--text-mid)",
                      lineHeight: 1.7,
                      marginBottom: "24px",
                    }}
                  >
                    {featured.excerpt}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "center",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.8rem",
                      color: "var(--text-light)",
                    }}
                  >
                    <span>{featured.author}</span>
                    <span>·</span>
                    <span>{formatDate(featured.date)}</span>
                    <span>·</span>
                    <span>{readTime(featured.content)}</span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Grid of remaining posts */}
          {!loading && rest.length > 0 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "28px",
              }}
            >
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      background: "var(--white)",
                      borderRadius: "10px",
                      overflow: "hidden",
                      border: "1px solid var(--border-light)",
                      boxShadow: "var(--shadow-sm)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "box-shadow 0.3s ease, transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-lg)";
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-sm)";
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    }}
                  >
                    {post.imageUrl && (
                      <div style={{ position: "relative", height: "190px" }}>
                        <Image
                          src={post.imageUrl}
                          alt={post.title}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    )}
                    <div style={{ padding: "28px", flex: 1, display: "flex", flexDirection: "column" }}>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.65rem",
                          fontWeight: 700,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "#fff",
                          background: categoryColors[post.category] || "var(--navy)",
                          padding: "3px 10px",
                          borderRadius: "100px",
                          display: "inline-block",
                          marginBottom: "14px",
                          alignSelf: "flex-start",
                        }}
                      >
                        {post.category}
                      </span>
                      <h3
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "1.125rem",
                          color: "var(--navy)",
                          fontWeight: 700,
                          lineHeight: 1.4,
                          marginBottom: "10px",
                          flex: 1,
                        }}
                      >
                        {post.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.875rem",
                          color: "var(--text-mid)",
                          lineHeight: 1.6,
                          marginBottom: "20px",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {post.excerpt}
                      </p>
                      <div
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.75rem",
                          color: "var(--text-light)",
                          display: "flex",
                          gap: "8px",
                          alignItems: "center",
                          borderTop: "1px solid var(--border-light)",
                          paddingTop: "14px",
                        }}
                      >
                        <span>{post.author}</span>
                        <span>·</span>
                        <span>{formatDate(post.date)}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
