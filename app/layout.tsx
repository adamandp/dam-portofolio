import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Adam Anandaputra — Fullstack Developer",
  description:
    "Fullstack developer specializing in scalable web applications, modern frontend architectures, and high-performance systems. Experienced in React, Next.js, TypeScript, and microservices.",

  keywords: [
    "Fullstack Developer",
    "Frontend Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Web Developer",
    "Portfolio",
  ],

  authors: [{ name: "Adam Anandaputra" }],

  creator: "Adam Anandaputra",

  openGraph: {
    title: "Adam Anandaputra — Fullstack Developer",
    description:
      "Building modern, scalable, and high-performance web applications with clean architecture and strong engineering principles.",
    // url: "https://your-domain.com",
    siteName: "Adam Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Adam Anandaputra — Fullstack Developer",
    description:
      "Fullstack developer crafting scalable and high-performance web applications.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
