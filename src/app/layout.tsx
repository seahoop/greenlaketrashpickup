import type { Metadata } from "next";
import "./globals.css";
import {
  SITE,
  buildLocalBusinessSchema,
  buildServiceSchema,
  buildWebsiteSchema,
} from "../lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "Green Lake junk removal",
    "Greenlake junk removal",
    "junk removal Green Lake Seattle",
    "same day junk removal Green Lake",
    "junk removal near Green Lake",
    "trash removal Green Lake",
    "furniture removal Green Lake",
    "appliance removal Green Lake",
    "yard waste removal Green Lake",
    "garage cleanout Green Lake",
    "basement cleanout Green Lake",
    "construction debris removal Green Lake",
    "Seattle junk removal",
    "North Seattle junk removal",
    "西雅图绿湖垃圾清运",
    "绿湖垃圾搬运",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "zh-CN": "/?lang=zh",
    },
  },
  category: "local services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: SITE.ogImagePath,
        width: 1200,
        height: 630,
        alt: "Green Lake Trash Pickup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [SITE.ogImagePath],
  },
  other: {
    "content-language": "en-US, zh-CN",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content={`${SITE.country}-${SITE.region}`} />
        <meta name="geo.placename" content={SITE.city} />
        <meta name="geo.position" content={`${SITE.geo.lat};${SITE.geo.lng}`} />
        <meta name="ICBM" content={`${SITE.geo.lat}, ${SITE.geo.lng}`} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildLocalBusinessSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildWebsiteSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildServiceSchema()),
          }}
        />
        {children}
      </body>
    </html>
  );
}
