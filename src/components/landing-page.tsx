"use client";

import { useState } from "react";
import { FAQS_EN, FAQS_ZH, SITE } from "../lib/site";

type Language = "en" | "zh";

const COPY = {
  en: {
    heroKicker: "Green Lake / Greenlake Junk Removal",
    heroTitle: "Green Lake Junk Removal in Seattle With Same-Day Pickup",
    heroLead:
      "Junk removal, trash removal, furniture removal, appliance removal, yard waste pickup, and debris hauling for Green Lake, Greenlake, and nearby North Seattle neighborhoods.",
    heroBody:
      "Call or text for a free estimate. Fast response, straightforward pricing, careful hauling, and easy booking for homes, rentals, and small business jobs.",
    callNow: "Call Now",
    textNow: "Text for Free Quote",
    trustLine: "Local to Green Lake • Same-day when available • Free estimate • Chinese + English",
    badges: ["Same-Day Junk Removal", "Furniture & Appliance Removal", "Garage & Basement Cleanouts"],
    quickLinks: [
      { href: "#services", label: "Services" },
      { href: "#areas", label: "Areas Served" },
      { href: "#faq", label: "FAQ" },
    ],
    trustKicker: "Why People Call",
    trustTitle: "Built for urgent junk removal in Green Lake Seattle.",
    trustItems: [
      {
        title: "Fast response",
        body: "Most people contacting a junk hauler want the pile gone fast. Call or text and get a quick response instead of waiting around.",
      },
      {
        title: "Straightforward pricing",
        body: "Clear estimates for junk removal, trash removal, furniture pickup, and larger cleanout jobs without a long sales process.",
      },
      {
        title: "Respectful service",
        body: "Careful hauling for residential jobs, rental turnovers, and small business cleanups across Green Lake and North Seattle.",
      },
    ],
    servicesKicker: "Services",
    servicesTitle: "Junk removal services people actually search for near Green Lake.",
    services: [
      {
        title: "Furniture removal",
        body: "Couches, mattresses, bed frames, dressers, tables, shelves, and bulky furniture pickup in Green Lake and nearby Seattle neighborhoods.",
      },
      {
        title: "Appliance removal",
        body: "Washers, dryers, refrigerators, stoves, microwaves, and other appliance removal jobs with easy scheduling by phone or text.",
      },
      {
        title: "Yard waste removal",
        body: "Branches, bagged yard debris, storm cleanup, and outdoor junk removal when your regular bin service is not enough.",
      },
      {
        title: "Garage cleanout",
        body: "Garage junk, stacked boxes, old shelving, broken tools, and mixed debris cleared out without dragging the job out for days.",
      },
      {
        title: "Basement cleanout",
        body: "Basement cleanouts for homeowners, landlords, and move-outs that need fast junk removal and heavy-item pickup.",
      },
      {
        title: "Construction debris removal",
        body: "Drywall scraps, wood, flooring, cabinets, and remodeling debris hauled away from smaller residential jobs in Green Lake Seattle.",
      },
    ],
    pricingKicker: "Pricing",
    pricingTitle: "Simple pricing starts with a photo.",
    pricingBody:
      "Text a photo of the junk pile and your Green Lake or Seattle address for a fast quote. Small loads cost less. Larger garage cleanouts, basement cleanouts, and construction debris removal cost more based on volume and access.",
    getPrice: "Text for Exact Price",
    whyKicker: "Why Choose Us",
    whyTitle: "A local Seattle junk removal page should sound local.",
    whyItems: [
      "Green Lake and Greenlake focused routing",
      "North Seattle coverage without a citywide wait",
      "Residential and small business jobs",
      "Careful hauling and clean jobsite pickup",
      "Easy booking by call or text",
      "Free estimate before pickup",
    ],
    areaKicker: "Areas Served",
    areaTitle: "Serving Green Lake first, then nearby North Seattle neighborhoods.",
    areaBody:
      "Green Lake is the core service area. Nearby pickups are also available in Wallingford, Roosevelt, Tangletown, Ravenna, Greenwood, and Phinney Ridge.",
    faqKicker: "FAQ",
    faqTitle: "Questions people ask before booking junk removal near Green Lake.",
    ctaKicker: "Call To Action",
    ctaTitle: "Need junk removal near Green Lake today?",
    ctaBody:
      "Call now or text a photo for a free estimate. Same-day junk removal is available when the route has space.",
    footerTitle: "Green Lake Junk Removal",
    footerBody:
      "Local junk removal, trash removal, furniture removal, appliance removal, yard waste removal, garage cleanout, basement cleanout, and construction debris removal in Green Lake Seattle.",
    stickyCall: "Call Now",
    stickyText: "Text Quote",
  },
  zh: {
    heroKicker: "Green Lake / Greenlake 垃圾清运",
    heroTitle: "Green Lake 西雅图垃圾清运，当天可安排上门",
    heroLead:
      "提供垃圾清运、杂物清理、家具清运、家电搬走、庭院垃圾处理，以及车库、地下室、装修碎料清运，覆盖 Green Lake、Greenlake 和 North Seattle 周边。",
    heroBody:
      "电话或短信都可以免费报价。回复快，价格直接，搬运仔细，适合住宅、出租房和小型商业项目。",
    callNow: "立即电话",
    textNow: "短信免费报价",
    trustLine: "Green Lake 本地路线 • 当天可约 • 免费报价 • 中文英文都可以",
    badges: ["当天垃圾清运", "家具和家电清运", "车库和地下室清空"],
    quickLinks: [
      { href: "#services", label: "服务" },
      { href: "#areas", label: "区域" },
      { href: "#faq", label: "问答" },
    ],
    trustKicker: "为什么有人会联系",
    trustTitle: "这是一页真正针对 Green Lake 的垃圾清运页面。",
    trustItems: [
      {
        title: "回复快",
        body: "很多客户都是想尽快把垃圾清走。电话或短信联系后，会尽快回复，不用来回等待。",
      },
      {
        title: "报价直接",
        body: "家具、家电、杂物和清空项目都先给清楚报价，不绕流程，不拖时间。",
      },
      {
        title: "搬运仔细",
        body: "适合住宅、出租房和小型商业项目，搬运过程更注意地面、门口和通道。",
      },
    ],
    servicesKicker: "服务项目",
    servicesTitle: "Green Lake 常见垃圾清运项目。",
    services: [
      {
        title: "家具清运",
        body: "沙发、床垫、床架、桌子、柜子等大件家具，都可以在 Green Lake 和附近西雅图社区安排清运。",
      },
      {
        title: "家电清运",
        body: "洗衣机、烘干机、冰箱、炉灶和其他旧家电，都可以通过电话或短信预约清走。",
      },
      {
        title: "庭院垃圾处理",
        body: "树枝、袋装庭院垃圾、整理后的户外杂物，超出普通垃圾桶容量时都可以处理。",
      },
      {
        title: "车库清空",
        body: "车库杂物、旧工具、堆积箱子和混合垃圾，可以集中清掉，不拖几天。",
      },
      {
        title: "地下室清空",
        body: "地下室重物和陈年杂物，也适合快速上门清运。",
      },
      {
        title: "装修碎料清运",
        body: "石膏板、木料、地板、旧柜体和小型装修项目产生的碎料都可以清走。",
      },
    ],
    pricingKicker: "报价方式",
    pricingTitle: "最快的报价方式是发照片。",
    pricingBody:
      "把垃圾照片和 Green Lake 或 Seattle 地址发过来，我们会尽快给出报价。量小价格更低，大型车库、地下室和装修垃圾项目会根据体积和搬运难度计算。",
    getPrice: "短信获取准确价格",
    whyKicker: "为什么选我们",
    whyTitle: "本地服务就该讲本地话。",
    whyItems: [
      "以 Green Lake / Greenlake 为核心路线",
      "覆盖 North Seattle，不必排很久",
      "住宅和小型商业项目都能做",
      "搬运仔细，现场更干净",
      "电话短信都方便预约",
      "先免费报价再安排上门",
    ],
    areaKicker: "服务区域",
    areaTitle: "先服务 Green Lake，再覆盖周边 North Seattle 社区。",
    areaBody:
      "Green Lake 是主要服务区域，也覆盖 Wallingford、Roosevelt、Tangletown、Ravenna、Greenwood 和 Phinney Ridge。",
    faqKicker: "常见问题",
    faqTitle: "Green Lake 垃圾清运常见问题。",
    ctaKicker: "马上联系",
    ctaTitle: "今天就想把垃圾清走？",
    ctaBody: "现在电话或短信发照片即可免费报价。如果路线有空档，可以安排当天上门。",
    footerTitle: "Green Lake 垃圾清运",
    footerBody:
      "服务 Green Lake Seattle 的垃圾清运、家具清运、家电清运、庭院垃圾、车库清空、地下室清空和装修碎料清运。",
    stickyCall: "电话咨询",
    stickyText: "短信报价",
  },
} as const;

