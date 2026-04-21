import type { Metadata } from "next";

export const SITE = {
  name: "Greenlake Junk Removal",
  legalName: "Greenlake Junk Removal",
  url: "https://greenlaketrashpickup.com",
  phone: "+14257280942",
  phoneDisplay: "(425) 728-0942",
  textHref: "sms:+14257280942",
  callHref: "tel:+14257280942",
  email: "hello@greenlakejunkremoval.com",
  city: "Seattle",
  region: "WA",
  country: "US",
  hours: [
    "Monday to Saturday: 7:00 AM to 7:00 PM",
    "Sunday: By request",
  ],
  geo: {
    lat: 47.6809,
    lng: -122.3273,
  },
  address: {
    addressLocality: "Seattle",
    addressRegion: "WA",
    addressCountry: "US",
  },
  serviceAreas: [
    "Seattle",
    "North Seattle",
    "Greater Seattle",
    "Green Lake",
    "Greenwood",
    "Northgate",
    "Licton Springs",
    "Maple Leaf",
    "Roosevelt",
    "Wallingford",
    "Fremont",
    "Tangletown",
    "Lower Wallingford",
    "Phinney Ridge",
    "Ballard",
    "Crown Hill",
    "Woodland Park",
    "Loyal Heights",
    "Bellevue",
    "Medina",
    "Clyde Hill",
    "Kirkland",
    "Mercer Island",
    "Redmond",
    "Bridle Trails",
    "Newcastle",
    "South Park",
  ],
  services: [
    "Junk removal",
    "Furniture removal",
    "Mattress removal",
    "Garage cleanout",
    "Basement cleanout",
    "Yard debris haul away",
    "Move-out cleanouts",
    "Estate cleanouts",
    "Appliance removal",
    "Light demolition debris pickup",
  ],
  defaultTitle:
    "Greenlake Junk Removal | Premium Junk Removal in Green Lake & North Seattle",
  defaultDescription:
    "Premium junk removal in Green Lake and north Seattle. Furniture removal, garage cleanouts, estate cleanouts, yard debris haul away, and fast quote scheduling for homeowners and property managers.",
  ogImagePath: "/og-image.svg",
  logoPath: "/logo.svg",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/areas-we-serve", label: "Areas We Serve" },
  { href: "/contact", label: "Contact" },
] as const;

export const PRIMARY_CTA_TEXT = "Text photos for a fast quote: 425-728-0942";

export const SERVICE_PAGE_LINKS = [
  { href: "/services/junk-removal", label: "Junk Removal" },
  { href: "/services/furniture-removal", label: "Furniture Removal" },
  { href: "/services/mattress-removal", label: "Mattress Removal" },
  { href: "/services/garage-cleanout", label: "Garage Cleanout" },
  { href: "/services/basement-cleanout", label: "Basement Cleanout" },
  { href: "/services/estate-cleanout", label: "Estate Cleanout" },
  { href: "/services/move-out-cleanout", label: "Move-Out Cleanout" },
  { href: "/services/yard-debris-removal", label: "Yard Debris Removal" },
  { href: "/services/appliance-removal", label: "Appliance Removal" },
  { href: "/services/renovation-debris-removal", label: "Renovation Debris Removal" },
] as const;

