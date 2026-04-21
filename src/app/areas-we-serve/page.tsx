import Link from "next/link";
import {
  AREA_CLUSTERS,
  LOCATION_PAGE_LINKS,
  SITE,
  buildBreadcrumbSchema,
  buildMetadata,
} from "../../lib/site";
import { AREA_PAGES } from "../../lib/seo-pages";

export const metadata = buildMetadata({
  title: "Areas We Serve",
  description:
    "Greenlake Junk Removal serves Green Lake, Wallingford, Bellevue, Medina, Bridle Trails, Kirkland, Mercer Island, Ballard, and nearby Seattle and Eastside areas.",
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
              <h2>Broader Seattle and Eastside coverage pages.</h2>
              <p className="section-copy">
                These pages cover broader Seattle, north Seattle, Eastside, and greater Seattle service areas.
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
              <h2>Find your neighborhood, city, or nearby Eastside service area.</h2>
              <p className="section-copy">
                Find the neighborhood or city closest to your job and start there for local service details.
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
                These are the core Eastside service areas for larger residential cleanouts, furniture pickup, and careful scheduling.
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
              <p className="eyebrow">More About The Service</p>
              <h3>See recent work and learn more about how the service is handled.</h3>
              <p>
                Visit the <Link href="/portfolio">portfolio</Link>,
                <Link href="/team"> team page</Link>, and <Link href="/contact"> contact page</Link>
                for project examples, company background, and quote details.
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

      </main>
    </>
  );
}
