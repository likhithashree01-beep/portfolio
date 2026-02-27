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
  title: "Likhitha Shree Bethi - Software Engineer | AI/ML Engineer",
  description: "Software Development Engineer with 3+ years at Goldman Sachs. MS CS student at Stony Brook University specializing in Full-Stack Development, AI/ML, and distributed systems. IIT Kharagpur alumna.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "AI/ML",
    "Machine Learning",
    "Goldman Sachs",
    "IIT Kharagpur",
    "Stony Brook University",
    "Java",
    "Spring WebFlux",
    "React",
    "GraphQL",
    "Python",
    "TensorFlow",
    "NLP",
    "Deep Learning"
  ],
  authors: [{ name: "Likhitha Shree Bethi" }],
  openGraph: {
    title: "Likhitha Shree Bethi - Software Engineer | AI/ML Engineer",
    description: "Software Development Engineer with 3+ years at Goldman Sachs. Passionate about building scalable microservices and AI/ML solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
