import type React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://in-anime.vercel.app"),
  title: {
    default: "In Anime! - Stream, Read, Chat, Together",
    template: "%s | In Anime!",
  },
  verification: {
    google: "T8KzFAcGqN48othb97RVZw2PW1CnUFPg6Zcepv6biCk",
  },
  description:
    "In Anime! is a modern anime platform with sub/dub/hindi-dub streaming, episode downloads, manga, social chat, quests, and watch-together rooms.",
  keywords: [
    "In Anime!",
    "anime streaming",
    "hindi dub anime",
    "sub dub anime",
    "anime download",
    "anime schedule",
    "anime manga",
    "watch together",
    "anime community",
  ],
  icons: {
    icon: "/in-anime-logo.svg",
    shortcut: "/in-anime-logo.svg",
    apple: "/in-anime-logo.svg",
  },
  openGraph: {
    title: "In Anime! - Stream, Read, Chat, Together",
    description:
      "Watch anime in sub/dub/hindi-dub, download episodes, read manga, and join watch parties in one place.",
    url: "https://in-anime.vercel.app",
    siteName: "In Anime!",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "In Anime! - Stream, Read, Chat, Together",
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
  name: "In Anime!",
  applicationCategory: "EntertainmentApplication",
  operatingSystem: "Android, Windows, Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "In Anime! is an anime platform for streaming, manga reading, social chat, and synchronized watch-together sessions.",
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

  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-ZQJ4ZJEDYS"
    strategy="afterInteractive"
  />

  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-ZQJ4ZJEDYS');
    `}
  </Script>
</head>
      <body>{children}</body>
    </html>
  );
}
