import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Data Minds | Microsoft Fabric & Power BI Consulting for Australian Businesses",
  description: "We design, build and run analytics on Microsoft Fabric & Power BI — from audits to AI agents. Utilities, asset management, retail, D365 & SAP. Book a discovery call.",
  keywords: "Microsoft Fabric consulting, Power BI Brisbane, Azure analytics Australia, BI managed services, AI data agents, D365 analytics, SAP Power BI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
