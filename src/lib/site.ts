export const SITE = {
  name: "Green Lake Neighborhood Trash Hauling",
  alternateName: "Green Lake Junk Removal",
  chineseName: "绿湖垃圾清运",
  url: "https://greenlaketrashpickup.com",
  title:
    "Green Lake Junk Removal | Same-Day Trash, Furniture & Appliance Removal in Seattle",
  description:
    "Same-day junk removal in Green Lake, Greenlake, and North Seattle. Furniture, appliance, yard waste, garage cleanout, basement cleanout, and debris hauling. Call or text for a free quote.",
  shortDescription:
    "Fast junk removal, trash removal, and cleanouts in Green Lake Seattle with English and Chinese support.",
  phone: "+14257280942",
  phoneDisplay: "(425) 728-0942",
  city: "Seattle",
  region: "WA",
  country: "US",
  geo: {
    lat: 47.6809,
    lng: -122.3273,
  },
  serviceArea: [
    "Green Lake",
    "Wallingford",
    "Phinney Ridge",
    "Roosevelt",
    "Tangletown",
    "Ravenna",
    "Greenwood",
  ],
  serviceTypes: [
    "Junk removal",
    "Trash removal",
    "Furniture removal",
    "Appliance removal",
    "Yard waste removal",
    "Garage cleanout",
    "Basement cleanout",
    "Construction debris removal",
    "Bulky item pickup",
    "Same-day junk removal",
  ],
  logoPath: "/logo.svg",
  ogImagePath: "/og-image.svg",
  heroImage:
    "https://cdn.pixabay.com/photo/2012/02/27/17/05/garbage-17541_1280.jpg",
} as const;

export const FAQS_EN = [
  {
    question: "How much does junk removal cost in Green Lake?",
    answer:
      "Pricing depends on volume, weight, and access. Small loads usually start lower, while larger garage cleanouts, basement cleanouts, and construction debris removal cost more. The fastest way to get an exact Green Lake junk removal quote is to text a photo.",
  },
  {
    question: "Do you offer same-day junk removal near Green Lake?",
    answer:
      "Yes, when the route allows it. The service is built around Green Lake, Greenlake, and nearby North Seattle neighborhoods, so same-day and next-day junk removal are both part of the normal offer.",
  },
  {
    question: "What items do you take?",
    answer:
      "Common jobs include trash removal, furniture removal, appliance removal, yard waste removal, garage cleanout work, basement cleanouts, move-out junk, and construction debris removal.",
  },
  {
    question: "Do you remove furniture and appliances in Green Lake Seattle?",
    answer:
      "Yes. Furniture removal and appliance removal are two of the most common Green Lake junk removal calls, including couches, mattresses, tables, dressers, washers, dryers, and refrigerators when accessible for pickup.",
  },
  {
    question: "Do you do garage or basement cleanouts?",
    answer:
      "Yes. Garage cleanout and basement cleanout jobs are a core part of the service, especially for move-outs, rental turnovers, and homes that need bulky junk cleared quickly.",
  },
  {
    question: "Do you serve Green Lake and nearby Seattle neighborhoods?",
    answer:
      "Yes. Green Lake is the main target area, with nearby service in Wallingford, Roosevelt, Tangletown, Ravenna, Greenwood, and Phinney Ridge across North Seattle.",
  },
];

export const FAQS_ZH = [
  {
    question: "你们提供 Green Lake 的垃圾清运吗？",
    answer:
      "提供。Green Lake 是主要服务区域，也覆盖 Wallingford、Roosevelt、Tangletown、Ravenna、Greenwood 和 Phinney Ridge。",
  },
  {
    question: "Green Lake 垃圾清运怎么收费？",
    answer:
      "价格主要看体积、重量和搬运难度。最准确的方式是把照片和地址发给我们，我们会尽快回复报价。",
  },
  {
    question: "你们可以当天上门吗？",
    answer:
      "如果当天路线还有空档，通常可以安排当天或次日上门。Green Lake 和 North Seattle 周边是主要服务路线。",
  },
  {
    question: "你们可以清运哪些物品？",
    answer:
      "我们可以清运家具、袋装垃圾、搬家废弃物、车库杂物、庭院垃圾、大件物品和施工碎料。",
  },
  {
    question: "你们做车库和地下室清空吗？",
    answer:
      "做。车库清空、地下室清空、搬家前后杂物处理，都是常见项目。",
  },
  {
    question: "可以中文沟通吗？",
    answer:
      "可以。电话和短信都可以用中文沟通，方便更快确认清运内容和时间。",
  },
];

export const FAQS = [...FAQS_EN, ...FAQS_ZH];

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    alternateName: [SITE.alternateName, SITE.chineseName],
    url: SITE.url,
    image: [SITE.heroImage, `${SITE.url}${SITE.ogImagePath}`],
    logo: `${SITE.url}${SITE.logoPath}`,
    telephone: SITE.phone,
    priceRange: "$$",
    availableLanguage: ["en", "zh"],
    areaServed: SITE.serviceArea.map((area) => ({
      "@type": "Place",
      name: `${area}, Seattle, Washington`,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.phone,
        contactType: "customer service",
        availableLanguage: ["English", "Chinese"],
        areaServed: "Green Lake Seattle",
      },
    ],
    knowsAbout: SITE.serviceTypes,
    serviceType: SITE.serviceTypes,
    description: SITE.description,
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    alternateName: [SITE.alternateName, SITE.chineseName],
    url: SITE.url,
    description: SITE.description,
    inLanguage: ["en", "zh"],
  };
}

export function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Green Lake junk removal, trash removal, and cleanout service",
    alternateName: ["Green Lake 垃圾清运", "Greenlake junk removal"],
    serviceType: SITE.serviceTypes,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: SITE.serviceArea.map((area) => ({
      "@type": "Place",
      name: `${area}, Seattle, Washington`,
    })),
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: {
        "@type": "ContactPoint",
        telephone: SITE.phone,
        contactType: "customer service",
        availableLanguage: ["English", "Chinese"],
      },
    },
    description: SITE.description,
    inLanguage: ["en", "zh"],
    termsOfService: SITE.url,
  };
}

export function buildFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
