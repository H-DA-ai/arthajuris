import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ArthajurisLaw – Premier Legal Services in Mumbai",
  description:
    "ArthajurisLaw is a distinguished Mumbai-based law firm founded by Adv. Mayura Maru, Adv. Pratap Temgire, and Adv. Uzma Khan. Specializing in Corporate Law, Real Estate, Banking, Civil & Family Law.",
  keywords:
    "ArthajurisLaw, law firm Mumbai, advocates Mumbai, corporate law, property law, civil litigation, banking law, family law, Mayura Maru, Pratap Temgire, Uzma Khan",
  openGraph: {
    title: "ArthajurisLaw – Premier Legal Services in Mumbai",
    description:
      "Expert legal representation across Corporate, Real Estate, Banking, Civil, and Family Law by experienced Mumbai advocates.",
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
