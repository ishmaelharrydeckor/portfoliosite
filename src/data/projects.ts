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
  isFeatured: boolean;
}

export const projects: Project[] = [
  {
    slug: "solara",
    name: "Solara Luxury Residences",
    url: "https://solara-three-gamma.vercel.app/",
    category: "Real Estate & Architecture",
    projectType: "live-client",
    summary: "A high-end residential developer web experience featuring an interactive floor finder, unit filtering, and investor ROI calculation simulator.",
    problem: "Luxury property buyers and diaspora investors need dynamic unit exploration and transparent yield simulations without waiting on back-and-forth sales calls.",
    approach: "Engineered a Next.js interactive development portal with real-time floorplan filtering, 3D architectural showcases, and a dynamic ROI investment calculator.",
    outcome: "Streamlined off-plan property discovery and qualified high-intent investor inquiries directly through interactive unit calculators.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    isFeatured: true
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
    isFeatured: true
  },
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
    isFeatured: true
  },
  {
    slug: "aether-studio",
    name: "Aether Studio",
    url: "https://boutique-two-silk.vercel.app/",
    category: "Booking & Portal",
    projectType: "concept",
    summary: "A high-contrast boutique creative technology studio showcase demonstrating modern motion choreography and experimental web builds.",
    problem: "Creative agencies need a digital presence that proves their layout design capabilities and technical mastery in real-time, not just in bullet points.",
    approach: "Structured a high-contrast agency page highlighting past case studies, core capability descriptions, and mouse-displacement glow vectors.",
    outcome: "Established a highly credible, taste-driven studio hub that validates engineering precision and aesthetic command to prospective enterprise clients.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "GSAP"],
    isFeatured: true
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
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "GSAP"],
    isFeatured: true
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
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "GSAP"],
    isFeatured: true
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
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    isFeatured: true
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
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    isFeatured: false
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
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    isFeatured: false
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
    techStack: ["Next.js", "Tailwind CSS", "GSAP", "TypeScript"],
    isFeatured: false
  },
  {
    slug: "smart-attendance-system",
    name: "Smart Attendance System",
    url: "https://smart-attendance-ochre-three.vercel.app/",
    category: "SaaS Dashboard",
    projectType: "concept",
    summary: "An automated attendance tracking platform prototype with visual analytics, student logs, and digital registry management.",
    problem: "Manual role calling in classrooms wastes valuable instructional time and is prone to human error or manipulation.",
    approach: "Built a tabular control panel that highlights daily registers, student login statuses, and analytics dashboards.",
    outcome: "Minimized administration overhead by digitalizing attendance inputs and compiling instant summary sheets.",
    techStack: ["React", "Tailwind CSS", "TypeScript", "Recharts"],
    isFeatured: false
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
    techStack: ["React", "Tailwind CSS", "TypeScript", "GSAP"],
    isFeatured: false
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
    isFeatured: true
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
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    isFeatured: false
  }
];
