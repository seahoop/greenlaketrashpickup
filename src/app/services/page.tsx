import Link from "next/link";
import {
  FAQS,
  LOCATION_PAGE_LINKS,
  SERVICE_PAGE_LINKS,
  SERVICES,
  SITE,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildMetadata,
} from "../../lib/site";

export const metadata = buildMetadata({
  title: "Junk Removal Services Seattle",
  description:
    "Explore junk removal, furniture removal, garage cleanouts, estate cleanouts, mattress pickup, appliance removal, and debris hauling services across Seattle and the greater Seattle area.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
            ]),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFaqSchema(FAQS)),
        }}
      />
      <main className="inner-page">
        <section className="page-hero services-hero">
          <div className="container page-hero-shell">
            <div className="page-hero-panel services-hero-panel">
              <h1>Services</h1>
              <p className="page-lead">
                Junk removal, cleanouts, furniture pickup, and debris hauling for Seattle,
                the Eastside, and the greater Seattle area.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">Full Service Coverage</p>
              <h2>Built for the jobs homeowners, landlords, and property managers actually need handled.</h2>
              <p className="section-copy">
                The site is structured around the search terms people use when they need
                junk removal, garage cleanouts, furniture removal, move-out hauling,
                estate cleanouts, and renovation debris pickup.
              </p>
            </div>
            <div className="stack-grid">
              <article className="content-card">
                <h3>Text-first quoting</h3>
                <p>Fastest path to a job is texting photos, the address, and timing.</p>
              </article>
              <article className="content-card">
                <h3>Residential and turnover work</h3>
                <p>Homes, condos, rentals, estate situations, and listing-prep cleanouts.</p>
              </article>
              <article className="content-card">
                <h3>Seattle logistics fluency</h3>
                <p>Alley access, stairs, detached garages, condo timing, and tighter streets are normal work.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-band">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Service Pages</p>
              <h2>Dedicated pages for each core junk removal and cleanout service.</h2>
              <p className="section-copy">
                Each service page targets a distinct job type, local use cases, related
                service areas, and conversion-focused FAQ intent.
              </p>
            </div>
            <div className="service-grid">
              {SERVICES.map((service, index) => (
                <article key={service.title} className={`content-card service-card service-card-${index + 1}`}>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                  <Link className="text-link" href={SERVICE_PAGE_LINKS[index]?.href ?? "/contact"}>
                    Explore service page
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">Where These Jobs Come From</p>
              <h2>Search intent crosses Seattle neighborhoods, the Eastside, and surrounding service-area cities.</h2>
              <p className="section-copy">
                Location pages support local intent for Green Lake, Wallingford, Greenwood,
                Roosevelt, Fremont, Ballard, Bellevue, Kirkland, Redmond, and other nearby markets.
              </p>
            </div>
            <div className="area-chip-grid">
              {LOCATION_PAGE_LINKS.map((area) => (
                <Link key={area.href} className="area-chip area-chip-link" href={area.href}>
                  {area.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-band">
          <div className="container">
            <div className="cta-banner">
              <div className="cta-banner-copy">
                <p className="eyebrow">Need A Quote</p>
                <h2>Text the job details and get a faster answer.</h2>
                <p>
                  Send photos, address, and timing for junk removal, furniture pickup,
                  garage cleanouts, estate cleanouts, or renovation debris hauling.
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
