import Link from "next/link";
import {
  SITE,
  TEAM_VALUES,
  buildBreadcrumbSchema,
  buildMetadata,
} from "../../lib/site";

export const metadata = buildMetadata({
  title: "Team",
  description:
    "Meet Greenlake Junk Removal, a local Seattle junk removal company focused on punctual service, fair pricing, and a premium homeowner experience.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Team", path: "/team" },
            ]),
          ),
        }}
      />
      <main className="inner-page">
        <section className="page-hero team-hero">
          <div className="container page-hero-shell">
            <div className="page-hero-panel">
              <h1>Team</h1>
              <p className="page-lead">Professional, punctual, and local.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container two-column">
            <div>
              <p className="eyebrow">Company Story</p>
              <h2>A local brand shaped for trust, not noise.</h2>
              <p className="section-copy">
                The company serves homeowners, landlords, and families who want junk removal
                handled cleanly and professionally. The brand position is simple: show up on
                time, price the work fairly, communicate clearly, and leave the property in
                better shape than it was found.
              </p>
              <p className="section-copy">
                That matters in Green Lake, Wallingford, Phinney Ridge, Roosevelt, and the
                surrounding neighborhoods where homeowners care about presentation and expect
                a dependable local service partner.
              </p>
            </div>
            <div className="content-card">
              <p className="eyebrow">Mission</p>
              <h3>Make junk removal feel organized, straightforward, and worth paying for.</h3>
              <p>
                Every part of the service is meant to reduce friction: clear quote requests,
                punctual scheduling, polite crews, and a clean finished result.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-band">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Crew</p>
              <h2>Five team-member placeholders ready for your real staff photos.</h2>
              <p className="section-copy">
                This section is set up for a five-person crew. Once you add the real team
                photos, the page will read like a real local company instead of a generic
                service site.
              </p>
            </div>
            <div className="team-member-grid">
              {TEAM_MEMBERS.map((member) => (
                <article key={member.name} className="content-card team-member-card">
                  <div className="real-photo-frame team-member-photo-frame">
                    <img src={member.image.src} alt={member.image.alt} className="real-photo" />
                  </div>
                  <h3>{member.name}</h3>
                  <p className="team-member-role">{member.role}</p>
                  <p>{member.caption}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-band">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow">Values</p>
              <h2>Professional standards that actually affect the customer experience.</h2>
            </div>
            <div className="three-up">
              {TEAM_VALUES.map((value) => (
                <article key={value.title} className="content-card">
                  <h3>{value.title}</h3>
                  <p>{value.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-section">
            <div className="section-heading">
              <p className="eyebrow">Why Homeowners Trust Us</p>
              <h2>Because the service feels real, local, and easy to work with.</h2>
              <p className="section-copy">
                Clients want confidence that the crew will respect their time, their home,
                and the job itself. That is especially important for estate cleanouts,
                move-out work, and larger garage or basement projects.
              </p>
            </div>
            <div className="stack-grid">
              <article className="content-card">
                <h3>Clear communication</h3>
                <p>Phone, text, and quote requests are answered with direct information and no wasted motion.</p>
              </article>
              <article className="content-card">
                <h3>Reliable scheduling</h3>
                <p>Arrival windows are confirmed in advance, with practical attention to Seattle traffic and access constraints.</p>
              </article>
              <article className="content-card">
                <h3>Respect for the property</h3>
                <p>From hardwood floors to narrow basement stairs, the crew works like the property has value.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cta-banner">
              <div>
                <p className="eyebrow">Contact</p>
                <h2>Need a quote from a reliable local crew?</h2>
                <p>
                  Call, text, or request a free estimate. Greenlake Junk Removal serves
                  Green Lake and nearby Seattle neighborhoods with fast scheduling and a
                  professional standard of service.
                </p>
              </div>
              <div className="cta-banner-actions">
                <a className="button button-primary" href={SITE.callHref}>
                  Call Now
                </a>
                <Link className="button button-tertiary" href="/contact">
                  Request Free Estimate
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const TEAM_MEMBERS = [
  {
    name: "Jose",
    role: "Lead Crew",
    caption: "Leads the crew with clear communication, punctual scheduling, and a professional standard on site.",
    image: {
      src: "/Team%20Member/Jose%20Lead%20Crew%20.png",
      alt: "Jose, lead crew member at Greenlake Junk Removal.",
    },
  },
  {
    name: "Thomas",
    role: "Junk Removal Crew",
    caption: "Focused on clean junk removal, efficient loading, and respectful handling through the property.",
    image: {
      src: "/Team%20Member/Thomas%20Junk%20Removal%20Crew.png",
      alt: "Thomas, junk removal crew member at Greenlake Junk Removal.",
    },
  },
  {
    name: "Eric",
    role: "Furniture & Cleanout Crew",
    caption: "Handles furniture pickup and larger cleanout jobs with a calm, organized approach from start to finish.",
    image: {
      src: "/Team%20Member/Eric%20Furniture%20and%20clean%20out%20crew%20.png",
      alt: "Eric, furniture and cleanout crew member at Greenlake Junk Removal.",
    },
  },
  {
    name: "Move-Out & Estate Crew",
    role: "Move-Out & Estate Crew",
    caption: "Supports move-out and estate work with the kind of pace and professionalism sensitive jobs require.",
    image: {
      src: "/Team%20Member/Move%20out%20and%20Estate%20Crew.jpg",
      alt: "Move-out and estate cleanout crew member at Greenlake Junk Removal.",
    },
  },
  {
    name: "Hauling & Property Care",
    role: "Hauling & Property Care",
    caption: "Focused on careful hauling, route protection, and leaving the property in better shape when the job is done.",
    image: {
      src: "/Team%20Member/Hauling%20ANd%20property%20care%20.jpg",
      alt: "Hauling and property care crew member at Greenlake Junk Removal.",
    },
  },
] as const;
