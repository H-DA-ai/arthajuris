import { NextResponse } from "next/server";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  author: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  videoUrl: string;
  published: string;
}

function parseCSV(csvText: string): BlogPost[] {
  const lines = csvText.trim().split("\n");
  if (lines.length < 2) return [];

  const headers = lines[0].split(",").map((h) => h.trim().replace(/^"|"$/g, ""));

  return lines
    .slice(1)
    .map((line) => {
      // Handle commas inside quoted fields
      const values: string[] = [];
      let current = "";
      let inQuotes = false;
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"' && line[i + 1] === '"') {
          current += '"';
          i++;
        } else if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === "," && !inQuotes) {
          values.push(current.trim());
          current = "";
        } else {
          current += char;
        }
      }
      values.push(current.trim());

      const postRaw: Record<string, string> = {};
      headers.forEach((header, idx) => {
        postRaw[header.toLowerCase().trim()] = values[idx] || "";
      });

      const title = postRaw["title"] || "";
      const isPublished = (postRaw["ready to publish?"] || postRaw["published"] || "FALSE").toUpperCase();

      let rawImageUrl = postRaw["image link"] || postRaw["imageurl"] || "";
      let rawVideoUrl = postRaw["video link"] || postRaw["videourl"] || "";

      // Convert Google Drive view links to direct image links
      if (rawImageUrl.includes("drive.google.com/file/d/")) {
        const fileIdMatch = rawImageUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
        if (fileIdMatch && fileIdMatch[1]) {
          rawImageUrl = `https://drive.google.com/uc?export=view&id=${fileIdMatch[1]}`;
        }
      }

      return {
        slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
        title: title,
        date: postRaw["date"] || "",
        category: postRaw["category"] || "",
        author: postRaw["author"] || "",
        excerpt: postRaw["short summary"] || postRaw["excerpt"] || "",
        content: postRaw["full content"] || postRaw["content"] || "",
        imageUrl: rawImageUrl,
        videoUrl: rawVideoUrl,
        published: isPublished === "YES" || isPublished === "TRUE" ? "TRUE" : "FALSE"
      } as BlogPost;
    })
    .filter((post) => post.published === "TRUE" && post.title);
}

export async function GET() {
  const csvUrl = process.env.GOOGLE_SHEETS_CSV_URL;

  if (!csvUrl) {
    // Return sample posts when URL not configured
    const samplePosts: BlogPost[] = [
      {
        slug: "understanding-rera-maharashtra",
        title: "Understanding RERA: Protecting Homebuyers in Maharashtra",
        date: "2025-05-20",
        category: "New Law",
        author: "Adv. Mayura Maru",
        excerpt: "The Real Estate (Regulation and Development) Act has transformed how real estate transactions are conducted in Maharashtra. Here's what every homebuyer needs to know.",
        content: "The Real Estate (Regulation and Development) Act, 2016 (RERA) was a landmark legislation that brought accountability and transparency to the real estate sector in India.\n\nIn Maharashtra, the MahaRERA authority has been particularly active in ensuring compliance. The Act mandates that all residential projects above 500 sq meters or with 8+ units must be registered.\n\nKey benefits for homebuyers include:\n- Mandatory escrow accounts ensuring funds are used only for that project\n- Standardised sale agreements\n- Timely possession with penalty clauses for delays\n- Easy redressal mechanism through the RERA adjudicating authority\n\nAt Arthajuris, we regularly represent homebuyers and developers in RERA proceedings before the MahaRERA authority and the RERA Appellate Tribunal.",
        imageUrl: "",
        videoUrl: "",
        published: "TRUE",
      },
      {
        slug: "sarfaesi-act-banking-recovery",
        title: "How Banks Recover Loans Under SARFAESI: A Complete Guide",
        date: "2025-05-10",
        category: "Legal Tip",
        author: "Adv. Pratap Temgire",
        excerpt: "The SARFAESI Act gives banks powerful tools to recover non-performing assets. Understanding your rights as a borrower is critical.",
        content: "The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 (SARFAESI) is one of the most powerful recovery tools available to banks and financial institutions in India.\n\nUnder SARFAESI, a secured creditor can:\n1. Issue a demand notice to the borrower for repayment within 60 days\n2. Take possession of secured assets without court intervention if payment is not made\n3. Sell the secured assets to recover dues\n\nBorrowers have rights too:\n- Right to receive a 60-day notice before any action\n- Right to file a Securitisation Application before the Debt Recovery Tribunal (DRT)\n- Right to appeal DRT orders at the Debt Recovery Appellate Tribunal (DRAT)\n\nAt Arthajuris, we represent both banks in enforcement actions and borrowers challenging wrongful possession orders before the DRT and Bombay High Court.",
        imageUrl: "",
        videoUrl: "",
        published: "TRUE",
      },
      {
        slug: "section-138-ni-act-cheque-bounce",
        title: "Cheque Bounce Cases Under Section 138 NI Act: What You Must Know",
        date: "2025-04-28",
        category: "Case Study",
        author: "Adv. Pratap Temgire",
        excerpt: "Cheque dishonour is a criminal offence under Indian law. Learn about the procedure, timelines, and how to protect yourself.",
        content: "Section 138 of the Negotiable Instruments Act, 1881 makes the dishonour of a cheque a criminal offence punishable with imprisonment up to 2 years or a fine up to double the cheque amount, or both.\n\nThe procedure involves:\n1. The payee must present the cheque within 3 months of the date on the cheque\n2. Upon dishonour, the payee must send a legal demand notice within 30 days\n3. If the drawer fails to pay within 15 days of receiving the notice, a complaint can be filed in the Magistrate Court\n\nCommon defences include:\n- The cheque was given as security, not for discharge of debt\n- The cheque was stolen or obtained fraudulently\n- The debt itself was not legally enforceable\n\nThe Supreme Court in Dashrath Rupsingh Rathod v. State of Maharashtra clarified that cases must be filed in the court where the cheque was returned unpaid by the bank.",
        imageUrl: "",
        videoUrl: "",
        published: "TRUE",
      },
    ];
    return NextResponse.json(samplePosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
  }

  try {
    const res = await fetch(csvUrl, { next: { revalidate: 300 } });
    if (!res.ok) throw new Error("Failed to fetch Google Sheet");
    const text = await res.text();
    const posts = parseCSV(text).sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Blog fetch error:", error);
    return NextResponse.json([], { status: 500 });
  }
}