export const LOCATION_PAGE_LINKS = [
  { href: "/areas-we-serve/green-lake", label: "Green Lake" },
  { href: "/areas-we-serve/wallingford", label: "Wallingford" },
  { href: "/areas-we-serve/greenwood", label: "Greenwood" },
  { href: "/areas-we-serve/roosevelt", label: "Roosevelt" },
  { href: "/areas-we-serve/maple-leaf", label: "Maple Leaf" },
  { href: "/areas-we-serve/northgate", label: "Northgate" },
  { href: "/areas-we-serve/fremont", label: "Fremont" },
  { href: "/areas-we-serve/phinney-ridge", label: "Phinney Ridge" },
  { href: "/areas-we-serve/ballard", label: "Ballard" },
  { href: "/areas-we-serve/bellevue", label: "Bellevue" },
  { href: "/areas-we-serve/medina", label: "Medina" },
  { href: "/areas-we-serve/clyde-hill", label: "Clyde Hill" },
  { href: "/areas-we-serve/kirkland", label: "Kirkland" },
  { href: "/areas-we-serve/mercer-island", label: "Mercer Island" },
  { href: "/areas-we-serve/redmond", label: "Redmond" },
  { href: "/areas-we-serve/bridle-trails", label: "Bridle Trails" },
  { href: "/areas-we-serve/newcastle", label: "Newcastle" },
  { href: "/areas-we-serve/south-park", label: "South Park" },
] as const;

export const FOOTER_AREA_LINKS = [
  { href: "/areas-we-serve/green-lake", label: "Green Lake" },
  { href: "/areas-we-serve/wallingford", label: "Wallingford" },
  { href: "/areas-we-serve/bellevue", label: "Bellevue" },
  { href: "/areas-we-serve/medina", label: "Medina" },
  { href: "/areas-we-serve/bridle-trails", label: "Bridle Trails" },
  { href: "/areas-we-serve/kirkland", label: "Kirkland" },
  { href: "/areas-we-serve/mercer-island", label: "Mercer Island" },
  { href: "/areas-we-serve/ballard", label: "Ballard" },
] as const;

export const TRUST_BADGES = [
  "Locally based near Green Lake",
  "Same-day or next-day scheduling",
  "Straightforward on-site quotes",
  "Respectful crews and careful loading",
] as const;

export const SERVICES = [
  {
    title: "Junk removal",
    body:
      "Fast pickup for mixed household clutter, bulky items, storage overflow, and general junk removal jobs across Green Lake and north Seattle.",
  },
  {
    title: "Furniture removal",
    body:
      "Sofas, sectionals, dressers, desks, bed frames, dining sets, and oversized furniture removed without dragging through the process.",
  },
  {
    title: "Mattress removal",
    body:
      "Mattress and box spring pickup for homeowners, landlords, and move-outs that need clean, punctual removal.",
  },
  {
    title: "Garage cleanout",
    body:
      "Garage cleanouts for long-delayed buildup, old shelving, broken tools, paint cans, and years of stored junk.",
  },
  {
    title: "Basement cleanout",
    body:
      "Basement cleanouts handled carefully for tight access, heavy items, and homes getting ready for renovation or sale.",
  },
  {
    title: "Yard debris haul away",
    body:
      "Branches, storm debris, bagged clippings, fencing scraps, and outdoor cleanup material hauled away quickly.",
  },
  {
    title: "Move-out cleanouts",
    body:
      "Turnover-ready hauling for homes, rentals, and apartments with leftover furniture, boxes, debris, and mixed junk.",
  },
  {
    title: "Estate cleanouts",
    body:
      "Professional, respectful estate cleanouts for families managing downsizing, probate timelines, or home preparation.",
  },
  {
    title: "Appliance removal",
    body:
      "Refrigerators, washers, dryers, stoves, freezers, and other heavy appliances picked up with careful protection of walls and floors.",
  },
  {
    title: "Light demolition debris pickup",
    body:
      "Drywall, flooring, cabinets, lumber offcuts, and remodeling debris from smaller residential projects.",
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Professional presentation",
    body:
      "Homeowners call when they want a crew that shows up on time, communicates clearly, and treats the property like it matters.",
  },
  {
    title: "Built for Seattle logistics",
    body:
      "We know alleys, stairs, narrow driveways, detached garages, basement access, and the scheduling realities of dense north Seattle neighborhoods.",
  },
  {
    title: "Premium local positioning",
    body:
      "This is not a bargain-bin hauling brand. The service is built for people who want speed, trust, and a polished experience from first contact to sweep-up.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Call or text photos",
    body:
      "Send a few photos, the job address, and your preferred timing. We reply with a quick estimate range and scheduling options.",
  },
  {
    step: "02",
    title: "Confirm arrival window",
    body:
      "We confirm the appointment, note any access details, and show up in a clear time window so you are not stuck waiting around.",
  },
  {
    step: "03",
    title: "Load, sweep, and finish",
    body:
      "The crew removes the material, protects the route through the home, and leaves the pickup area noticeably cleaner.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Fast response, polished communication, and they handled a heavy basement cleanout without turning the house upside down.",
    name: "Wallingford homeowner",
  },
  {
    quote:
      "The quote was straightforward, the truck arrived on time, and the furniture removal was much more professional than other haulers we called.",
    name: "Green Lake client",
  },
  {
    quote:
      "Exactly the kind of dependable crew a property manager wants for move-out junk removal and turnover cleanup.",
    name: "North Seattle property manager",
  },
] as const;

