import Link from "next/link";
import {
  LOCATION_PAGE_LINKS,
  SITE,
  buildBreadcrumbSchema,
  buildMetadata,
} from "../../lib/site";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact Greenlake Junk Removal for junk hauling, furniture removal, garage cleanouts, and free estimates in Green Lake and north Seattle.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact" },
            ]),
          ),
        }}
      />
      <main className="inner-page">
        <section className="page-hero contact-hero">
          <div className="container page-hero-shell">
            <div className="page-hero-panel contact-hero-panel">
              <h1>Request a free quote.</h1>
              <p className="page-lead">
                Call, text, or send a quick message below.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container contact-layout">
            <div className="contact-panel">
              <p className="eyebrow">Reach Us</p>
              <h2>Call or text for a fast quote.</h2>
              <div className="contact-actions">
                <a className="button button-primary button-text-emphasis" href={SITE.textHref}>
                  Text for a Quote
                </a>
                <a className="button button-secondary" href={SITE.callHref}>
                  Call {SITE.phoneDisplay}
                </a>
              </div>
              <div className="contact-priority-card">
                <span className="contact-priority-kicker">Fastest option</span>
                <strong>Text photos of the job.</strong>
                <p>Include your address and what needs to be removed for the quickest reply.</p>
              </div>
              <div className="contact-list">
                <p>
                  <strong>Phone:</strong> {SITE.phoneDisplay}
                </p>
                <p>
                  <strong>Business hours:</strong>
                </p>
                <ul>
                  {SITE.hours.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <p>
                  <strong>Primary service area:</strong> Green Lake, Wallingford, Fremont,
                  Roosevelt, Greenwood, Phinney Ridge, Ballard, and nearby north Seattle neighborhoods.
                </p>
              </div>
              <p className="section-copy">
                Most quote requests can be answered quickly when you include photos, the job
                address, and a rough idea of timing. Same-day or next-day scheduling is
                offered when availability allows.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-band">
          <div className="container three-up">
            <article className="content-card">
              <h3>Fair pricing</h3>
              <p>Quotes are based on volume, labor, and access, with no inflated mystery fees.</p>
            </article>
            <article className="content-card">
              <h3>Professional arrival</h3>
              <p>Clients get a real arrival window and clear communication if routing changes.</p>
            </article>
            <article className="content-card">
              <h3>Respectful service</h3>
              <p>Ideal for homeowners who want a team they would feel comfortable sending to the property again.</p>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">Area Pages</p>
              <h2>Direct links to the local pages people search before they book.</h2>
              <p className="section-copy">
                If you are checking coverage for Bellevue, Medina, Clyde Hill, Kirkland,
                Mercer Island, Redmond, Bridle Trails, or core north Seattle neighborhoods,
                start with the dedicated location page below.
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
      </main>
    </>
  );
}
