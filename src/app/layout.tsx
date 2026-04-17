import type { Metadata } from "next";
import "./globals.css";
import {
  SITE,
  buildLocalBusinessSchema,
  buildServiceSchema,
  buildWebsiteSchema,
} from "../lib/site";
import { SiteChrome } from "../components/site-chrome";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.defaultTitle,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.defaultDescription,
  applicationName: SITE.name,
  keywords: [
    "junk removal Green Lake",
    "Green Lake junk removal",
    "Seattle junk removal",
    "Seattle junk hauling",
    "same day junk removal Seattle",
    "furniture removal Seattle",
    "garage cleanout Seattle",
    "basement cleanout Seattle",
    "estate cleanout Seattle",
    "move out junk removal Seattle",
    "yard debris removal Seattle",
    "junk removal Greenwood",
    "junk removal Wallingford",
    "junk removal Northgate",
    "junk removal Phinney Ridge",
    "junk removal Ballard",
    "junk removal Roosevelt",
    "junk removal Fremont",
    "Bellevue junk removal",
    "Kirkland junk removal",
    "Redmond junk removal",
    "Eastside junk removal",
    "greater Seattle junk removal",
  ],
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
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
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
        <meta name="geo.placename" content={`${SITE.city}, ${SITE.region}`} />
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
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