export function LandingPage() {
  const [language, setLanguage] = useState<Language>("en");
  const copy = COPY[language];
  const faqs = language === "en" ? FAQS_EN : FAQS_ZH;

  return (
    <main className="page-shell">
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(10,10,10,0.84) 0%, rgba(10,10,10,0.60) 48%, rgba(10,10,10,0.18) 100%), url(${SITE.heroImage})`,
        }}
      >
        <div className="container hero-content">
          <div className="hero-copy">
            <div className="lang-toggle" role="tablist" aria-label="Language switch">
              <button
                type="button"
                className={language === "en" ? "lang-button active" : "lang-button"}
                onClick={() => setLanguage("en")}
              >
                English
              </button>
              <button
                type="button"
                className={language === "zh" ? "lang-button active" : "lang-button"}
                onClick={() => setLanguage("zh")}
              >
                中文
              </button>
            </div>

            <p className="section-kicker hero-kicker">{copy.heroKicker}</p>
            <h1>{copy.heroTitle}</h1>
            <p className="hero-lead">{copy.heroLead}</p>
            <p className="hero-body">{copy.heroBody}</p>

            <div className="cta-row">
              <a className="primary-cta" href={`tel:${SITE.phone}`}>
                {copy.callNow}
              </a>
              <a className="secondary-cta" href={`sms:${SITE.phone}`}>
                {copy.textNow}
              </a>
            </div>

            <div className="phone-row">
              <strong>{SITE.phoneDisplay}</strong>
              <span>{copy.trustLine}</span>
            </div>

            <div className="trust-badges">
              {copy.badges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>

            <nav className="hero-links" aria-label="Quick links">
              {copy.quickLinks.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      <section className="section section-contrast" id="trust">
        <div className="container">
          <div className="section-head narrow">
            <p className="section-kicker">{copy.trustKicker}</p>
            <h2>{copy.trustTitle}</h2>
          </div>
          <div className="trust-grid">
            {copy.trustItems.map((item) => (
              <article key={item.title} className="info-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">{copy.servicesKicker}</p>
            <h2>{copy.servicesTitle}</h2>
          </div>
          <div className="services-grid">
            {copy.services.map((service) => (
              <article key={service.title} className="info-card service-card">
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-contrast" id="pricing">
        <div className="container split-grid">
          <div className="section-head left">
            <p className="section-kicker">{copy.pricingKicker}</p>
            <h2>{copy.pricingTitle}</h2>
            <p className="section-sub">{copy.pricingBody}</p>
          </div>
          <div className="cta-panel">
            <h3>{SITE.phoneDisplay}</h3>
            <p>Free estimate by call or text.</p>
            <div className="cta-stack">
              <a className="primary-cta" href={`sms:${SITE.phone}`}>
                {copy.getPrice}
              </a>
              <a className="secondary-cta dark-outline" href={`tel:${SITE.phone}`}>
                {copy.callNow}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="why-choose-us">
        <div className="container split-grid">
          <div className="section-head left">
            <p className="section-kicker">{copy.whyKicker}</p>
            <h2>{copy.whyTitle}</h2>
          </div>
          <div className="why-list">
            {copy.whyItems.map((item) => (
              <div key={item} className="why-item">
                <span className="why-check">+</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-contrast" id="areas">
        <div className="container service-box">
          <div className="section-head left">
            <p className="section-kicker">{copy.areaKicker}</p>
            <h2>{copy.areaTitle}</h2>
            <p className="section-sub">{copy.areaBody}</p>
          </div>
          <div className="take-list compact">
            {SITE.serviceArea.map((area) => (
              <div key={area} className="take-item">
                <span className="take-dot" />
                <span>{area}, Seattle</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">{copy.faqKicker}</p>
            <h2>{copy.faqTitle}</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <article key={faq.question} className="faq-card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-contrast final-cta" id="contact">
        <div className="container final-box">
          <div>
            <p className="section-kicker">{copy.ctaKicker}</p>
            <h2>{copy.ctaTitle}</h2>
            <p className="section-sub">{copy.ctaBody}</p>
          </div>
          <div className="cta-stack">
            <a className="primary-cta" href={`tel:${SITE.phone}`}>
              {copy.callNow}
            </a>
            <a className="secondary-cta dark-outline" href={`sms:${SITE.phone}`}>
              {copy.textNow}
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <h3>{copy.footerTitle}</h3>
            <p>{copy.footerBody}</p>
          </div>
          <div>
            <p className="footer-label">Service Area</p>
            <p>Green Lake, Greenlake, Wallingford, Roosevelt, Tangletown, Ravenna, Greenwood, Phinney Ridge, North Seattle.</p>
          </div>
          <div>
            <p className="footer-label">Contact</p>
            <p>
              <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a>
            </p>
            <p>
              <a href={`sms:${SITE.phone}`}>Text for free quote</a>
            </p>
          </div>
        </div>
      </footer>

      <div className="sticky-mobile-cta">
        <a href={`tel:${SITE.phone}`}>{copy.stickyCall}</a>
        <a href={`sms:${SITE.phone}`}>{copy.stickyText}</a>
      </div>
    </main>
  );
}
