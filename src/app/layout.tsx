// src/app/layout.tsx
import { Header } from "../components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My App",
  description: "A Next.js App with App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
     
    </html>
  );
}
