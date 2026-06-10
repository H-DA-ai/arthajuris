"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import type { BlogPost } from "../../api/blogs/route";

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

function getYouTubeId(url: string) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^?&]+)/);
  return match ? match[1] : null;
}

function renderContent(content: string) {
  return content.split("\n").map((para, idx) => {
    if (!para.trim()) return null;
    return (
      <p
        key={idx}
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "1rem",
          color: "var(--text-mid)",
          lineHeight: 1.85,
          marginBottom: "20px",
        }}
      >
        {para}
      </p>
    );
  });
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [related, setRelated] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch("/api/blogs")
      .then((r) => r.json())
      .then((data: BlogPost[]) => {
        const found = data.find((p) => p.slug === slug);
        if (!found) {
          setNotFound(true);
        } else {
          setPost(found);
          setRelated(data.filter((p) => p.slug !== slug && p.category === found.category).slice(0, 2));
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--cream)" }}>
          <p style={{ fontFamily: "'Inter', sans-serif", color: "var(--text-light)" }}>Loading article...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (notFound || !post) {
    return (
      <>
        <Navbar />
        <div style={{ minHeight: "70vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "var(--cream)", textAlign: "center", padding: "40px" }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", color: "var(--navy)", marginBottom: "16px" }}>Article Not Found</h1>
          <p style={{ fontFamily: "'Inter', sans-serif", color: "var(--text-light)", marginBottom: "32px" }}>This article may have been removed or the link may be incorrect.</p>
          <Link href="/blog" style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.875rem", fontWeight: 700, color: "var(--navy)", background: "var(--gold)", padding: "12px 28px", borderRadius: "4px", textDecoration: "none" }}>
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const youtubeId = post.videoUrl ? getYouTubeId(post.videoUrl) : null;

  return (
    <>
      <Navbar />
      <main style={{ background: "var(--cream)", minHeight: "100vh" }}>

        {/* Hero — image or navy gradient */}
        <div
          style={{
            background: post.imageUrl
              ? "linear-gradient(to bottom, rgba(10,20,40,0.7) 0%, rgba(10,20,40,0.5) 100%)"
              : "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)",
            padding: "110px 0 60px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {post.imageUrl && (
            <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
              <Image src={post.imageUrl} alt={post.title} fill style={{ objectFit: "cover" }} />
            </div>
          )}
          <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "800px" }}>
            <Link
              href="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.65)",
                textDecoration: "none",
                marginBottom: "24px",
                letterSpacing: "0.04em",
              }}
            >
              ← Back to Blog
            </Link>

            <div style={{ display: "flex", gap: "12px", marginBottom: "20px", alignItems: "center" }}>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#fff",
                  background: categoryColors[post.category] || "var(--navy)",
                  padding: "4px 14px",
                  borderRadius: "100px",
                }}
              >
                {post.category}
              </span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.55)" }}>
                {readTime(post.content)}
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                color: "#fff",
                fontWeight: 700,
                lineHeight: 1.25,
                marginBottom: "20px",
              }}
            >
              {post.title}
            </h1>

            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <span>By <strong style={{ color: "var(--gold)" }}>{post.author}</strong></span>
              <span>·</span>
              <span>{formatDate(post.date)}</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container" style={{ maxWidth: "800px", padding: "60px 24px 80px" }}>

          {/* Excerpt / Lead */}
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.25rem",
              color: "var(--navy)",
              lineHeight: 1.7,
              fontStyle: "italic",
              borderLeft: "4px solid var(--gold)",
              paddingLeft: "24px",
              marginBottom: "40px",
            }}
          >
            {post.excerpt}
          </p>

          {/* Main Content */}
          <div style={{ marginBottom: "40px" }}>
            {renderContent(post.content)}
          </div>

          {/* YouTube Video Embed */}
          {youtubeId && (
            <div style={{ marginBottom: "48px" }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "16px" }}>
                ✦ Watch Video
              </div>
              <div style={{ position: "relative", paddingTop: "56.25%", borderRadius: "10px", overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  title={post.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                />
              </div>
            </div>
          )}

          {/* Author Card */}
          <div
            style={{
              background: "var(--white)",
              border: "1px solid var(--border-light)",
              borderRadius: "8px",
              padding: "24px 28px",
              display: "flex",
              gap: "16px",
              alignItems: "center",
              marginBottom: "48px",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.25rem",
                color: "var(--gold)",
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              {post.author.split(" ").pop()?.[0] || "A"}
            </div>
            <div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "4px" }}>Article by</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "var(--navy)", fontWeight: 700 }}>{post.author}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem", color: "var(--text-light)" }}>Artha Juris Legal Consultancy</div>
            </div>
          </div>

          {/* Related Posts */}
          {related.length > 0 && (
            <div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "20px" }}>
                ✦ Related Articles
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
                {related.map((rel) => (
                  <Link key={rel.slug} href={`/blog/${rel.slug}`} style={{ textDecoration: "none" }}>
                    <div
                      style={{
                        background: "var(--white)",
                        borderRadius: "8px",
                        padding: "24px",
                        border: "1px solid var(--border-light)",
                        boxShadow: "var(--shadow-sm)",
                        transition: "transform 0.2s ease",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; }}
                    >
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#fff", background: categoryColors[rel.category] || "var(--navy)", padding: "3px 10px", borderRadius: "100px", display: "inline-block", marginBottom: "12px" }}>
                        {rel.category}
                      </span>
                      <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", color: "var(--navy)", fontWeight: 700, lineHeight: 1.4, marginBottom: "10px" }}>{rel.title}</h4>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", color: "var(--text-light)" }}>{formatDate(rel.date)}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
