import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { siteConfig } from "@/lib/config";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' });
const jetmono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetmono' });

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — AI Engineer`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.author.name }],
  creator: siteConfig.author.name,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: `${siteConfig.name} — AI Engineer`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.seo.openGraph.siteName,
    type: siteConfig.seo.openGraph.type,
    locale: siteConfig.seo.openGraph.locale,
  },
  twitter: {
    card: siteConfig.seo.twitter.card,
    title: `${siteConfig.name} — AI Engineer`,
    description: siteConfig.description,
    creator: siteConfig.seo.twitter.creator,
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
  alternates: {
    types: {
      "application/rss+xml": `${siteConfig.url}/rss.xml`,
    },
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
        <script dangerouslySetInnerHTML={{__html: `
          // Force dark mode always
          document.documentElement.classList.add('dark');
        `}} />
      </head>
      <body
        className={`${inter.variable} ${fraunces.variable} ${jetmono.variable} antialiased`}
      >
        {siteConfig.features.analytics && siteConfig.analytics.plausibleDomain && (
          <Script
            defer
            data-domain={siteConfig.analytics.plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        )}
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
