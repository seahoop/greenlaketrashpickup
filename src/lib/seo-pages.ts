export type SeoFaq = {
  question: string;
  answer: string;
};

export type ServicePage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  scenarios: string[];
  commonJobs: string[];
  processTitle: string;
  processBody: string;
  relatedAreaSlugs: string[];
  faqs: SeoFaq[];
};

export type AreaPage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  localAngle: string;
  commonRequests: string[];
  familiarWith: string[];
  relatedServiceSlugs: string[];
  nearby: string[];
  faqs: SeoFaq[];
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "junk-removal",
    title: "Junk Removal",
    metaTitle: "Junk Removal Seattle",
    metaDescription:
      "Professional junk removal in Seattle, Green Lake, and nearby service areas with fast text-based quoting, clean loading, and same-day or next-day pickup when routing allows.",
    h1: "Junk removal in Seattle and the greater Seattle area.",
    intro:
      "Greenlake Junk Removal handles mixed household clutter, bulky items, storage overflow, and general haul-away jobs for homeowners, landlords, and property managers who want the job done cleanly and on schedule.",
    scenarios: [
      "Homes that need a garage, basement, or spare room cleared without turning the day into a project.",
      "Rental turnovers where leftover junk, loose bags, and bulky furniture need to disappear quickly.",
      "Families preparing for a move, sale, renovation, downsizing, or estate transition.",
    ],
    commonJobs: [
      "Mixed household junk pickup",
      "Storage room and spare room cleanouts",
      "Rental turnover junk hauling",
      "Pre-sale decluttering and listing prep",
    ],
    processTitle: "Text photos, confirm timing, clear the space.",
    processBody:
      "Most junk removal jobs start with a text. Photos, the address, and a rough timing window are enough to quote quickly and lock in the cleanest route possible.",
    relatedAreaSlugs: ["green-lake", "wallingford", "greenwood", "bellevue"],
    faqs: [
      {
        question: "How fast can you schedule junk removal in Seattle?",
        answer:
          "Same-day or next-day pickup is available when routing allows. North Seattle jobs usually get the fastest turnaround.",
      },
      {
        question: "What kinds of junk do you remove?",
        answer:
          "Common jobs include mixed household clutter, old furniture, mattresses, appliances, yard debris, renovation material, and move-out leftovers.",
      },
    ],
  },
  {
    slug: "furniture-removal",
    title: "Furniture Removal",
    metaTitle: "Furniture Removal Seattle",
    metaDescription:
      "Furniture removal in Seattle for sofas, sectionals, mattresses, dressers, desks, and bulky household items with careful handling and fast scheduling.",
    h1: "Furniture removal for Seattle homes, condos, and move-outs.",
    intro:
      "From a single couch pickup to a full condo clear-out, Greenlake Junk Removal handles furniture removal with attention to access, walls, floors, elevators, and tight Seattle layouts.",
    scenarios: [
      "Condo and apartment move-outs with elevator windows and building access rules.",
      "Homeowners replacing large furniture and needing the old pieces gone without scraping the house.",
      "Landlords clearing abandoned furniture after tenant turnover.",
    ],
    commonJobs: [
      "Couch and sectional pickup",
      "Bedroom set removal",
      "Dining set and office furniture hauling",
      "Bulky furniture from condos and apartments",
    ],
    processTitle: "Built for bulky-item removal without the drama.",
    processBody:
      "The process stays simple: text photos, confirm access details, and get a clear arrival window so the furniture disappears without dragging through the week.",
    relatedAreaSlugs: ["green-lake", "fremont", "ballard", "kirkland"],
    faqs: [
      {
        question: "Do you remove heavy furniture from upstairs units?",
        answer:
          "Yes. Stairs, elevators, narrow hallways, and tighter access are normal parts of the job. Access details are confirmed before arrival.",
      },
      {
        question: "Can you remove just one couch or dresser?",
        answer:
          "Yes. Single-item pickups and multi-piece jobs are both common, depending on routing and availability.",
      },
    ],
  },
  {
    slug: "mattress-removal",
    title: "Mattress Removal",
    metaTitle: "Mattress Removal Seattle",
    metaDescription:
      "Mattress removal in Seattle for homes, apartments, rentals, and move-outs. Fast pickup for mattresses and box springs with straightforward quoting.",
    h1: "Mattress removal in Seattle without the hassle.",
    intro:
      "Mattress and box spring pickup is one of the simplest jobs to quote and one of the easiest to delay. Greenlake Junk Removal keeps it direct, punctual, and easy to book.",
    scenarios: [
      "Move-outs where an old mattress is the last bulky item left behind.",
      "Landlords needing quick pickup between tenants.",
      "Homeowners replacing beds and wanting the old set gone the same week.",
    ],
    commonJobs: [
      "Mattress pickup",
      "Box spring removal",
      "Bed frame hauling",
      "Rental turnover mattress disposal",
    ],
    processTitle: "Fast pickup for one of the most common bulky-item jobs.",
    processBody:
      "A photo and address usually cover the quote. That makes mattress removal a strong text-first service for fast booking.",
    relatedAreaSlugs: ["northgate", "roosevelt", "redmond", "south-park"],
    faqs: [
      {
        question: "Do you remove box springs and bed frames too?",
        answer:
          "Yes. Mattress removal jobs often include box springs, simple bed frames, and related bedroom furniture.",
      },
      {
        question: "Can you do same-day mattress pickup?",
        answer:
          "Sometimes. Same-day service depends on route availability, but next-day scheduling is common.",
      },
    ],
  },
  {
    slug: "garage-cleanout",
    title: "Garage Cleanout",
    metaTitle: "Garage Cleanout Seattle",
    metaDescription:
      "Garage cleanout service in Seattle for homes getting ready to sell, renovate, downsize, or reclaim storage space. Fast haul-away for years of buildup.",
    h1: "Garage cleanouts for Seattle homes that need real space back.",
    intro:
      "Garage cleanouts are often delayed because they involve mixed junk, awkward shelving, paint cans, broken tools, scrap wood, and years of stored overflow. Greenlake Junk Removal is built for exactly that kind of job.",
    scenarios: [
      "Homeowners finally clearing out long-term storage before a sale or renovation.",
      "Families needing a garage reset before moving or downsizing.",
      "Rental properties with detached garages full of leftover junk and bulky debris.",
    ],
    commonJobs: [
      "Full garage junk removal",
      "Shelving and tool overflow cleanup",
      "Detached garage cleanouts",
      "Pre-sale garage prep",
    ],
    processTitle: "Clear the pile, reclaim the garage, keep the route organized.",
    processBody:
      "The best garage cleanouts happen when the quote is simple and the crew loads with a plan. Texted photos help price mixed loads accurately before arrival.",
    relatedAreaSlugs: ["maple-leaf", "greenwood", "phinney-ridge", "newcastle"],
    faqs: [
      {
        question: "Do you remove mixed garage junk in one visit?",
        answer:
          "Yes. The point of the service is handling mixed loads efficiently, from old shelving and broken tools to boxes and bulky overflow.",
      },
      {
        question: "Can you help before a listing goes live?",
        answer:
          "Yes. Garage cleanouts are common before home sales, estate transitions, and staging prep.",
      },
    ],
  },
  {
    slug: "basement-cleanout",
    title: "Basement Cleanout",
    metaTitle: "Basement Cleanout Seattle",
    metaDescription:
      "Basement cleanout service in Seattle for storage overflow, estate situations, remodel prep, and bulky-item removal from tight stair access.",
    h1: "Basement cleanouts for Seattle homes with tight access and heavy loads.",
    intro:
      "Basement cleanouts usually involve the details that make a crew worth hiring: stairs, narrow turns, heavy items, dust, old storage, and a route through a house that still needs to be protected.",
    scenarios: [
      "Older Seattle homes with full basements that need to be cleared before renovation.",
      "Families dealing with years of stored material, old furniture, and household overflow.",
      "Estate situations where the lower level holds the hardest part of the cleanout.",
    ],
    commonJobs: [
      "Basement junk removal",
      "Storage and overflow clearing",
      "Pre-renovation basement cleanup",
      "Heavy-item hauling from lower levels",
    ],
    processTitle: "Careful loading matters more when the route runs through the house.",
    processBody:
      "The service is designed around controlled loading, clear communication, and accurate quoting when access is harder and the material is heavier.",
    relatedAreaSlugs: ["wallingford", "green-lake", "roosevelt", "bridle-trails"],
    faqs: [
      {
        question: "Do you handle heavy basement cleanout jobs?",
        answer:
          "Yes. Basement work often includes heavy furniture, packed storage, shelving, and dense junk loads. Access is accounted for in the quote.",
      },
      {
        question: "Is basement cleanout pricing different from general junk removal?",
        answer:
          "It can be, because stairs, carrying distance, and item weight affect labor and loading time.",
      },
    ],
  },
  {
    slug: "estate-cleanout",
    title: "Estate Cleanout",
    metaTitle: "Estate Cleanout Seattle",
    metaDescription:
      "Respectful estate cleanout service in Seattle for families, probate timelines, downsizing, and home sale preparation with organized communication and careful handling.",
    h1: "Estate cleanouts handled calmly, clearly, and professionally.",
    intro:
      "Estate cleanout work is different from regular junk removal. The pace, communication, and presentation matter more because families are often balancing timelines, emotion, sale prep, and donation decisions at the same time.",
    scenarios: [
      "Families preparing a longtime home for sale or transfer.",
      "Probate and downsizing timelines that need a dependable crew, not a chaotic one.",
      "Partial cleanouts where some items stay, some go, and the route has to remain organized.",
    ],
    commonJobs: [
      "Full estate cleanouts",
      "Partial room-by-room estate clearing",
      "Sale prep and downsizing removal",
      "Donation and keep-pile separation support",
    ],
    processTitle: "A calmer process for one of the more sensitive jobs.",
    processBody:
      "The job starts with photos and a clear conversation about scope, timeline, and access. That keeps the work organized and avoids unnecessary confusion on site.",
    relatedAreaSlugs: ["roosevelt", "green-lake", "ballard", "bellevue"],
    faqs: [
      {
        question: "Do you work with families during partial estate cleanouts?",
        answer:
          "Yes. Many estate jobs are phased or selective rather than full-house removals in a single pass.",
      },
      {
        question: "Can estate cleanout work be scheduled around listing timelines?",
        answer:
          "Yes. Sale prep and estate timelines are common. Clear scheduling is part of the service.",
      },
    ],
  },
  {
    slug: "move-out-cleanout",
    title: "Move-Out Cleanout",
    metaTitle: "Move-Out Junk Removal Seattle",
    metaDescription:
      "Move-out cleanout and junk removal in Seattle for rentals, homes, apartments, and turnover deadlines. Fast pickup for leftover junk, furniture, and storage overflow.",
    h1: "Move-out cleanouts for Seattle homes, rentals, and turnovers.",
    intro:
      "Move-out cleanout work is deadline-driven. Leftover junk, furniture, bagged trash, and storage overflow need to be gone quickly so cleaning, repainting, or key handoff can happen without delay.",
    scenarios: [
      "Tenant turnovers with bulky leftovers and mixed junk in the unit.",
      "Home sellers clearing the last items before cleaners, staging, or photos.",
      "Families trying to finish a move without a second round of hauling.",
    ],
    commonJobs: [
      "Apartment move-out junk removal",
      "Rental turnover cleanup",
      "Leftover furniture and bagged junk hauling",
      "Pre-cleaner turnover prep",
    ],
    processTitle: "Built for handoff deadlines, not vague scheduling.",
    processBody:
      "The service is optimized for quick quote turnaround and clean arrival windows so the next step in the turnover can happen on time.",
    relatedAreaSlugs: ["northgate", "fremont", "bellevue", "redmond"],
    faqs: [
      {
        question: "Do you work with landlords and property managers?",
        answer:
          "Yes. Move-out cleanouts are common for rental turnovers, apartment handoffs, and pre-listing prep.",
      },
      {
        question: "Can you remove junk and furniture in the same move-out job?",
        answer:
          "Yes. Mixed loads are common on move-out cleanouts, including mattresses, shelving, loose bags, and bulky pieces.",
      },
    ],
  },
  {
    slug: "yard-debris-removal",
    title: "Yard Debris Removal",
    metaTitle: "Yard Debris Removal Seattle",
    metaDescription:
      "Yard debris removal in Seattle for branches, fencing, clippings, brush, storm cleanup, and outdoor project leftovers with fast local pickup.",
    h1: "Yard debris removal for Seattle cleanup and outdoor projects.",
    intro:
      "Yard debris piles tend to sit longer than they should. Greenlake Junk Removal handles branches, fencing scraps, bagged clippings, brush, and other outdoor cleanup material when the pile needs to go quickly.",
    scenarios: [
      "Post-pruning and landscaping cleanup with branches, brush, and bagged clippings.",
      "Fence or yard project leftovers that need to be hauled off in one pass.",
      "Homeowners getting outdoor spaces cleaned up before sale season or summer use.",
    ],
    commonJobs: [
      "Brush and branch haul-away",
      "Bagged green waste pickup",
      "Fence and yard project debris removal",
      "Outdoor cleanup for listing prep",
    ],
    processTitle: "Fast outdoor cleanup without waiting on a long disposal process.",
    processBody:
      "A few photos are usually enough to quote yard debris removal. The service is built for quick exterior loading and fast turnaround.",
    relatedAreaSlugs: ["phinney-ridge", "greenwood", "south-park", "newcastle"],
    faqs: [
      {
        question: "Do you remove fencing and wood scraps with yard debris?",
        answer:
          "Yes. Many yard cleanup jobs include mixed outdoor material such as branches, fencing, and bagged clippings.",
      },
      {
        question: "Can yard debris pickup be combined with general junk removal?",
        answer:
          "Yes. Outdoor cleanup is often combined with garage, side-yard, or shed overflow on the same visit.",
      },
    ],
  },
  {
    slug: "appliance-removal",
    title: "Appliance Removal",
    metaTitle: "Appliance Removal Seattle",
    metaDescription:
      "Appliance removal in Seattle for refrigerators, washers, dryers, stoves, freezers, and bulky household equipment with careful handling and clean pickup.",
    h1: "Appliance removal for Seattle homes, rentals, and remodels.",
    intro:
      "Large appliances are awkward, heavy, and often tied to a move, renovation, or replacement schedule. Greenlake Junk Removal handles appliance pickup with attention to access, carrying distance, and property protection.",
    scenarios: [
      "Refrigerator and washer-dryer replacement jobs where the old units need to disappear fast.",
      "Rental turnovers with leftover appliances in garages, basements, or utility rooms.",
      "Kitchen and laundry remodels that need heavy equipment hauled away cleanly.",
    ],
    commonJobs: [
      "Refrigerator pickup",
      "Washer and dryer removal",
      "Stove and freezer hauling",
      "Appliance removal during remodels",
    ],
    processTitle: "Heavy-item removal with the route planned in advance.",
    processBody:
      "Texted photos and access notes help price appliance pickup correctly and avoid problems when the crew arrives.",
    relatedAreaSlugs: ["ballard", "northgate", "kirkland", "bellevue"],
    faqs: [
      {
        question: "Do you remove refrigerators and washers from inside the house?",
        answer:
          "Yes. Appliance removal often includes indoor pickup from kitchens, laundry rooms, garages, and basements.",
      },
      {
        question: "Can appliance removal be combined with other junk?",
        answer:
          "Yes. Many appliance jobs also include old shelving, packaging, or general junk from the same project.",
      },
    ],
  },
  {
    slug: "renovation-debris-removal",
    title: "Renovation Debris Removal",
    metaTitle: "Renovation Debris Removal Seattle",
    metaDescription:
      "Renovation debris removal in Seattle for drywall, flooring, cabinets, lumber offcuts, packaging, and smaller residential remodeling cleanup.",
    h1: "Renovation debris removal for Seattle remodeling projects.",
    intro:
      "Small residential remodels create a surprising amount of debris. Greenlake Junk Removal handles renovation cleanup when cabinets, flooring, drywall, lumber offcuts, and packaging need to be cleared quickly so the project can keep moving.",
    scenarios: [
      "Kitchen and bathroom remodels with dense material staged outside or in the garage.",
      "Home refresh projects that create flooring, drywall, cabinet, and packaging debris.",
      "Contractors and homeowners who need a quick pickup window instead of a long pileup.",
    ],
    commonJobs: [
      "Drywall and flooring debris pickup",
      "Cabinet and lumber offcut hauling",
      "Small remodel site cleanup",
      "Packaging and project-overflow removal",
    ],
    processTitle: "Keep the project moving instead of letting debris stack up.",
    processBody:
      "Renovation debris jobs are scheduled around access, material density, and staging location so the quote fits the actual load.",
    relatedAreaSlugs: ["ballard", "maple-leaf", "bridle-trails", "redmond"],
    faqs: [
      {
        question: "Do you handle small residential remodel debris?",
        answer:
          "Yes. The service is positioned for smaller residential renovation cleanup rather than full commercial construction hauling.",
      },
      {
        question: "What kinds of renovation material do you remove?",
        answer:
          "Common loads include drywall, flooring, cabinet sections, lumber offcuts, packaging, and other residential remodel leftovers.",
      },
    ],
  },
];

