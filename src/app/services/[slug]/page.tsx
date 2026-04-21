import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  AREA_PAGE_MAP,
  SERVICE_PAGE_MAP,
  SERVICE_PAGES,
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

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = SERVICE_PAGE_MAP[slug];

  if (!page) {
    notFound();
  }

  const relatedAreas = page.relatedAreaSlugs
    .map((areaSlug) => AREA_PAGE_MAP[areaSlug])
    .filter((area): area is NonNullable<typeof area> => Boolean(area));

  const relatedServices = (page.relatedServiceSlugs ?? [])
    .map((serviceSlug) => SERVICE_PAGE_MAP[serviceSlug])
    .filter((service): service is NonNullable<typeof service> => Boolean(service))
    .filter((service) => service.slug !== page.slug);

  const overview = page.overview ?? [page.intro, page.processBody];
  const includes = page.includes ?? page.commonJobs;
  const whoCalls = page.whoCalls ?? page.scenarios;
  const pricingFactors = page.pricingFactors ?? [
    "Pricing is based on load volume, weight, labor, access, and how much staging or carrying the job requires.",
    "Stairs, elevators, detached garages, basements, and longer carrying routes can change labor time.",
    "Jobs tied to a move, remodel, or listing timeline are easiest to quote when photos and access notes are shared early.",
  ];
  const itemsHandled = page.itemsHandled ?? page.commonJobs;
  const itemsNotHandled = page.itemsNotHandled ?? [
    "Hazardous waste, chemicals, and materials that require a separate licensed disposal path.",
    "Items that cannot be identified clearly from photos or description before scheduling.",
  ];
  const photoQuoteSteps = page.photoQuoteSteps ?? [
    "Text clear photos of what needs to go.",
    "Include the address or neighborhood.",
    "Mention access details like stairs, elevators, alleys, or detached garages.",
    "Add the timing you want so the route can be priced realistically.",
  ];

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
      areaServed: "Green Lake, Seattle, North Seattle, Bellevue, Kirkland, Medina, Bridle Trails, Mercer Island, Ballard, and nearby areas",
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
          <div className="container">
            <CtaBanner
              eyebrow={`${page.title} Quote`}
              title={page.processTitle}
              body="Text photos, include the location, and get a useful quote range quickly. That is still the fastest way to schedule pickup."
            />
          </div>
        </section>

        <section className="section">
          <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">What This Service Includes</p>
              <h2>{page.title} for real residential jobs and practical scheduling.</h2>
              {overview.map((paragraph) => (
                <p key={paragraph} className="section-copy">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="stack-grid">
              {includes.map((item) => (
                <article key={item} className="content-card">
                  <h3>{item}</h3>
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
                <p className="eyebrow">Service Detail</p>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="section-copy">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="stack-grid">
                {(section.bullets ?? page.commonJobs).map((item) => (
                  <article key={item} className="content-card">
                    <h3>{item}</h3>
                    <p>Clear, practical scheduling starts with photos and a real address.</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="section section-band">
          <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">Common Jobs</p>
              <h2>{page.title} covers more than one kind of pickup.</h2>
              <p className="section-copy">
                These are the most common situations for this service in Green Lake,
                Wallingford, Bellevue, Kirkland, Ballard, and nearby Seattle or Eastside areas.
              </p>
            </div>
            <div className="stack-grid">
              {page.commonJobs.map((job) => (
                <article key={job} className="content-card">
                  <h3>{job}</h3>
                  <p>{PRIMARY_CTA_TEXT}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">Who Usually Calls</p>
              <h2>These are the customers and situations this service fits best.</h2>
              <p className="section-copy">
                The right pickup depends on the actual job, the access, and how quickly you need it gone.
              </p>
            </div>
            <div className="stack-grid">
              {whoCalls.map((item) => (
                <article key={item} className="content-card">
                  <h3>Typical fit</h3>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-band">
          <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">Pricing Factors</p>
              <h2>Quotes are built around scope, access, labor, and route planning.</h2>
              <p className="section-copy">
                That is why photos and access notes make the first quote much more useful than a vague list of items.
              </p>
            </div>
            <div className="stack-grid">
              {pricingFactors.map((factor) => (
                <article key={factor} className="content-card">
                  <h3>What affects pricing</h3>
                  <p>{factor}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">Items Handled</p>
              <h2>Typical loads that fit this service well.</h2>
              <p className="section-copy">
                The exact mix varies by neighborhood, but these are the item types most commonly handled with this service.
              </p>
            </div>
            <div className="stack-grid">
              {itemsHandled.map((item) => (
                <article key={item} className="content-card">
                  <h3>Handled regularly</h3>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-band">
          <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">Items Requiring Special Disposal</p>
              <h2>Some material needs a different disposal path.</h2>
              <p className="section-copy">
                It is better to flag these items early so the quote is accurate and the job is routed the right way.
              </p>
            </div>
            <div className="stack-grid">
              {itemsNotHandled.map((item) => (
                <article key={item} className="content-card">
                  <h3>Needs review first</h3>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">How Photo Quotes Work</p>
              <h2>Texting photos is still the fastest route to a useful quote.</h2>
              <p className="section-copy">
                Good photos make it easier to understand load size, access, and which nearby route the job fits best.
              </p>
            </div>
            <div className="stack-grid">
              {photoQuoteSteps.map((step, index) => (
                <article key={step} className="content-card process-card">
                  <span className="process-number">{`0${index + 1}`.slice(-2)}</span>
                  <h3>Quote step {index + 1}</h3>
                  <p>{step}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-band">
          <div className="container">
            <CtaBanner
              eyebrow={`Book ${page.title}`}
              title="Need a clear answer before the schedule fills?"
              body={`Text photos, include your location, and we can usually tell you quickly whether ${page.title.toLowerCase()} fits the route and what the quote range should look like.`}
            />
          </div>
        </section>

        {relatedServices.length > 0 ? (
          <section className="section">
            <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">Related Services</p>
              <h2>Customers booking {page.title.toLowerCase()} often need these services too.</h2>
              <p className="section-copy">
                These are the services most often booked alongside or instead of this one.
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
        ) : null}

        <section className="section section-band">
          <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">Areas Served</p>
              <h2>This service is regularly booked in these neighborhoods and cities.</h2>
              <p className="section-copy">
                These are the areas where this kind of pickup comes up most often.
              </p>
            </div>
            <div className="area-chip-grid">
              {relatedAreas.map((area) => (
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

        <section className="section">
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
            <CtaBanner
              eyebrow="Ready To Book"
              title={page.processTitle}
              body={`The fastest way to book ${page.title.toLowerCase()} is still to text photos, include the location, and say when you want pickup handled.`}
            />
          </div>
        </section>
      </main>
    </>
  );
}