export const FAQS = [
  {
    question: "How much does junk removal cost in Green Lake or Seattle?",
    answer:
      "Pricing depends on volume, weight, access, and how quickly the crew can load the material. Texting photos is the fastest way to get an accurate estimate for junk removal, furniture removal, or a larger cleanout.",
  },
  {
    question: "Do you offer same-day junk removal in Seattle?",
    answer:
      "Same-day or next-day service is available when routing allows. Green Lake and nearby north Seattle neighborhoods usually get the fastest response times.",
  },
  {
    question: "What types of items do you remove?",
    answer:
      "Common jobs include furniture, mattresses, appliances, yard debris, garage and basement cleanouts, move-out junk, estate cleanouts, and light renovation debris.",
  },
  {
    question: "Do you work with homeowners and property managers?",
    answer:
      "Yes. The company is set up for homeowners, landlords, listing prep, rental turnovers, estate situations, and families trying to clear space quickly.",
  },
] as const;

export const FEATURED_AREAS = [
  "Green Lake",
  "Greenwood",
  "Wallingford",
  "Fremont",
  "Roosevelt",
  "Bellevue",
  "Kirkland",
  "Medina",
  "Bridle Trails",
  "Ballard",
] as const;

export const TEAM_VALUES = [
  {
    title: "Punctuality",
    body:
      "Reliable arrival windows and clear updates matter more than sales talk. Clients should know exactly when the truck is coming.",
  },
  {
    title: "Professionalism",
    body:
      "Clean communication, careful handling, and respectful service are part of the product, not an afterthought.",
  },
  {
    title: "Fair pricing",
    body:
      "Quotes are direct, understandable, and tied to real job variables like load volume, labor, and access.",
  },
] as const;

export const PHOTO_PLACEHOLDERS = [
  "Team portrait in front of the truck near Green Lake",
  "Crew loading a premium residential furniture removal job",
  "Garage cleanout with stored tools and overflow ready for removal",
  "Yard debris pile prepared for fast haul-away service",
] as const;

export const ONLINE_PHOTOS = {
  truckUnload: {
    src: "https://images.unsplash.com/photo-1698917414969-feade59e3343?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1600",
    alt: "Worker unloading mixed household items from a truck for a residential junk removal job.",
  },
  garageClutter: {
    src: "https://images.unsplash.com/photo-1726929219819-b90904f9d329?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1600",
    alt: "Cluttered garage with tools, equipment, and stored overflow before a garage cleanout.",
  },
  yardDebris: {
    src: "https://images.unsplash.com/photo-1599171813897-4935b939a42e?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1600",
    alt: "Pile of branches and yard debris gathered for haul-away pickup.",
  },
  cleanupPile: {
    src: "https://images.unsplash.com/photo-1648598860632-dbb13eb848d6?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=80&w=1600",
    alt: "Outdoor cleanup pile ready for junk removal and disposal.",
  },
} as const;