export const AREA_PAGES: AreaPage[] = [
  {
    slug: "green-lake",
    title: "Green Lake",
    metaTitle: "Green Lake Junk Removal",
    metaDescription:
      "Green Lake junk removal for homes, condos, garages, estates, and move-outs with fast quotes, professional crews, and clean scheduling near the lake.",
    h1: "Junk removal in Green Lake.",
    intro:
      "Green Lake is the center of the service area, which makes it one of the easiest places to schedule quickly. Jobs here range from clean residential pickups to larger garage, estate, and move-out cleanouts.",
    localAngle:
      "The neighborhood mix matters: single-family homes, condos, listing prep, and denser parking and access patterns all show up here regularly.",
    commonRequests: [
      "Garage cleanouts before a home sale",
      "Condo furniture pickup and move-out cleanup",
      "Estate and downsizing cleanouts",
      "General household junk removal near Green Lake",
    ],
    familiarWith: [
      "Tighter residential access and timed arrivals",
      "Condo and apartment pickup coordination",
      "Photo-ready cleanup for listing prep",
    ],
    relatedServiceSlugs: ["junk-removal", "furniture-removal", "garage-cleanout", "estate-cleanout"],
    nearby: ["Wallingford", "Roosevelt", "Phinney Ridge"],
    faqs: [
      {
        question: "Do you offer same-day junk removal in Green Lake?",
        answer:
          "Sometimes. Green Lake is close to the base service area, so it is one of the stronger neighborhoods for faster scheduling when the route has room.",
      },
      {
        question: "What are the most common Green Lake jobs?",
        answer:
          "Furniture removal, garage cleanouts, move-out hauling, and mixed household junk removal are all common around Green Lake.",
      },
    ],
  },
  {
    slug: "wallingford",
    title: "Wallingford",
    metaTitle: "Wallingford Junk Removal",
    metaDescription:
      "Wallingford junk removal for older homes, garages, basements, move-outs, and bulky furniture with clean communication and careful handling.",
    h1: "Junk removal in Wallingford.",
    intro:
      "Wallingford jobs often come from older homes, tighter driveways, basement access, and move-out timelines that need to stay organized. The service is built for those details.",
    localAngle:
      "Homeowners and landlords in Wallingford usually care about presentation, careful handling, and arrival windows that work around dense neighborhood logistics.",
    commonRequests: [
      "Basement cleanouts in older homes",
      "Furniture pickup before a move or remodel",
      "Garage and side-yard cleanup",
      "Rental turnover junk removal",
    ],
    familiarWith: [
      "Narrower access and older home layouts",
      "Detached garages and basement routes",
      "Quick quote turnaround for move deadlines",
    ],
    relatedServiceSlugs: ["junk-removal", "basement-cleanout", "furniture-removal", "move-out-cleanout"],
    nearby: ["Green Lake", "Fremont", "Lower Wallingford"],
    faqs: [
      {
        question: "Do you handle basement and garage cleanouts in Wallingford?",
        answer:
          "Yes. Wallingford is one of the neighborhoods where basement and garage cleanout work is especially common.",
      },
      {
        question: "Can you do Wallingford move-out junk removal quickly?",
        answer:
          "Yes. Move-out cleanouts and furniture pickup are common here, and the service is designed around practical scheduling windows.",
      },
    ],
  },
  {
    slug: "greenwood",
    title: "Greenwood",
    metaTitle: "Greenwood Junk Removal",
    metaDescription:
      "Greenwood junk removal for garage cleanouts, furniture removal, yard debris, and general household junk hauling with fast local scheduling.",
    h1: "Junk removal in Greenwood.",
    intro:
      "Greenwood jobs often involve the kind of buildup that has been sitting for a while: packed garages, old furniture, yard debris, and mixed household overflow that needs to go in one clean visit.",
    localAngle:
      "The neighborhood favors fast, straightforward service for detached homes, garages, side yards, and home refresh projects.",
    commonRequests: [
      "Garage cleanouts",
      "Furniture pickup",
      "Yard debris haul-away",
      "General household junk removal",
    ],
    familiarWith: [
      "Detached garage access",
      "Side-yard loading routes",
      "Home refresh and pre-sale cleanup",
    ],
    relatedServiceSlugs: ["junk-removal", "garage-cleanout", "yard-debris-removal", "furniture-removal"],
    nearby: ["Green Lake", "Northgate", "Phinney Ridge"],
    faqs: [
      {
        question: "What kinds of Greenwood junk removal jobs are most common?",
        answer:
          "Garage cleanouts, old furniture pickup, and mixed household junk removal are all common in Greenwood.",
      },
      {
        question: "Do you remove yard debris in Greenwood too?",
        answer:
          "Yes. Greenwood calls often combine garage or household junk with branches, fencing, and other outdoor cleanup material.",
      },
    ],
  },
  {
    slug: "roosevelt",
    title: "Roosevelt",
    metaTitle: "Roosevelt Junk Removal",
    metaDescription:
      "Roosevelt junk removal for condos, homes, estate cleanouts, move-outs, and renovation debris with fast communication and organized service.",
    h1: "Junk removal in Roosevelt.",
    intro:
      "Roosevelt projects often sit at the intersection of residential homes, newer multifamily buildings, and tighter scheduling needs. That makes communication and route planning more important than usual.",
    localAngle:
      "Jobs here often involve leases, family timelines, or renovation handoffs, so clear communication and dependable arrival windows matter.",
    commonRequests: [
      "Condo furniture pickup",
      "Estate cleanouts",
      "Renovation debris removal",
      "Move-out junk hauling",
    ],
    familiarWith: [
      "Condo timing and denser access patterns",
      "Organized pickup around leases and handoffs",
      "Mixed household and remodel debris loads",
    ],
    relatedServiceSlugs: ["junk-removal", "estate-cleanout", "renovation-debris-removal", "move-out-cleanout"],
    nearby: ["Green Lake", "Maple Leaf", "Northgate"],
    faqs: [
      {
        question: "Do you work with condos and apartment move-outs in Roosevelt?",
        answer:
          "Yes. Roosevelt is one of the stronger neighborhoods for condo and move-out furniture pickup jobs.",
      },
      {
        question: "Can you remove renovation debris in Roosevelt?",
        answer:
          "Yes. Smaller residential remodel cleanup is a regular part of the service.",
      },
    ],
  },
  {
    slug: "maple-leaf",
    title: "Maple Leaf",
    metaTitle: "Maple Leaf Junk Removal",
    metaDescription:
      "Maple Leaf junk removal for garages, basements, pre-sale cleanouts, furniture removal, and renovation debris with a premium homeowner-focused service standard.",
    h1: "Junk removal in Maple Leaf.",
    intro:
      "Maple Leaf jobs are often tied to home presentation. Garages, basements, furniture, and renovation leftovers need to be gone so the property can feel cleaner, lighter, and more usable.",
    localAngle:
      "This is the kind of neighborhood where homeowners care about clean communication, careful loading, and a result that fits a well-kept property.",
    commonRequests: [
      "Garage cleanouts",
      "Basement clearing",
      "Pre-sale junk removal",
      "Renovation debris pickup",
    ],
    familiarWith: [
      "Home-sale preparation work",
      "Detached garages and basement access",
      "Mixed loads from long-term storage buildup",
    ],
    relatedServiceSlugs: ["garage-cleanout", "basement-cleanout", "junk-removal", "renovation-debris-removal"],
    nearby: ["Roosevelt", "Northgate", "Green Lake"],
    faqs: [
      {
        question: "Do you help with Maple Leaf listing-prep cleanouts?",
        answer:
          "Yes. Pre-sale and presentation-focused junk removal is common in Maple Leaf, especially for garages and basements.",
      },
      {
        question: "What jobs do you see most in Maple Leaf?",
        answer:
          "Garage cleanouts, basement junk removal, furniture pickup, and renovation debris removal are all common.",
      },
    ],
  },
  {
    slug: "northgate",
    title: "Northgate",
    metaTitle: "Northgate Junk Removal",
    metaDescription:
      "Northgate junk removal for apartments, rentals, move-outs, furniture pickup, and fast turnover cleanup with quick scheduling and direct communication.",
    h1: "Junk removal in Northgate.",
    intro:
      "Northgate jobs often move faster than typical residential hauling. Apartment transitions, furniture pickup, and last-minute cleanups before turnover are common and need clean execution.",
    localAngle:
      "The neighborhood mix makes Northgate a strong fit for quick move-out hauling, appliance pickup, and general junk removal that has to happen on a clear clock.",
    commonRequests: [
      "Apartment move-out junk removal",
      "Furniture pickup",
      "Mattress removal",
      "Appliance hauling",
    ],
    familiarWith: [
      "Apartment and multifamily access",
      "Turnover-driven scheduling",
      "Fast bulky-item removal",
    ],
    relatedServiceSlugs: ["move-out-cleanout", "furniture-removal", "mattress-removal", "appliance-removal"],
    nearby: ["Maple Leaf", "Roosevelt", "Greenwood"],
    faqs: [
      {
        question: "Do you do Northgate apartment move-out cleanouts?",
        answer:
          "Yes. Northgate is a strong area for move-out junk removal, furniture hauling, and quick turnover cleanup.",
      },
      {
        question: "Can you remove furniture and mattresses together?",
        answer:
          "Yes. Mixed bulky-item loads are common and can usually be handled in the same visit.",
      },
    ],
  },
  {
    slug: "fremont",
    title: "Fremont",
    metaTitle: "Fremont Junk Removal",
    metaDescription:
      "Fremont junk removal for apartments, mixed-use buildings, move-outs, furniture removal, and renovation debris with organized local scheduling.",
    h1: "Junk removal in Fremont.",
    intro:
      "Fremont jobs often sit in busier blocks, tighter parking situations, and mixed-use buildings where clean timing matters. The work ranges from fast furniture pickup to full move-out cleanup.",
    localAngle:
      "This is a neighborhood where streamlined scheduling and quick communication help keep the job from becoming a bigger disruption than it needs to be.",
    commonRequests: [
      "Apartment furniture pickup",
      "Move-out cleanouts",
      "Renovation debris hauling",
      "General mixed junk removal",
    ],
    familiarWith: [
      "Busier access conditions and denser blocks",
      "Apartment and townhouse routes",
      "Fast scheduling around handoff deadlines",
    ],
    relatedServiceSlugs: ["furniture-removal", "move-out-cleanout", "junk-removal", "renovation-debris-removal"],
    nearby: ["Wallingford", "Ballard", "Green Lake"],
    faqs: [
      {
        question: "Do you handle Fremont apartment and townhouse jobs?",
        answer:
          "Yes. Apartment and townhouse move-out hauling is common in Fremont and fits the service well.",
      },
      {
        question: "Can you remove remodel debris in Fremont?",
        answer:
          "Yes. Small residential renovation cleanup is a common Fremont request.",
      },
    ],
  },
  {
    slug: "phinney-ridge",
    title: "Phinney Ridge",
    metaTitle: "Phinney Ridge Junk Removal",
    metaDescription:
      "Phinney Ridge junk removal for yard debris, estate cleanouts, furniture removal, and garage cleanouts with careful handling and strong neighborhood familiarity.",
    h1: "Junk removal in Phinney Ridge.",
    intro:
      "Phinney Ridge clients usually want the work done carefully, quietly, and without the property feeling like a job site. That makes presentation and route discipline especially important here.",
    localAngle:
      "Sloped access, stairs, and a higher standard for property treatment make Phinney Ridge a neighborhood where a polished crew stands out.",
    commonRequests: [
      "Yard debris haul-away",
      "Estate cleanouts",
      "Furniture removal",
      "Garage and storage cleanup",
    ],
    familiarWith: [
      "Stairs and sloped-access properties",
      "Careful handling around finished homes",
      "Outdoor cleanup and mixed residential loads",
    ],
    relatedServiceSlugs: ["yard-debris-removal", "estate-cleanout", "furniture-removal", "garage-cleanout"],
    nearby: ["Greenwood", "Ballard", "Green Lake"],
    faqs: [
      {
        question: "What jobs are most common in Phinney Ridge?",
        answer:
          "Yard debris removal, furniture pickup, estate cleanouts, and garage cleanouts are all common in Phinney Ridge.",
      },
      {
        question: "Do you handle stairs and difficult access?",
        answer:
          "Yes. Stairs and more careful routes are common in Phinney Ridge and are part of normal planning.",
      },
    ],
  },
  {
    slug: "ballard",
    title: "Ballard",
    metaTitle: "Ballard Junk Removal",
    metaDescription:
      "Ballard junk removal for renovation debris, appliance removal, furniture pickup, move-outs, and general junk hauling with fast quote turnaround.",
    h1: "Junk removal in Ballard.",
    intro:
      "Ballard work often includes a mix of older homes, remodel activity, and busier properties. That makes renovation debris pickup, appliance removal, and move-out hauling especially common.",
    localAngle:
      "Scheduling has to be practical, and the crew has to stay organized when the site involves contractors, denser streets, or timed access windows.",
    commonRequests: [
      "Renovation debris removal",
      "Appliance pickup",
      "Furniture hauling",
      "Move-out and turnover junk removal",
    ],
    familiarWith: [
      "Remodel-adjacent debris loads",
      "Busier access conditions",
      "Mixed residential and turnover work",
    ],
    relatedServiceSlugs: ["renovation-debris-removal", "appliance-removal", "furniture-removal", "move-out-cleanout"],
    nearby: ["Phinney Ridge", "Fremont", "Crown Hill"],
    faqs: [
      {
        question: "Do you remove renovation debris in Ballard?",
        answer:
          "Yes. Ballard is one of the stronger neighborhoods for kitchen, flooring, and cabinet debris pickup.",
      },
      {
        question: "Can you haul appliances and general junk together?",
        answer:
          "Yes. Mixed loads are common in Ballard, especially during remodels and move-outs.",
      },
    ],
  },
  {
    slug: "bellevue",
    title: "Bellevue",
    metaTitle: "Bellevue Junk Removal",
    metaDescription:
      "Bellevue junk removal for homes, condos, estate cleanouts, garage cleanouts, and furniture pickup with premium service and clean communication.",
    h1: "Junk removal in Bellevue.",
    intro:
      "Bellevue clients usually want the same thing: a crew that communicates clearly, arrives on time, handles the property carefully, and does not make the job feel messy or low-trust.",
    localAngle:
      "The service position fits Bellevue well because the expectation is straightforward quoting, polished presentation, and a clean result rather than bargain-hauler chaos.",
    commonRequests: [
      "Furniture pickup",
      "Garage cleanouts",
      "Estate and downsizing cleanouts",
      "Move-out junk removal",
    ],
    familiarWith: [
      "Premium residential expectations",
      "Condo and single-family pickup coordination",
      "Careful handling in higher-finish homes",
    ],
    relatedServiceSlugs: ["junk-removal", "furniture-removal", "estate-cleanout", "garage-cleanout"],
    nearby: ["Bridle Trails", "Kirkland", "Newcastle"],
    faqs: [
      {
        question: "Do you serve Bellevue regularly?",
        answer:
          "Yes. Bellevue is part of the greater Seattle service area and fits the company’s premium residential service model well.",
      },
      {
        question: "What Bellevue jobs are most common?",
        answer:
          "Furniture removal, garage cleanouts, move-out hauling, and estate cleanouts are all common Bellevue requests.",
      },
    ],
  },
  {
    slug: "medina",
    title: "Medina",
    metaTitle: "Medina Junk Removal",
    metaDescription:
      "Medina junk removal for premium homes, estate cleanouts, furniture pickup, garage cleanouts, and careful residential hauling with polished communication.",
    h1: "Junk removal in Medina.",
    intro:
      "Medina jobs tend to require a cleaner, higher-trust level of service. Homeowners usually want direct communication, careful route protection, and a crew that treats the property with real respect.",
    localAngle:
      "The fit in Medina is premium residential hauling: furniture pickup, garage overflow, estate work, and downsizing jobs where presentation matters as much as speed.",
    commonRequests: [
      "Furniture pickup",
      "Garage cleanouts",
      "Estate and downsizing cleanouts",
      "General household junk removal",
    ],
    familiarWith: [
      "Higher-finish residential properties",
      "Careful route protection through the home",
      "Polished communication and arrival standards",
    ],
    relatedServiceSlugs: ["furniture-removal", "garage-cleanout", "estate-cleanout", "junk-removal"],
    nearby: ["Bellevue", "Clyde Hill", "Bridle Trails", "Kirkland"],
    faqs: [
      {
        question: "Do you serve Medina for premium residential junk removal?",
        answer:
          "Yes. Medina is a strong fit for careful furniture removal, estate cleanouts, garage cleanouts, and general household haul-away.",
      },
      {
        question: "What Medina jobs are most common?",
        answer:
          "Furniture pickup, garage cleanouts, downsizing jobs, estate clearing, and general residential junk removal are all common Medina requests.",
      },
    ],
  },
  {
    slug: "clyde-hill",
    title: "Clyde Hill",
    metaTitle: "Clyde Hill Junk Removal",
    metaDescription:
      "Clyde Hill junk removal for estate cleanouts, furniture removal, garage cleanouts, and premium residential hauling with clear communication and careful handling.",
    h1: "Junk removal in Clyde Hill.",
    intro:
      "Clyde Hill clients usually want a crew that feels organized from the first text through the final sweep-up. The work is often residential, detail-sensitive, and built around clean execution.",
    localAngle:
      "Clyde Hill is a strong market for premium residential service because homeowners expect punctual scheduling, careful loading, and straightforward communication.",
    commonRequests: [
      "Furniture removal",
      "Garage and storage cleanouts",
      "Estate cleanouts",
      "General household junk hauling",
    ],
    familiarWith: [
      "Detail-sensitive residential work",
      "Careful loading in finished homes",
      "Scheduling around active households and contractors",
    ],
    relatedServiceSlugs: ["furniture-removal", "garage-cleanout", "estate-cleanout", "junk-removal"],
    nearby: ["Medina", "Bellevue", "Kirkland", "Bridle Trails"],
    faqs: [
      {
        question: "Do you handle Clyde Hill estate and downsizing cleanouts?",
        answer:
          "Yes. Clyde Hill is a strong fit for estate cleanouts, downsizing jobs, furniture removal, and larger residential haul-away projects.",
      },
      {
        question: "What service style fits Clyde Hill best?",
        answer:
          "Clear communication, careful property treatment, punctual arrival, and a polished finished result are the right fit for Clyde Hill work.",
      },
    ],
  },
  {
    slug: "kirkland",
    title: "Kirkland",
    metaTitle: "Kirkland Junk Removal",
    metaDescription:
      "Kirkland junk removal for homes, remodel debris, furniture removal, garage cleanouts, and move-out hauling with fast quoting and careful service.",
    h1: "Junk removal in Kirkland.",
    intro:
      "Kirkland jobs often involve home refreshes, move-outs, remodel cleanup, and general bulky-item pickup where the client wants a service that feels organized and worth paying for.",
    localAngle:
      "The local fit is strong for homeowners who care about the route through the house, the arrival window, and the finished look when the truck leaves.",
    commonRequests: [
      "Furniture removal",
      "Garage cleanouts",
      "Appliance pickup",
      "Renovation debris hauling",
    ],
    familiarWith: [
      "Residential cleanup with presentation in mind",
      "Mixed bulky-item and junk loads",
      "Scheduling around active households",
    ],
    relatedServiceSlugs: ["furniture-removal", "garage-cleanout", "appliance-removal", "renovation-debris-removal"],
    nearby: ["Bellevue", "Redmond", "Bridle Trails"],
    faqs: [
      {
        question: "Do you handle remodel debris in Kirkland?",
        answer:
          "Yes. Renovation debris and bulky-item cleanup are both common Kirkland requests.",
      },
      {
        question: "Can Kirkland jobs be quoted by text?",
        answer:
          "Yes. Photos, address, and timing are usually enough to start the quote quickly.",
      },
    ],
  },
  {
    slug: "mercer-island",
    title: "Mercer Island",
    metaTitle: "Mercer Island Junk Removal",
    metaDescription:
      "Mercer Island junk removal for furniture pickup, estate cleanouts, garage cleanouts, and residential debris hauling with premium service and careful handling.",
    h1: "Junk removal in Mercer Island.",
    intro:
      "Mercer Island jobs usually need a dependable residential hauling crew that communicates clearly and protects the route through the home. Furniture, cleanouts, and property reset work are common here.",
    localAngle:
      "The strongest fit in Mercer Island is organized residential service for homeowners who care about timing, property treatment, and a cleaner finished result.",
    commonRequests: [
      "Furniture pickup",
      "Garage cleanouts",
      "Estate and downsizing cleanouts",
      "General junk removal",
    ],
    familiarWith: [
      "Residential route protection",
      "Polished communication and arrival windows",
      "Mixed bulky-item and household junk loads",
    ],
    relatedServiceSlugs: ["furniture-removal", "garage-cleanout", "estate-cleanout", "junk-removal"],
    nearby: ["Bellevue", "Newcastle", "Seattle"],
    faqs: [
      {
        question: "Do you serve Mercer Island for residential junk removal?",
        answer:
          "Yes. Mercer Island fits well for furniture pickup, estate cleanouts, garage cleanouts, and general household junk hauling.",
      },
      {
        question: "Can Mercer Island jobs be quoted quickly by text?",
        answer:
          "Yes. Photos, the address, and the timing are still the fastest way to quote and schedule Mercer Island jobs.",
      },
    ],
  },
  {
    slug: "redmond",
    title: "Redmond",
    metaTitle: "Redmond Junk Removal",
    metaDescription:
      "Redmond junk removal for move-outs, furniture pickup, garage cleanouts, appliance hauling, and residential debris removal with clean scheduling and fast response.",
    h1: "Junk removal in Redmond.",
    intro:
      "Redmond jobs often come from active households, move transitions, and home projects where speed matters but presentation still matters too. The service is built to cover both.",
    localAngle:
      "The work here often needs to happen quickly and cleanly, especially when the client is juggling a move, remodel, or property reset.",
    commonRequests: [
      "Move-out junk removal",
      "Furniture pickup",
      "Appliance hauling",
      "Garage cleanouts",
    ],
    familiarWith: [
      "Move-driven scheduling",
      "Mixed residential junk loads",
      "Fast quote turnaround for bulky-item jobs",
    ],
    relatedServiceSlugs: ["move-out-cleanout", "furniture-removal", "appliance-removal", "garage-cleanout"],
    nearby: ["Kirkland", "Bellevue", "Bridle Trails"],
    faqs: [
      {
        question: "What Redmond jobs are most common?",
        answer:
          "Move-out junk removal, furniture pickup, appliances, and garage cleanouts are all common in Redmond.",
      },
      {
        question: "Do you serve Redmond as part of the greater Seattle area?",
        answer:
          "Yes. Redmond is part of the Eastside and greater Seattle service area coverage.",
      },
    ],
  },
  {
    slug: "bridle-trails",
    title: "Bridle Trails",
    metaTitle: "Bridle Trails Junk Removal",
    metaDescription:
      "Bridle Trails junk removal for larger homes, garage cleanouts, renovation debris, and furniture hauling with respectful property handling and premium service.",
    h1: "Junk removal in Bridle Trails.",
    intro:
      "Bridle Trails jobs are a strong fit for a premium local-service approach. Clients here usually want reliable communication, careful property treatment, and a crew that works like the home has real value.",
    localAngle:
      "The service is positioned for respectful loading, clear arrival windows, and a cleaner finished result rather than a rough contractor feel.",
    commonRequests: [
      "Garage cleanouts",
      "Furniture removal",
      "Basement and storage clearing",
      "Renovation debris pickup",
    ],
    familiarWith: [
      "Higher-finish properties",
      "Careful route protection",
      "Organized larger-home cleanup work",
    ],
    relatedServiceSlugs: ["garage-cleanout", "furniture-removal", "basement-cleanout", "renovation-debris-removal"],
    nearby: ["Bellevue", "Kirkland", "Redmond"],
    faqs: [
      {
        question: "Do you handle larger residential cleanouts in Bridle Trails?",
        answer:
          "Yes. Bridle Trails is a strong area for garage, basement, furniture, and renovation cleanup jobs.",
      },
      {
        question: "What service style do Bridle Trails clients usually want?",
        answer:
          "Clear communication, careful handling, punctual arrival, and a result that feels polished rather than rushed.",
      },
    ],
  },
  {
    slug: "newcastle",
    title: "Newcastle",
    metaTitle: "Newcastle Junk Removal",
    metaDescription:
      "Newcastle junk removal for homes, garages, yard debris, furniture pickup, and clean residential hauling across the greater Seattle service area.",
    h1: "Junk removal in Newcastle.",
    intro:
      "Newcastle clients often need a general residential junk removal partner rather than a specialty hauler: garages, furniture, yard debris, and mixed household overflow all show up regularly.",
    localAngle:
      "The neighborhood fit is residential, practical, and presentation-conscious, which lines up well with the company’s premium local service position.",
    commonRequests: [
      "Garage cleanouts",
      "Furniture pickup",
      "Yard debris removal",
      "General household junk hauling",
    ],
    familiarWith: [
      "Residential cleanup projects",
      "Mixed junk and outdoor debris loads",
      "Scheduling around active family households",
    ],
    relatedServiceSlugs: ["garage-cleanout", "furniture-removal", "yard-debris-removal", "junk-removal"],
    nearby: ["Bellevue", "South Park"],
    faqs: [
      {
        question: "Do you serve Newcastle regularly?",
        answer:
          "Yes. Newcastle is part of the greater Seattle service area and fits well for residential junk hauling, furniture removal, and garage cleanouts.",
      },
      {
        question: "Can you combine yard debris and household junk in Newcastle?",
        answer:
          "Yes. Mixed residential cleanup loads are common in Newcastle.",
      },
    ],
  },
  {
    slug: "south-park",
    title: "South Park",
    metaTitle: "South Park Junk Removal",
    metaDescription:
      "South Park junk removal for mixed junk, move-outs, furniture removal, appliances, and yard cleanup with fast quoting and practical scheduling.",
    h1: "Junk removal in South Park.",
    intro:
      "South Park jobs often need a practical crew that can move fast on mixed loads. Furniture, appliances, yard cleanup, and general junk removal all show up regularly.",
    localAngle:
      "The fit here is straightforward service, quick response, and a quote process that does not waste time when the property needs to be cleared soon.",
    commonRequests: [
      "General junk removal",
      "Furniture pickup",
      "Mattress and appliance hauling",
      "Yard debris cleanup",
    ],
    familiarWith: [
      "Mixed load hauling",
      "Practical scheduling windows",
      "Quick residential cleanup work",
    ],
    relatedServiceSlugs: ["junk-removal", "furniture-removal", "mattress-removal", "yard-debris-removal"],
    nearby: ["Seattle", "Newcastle"],
    faqs: [
      {
        question: "What South Park jobs are most common?",
        answer:
          "Mixed household junk, furniture pickup, appliance hauling, and yard cleanup are all common South Park requests.",
      },
      {
        question: "Do you quote South Park jobs by text too?",
        answer:
          "Yes. Photos, address, and timing are still the fastest way to price and schedule South Park jobs.",
      },
    ],
  },
  {
    slug: "seattle-junk-removal",
    title: "Seattle",
    metaTitle: "Seattle Junk Removal",
    metaDescription:
      "Seattle junk removal across north Seattle, central neighborhoods, and surrounding service areas with fast quotes, premium service, and clean arrival windows.",
    h1: "Junk removal across Seattle.",
    intro:
      "Seattle is the primary market. The service is built for homeowners, landlords, estate clients, and move-out jobs that need a crew that shows up on time and handles the property professionally.",
    localAngle:
      "From older homes with basements and detached garages to apartments, condos, and remodel cleanup, Seattle needs a service that is flexible without feeling messy or low-trust.",
    commonRequests: [
      "General junk removal",
      "Furniture pickup",
      "Garage and basement cleanouts",
      "Move-out and estate cleanouts",
    ],
    familiarWith: [
      "Seattle traffic and scheduling realities",
      "Older home access patterns",
      "Condo, apartment, and alley pickup logistics",
    ],
    relatedServiceSlugs: ["junk-removal", "furniture-removal", "garage-cleanout", "estate-cleanout"],
    nearby: ["Green Lake", "Wallingford", "Ballard", "Fremont"],
    faqs: [
      {
        question: "What Seattle neighborhoods do you serve?",
        answer:
          "Core coverage includes Green Lake, Wallingford, Greenwood, Roosevelt, Northgate, Fremont, Phinney Ridge, Ballard, and nearby Seattle neighborhoods, with broader service into the greater Seattle area.",
      },
      {
        question: "What Seattle services are booked most often?",
        answer:
          "Junk removal, furniture removal, garage cleanouts, estate cleanouts, and move-out junk removal are among the most common Seattle requests.",
      },
    ],
  },
  {
    slug: "greater-seattle-junk-removal",
    title: "Greater Seattle",
    metaTitle: "Greater Seattle Junk Removal",
    metaDescription:
      "Greater Seattle junk removal coverage from Seattle into Bellevue, Kirkland, Redmond, Newcastle, and nearby service-area cities with premium local scheduling.",
    h1: "Junk removal across the greater Seattle area.",
    intro:
      "Greenlake Junk Removal is based near Green Lake and serves well beyond the immediate neighborhood. The broader service area includes Seattle, north Seattle, and Eastside cities where the same premium service standard still matters.",
    localAngle:
      "The positioning stays honest: one service-area business serving a wider region, not a fake storefront in every city.",
    commonRequests: [
      "Regional move-out cleanouts",
      "Furniture pickup",
      "Garage and estate cleanouts",
      "Residential debris hauling",
    ],
    familiarWith: [
      "Seattle and Eastside routing",
      "Regional service-area scheduling",
      "Property-focused residential cleanup work",
    ],
    relatedServiceSlugs: ["junk-removal", "move-out-cleanout", "furniture-removal", "estate-cleanout"],
    nearby: ["Bellevue", "Kirkland", "Redmond", "Seattle"],
    faqs: [
      {
        question: "Do you serve both Seattle and the Eastside?",
        answer:
          "Yes. Greater Seattle coverage includes Seattle and selected Eastside cities depending on routing and schedule availability.",
      },
      {
        question: "Is the service still text-first outside Seattle proper?",
        answer:
          "Yes. Photos, address, and timing are still the fastest way to quote broader service-area jobs.",
      },
    ],
  },
  {
    slug: "eastside-junk-removal",
    title: "Eastside",
    metaTitle: "Eastside Junk Removal",
    metaDescription:
      "Eastside junk removal for Bellevue, Kirkland, Redmond, Bridle Trails, and Newcastle with premium residential service and fast quote turnaround.",
    h1: "Junk removal on the Eastside.",
    intro:
      "The Eastside coverage is designed for homeowners and property managers who want a cleaner, higher-trust junk removal experience than a generic hauling brand usually offers.",
    localAngle:
      "The service fits well in Eastside markets because the expectation is punctual arrival, careful property handling, and direct communication.",
    commonRequests: [
      "Furniture removal",
      "Garage cleanouts",
      "Move-out junk hauling",
      "Estate and downsizing cleanouts",
    ],
    familiarWith: [
      "Premium residential service expectations",
      "Larger-home cleanup routes",
      "Regional scheduling into Bellevue, Kirkland, and Redmond",
    ],
    relatedServiceSlugs: ["furniture-removal", "garage-cleanout", "move-out-cleanout", "estate-cleanout"],
    nearby: ["Bellevue", "Kirkland", "Redmond", "Bridle Trails"],
    faqs: [
      {
        question: "Which Eastside cities do you target most directly?",
        answer:
          "Bellevue, Kirkland, Redmond, Bridle Trails, and Newcastle are all part of the current Eastside focus.",
      },
      {
        question: "What Eastside jobs fit the service best?",
        answer:
          "Furniture pickup, garage cleanouts, estate cleanouts, move-out hauling, and general residential junk removal all fit well.",
      },
    ],
  },
  {
    slug: "north-seattle-junk-removal",
    title: "North Seattle",
    metaTitle: "North Seattle Junk Removal",
    metaDescription:
      "North Seattle junk removal for Green Lake, Wallingford, Greenwood, Roosevelt, Maple Leaf, Northgate, Fremont, Phinney Ridge, and Ballard.",
    h1: "Junk removal across north Seattle.",
    intro:
      "North Seattle is where the service runs deepest. Jobs here benefit from quicker routing, stronger neighborhood familiarity, and cleaner scheduling windows.",
    localAngle:
      "This is the strongest zone for same-day or next-day opportunities because the routes run through Green Lake and surrounding neighborhoods regularly.",
    commonRequests: [
      "Garage cleanouts",
      "Furniture removal",
      "Move-out hauling",
      "General household junk pickup",
    ],
    familiarWith: [
      "North Seattle neighborhood access",
      "Older homes, basements, and detached garages",
      "Condo and apartment furniture pickup",
    ],
    relatedServiceSlugs: ["junk-removal", "garage-cleanout", "furniture-removal", "move-out-cleanout"],
    nearby: ["Green Lake", "Wallingford", "Greenwood", "Roosevelt"],
    faqs: [
      {
        question: "Where in north Seattle do you work most often?",
        answer:
          "Green Lake, Wallingford, Greenwood, Roosevelt, Maple Leaf, Northgate, Fremont, Phinney Ridge, and Ballard are all part of the core north Seattle focus.",
      },
      {
        question: "Can north Seattle jobs usually be booked quickly?",
        answer:
          "Yes. North Seattle is the strongest area for quicker scheduling because the route density is highest there.",
      },
    ],
  },
];

export const SERVICE_PAGE_MAP = Object.fromEntries(
  SERVICE_PAGES.map((page) => [page.slug, page]),
) as Record<string, ServicePage>;

export const AREA_PAGE_MAP = Object.fromEntries(
  AREA_PAGES.map((page) => [page.slug, page]),
) as Record<string, AreaPage>;
