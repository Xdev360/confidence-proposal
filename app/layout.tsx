import type { Metadata } from "next";
import "./globals.css";
import { gellix } from "./fonts/gellix";

export const metadata: Metadata = {
  title: "Confidence Cargo | Digital Transformation Proposal",
  description: "A focused proposal to help Confidence Cargo modernize client acquisition and service delivery.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${gellix.variable} antialiased bg-white text-[#232732] font-gellix`}>
        {children}
      </body>
    </html>
  );
}
