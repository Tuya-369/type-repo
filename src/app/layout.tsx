// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

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
      <Header />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  );
}
