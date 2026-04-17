import {
  PORTFOLIO_PROJECTS,
  PROJECT_PHOTOS,
  SITE,
  buildBreadcrumbSchema,
  buildMetadata,
} from "../../lib/site";
import { AREA_PAGES, SERVICE_PAGES } from "../../lib/seo-pages";

export const metadata = buildMetadata({
  title: "Portfolio",
  description:
    "See recent junk removal, garage cleanout, furniture pickup, estate cleanout, and debris hauling projects completed around Green Lake and north Seattle.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Portfolio", path: "/portfolio" },
            ]),
          ),
        }}
      />
      <main className="inner-page">
        <section className="page-hero portfolio-hero">
          <div className="container page-hero-shell">
            <div className="page-hero-panel portfolio-hero-panel">
              <h1>Portfolio</h1>
              <p className="page-lead">
                Recent jobs and project examples.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="portfolio-grid">
              {PORTFOLIO_PROJECTS.map((project) => (
                <article key={`${project.type}-${project.neighborhood}`} className="portfolio-card">
                  <div className="portfolio-media">
                    <div className="real-photo-frame portfolio-photo-frame">
                      <img
                        src={getProjectPhoto(project.neighborhood).src}
                        alt={getProjectPhoto(project.neighborhood).alt}
                        className="real-photo"
                      />
                    </div>
                  </div>
                  <div className="portfolio-copy">
                    <p className="eyebrow">{project.type}</p>
                    <h2>{project.neighborhood}</h2>
                    <p>{project.description}</p>
                    <div className="portfolio-meta">
                      <p>
                        <strong>Scope of work:</strong> {project.scope}
                      </p>
                      <p>
                        <strong>Result:</strong> {project.result}
                      </p>
                    </div>
                    <div className="portfolio-links">
                      {SERVICE_PAGES.find((service) => service.title.toLowerCase() === project.type.toLowerCase()) ? (
                        <a
                          className="area-card-link"
                          href={`/services/${
                            SERVICE_PAGES.find((service) => service.title.toLowerCase() === project.type.toLowerCase())!.slug
                          }`}
                        >
                          Related service
                        </a>
                      ) : null}
                      {AREA_PAGES.find((area) => area.title.toLowerCase() === project.neighborhood.toLowerCase()) ? (
                        <a
                          className="area-card-link"
                          href={`/areas-we-serve/${
                            AREA_PAGES.find((area) => area.title.toLowerCase() === project.neighborhood.toLowerCase())!.slug
                          }`}
                        >
                          {project.neighborhood} page
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cta-banner portfolio-cta-banner">
              <div className="cta-banner-copy">
                <p className="eyebrow">Book a Similar Job</p>
                <h2>Need the same kind of result at your property?</h2>
                <p>
                  Text photos for the fastest quote, or call directly if you want to book now.
                </p>
                <a className="portfolio-phone-pill" href={SITE.callHref}>
                  <span>Call Direct</span>
                  <strong>{SITE.phoneDisplay}</strong>
                </a>
              </div>
              <div className="cta-banner-actions portfolio-cta-actions">
                <a className="button button-primary button-text-emphasis portfolio-text-cta" href={SITE.textHref}>
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

function getProjectPhoto(neighborhood: string) {
  switch (neighborhood) {
    case "Maple Leaf":
      return PROJECT_PHOTOS.mapleLeaf;
    case "Green Lake":
      return PROJECT_PHOTOS.greenLake;
    case "Phinney Ridge":
      return PROJECT_PHOTOS.phinneyRidge;
    case "Fremont":
      return PROJECT_PHOTOS.fremont;
    case "Roosevelt":
      return PROJECT_PHOTOS.roosevelt;
    case "Ballard":
      return PROJECT_PHOTOS.ballard;
    case "Bellevue":
      return PROJECT_PHOTOS.bellevue;
    case "Kirkland":
      return PROJECT_PHOTOS.kirkland;
    case "Redmond":
      return PROJECT_PHOTOS.redmond;
    default:
      return PROJECT_PHOTOS.mapleLeaf;
  }
}
