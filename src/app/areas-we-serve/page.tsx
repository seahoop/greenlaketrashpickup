import Link from "next/link";
import {
  AREA_CLUSTERS,
  LOCATION_PAGE_LINKS,
  POPULAR_SEO_TERMS,
  SITE,
  buildBreadcrumbSchema,
  buildMetadata,
} from "../../lib/site";
import { AREA_PAGES } from "../../lib/seo-pages";

export const metadata = buildMetadata({
  title: "Areas We Serve",
  description:
    "Greenlake Junk Removal serves Green Lake, Greenwood, Wallingford, Fremont, Roosevelt, Ballard, Phinney Ridge, and nearby north Seattle neighborhoods with premium junk hauling.",
  path: "/areas-we-serve",
});

export default function AreasWeServePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Areas We Serve", path: "/areas-we-serve" },
            ]),
          ),
        }}
      />
      <main className="inner-page">
        <section className="page-hero areas-hero">
          <div className="container page-hero-shell">
            <div className="page-hero-panel">
              <h1>Service Area</h1>
              <p className="page-lead">
                Seattle, north Seattle, the Eastside, and the greater Seattle area.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-band">
          <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">Local Coverage</p>
              <h2>Quick routing from Green Lake into Seattle, the Eastside, and the neighborhoods we serve most often.</h2>
              <p className="section-copy">
                Green Lake is the center of the service area, but coverage extends across
                Seattle, Bellevue, Kirkland, Redmond, Newcastle, Bridle Trails, South Park,
                and nearby greater Seattle markets when routing allows.
              </p>
            </div>
            <nav className="area-nav" aria-label="Area clusters">
              {AREA_CLUSTERS.map((cluster) => (
                <a key={cluster.slug} className="area-nav-link" href={`#${cluster.slug}`}>
                  {cluster.title}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <section className="section">
          <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">Regional Hubs</p>
              <h2>Hub pages for broader Seattle and Eastside search intent.</h2>
              <p className="section-copy">
                These pages support broader searches like Seattle junk removal,
                north Seattle junk removal, Eastside junk removal, and greater Seattle junk removal.
              </p>
            </div>
            <div className="area-chip-grid">
              {AREA_PAGES.filter((page) =>
                [
                  "seattle-junk-removal",
                  "greater-seattle-junk-removal",
                  "eastside-junk-removal",
                  "north-seattle-junk-removal",
                ].includes(page.slug),
              ).map((page) => (
                <Link key={page.slug} className="area-chip area-chip-link" href={`/areas-we-serve/${page.slug}`}>
                  {page.title}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-band">
          <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">City And Neighborhood Pages</p>
              <h2>Dedicated local pages for neighborhoods, cities, and higher-value Eastside markets.</h2>
              <p className="section-copy">
                Each page is written around local job patterns, common cleanout scenarios,
                related services, and location-specific FAQs. The goal is full crawl coverage, not
                just a handful of visible area links.
              </p>
            </div>
            <div className="area-chip-grid">
              {LOCATION_PAGE_LINKS.map((page) => (
                <Link key={page.href} className="area-chip area-chip-link" href={page.href}>
                  {page.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">Eastside Coverage</p>
              <h2>Priority city pages for Bellevue, Medina, Clyde Hill, Kirkland, Mercer Island, Redmond, and Bridle Trails.</h2>
              <p className="section-copy">
                These are the location pages most likely to matter for premium Eastside search intent and
                should stay heavily linked from the homepage, footer, and related service pages.
              </p>
            </div>
            <div className="area-chip-grid">
              {LOCATION_PAGE_LINKS.filter((page) =>
                [
                  "Bellevue",
                  "Medina",
                  "Clyde Hill",
                  "Kirkland",
                  "Mercer Island",
                  "Redmond",
                  "Bridle Trails",
                  "Newcastle",
                ].includes(page.label),
              ).map((page) => (
                <Link key={page.href} className="area-chip area-chip-link" href={page.href}>
                  {page.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {AREA_CLUSTERS.map((cluster) => (
          <section key={cluster.slug} className="section" id={cluster.slug}>
            <div className="container">
              <div className="section-heading">
                <p className="eyebrow">{cluster.title}</p>
                <h2>{cluster.title} Seattle neighborhoods near Green Lake.</h2>
                <p className="section-copy">{cluster.intro}</p>
              </div>
              <div className="area-section-grid">
                {cluster.areas.map((area) => (
                  <article key={area.name} className="content-card area-card">
                    <p className="area-card-kicker">Junk Removal {area.name}</p>
                    <h3>{area.name}</h3>
                    <p>{area.copy}</p>
                    <div className="area-card-actions">
                      {AREA_PAGES.find((page) => page.title.toLowerCase() === area.name.toLowerCase()) ? (
                        <Link
                          className="area-card-link"
                          href={`/areas-we-serve/${
                            AREA_PAGES.find((page) => page.title.toLowerCase() === area.name.toLowerCase())!.slug
                          }`}
                        >
                          View local page
                        </Link>
                      ) : null}
                      <a className="area-card-link" href={SITE.textHref}>
                        Text for a Quote
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="section section-band">
          <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">Why Local Trust Matters</p>
              <h2>Based near Green Lake, built for Seattle homes and access realities.</h2>
            </div>
            <div className="stack-grid">
              <article className="content-card">
                <h3>Quick scheduling</h3>
                <p>Concentrated routing means faster lead times for Green Lake and surrounding neighborhoods.</p>
              </article>
              <article className="content-card">
                <h3>Familiar with access and logistics</h3>
                <p>Older homes, detached garages, alley pickup, apartment access, and narrow drives are all part of normal Seattle work.</p>
              </article>
              <article className="content-card">
                <h3>Respectful service</h3>
                <p>The service is positioned for homeowners who want a dependable crew and a tidy final result.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container two-column">
            <div className="content-card">
              <p className="eyebrow">Internal Links</p>
              <h3>Keep users and search engines moving naturally through the site.</h3>
              <p>
                From area pages, direct visitors to the <Link href="/portfolio">portfolio</Link>,
                <Link href="/team"> team page</Link>, and <Link href="/contact"> contact page</Link>
                for proof, trust, and conversion support.
              </p>
            </div>
            <div className="content-card">
              <p className="eyebrow">Service Area Summary</p>
              <h3>{SITE.serviceAreas.join(", ")}</h3>
              <p>
                Additional nearby requests can be quoted depending on routing, project size,
                and scheduling availability.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-band">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow">Popular Searches</p>
              <h2>Local Seattle junk removal terms people actually search.</h2>
              <p className="section-copy">
                This page supports neighborhood intent around same-day junk removal, furniture removal,
                garage cleanouts, estate cleanouts, move-out cleanup, and yard debris haul away across north Seattle.
              </p>
            </div>
            <div className="seo-term-grid">
              {POPULAR_SEO_TERMS.map((term) => (
                <div key={term} className="seo-term-chip">
                  {term}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
