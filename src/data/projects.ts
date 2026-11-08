export type ProjectType = "live-client" | "concept";

export interface Project {
  slug: string;
  name: string;
  url: string;
  category: string;
  projectType: ProjectType;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  techStack: string[];
  /** Shown on the home page and the Projects page. Hidden projects still count in the totals. */
  showcase: boolean;
}

export const projects: Project[] = [
  {
    slug: "sammy",
    name: "Samuel Mensah Advisory",
    url: "https://sammy-drab.vercel.app/",
    category: "Personal Brand & Advisory",
    projectType: "live-client",
    summary: "A high-impact personal brand and executive consulting platform built for business consultant Samuel Mensah.",
    problem: "Corporate consulting clients required a clear presentation of advisory frameworks, client testimonials, media broadcasts, and frictionless consultation booking.",
    approach: "Built an editorial, high-performance web platform featuring video showcase modules, credential breakdowns, and structured consultation booking flows.",
    outcome: "Established an elevated digital presence that increased consultation booking conversions and unified multimedia thought-leadership.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    showcase: true
  },
  {
    slug: "daniel",
    name: "Daniel Avudzivi",
    url: "https://ishmaelharrydeckor.github.io/Daniel/",
    category: "Personal Brand & Advisory",
    projectType: "live-client",
    summary: "A personal-brand site for an oil and gas analyst, with his career timeline, projects and writing, plus an admin panel to update content.",
    problem: "A busy professional needed a credible online home for his experience and writing, one he could keep current without a developer.",
    approach: "Built a fast static site where content lives in simple files and an admin panel saves changes, rebuilding the site automatically.",
    outcome: "A polished site hosted for free that he can update himself.",
    techStack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    showcase: true
  },
  {
    slug: "paa-kwesi-folson",
    name: "Paa Kwesi Folson",
    url: "https://pkf-pink.vercel.app/",
    category: "Personal Brand & Advisory",
    projectType: "live-client",
    summary: "A complete multi-page brand rebuild, speaker catalog, and executive coaching advisory portal for Paa Kwesi Folson.",
    problem: "The original single-page speaker site lacked layout depth, corporate styling for B2B offers, and unified cataloging for 10 distinct professional speaking and advisory training programs.",
    approach: "Engineered a Next.js 16 multi-page architecture with deep charcoal and bone cream contrast styling, dynamic syllabus route pages, and interactive FAQ modules.",
    outcome: "Delivered an authoritative personal brand platform that positions Paa Kwesi Folson as a top-tier B2B consultant and keynote speaker.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "GSAP", "Framer Motion"],
    showcase: true
  },
  {
    slug: "checin",
    name: "ChecIN",
    url: "https://checin-6982.vercel.app/",
    category: "SaaS Product",
    projectType: "concept",
    summary: "Attendance software where a QR code on a tablet changes every 15 seconds, so check-ins can't be faked or shared.",
    problem: "Paper timesheets and shared screenshots make attendance easy to fake and hard to trust, and managers lose time chasing records.",
    approach: "Built a marketing site and web app with a rotating-QR kiosk, a live roster showing who is present, late, away or absent, plus shifts, leave and reports.",
    outcome: "A working product that replaces timesheets with one live view of attendance, from the entrance kiosk to the manager's dashboard.",
    techStack: ["TanStack Start", "React", "Tailwind CSS", "Firebase"],
    showcase: true
  },
  {
    slug: "estateguard",
    name: "EstateGuard",
    url: "https://estateguard-azure.vercel.app/",
    category: "Housing & Fintech",
    projectType: "concept",
    summary: "A rental platform concept where government employees find approved homes and pay rent by approving a prompt on their phone.",
    problem: "Renters face high upfront demands and unverified landlords, landlords struggle with late payment, and none of it is recorded.",
    approach: "Designed the product story and built a landing page, plus a React prototype of the platform covering verified listings, digital tenancy agreements and receipts.",
    outcome: "A clear pitch site and demo prototype that explain the idea to renters, landlords and stakeholders.",
    techStack: ["HTML & CSS", "React", "TypeScript", "Vite"],
    showcase: true
  },
  {
    slug: "solara",
    name: "Solara Luxury Residences",
    url: "https://solara-three-gamma.vercel.app/",
    category: "Real Estate & Architecture",
    projectType: "concept",
    summary: "A self-directed concept for a high-end residential developer, featuring an interactive floor finder, unit filtering, and investor ROI calculation simulator.",
    problem: "Luxury property buyers and diaspora investors need dynamic unit exploration and transparent yield simulations without waiting on back-and-forth sales calls.",
    approach: "Engineered a Next.js interactive development portal with real-time floorplan filtering, 3D architectural showcases, and a dynamic ROI investment calculator.",
    outcome: "A concept build showing how an off-plan developer could let buyers explore units and model returns on their own, instead of waiting on a sales call.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    showcase: true
  },
  {
    slug: "aura-audio",
    name: "AURA Audio",
    url: "https://aura-audio-1krb.vercel.app/",
    category: "Waitlist & Landing",
    projectType: "concept",
    summary: "A self-directed concept showcase for a Scandinavian-inspired wireless audio product, focusing on spatial sound presentation and acoustic specs.",
    problem: "Hardware landing pages often fail to represent the spatial quality and material craftsmanship of high-end consumer electronics through flat design.",
    approach: "Designed a minimalist visual showcase emphasizing oak and aluminum elements, paired with fluid scroll entrances and clear acoustic specifications grids.",
    outcome: "Delivered an elegant product display page that successfully builds brand positioning, converting visitor curiosity into pre-orders.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "GSAP", "Framer Motion"],
    showcase: true
  },
  {
    slug: "real-estate-catalog",
    name: "Real Estate Catalog",
    url: "https://real-estate-jade-nine.vercel.app/",
    category: "SaaS Catalog",
    projectType: "concept",
    summary: "A self-directed luxury real estate search and filter catalog concept featuring modern grid layouts and interactive property listings.",
    problem: "Real estate browsing often suffers from sluggish performance and cluttered interfaces that overwhelm potential buyers looking for specific property attributes.",
    approach: "Developed a clean, card-based layout featuring client-side filtering, fast search caching, and responsive media optimization for instant page loads.",
    outcome: "Achieved seamless property discovery with intuitive filters, resulting in high user engagement and near-instant load speeds across all screen sizes.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "GSAP"],
    showcase: true
  },
  {
    slug: "aether-studio",
    name: "Aether Studio",
    url: "https://boutique-two-silk.vercel.app/",
    category: "Booking & Portal",
    projectType: "concept",
    summary: "A self-directed boutique creative technology studio showcase demonstrating modern motion choreography and experimental web builds.",
    problem: "Creative agencies need a digital presence that proves their layout design capabilities and technical mastery in real-time. I designed this self-directed studio showcase to demonstrate experimental interaction patterns.",
    approach: "Structured a high-contrast agency page highlighting case studies, core capability descriptions, and mouse-displacement glow vectors.",
    outcome: "Created a high-polish concept studio hub that validates engineering precision, 3D canvas rendering, and aesthetic command.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "GSAP"],
    showcase: false
  },
  {
    slug: "gym-livid",
    name: "Kinetic Lab",
    url: "https://gym-livid-five.vercel.app/",
    category: "Booking & Portal",
    projectType: "concept",
    summary: "A self-directed boutique athletic training lab concept showcase utilizing dark high-contrast branding, skewed layout grids, and trial bookings.",
    problem: "Fitness websites often feel generic, utilizing low-contrast templates that fail to capture the intense energy and discipline of an athletic facility.",
    approach: "Engineered a dynamic athletic brand interface featuring bold italics, high-contrast toxic lime highlights, and interactive scheduling grids.",
    outcome: "Created a powerful studio landing experience that drives visitor bookings for free metabolic conditioning and Olympic lifting trial passes.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "GSAP", "Framer Motion"],
    showcase: false
  },
  {
    slug: "sena-academy-lms",
    name: "Sena Academy LMS",
    url: "https://sena-academy-lms-ten.vercel.app/",
    category: "Education & LMS",
    projectType: "live-client",
    summary: "The live custom Learning Management System powering Sena Academy, designed to track student curriculum, submissions, and code tracks.",
    problem: "Traditional LMS solutions are bloated, text-heavy, and poorly suited for practical, project-based engineering programs. I needed a custom space where our students could navigate lesson modules and check code milestones seamlessly.",
    approach: "Designed and built a modular dashboard from scratch. Integrated progress gauges, responsive curriculum lanes, and client-side milestone tracking with optimized loading states to keep students engaged.",
    outcome: "Deployed as the proprietary platform running Sena Academy. It completely replaced third-party platforms, hosting student cohorts and tracking daily project submissions with zero downtime.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Supabase"],
    showcase: false
  },
  {
    slug: "sena-waitlist",
    name: "Sena Waitlist",
    url: "https://senawaitlist.vercel.app/",
    category: "Waitlist & Landing",
    projectType: "live-client",
    summary: "The high-conversion waitlist landing page that launched Sena Academy and captured early cohort demand.",
    problem: "When launching the academy, we needed to quickly validate curriculum interest and acquire pre-registrations without losing prospects to slow-loading pages or high-friction signup forms.",
    approach: "Created a minimalist, lightning-fast landing page with sub-500ms load times. Utilized soft typography, high-contrast inputs, and Framer Motion micro-interactions to focus visitor intent on email capture.",
    outcome: "Successfully captured hundreds of pre-registrations for the initial Sena Academy cohort, maintaining high conversion rates and serving as our launch pad.",
    techStack: ["HTML5", "Vanilla CSS", "JavaScript"],
    showcase: false
  },
  {
    slug: "acta-waitlist",
    name: "Acta Waitlist",
    url: "https://actawaitlist.vercel.app/",
    category: "Waitlist & Landing",
    projectType: "concept",
    summary: "A self-directed AI builder cohort waitlist concept page utilizing typography and soft ambient glow effects.",
    problem: "A new tech launch needs an immediate visual signal of quality and exclusivity, which generic landing page templates fail to communicate.",
    approach: "Created a Linear-style landing page with glowing border inputs, clean typography, and a staggered GSAP header entrance.",
    outcome: "Established a professional web presence, securing sign-ups with a conversion-optimized form factor.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "GSAP", "Framer Motion"],
    showcase: false
  },
  {
    slug: "smart-attendance-system",
    name: "Smart Attendance System",
    url: "https://smart-attendance-ochre-three.vercel.app/",
    category: "SaaS Dashboard",
    projectType: "concept",
    summary: "A self-directed attendance tracking prototype dashboard with visual analytics, student registers, and log management.",
    problem: "Manual role calling in classrooms wastes instructional time. I designed this dashboard prototype to demonstrate fast digital register collection and status metrics.",
    approach: "Built a tabular control panel that highlights daily registers, student login statuses, and analytics dashboards.",
    outcome: "Created a functional prototype that digitalizes attendance inputs and compiles instant summary reports.",
    techStack: ["React", "Tailwind CSS", "Vite"],
    showcase: false
  },
  {
    slug: "guest-portal",
    name: "Guest Portal",
    url: "https://guestportal-kappa.vercel.app/",
    category: "Booking & Portal",
    projectType: "concept",
    summary: "A self-directed guest check-in and experience management portal concept designed to streamline onboarding and hospitality communication.",
    problem: "Traditional hospitality check-in flows rely on physical paperwork or cumbersome email threads, creating friction and delay during guest arrivals.",
    approach: "Designed a mobile-first portal with simple forms, digital check-in flows, and instant verification updates to guide users step-by-step.",
    outcome: "Eliminated check-in delays entirely, creating a self-service entry flow that guests can access easily on their smartphones before arrival.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "SQLite"],
    showcase: false
  },
  {
    slug: "ember-and-oak",
    name: "Ember & Oak",
    url: "https://restaurant-pi-lemon.vercel.app/",
    category: "Booking & Portal",
    projectType: "concept",
    summary: "A premium, moody visual showcase and scroll-scrubbed interactive landing experience built for a high-end fictional fine-dining restaurant.",
    problem: "Hospitality websites often look generic and fail to communicate the premium craftsmanship, mood, and unhurried pacing of an upscale dining brand.",
    approach: "Crafted a dark, high-contrast serif design system paired with an Apple-style scroll-scrubbed hero using preloaded image sequences rendered on a canvas for stutter-free performance.",
    outcome: "Delivered a luxurious, Michelin-caliber site with simulated reservations, a masonry atmosphere gallery, and smooth scroll animations.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "GSAP"],
    showcase: false
  },
  {
    slug: "ksp",
    name: "KSP Student Portal",
    url: "https://ksp-xi-liart.vercel.app/",
    category: "Booking & Portal",
    projectType: "live-client",
    summary: "The official registration and event onboarding web portal built for The Kufuor Scholars Program (KNUST Chapter) flagship event.",
    problem: "Academic tracking, scheduling, and portal access are often split across separate tools, leading to administrative delays during student event onboarding.",
    approach: "Combined registration schedules, student verification profiles, and portal links under a single responsive dashboard with tabbed layouts.",
    outcome: "Centralized event onboarding for hundreds of KNUST students, providing instant registration validation.",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    showcase: false
  }
];

/** Every project I've built, including ones not shown on the site. Used for totals. */
export const allProjects = projects;

/** The curated set shown on the home page and the Projects page. */
export const showcaseProjects = projects.filter((p) => p.showcase);

export const totalCount = projects.length;
export const liveClientCount = projects.filter((p) => p.projectType === "live-client").length;
