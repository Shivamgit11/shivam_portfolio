import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { portfolioData } from "@/data/portfolio";
import { StructuredData } from "@/components/seo/StructuredData";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shivammernportfolio.netlify.app/"),

  title: {
    template: `%s | ${portfolioData.name}`,
    default: `${portfolioData.name} | MERN Stack Developer`,
  },

  description:
    "Shivam Kumar is a Full Stack Developer specializing in React.js, Next.js, Node.js, MongoDB, and scalable web applications. Explore projects, dashboards, AI tools, and CRM systems.",

  keywords: [
    "Shivam Kumar",
    "MERN Stack Developer",
    "React.js Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "Node.js Developer",
    "MongoDB",
    "JavaScript Developer",
    "TypeScript",
    "Portfolio Website",
    "Web Developer India",
    "Dashboard Development",
    "CRM Development",
    "AI Tools Developer",
    "Next.js Portfolio",
    "React Portfolio",
    "Software Engineer",
    "Frontend Engineer",
    "Backend Developer",
  ],

  authors: [
    {
      name: "Shivam Kumar",
      url: "https://shivammernportfolio.netlify.app/",
    },
  ],

  creator: "Shivam Kumar",
  publisher: "Shivam Kumar",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shivammernportfolio.netlify.app/",

    title: "Shivam Kumar | MERN Stack Developer",

    description:
      "Portfolio of Shivam Kumar showcasing React.js, Next.js, Node.js, MongoDB, CRM systems, AI applications, and modern web development projects.",

    siteName: "Shivam Kumar Portfolio",

    images: [
      {
        url: "/images/shivam_profile_pic.webp",
        width: 1200,
        height: 630,
        alt: "Shivam Kumar Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Shivam Kumar | MERN Stack Developer",

    description:
      "Explore Shivam Kumar's portfolio featuring Full Stack projects, dashboards, AI tools, and scalable web applications.",

    creator: "@shivamkumar",

    images: [
      "/images/shivam_profile_pic.webp",
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],

    apple: "/apple-touch-icon.png",

    shortcut: "/favicon.ico",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>

      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-50 selection:bg-primary/30 selection:text-primary`}
      >
        <Navbar />

        <main className="min-h-screen pt-20">{children}</main>

        <Footer />

        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ""}
        />
      </body>
    </html>
  );
}