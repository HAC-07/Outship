import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Outship — Put Your Product in Front of Buyers, Google and AI",
  description:
    "Outship helps SaaS founders discover relevant directories and streamline product distribution — without hours of manual research and submissions.",
  openGraph: {
    title: "Outship — Put Your Product in Front of Buyers, Google and AI",
    description:
      "Discover relevant directories for your SaaS and simplify product distribution.",
    url: "https://outship.in",
    siteName: "Outship",
    images: [
      {
        url: "https://www.outship.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Outship — Product distribution for SaaS founders",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Outship — Put Your Product in Front of Buyers, Google and AI",
    description:
      "Discover relevant directories and simplify product distribution.",
    images: ["https://www.outship.in/og-image.png"],
  },
  alternates: {
    canonical: "https://www.outship.in/",
  },
  icons: {
    icon: "/outship-icon.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
