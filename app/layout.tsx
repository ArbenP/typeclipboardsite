import type { Metadata } from "next";
import "./globals.css";

import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

const defaultSiteUrl = "https://typeclipboard.com";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl;

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

function toMetadataBase(url: string): URL {
  try {
    return new URL(url);
  } catch {
    return new URL(defaultSiteUrl);
  }
}

const pageTitle = "TypeClipboard | Paste as Keystrokes on macOS";
const pageDescription =
  "TypeClipboard is a macOS utility that replays your clipboard as live keyboard input for VNC, RDP, Citrix, virtual consoles, and secure fields.";

export const metadata: Metadata = {
  metadataBase: toMetadataBase(siteUrl),
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "TypeClipboard",
    "macOS clipboard",
    "paste as keystrokes",
    "VNC paste workaround",
    "RDP paste workaround",
    "Citrix clipboard",
  ],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/",
    siteName: "TypeClipboard",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "TypeClipboard marketing preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/twitter-image"],
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
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:shadow"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