export const PROJECT_PHOTOS = {
  mapleLeaf: {
    src: "/Garage%20Clean%20out%20Maple%20leaf%20seattle%20.png",
    alt: "Garage cleanout project in Maple Leaf Seattle with stored items and clutter before pickup.",
  },
  greenLake: {
    src: "/Furniture%20pick%20up%20greenlake%20seattle.png",
    alt: "Furniture pickup project in Green Lake Seattle with bulky household items ready for removal.",
  },
  phinneyRidge: {
    src: "/Yard%20debris%20phinney%20ridge%20seattle.png",
    alt: "Yard debris removal project in Phinney Ridge Seattle with branches and outdoor cleanup material.",
  },
  fremont: {
    src: "/Move%20out%20clean%20out%20frmont%20seattle.png",
    alt: "Move-out cleanout project in Fremont Seattle with leftover items cleared for turnover.",
  },
  roosevelt: {
    src: "/Estate%20clean%20out%20roosevelt%20seattle.png",
    alt: "Estate cleanout project in Roosevelt Seattle during home preparation and sorting.",
  },
  ballard: {
    src: "/Portfolio%20page%20.png",
    alt: "Renovation debris removal project in Ballard with a loaded debris container and truck.",
  },
  bellevue: {
    src: "/Bellevue%20garage%20clean%20out%20.png",
    alt: "Bellevue garage cleanout project with mixed household storage and bulky items cleared.",
  },
  kirkland: {
    src: "/Kirkland%20furniture%20pick%20up%20.png",
    alt: "Furniture pickup project in Kirkland with large household pieces removed from the property.",
  },
  redmond: {
    src: "/Redmond%20seatttle%20move%20out%20clean%20up%20.png",
    alt: "Move-out cleanup project in Redmond with leftover junk and bulky items removed before turnover.",
  },
} as const;

export const PORTFOLIO_PROJECTS = [
  {
    type: "Garage cleanout",
    neighborhood: "Maple Leaf",
    description:
      "Two-car garage filled with shelving, boxes, old tools, scrap wood, and bulky household overflow before a home sale.",
    scope:
      "Sorted mixed debris, removed heavy shelving, loaded the truck in one visit, and swept the floor for listing photos.",
    result:
      "Returned the garage to a usable, photo-ready space the same afternoon.",
  },
  {
    type: "Furniture pickup",
    neighborhood: "Green Lake",
    description:
      "Upper-floor condo furniture removal including a sectional, rug, bed frame, mattress, and dining table after a move.",
    scope:
      "Protected elevator access, coordinated with building timing, and handled the pickup in a single scheduled window.",
    result:
      "Cleared the unit without damage and kept the move-out timeline on track.",
  },
  {
    type: "Yard debris removal",
    neighborhood: "Phinney Ridge",
    description:
      "Backyard cleanup after pruning and fence work, with branches, soil bags, broken panels, and bagged clippings.",
    scope:
      "Loaded from a narrow side yard, consolidated loose material, and hauled away the entire outdoor debris pile.",
    result:
      "Left the yard clean and ready for the landscaping crew.",
  },
  {
    type: "Move-out cleanup",
    neighborhood: "Fremont",
    description:
      "Rental turnover with mattresses, desks, shelving, bagged trash, and kitchen overflow left behind by prior tenants.",
    scope:
      "Completed a room-by-room sweep, staged salvageable items separately, and cleared the remainder for turnover cleaning.",
    result:
      "Turned a delayed unit into a ready-to-clean vacancy in one visit.",
  },
  {
    type: "Estate cleanout",
    neighborhood: "Roosevelt",
    description:
      "Partial estate cleanout for a family preparing a longtime home for sale and donation pickup coordination.",
    scope:
      "Removed non-donation items, boxed loose debris, and kept the work pace calm and organized for the family.",
    result:
      "Reduced the house to the keep and donate categories with much less stress for the client.",
  },
  {
    type: "Renovation debris",
    neighborhood: "Ballard",
    description:
      "Kitchen remodel debris including cabinet sections, flooring, drywall, packaging, and small demolition material.",
    scope:
      "Scheduled pickup around contractor access, loaded dense materials efficiently, and cleaned the exterior staging area.",
    result:
      "Kept the renovation site moving without a pileup of debris.",
  },
  {
    type: "Garage cleanout",
    neighborhood: "Bellevue",
    description:
      "Three-bay garage cleanup with boxed storage, old fitness equipment, shelving, and bulky household overflow before a listing refresh.",
    scope:
      "Loaded mixed junk, broke down loose shelving, and cleared the floor so the space could be staged cleanly.",
    result:
      "Turned a packed garage into a clean, sale-ready storage area in one visit.",
  },
  {
    type: "Furniture pickup",
    neighborhood: "Kirkland",
    description:
      "Whole-room furniture removal for a downsizing client with a sofa, recliners, sideboards, mattresses, and loose household overflow.",
    scope:
      "Protected the route through the home, loaded bulky pieces efficiently, and kept the pickup organized around donation sorting.",
    result:
      "Cleared the keep-out material cleanly while keeping the downsizing timeline moving.",
  },
  {
    type: "Move-out cleanup",
    neighborhood: "Redmond",
    description:
      "Townhome move-out with leftover shelving, bagged junk, garage overflow, and old appliances that needed to be gone before final cleaning.",
    scope:
      "Handled a mixed bulky-item load, removed old appliances, and finished with a cleaner staging area for the move-out checklist.",
    result:
      "Got the property back to clean-turnover condition without needing a second hauling trip.",
  },
] as const;

