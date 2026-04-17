import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap"
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap"
});

const siteUrl = "https://your-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Joshua Periabras | Computer Engineering Portfolio",
  description:
    "Portfolio of a Computer Engineering student building polished software systems for internships and entry-level software engineering roles.",
  openGraph: {
    title: "Joshua Periabras | Computer Engineering Portfolio",
    description:
      "Computer Engineering student focused on software engineering internships, full-stack development, and systems-oriented projects.",
    url: siteUrl,
    siteName: "Joshua Periabras Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Portfolio preview for Joshua Periabras"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Periabras | Computer Engineering Portfolio",
    description:
      "Computer Engineering student targeting software engineering internships and entry-level roles.",
    images: ["/og-image.svg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} bg-bg font-sans text-text antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
