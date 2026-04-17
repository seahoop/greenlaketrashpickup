import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  AREA_PAGE_MAP,
  SERVICE_PAGE_MAP,
  SERVICE_PAGES,
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
  return SERVICE_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = SERVICE_PAGE_MAP[slug];

  if (!page) {
    return {};
  }

  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/services/${page.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = SERVICE_PAGE_MAP[slug];

  if (!page) {
    notFound();
  }

  const relatedAreas = page.relatedAreaSlugs
    .map((areaSlug) => AREA_PAGE_MAP[areaSlug])
    .filter((area): area is NonNullable<typeof area> => Boolean(area));

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1,
    serviceType: page.title,
    description: page.metaDescription,
    areaServed: relatedAreas.map((area) => ({
      "@type": "Place",
      name: area.title,
    })),
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE.url}/#localbusiness`,
      name: SITE.name,
      telephone: SITE.phone,
      areaServed: "Seattle and the greater Seattle area",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: page.title, path: `/services/${page.slug}` },
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
        <section className="page-hero services-hero">
          <div className="container page-hero-shell">
            <div className="page-hero-panel services-hero-panel">
              <h1>{page.h1}</h1>
              <p className="page-lead">{page.intro}</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">When This Service Gets Called</p>
              <h2>{page.title} that feels organized instead of chaotic.</h2>
              <p className="section-copy">
                {page.processBody}
              </p>
            </div>
            <div className="stack-grid">
              {page.scenarios.map((scenario) => (
                <article key={scenario} className="content-card">
                  <h3>Common situation</h3>
                  <p>{scenario}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-band">
          <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">Common Jobs</p>
              <h2>{page.title} covers more than one kind of pickup.</h2>
              <p className="section-copy">
                Whether the job is a single bulky item or a larger property reset, the quote
                is built around load size, access, labor, and route timing.
              </p>
            </div>
            <div className="stack-grid">
              {page.commonJobs.map((job) => (
                <article key={job} className="content-card">
                  <h3>{job}</h3>
                  <p>Text photos for the fastest pricing and scheduling response.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">Related Service Areas</p>
              <h2>Strong fit across Seattle, north Seattle, and the greater Seattle area.</h2>
              <p className="section-copy">
                These are the neighborhoods and city pages most closely tied to this service.
              </p>
            </div>
            <div className="area-chip-grid">
              {relatedAreas.map((area) => (
                <Link key={area.slug} className="area-chip area-chip-link" href={`/areas-we-serve/${area.slug}`}>
                  {area.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-band">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow">FAQ</p>
              <h2>Answers before the quote request starts.</h2>
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
                <p className="eyebrow">Book {page.title}</p>
                <h2>{page.processTitle}</h2>
                <p>
                  Text the job photos, address, and timing. That is still the fastest way
                  to book {page.title.toLowerCase()} in Seattle and nearby service areas.
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