export const AREA_CLUSTERS = [
  {
    slug: "north",
    title: "North",
    intro:
      "North of Green Lake, the work often centers on garages, basement storage, remodeling debris, and quick haul-away appointments for busy households.",
    areas: [
      {
        name: "Greenwood",
        copy:
          "Greenwood homeowners often call when a garage is packed, furniture needs to go, or a move is getting close. Fast scheduling, clean loading, and a straightforward quote make the job feel easy from the first text.",
      },
      {
        name: "Northgate",
        copy:
          "Northgate jobs are often move-outs, apartment pickups, and last-minute cleanups before a handoff. The focus is quick response, smooth scheduling, and getting bulky items out without slowing the day down.",
      },
      {
        name: "Licton Springs",
        copy:
          "Licton Springs clients usually need mixed junk removal, yard debris haul away, or a smaller property cleanup done quickly. A local crew that knows tight residential access makes the whole visit feel more under control.",
      },
      {
        name: "Maple Leaf",
        copy:
          "Maple Leaf calls often come from homeowners getting ready to sell, renovate, or finally clear a basement or garage. The goal is a polished result that matches the pace and presentation of a well-kept home.",
      },
      {
        name: "Roosevelt",
        copy:
          "Roosevelt jobs range from condo furniture removal to estate cleanouts and renovation debris pickup. Quick communication matters here because many customers are balancing lease dates, contractors, or family timelines.",
      },
    ],
  },
  {
    slug: "south",
    title: "South",
    intro:
      "South of Green Lake, the routing covers denser neighborhoods where apartment move-outs, remodel debris, and quick bulky-item pickups are especially common.",
    areas: [
      {
        name: "Wallingford",
        copy:
          "Wallingford homeowners and landlords usually call when furniture has to go fast, a garage needs to be cleared, or a move-out is on a deadline. Tight driveways and older home layouts make an experienced local crew especially valuable here.",
      },
      {
        name: "Fremont",
        copy:
          "Fremont projects often involve apartment cleanouts, remodeling debris, and fast furniture removal before a tenant handoff. The job needs to feel organized and quick, especially in busy blocks and mixed-use areas.",
      },
      {
        name: "Tangletown / Meridian",
        copy:
          "Tangletown and Meridian jobs tend to be detail-sensitive and residential, with homeowners looking for a crew that shows up on time and works carefully. Yard debris, basement overflow, and pre-renovation hauling are common requests.",
      },
      {
        name: "Lower Wallingford",
        copy:
          "Lower Wallingford clients usually need quick removal of mattresses, old furniture, storage overflow, or move-out debris. The service is built for rentals and homes that need prompt turnaround without a lot of back-and-forth.",
      },
    ],
  },
  {
    slug: "west",
    title: "West",
    intro:
      "West of Green Lake, the work shifts between established single-family neighborhoods and heavier renovation activity, which makes responsiveness and clean truck-side organization important.",
    areas: [
      {
        name: "Phinney Ridge",
        copy:
          "Phinney Ridge clients often need yard debris haul away, estate cleanouts, and furniture removal from homes with stairs or sloped access. Careful handling matters here because people want the job done cleanly and without damage.",
      },
      {
        name: "Ballard",
        copy:
          "Ballard calls commonly include renovation debris pickup, old appliance removal, and move-out cleanup. Customers want quick scheduling and a crew that can work around tighter streets, contractors, and busy properties.",
      },
      {
        name: "Crown Hill",
        copy:
          "Crown Hill properties frequently need garage cleanouts, bulky furniture removal, and general junk pickup after years of storage buildup. Clear pricing and a clean finished result tend to matter most.",
      },
      {
        name: "Woodland Park",
        copy:
          "Woodland Park jobs are often close to Green Lake and ideal for fast turnaround. Yard cleanup, garage overflow, and appliance removal are especially common when homeowners want the clutter gone quickly.",
      },
      {
        name: "Loyal Heights",
        copy:
          "Loyal Heights homeowners often call during home refreshes, downsizing, or move preparation. The service is built for customers who want a polished crew, clear communication, and no drama on site.",
      },
    ],
  },
] as const;

