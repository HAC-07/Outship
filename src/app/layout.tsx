import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Outship - Launch your product in front of buyers,Google and AI.",
  description: "Outship helps SaaS founders discover the directories and platforms actually worth launching on to get best SEO, AEO results and increased visibility with AI-powered insights.",

 alternates: {
    canonical: "https://outship.in/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
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