import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import DisclaimerModal from "./components/DisclaimerModal";

export const metadata: Metadata = {
  title: "Artha Juris – Premier Legal Consultancy | Mumbai, Maharashtra",
  description:
    "Artha Juris is a distinguished Mumbai-based legal consultancy (Premier Law Firm) led by Adv. Mayura Maru. Over 25 years of experience in Corporate Law, Real Estate, Banking, Civil & Family Law across all courts in Maharashtra.",
  keywords:
    "Artha Juris, Arthajuris, law firm Mumbai, legal consultancy Mumbai, advocates Mumbai, corporate law, property law, civil litigation, banking law, family law, Mayura Maru, Pratap Temgire, Uzma Khan, Bombay High Court, NCLT, DRT",
  openGraph: {
    title: "Artha Juris – Premier Legal Consultancy | Mumbai",
    description:
      "Expert legal representation across Corporate, Real Estate, Banking, Civil, and Family Law. Led by Adv. Mayura Maru with 25+ years at the Bombay High Court.",
    type: "website",
  },
};

import Navbar from "./components/Navbar";
import ScrollObserver from "./components/ScrollObserver";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ScrollObserver />
        <DisclaimerModal />
        {children}
      </body>
    </html>
  );
}
