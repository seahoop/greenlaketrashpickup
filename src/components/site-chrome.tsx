"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LOCATION_PAGE_LINKS, NAV_LINKS, SERVICE_PAGE_LINKS, SITE } from "../lib/site";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        [
          ".hero-copy",
          ".hero-panel",
          ".page-hero-panel",
          "main section",
          ".content-card",
          ".portfolio-card",
          ".faq-card",
          ".cta-banner",
          ".review-stat",
          ".portfolio-tile",
          ".contact-panel",
          ".area-chip",
        ].join(", "),
      ),
    );

    targets.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    targets.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      targets.forEach((element) => {
        element.classList.remove("scroll-reveal", "is-visible");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, [pathname]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="site-header">
        <div className="container header-row">
          <Link href="/" className="brand-mark" aria-label="Greenlake Junk Removal home">
            <Image
              src="/logo.png"
              alt="Greenlake Junk Removal logo"
              width={1024}
              height={1024}
              className="brand-logo"
              priority
            />
          </Link>
          <button
            type="button"
            className={mobileMenuOpen ? "mobile-nav-toggle is-open" : "mobile-nav-toggle"}
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className="desktop-nav" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? "nav-link active" : "nav-link"}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="header-cta">
            <a className="button button-primary compact button-text-emphasis" href={SITE.textHref}>
              Text Quote
            </a>
            <a className="button button-secondary compact" href={SITE.callHref}>
              Call Now
            </a>
          </div>
        </div>
        <div
          id="mobile-navigation"
          className={mobileMenuOpen ? "mobile-nav-shell is-open" : "mobile-nav-shell"}
        >
          <nav className="mobile-nav" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? "mobile-nav-link active" : "mobile-nav-link"}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <div className="mobile-nav-actions">
              <a className="button button-primary button-text-emphasis" href={SITE.textHref}>
                Text Quote
              </a>
              <a className="button button-secondary" href={SITE.callHref}>
                Call Now
              </a>
            </div>
          </nav>
        </div>
      </header>
      {children}
      <footer className="site-footer">
        <div className="container footer-shell">
          <div className="footer-brand">
            <Image
              src="/logo.png"
              alt="Greenlake Junk Removal logo"
              width={1024}
              height={1024}
              className="footer-logo"
            />
            <div>
              <p className="eyebrow">Greenlake Junk Removal</p>
              <p className="footer-copy">
                Professional junk removal for Green Lake, north Seattle, and the surrounding area.
              </p>
            </div>
          </div>
          <div className="footer-grid">
          <div>
            <h3>Services</h3>
            <ul className="footer-list">
              {SERVICE_PAGE_LINKS.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Pages</h3>
            <ul className="footer-list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Areas</h3>
            <ul className="footer-list">
              {LOCATION_PAGE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul className="footer-list">
              <li>
                <a href={SITE.callHref}>{SITE.phoneDisplay}</a>
              </li>
              <li>Green Lake / north Seattle service area</li>
            </ul>
          </div>
          </div>
        </div>
      </footer>
      <div className="mobile-bar">
        <a href={SITE.callHref}>Call Now</a>
        <a href={SITE.textHref}>Text Quote</a>
      </div>
    </>
  );
}