export const POPULAR_SEO_TERMS = [
  "Green Lake junk removal",
  "Seattle junk removal",
  "Northgate junk removal",
  "Wallingford junk removal",
  "Greenwood junk removal",
  "Fremont junk removal",
  "Ballard junk removal",
  "Phinney Ridge junk removal",
  "Roosevelt junk removal",
  "same day junk removal Seattle",
  "furniture removal Seattle",
  "garage cleanout Seattle",
  "basement cleanout Seattle",
  "estate cleanout Seattle",
  "move out junk removal Seattle",
  "yard debris removal Seattle",
] as const;

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonicalPath = normalizeCanonicalPath(path);
  const canonicalUrl = new URL(canonicalPath, SITE.url).toString();

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: SITE.ogImagePath,
          width: 1200,
          height: 630,
          alt: `${SITE.name} website preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [SITE.ogImagePath],
    },
  };
}

function normalizeCanonicalPath(path: string) {
  if (!path || path === "/") {
    return "/";
  }

  const trimmedPath = path.trim();
  const withLeadingSlash = trimmedPath.startsWith("/") ? trimmedPath : `/${trimmedPath}`;
  const normalizedPath = withLeadingSlash.replace(/\/+$/, "");

  return normalizedPath || "/";
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#localbusiness`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    image: [`${SITE.url}${SITE.ogImagePath}`],
    logo: `${SITE.url}${SITE.logoPath}`,
    description: SITE.defaultDescription,
    areaServed: SITE.serviceAreas.map((area) => ({
      "@type": "Place",
      name: `${area}, Washington`,
    })),
    address: {
      "@type": "PostalAddress",
      ...SITE.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "19:00",
      },
    ],
    priceRange: "$$",
    knowsAbout: SITE.services,
    serviceType: SITE.services,
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.defaultDescription,
  };
}

export function buildServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Junk removal and cleanout service in Green Lake and north Seattle",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE.url}/#localbusiness`,
      name: SITE.name,
    },
    areaServed: SITE.serviceAreas.map((area) => ({
      "@type": "Place",
      name: `${area}, Washington`,
    })),
    serviceType: SITE.services,
    description: SITE.defaultDescription,
  };
}

export function buildFaqSchema(
  items: ReadonlyArray<{ question: string; answer: string }> = FAQS,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}
