import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arthajuris – Premier Legal Consultancy | Mumbai, Maharashtra",
  description:
    "Arthajuris is a distinguished Mumbai-based legal consultancy (Proprietary Concern) led by Adv. Mayura Maru. Over 22 years of experience in Corporate Law, Real Estate, Banking, Civil & Family Law across all courts in Maharashtra.",
  keywords:
    "Arthajuris, law firm Mumbai, legal consultancy Mumbai, advocates Mumbai, corporate law, property law, civil litigation, banking law, family law, Mayura Maru, Pratap Tengire, Uzma Khan, Bombay High Court, NCLT, DRT",
  openGraph: {
    title: "Arthajuris – Premier Legal Consultancy | Mumbai",
    description:
      "Expert legal representation across Corporate, Real Estate, Banking, Civil, and Family Law. Led by Adv. Mayura Maru with 22+ years at the Bombay High Court.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
