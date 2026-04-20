import Link from "next/link";
import {
  FAQS,
  FEATURED_AREAS,
  LOCATION_PAGE_LINKS,
  PROCESS_STEPS,
  PROJECT_PHOTOS,
  SERVICE_PAGE_LINKS,
  SERVICES,
  SITE,
  TESTIMONIALS,
  TRUST_BADGES,
  WHY_CHOOSE_US,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildMetadata,
} from "../lib/site";

export const metadata = buildMetadata({
  title: "Junk Removal Green Lake Seattle",
  description:
    "Greenlake Junk Removal offers premium junk removal, furniture removal, garage cleanouts, and same-day service across Green Lake and north Seattle neighborhoods.",
  path: "/",
});

export default function HomePage() {
  const homeFaqs = FAQS;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFaqSchema(homeFaqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([{ name: "Home", path: "/" }]),
          ),
        }}
      />
      <main>
        <section className="hero-section">
          <div className="hero-media-wrap" aria-hidden="true">
            <video
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/Portfolio%20page%20.png"
            >
              <source src="/Home%20Page%20Background.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="hero-badge">Serving Green Lake & North Seattle</span>
              <h1 className="home-hero-title">JUNK REMOVAL DONE RIGHT.</h1>
              <div className="hero-actions">
                <a className="button button-primary button-text-emphasis" href={SITE.textHref}>
                  Text for a Quote
                </a>
                <a className="button button-secondary" href={SITE.callHref}>
                  Call Now
                </a>
              </div>
            </div>
            <div className="hero-panel">
              <aside className="hero-quote-card">
                <p className="eyebrow">Fast Quote</p>
                <h2>Call or text photos.</h2>
                <p>
                  Send photos and your address for a fast estimate and the next available pickup window.
                </p>
                <div className="hero-mini-points">
                  {TRUST_BADGES.slice(0, 3).map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="hero-quote-actions inline-actions">
                  <a className="button button-primary button-text-emphasis" href={SITE.textHref}>
                    Text Quote
                  </a>
                  <a className="button button-secondary" href={SITE.callHref}>
                    Call Now
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section section-band">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow">Why Homeowners Choose Us</p>
              <h2>Fast, clean, professional service without the usual hauling headaches.</h2>
              <p className="section-copy">
                Fast quotes, on-time arrival, and careful hauling for homes, rentals,
                and move-outs. Same-day or next-day pickup is available when scheduling allows.
              </p>
            </div>
            <div className="three-up">
              {WHY_CHOOSE_US.map((item) => (
                <article key={item.title} className="content-card">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow">Customer Reviews</p>
              <h2>Dependable enough to book without hesitation.</h2>
              <p className="section-copy">
                Customers care about the same things every time: a quick reply, a fair
                quote, and a crew that handles the property professionally.
              </p>
            </div>
            <div className="review-summary-bar">
              <div className="review-stat">
                <strong>Fast response</strong>
                <span>Quotes built for call and text, not a drawn-out sales process.</span>
              </div>
              <div className="review-stat">
                <strong>Professional arrival</strong>
                <span>Clear scheduling windows and clean communication.</span>
              </div>
              <div className="review-stat">
                <strong>Clean result</strong>
                <span>The job looks better when the truck pulls away.</span>
              </div>
            </div>
            <div className="three-up review-grid">
              {TESTIMONIALS.map((review) => (
                <article key={review.name} className="content-card review-card">
                  <div className="review-stars" aria-hidden="true">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <p className="quote">“{review.quote}”</p>
                  <p className="reviewer">{review.name}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-band">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Services</p>
              <h2>Full-service hauling for the jobs Seattle homeowners actually need.</h2>
              <p className="section-copy">
                Furniture removal, garage cleanouts, estate cleanouts, yard debris, and
                same-day pickup when routing allows.
              </p>
            </div>
            <div className="service-grid">
              {SERVICES.map((service, index) => (
                <article key={service.title} className="content-card">
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                  <Link className="text-link" href={SERVICE_PAGE_LINKS[index]?.href ?? "/services"}>
                    View service page
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow">Process</p>
              <h2>A clean three-step quote and pickup process.</h2>
            </div>
            <div className="three-up">
              {PROCESS_STEPS.map((step) => (
                <article key={step.step} className="content-card process-card">
                  <span className="process-number">{step.step}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-band">
          <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">Service Area</p>
              <h2>Based near Green Lake with fast coverage into nearby north Seattle neighborhoods.</h2>
              <p className="section-copy">
                Local routing helps with quicker response times, tighter arrival windows,
                and easier scheduling.
              </p>
              <Link className="text-link" href="/areas-we-serve">
                Explore all Seattle service areas
              </Link>
            </div>
            <div className="area-chip-grid">
              {FEATURED_AREAS.map((area) => (
                <Link
                  key={area}
                  className="area-chip area-chip-link"
                  href={
                    LOCATION_PAGE_LINKS.find((item) => item.label === area)?.href ??
                    "/areas-we-serve"
                  }
                >
                  {area}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">Portfolio Preview</p>
              <h2>Real jobs. Cleaner spaces. Better first impressions.</h2>
              <p className="section-copy">
                Show the result customers actually want: cleared garages, cleaner move-outs,
                and properties that feel ready again.
              </p>
              <div className="portfolio-tag-row">
                <span>Garage cleanouts</span>
                <span>Furniture pickup</span>
                <span>Estate cleanouts</span>
              </div>
              <Link className="text-link" href="/portfolio">
                View the portfolio
              </Link>
            </div>
            <div className="portfolio-preview-grid">
              {PORTFOLIO_PREVIEW.map((item, index) => (
                <article key={item.title} className={`portfolio-tile portfolio-tile-${index + 1}`}>
                  <div className="real-photo-frame portfolio-media-placeholder">
                    <img src={item.image.src} alt={item.image.alt} className="real-photo" />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-band">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow">Seattle Service</p>
              <h2>Service coverage across Seattle, Bellevue, and the greater Seattle area.</h2>
              <p className="section-copy">
                Greenlake Junk Removal serves neighborhoods across Seattle, Bellevue, and surrounding areas with junk
                removal, furniture pickup, garage cleanouts, estate cleanouts, and yard debris haul away.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow">FAQ</p>
              <h2>Answers that remove friction before someone contacts you.</h2>
            </div>
            <div className="faq-list">
              {homeFaqs.map((faq) => (
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
                <p className="eyebrow">Request Free Estimate</p>
                <h2>Need junk removal?</h2>
                <p>
                  Call now, text photos for a quote, or use the contact page to schedule.
                </p>
              </div>
              <div className="cta-banner-actions">
                <a className="button button-primary" href={SITE.callHref}>
                  Call Now
                </a>
                <a className="button button-secondary" href={SITE.textHref}>
                  Text for a Quote
                </a>
                <Link className="button button-tertiary" href="/contact">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const PORTFOLIO_PREVIEW = [
  {
    title: "Garage cleanout in Maple Leaf",
    body: "Heavy shelving, stacked boxes, scrap wood, and years of stored overflow cleared in one visit.",
    image: PROJECT_PHOTOS.mapleLeaf,
  },
  {
    title: "Furniture pickup in Green Lake",
    body: "Condo move-out furniture removal coordinated around elevator access and building timing.",
    image: PROJECT_PHOTOS.greenLake,
  },
  {
    title: "Estate cleanout in Roosevelt",
    body: "Respectful staged removal for a family preparing a longtime home for sale.",
    image: PROJECT_PHOTOS.roosevelt,
  },
] as const;
