import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Latten Technologies, LLC",
  description: "Latten Technologies, LLC is a product development consultancy focused on building high-quality software products with a strong emphasis on engineering excellence and thoughtful design.",
  authors: [{ name: "Latten Technologies, LLC" }],
  keywords: [
    "Latten Technologies",
    "Software Development",
    "Product Development",
    "Engineering Excellence",
    "Thoughtful Design",
    "Consultancy",
    "Digital Products",
    "Software Solutions",
  ],
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
