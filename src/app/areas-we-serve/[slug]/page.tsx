import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  AREA_PAGE_MAP,
  AREA_PAGES,
  SERVICE_PAGE_MAP,
} from "../../../lib/seo-pages";
import {
  PRIMARY_CTA_TEXT,
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

function CtaBanner({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="cta-banner">
      <div className="cta-banner-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{body}</p>
        <p>
          <strong>{PRIMARY_CTA_TEXT}</strong>
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
  );
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
    .filter((area): area is NonNullable<typeof area> => Boolean(area))
    .filter((area) => area.slug !== page.slug);

  const overview = page.overview ?? [page.intro, page.localAngle];

  const areaSchema = {
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
      url: SITE.url,
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
          __html: JSON.stringify(areaSchema),
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
          <div className="container">
            <CtaBanner
              eyebrow={`${page.title} Quote`}
              title={`Need ${page.title} junk removal with a clear arrival window?`}
              body="Text photos, include the location, and get a useful quote range quickly. That is still the fastest way to schedule pickup."
            />
          </div>
        </section>

        <section className="section">
          <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">Local Overview</p>
              <h2>{page.title} jobs need content that matches the real neighborhood fit.</h2>
              {overview.map((paragraph) => (
                <p key={paragraph} className="section-copy">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="stack-grid">
              {page.commonRequests.map((request) => (
                <article key={request} className="content-card">
                  <h3>{request}</h3>
                  <p>{PRIMARY_CTA_TEXT}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {page.detailSections?.map((section, index) => (
          <section
            key={section.title}
            className={index % 2 === 0 ? "section section-band" : "section"}
          >
            <div className="container split-section">
              <div className="section-heading">
                <p className="eyebrow">Local Detail</p>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="section-copy">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="stack-grid">
                {(section.bullets ?? page.familiarWith).map((item) => (
                  <article key={item} className="content-card">
                    <h3>{item}</h3>
                    <p>Practical local scheduling starts with good photos and a real address.</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="section section-band">
          <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">What This Area Usually Needs</p>
              <h2>These are the jobs people in {page.title} call about most often.</h2>
              <p className="section-copy">
                These are the job types that actually lead people in {page.title} to start searching.
              </p>
            </div>
            <div className="stack-grid">
              {page.commonRequests.map((request) => (
                <article key={request} className="content-card">
                  <h3>Common local request</h3>
                  <p>{request}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">Local Familiarity</p>
              <h2>These on-the-ground details shape how the job is quoted and scheduled.</h2>
              <p className="section-copy">
                These local details affect access, timing, and how the pickup is handled.
              </p>
            </div>
            <div className="stack-grid">
              {page.familiarWith.map((item) => (
                <article key={item} className="content-card">
                  <h3>Why it matters</h3>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-band">
          <div className="container">
            <CtaBanner
              eyebrow="Fastest Next Step"
              title={`Text photos for a fast ${page.title} quote.`}
              body={`Include the address, explain what needs to go, and mention any access details that affect the route in ${page.title}.`}
            />
          </div>
        </section>

        <section className="section">
          <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">Related Services</p>
              <h2>These services are the closest fit for {page.title} jobs.</h2>
              <p className="section-copy">
                These are the services most often booked for jobs in this area.
              </p>
            </div>
            <div className="area-chip-grid">
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  className="area-chip area-chip-link"
                  href={`/services/${service.slug}`}
                >
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
                <h2>These nearby areas are commonly served on the same routes.</h2>
                <p className="section-copy">
                  Nearby neighborhoods and cities often overlap with the same scheduling and service patterns.
                </p>
              </div>
              <div className="area-chip-grid">
                {nearbyAreas.map((area) => (
                  <Link
                    key={area.slug}
                    className="area-chip area-chip-link"
                    href={`/areas-we-serve/${area.slug}`}
                  >
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
            <CtaBanner
              eyebrow="Ready To Schedule"
              title={`Need a fast answer for a ${page.title} pickup?`}
              body={`Text photos, include the ${page.title} location, and say when you want the job handled. That is the fastest route to a clear quote.`}
            />
          </div>
        </section>
      </main>
    </>
  );
}
