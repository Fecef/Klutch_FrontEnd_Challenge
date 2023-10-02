import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Klutch Technology",
  description: "A full stack development challenge.",
  keywords: ["Klutch", "Challenge", "Full Stack"],
  authors: { name: "Felipe César", url: "https://www.linkedin.com/in/fecef/" },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
