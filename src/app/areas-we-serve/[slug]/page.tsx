import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  AREA_PAGE_MAP,
  AREA_PAGES,
  SERVICE_PAGE_MAP,
} from "../../../lib/seo-pages";
import {
  SITE,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildMetadata,
} from "../../../lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return AREA_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = AREA_PAGE_MAP[slug];

  if (!page) {
    return {};
  }

  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/areas-we-serve/${page.slug}`,
  });
}

export default async function AreaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = AREA_PAGE_MAP[slug];

  if (!page) {
    notFound();
  }

  const relatedServices = page.relatedServiceSlugs
    .map((serviceSlug) => SERVICE_PAGE_MAP[serviceSlug])
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  const nearbyAreas = page.nearby
    .map((label) =>
      AREA_PAGES.find((candidate) => candidate.title.toLowerCase() === label.toLowerCase()),
    )
    .filter((area): area is NonNullable<typeof area> => Boolean(area));

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1,
    areaServed: {
      "@type": "Place",
      name: page.title,
    },
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE.url}/#localbusiness`,
      name: SITE.name,
      telephone: SITE.phone,
    },
    description: page.metaDescription,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Areas We Serve", path: "/areas-we-serve" },
              { name: page.title, path: `/areas-we-serve/${page.slug}` },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFaqSchema(page.faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <main className="inner-page">
        <section className="page-hero areas-hero">
          <div className="container page-hero-shell">
            <div className="page-hero-panel">
              <h1>{page.h1}</h1>
              <p className="page-lead">{page.intro}</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">Local Fit</p>
              <h2>{page.title} jobs need a crew that understands the area.</h2>
              <p className="section-copy">{page.localAngle}</p>
            </div>
            <div className="stack-grid">
              {page.commonRequests.map((request) => (
                <article key={request} className="content-card">
                  <h3>{request}</h3>
                  <p>Quoted quickly by text with clear scheduling and clean communication.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-band">
          <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">Why This Area Works</p>
              <h2>Neighborhood familiarity helps the service feel faster and cleaner.</h2>
              <p className="section-copy">
                Familiarity with access, route planning, and local job patterns keeps the pickup
                organized from first contact through final sweep-up.
              </p>
            </div>
            <div className="stack-grid">
              {page.familiarWith.map((item) => (
                <article key={item} className="content-card">
                  <h3>{item}</h3>
                  <p>The goal is a straightforward visit that respects the home, timeline, and property layout.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">Related Services</p>
              <h2>Search intent in {page.title} usually overlaps with these service pages.</h2>
              <p className="section-copy">
                Internal linking is built around the services clients in this area usually need most.
              </p>
            </div>
            <div className="area-chip-grid">
              {relatedServices.map((service) => (
                <Link key={service.slug} className="area-chip area-chip-link" href={`/services/${service.slug}`}>
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {nearbyAreas.length > 0 ? (
          <section className="section section-band">
            <div className="container split-section">
              <div className="section-heading">
                <p className="eyebrow">Nearby Areas</p>
                <h2>Related neighborhoods and city pages nearby.</h2>
              </div>
              <div className="area-chip-grid">
                {nearbyAreas.map((area) => (
                  <Link key={area.slug} className="area-chip area-chip-link" href={`/areas-we-serve/${area.slug}`}>
                    {area.title}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="section">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow">FAQ</p>
              <h2>Local questions people ask before they book.</h2>
            </div>
            <div className="faq-list">
              {page.faqs.map((faq) => (
                <article key={faq.question} className="faq-card">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cta-banner">
              <div className="cta-banner-copy">
                <p className="eyebrow">{page.title} Quote</p>
                <h2>Need a fast answer for a {page.title} job?</h2>
                <p>
                  Text photos, the address, and the timing. That is the fastest route to a clear
                  quote for jobs in {page.title} and nearby service areas.
                </p>
              </div>
              <div className="cta-banner-actions">
                <a className="button button-primary button-text-emphasis" href={SITE.textHref}>
                  Text for a Quote
                </a>
                <a className="button button-secondary" href={SITE.callHref}>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
