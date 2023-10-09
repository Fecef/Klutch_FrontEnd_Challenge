import "./globals.css";
import 'animate.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ProviderCollection from "./providerCollection";

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
    <html className="text-[10px]" lang="pt-br">
      <body className={`${inter.className} text-[1.6rem]`} suppressHydrationWarning={true}>
        <ProviderCollection>
          {children}
        </ProviderCollection>
      </body>
    </html>
  );
}
