import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://anime-arena.app"),
  title: {
    default: "AnimeArena - Stream, Read, Chat, Together",
    template: "%s | AnimeArena",
  },
  description:
    "AnimeArena is a modern anime platform with sub/dub/hindi-dub streaming, episode downloads, manga, social chat, quests, and watch-together rooms.",
  keywords: [
    "AnimeArena",
    "anime streaming",
    "hindi dub anime",
    "sub dub anime",
    "anime download",
    "anime schedule",
    "anime manga",
    "watch together",
    "anime community",
  ],
  openGraph: {
    title: "AnimeArena - Stream, Read, Chat, Together",
    description:
      "Watch anime in sub/dub/hindi-dub, download episodes, read manga, and join watch parties in one place.",
    url: "https://anime-arena.app",
    siteName: "AnimeArena",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AnimeArena - Stream, Read, Chat, Together",
    description:
      "A complete anime app with streaming, downloads, manga, social chat, quests, and watch-together rooms.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AnimeArena",
  applicationCategory: "EntertainmentApplication",
  operatingSystem: "Android, Windows, Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "AnimeArena is an anime platform for streaming, manga reading, social chat, and synchronized watch-together sessions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
