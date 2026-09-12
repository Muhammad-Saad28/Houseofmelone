import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "House of Melone — Timeless Menswear, Redefined",
  description:
    "Premium Pakistani menswear. Italian Wash & Wear shalwar kameez, Irish linen shirts, Charsadda chappal, and tailored matching sets. Crafted from natural fabrics with heritage craftsmanship.",
  keywords: [
    "House of Melone",
    "Pakistani menswear",
    "shalwar kameez",
    "Irish linen",
    "Charsadda chappal",
    "premium menswear",
    "natural fabrics",
  ],
  openGraph: {
    title: "House of Melone — Timeless Menswear, Redefined",
    description:
      "Premium Pakistani menswear crafted from natural fabrics with heritage craftsmanship.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
