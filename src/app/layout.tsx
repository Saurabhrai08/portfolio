import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saurabh Rai | AI/ML Engineer Portfolio",
  description:
    "Premium AI-themed portfolio for Saurabh Rai, an aspiring AI/ML Engineer focused on machine learning, deep learning, and computer vision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
