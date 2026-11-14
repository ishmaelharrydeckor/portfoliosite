export type ProjectType = "live-client" | "concept" | "in-progress";

export interface Project {
  slug: string;
  name: string;
  /** Live URL. Leave out for projects that are not hosted yet. */
  url?: string;
  category: string;
  projectType: ProjectType;
  summary: string;
  problem: string;
  approach: string;
  /** The hardest or most interesting part. Optional. */
  challenge?: string;
  outcome: string;
  techStack: string[];
  /** Shown on the home page and the Projects page. Hidden projects still count in the totals. */
  showcase: boolean;
  /** True only for real, live client work. Drives the "Live client sites" count. */
  countsAsClient?: boolean;
}

export const projects: Project[] = [
  {
    slug: "samuel-adanuvo",
    name: "Samuel Adanuvo",
    url: "https://sammyadanuvo.com/",
    category: "Personal Brand & Advisory",
    projectType: "live-client",
    summary: "A rebuild of business consultant Samuel Adanuvo's website, so it works properly on mobile and looks and sounds like his brand.",
    problem: "Samuel's website was poor on mobile, and it did not match who he is as a business consultant. He asked me to improve it. The one thing he wanted was a site that fit his brand.",
    approach: "I rebuilt it to work properly on phones and designed it around his brand: his position, his colour theme and a layout that points everything back to what he does.",
    challenge: "Finding a direction that fit his brand and spoke for itself. When someone lands on the site and reads the first lines, it has to communicate his value.",
    outcome: "Samuel loved the result, especially the colour theme, the design and how everything is directed at his brand. What I am proudest of is that the site matches his brand and his position, so it feels like him.",
    techStack: ["Next.js", "Vercel"],
    showcase: true,
    countsAsClient: true
  },
  {
    slug: "daniel",
    name: "Daniel Avudzivi",
    url: "https://ishmaelharrydeckor.github.io/Daniel/",
    category: "Personal Brand & Advisory",
    projectType: "live-client",
    summary: "A personal-brand website for Daniel Avudzivi, an oil and gas analyst, with his career, projects and writing in one place and an admin panel so he can update it himself.",
    problem: "Daniel is an oil and gas analyst, and apart from LinkedIn he had nowhere of his own to show his value. He needed a website that could do that.",
    approach: "I built a personal-brand site around his work as an analyst: his story, career, projects and writing. His content lives in simple files, and an admin panel lets him update the site himself.",
    challenge: "Getting a look that fit him: an oil and gas analyst, and a personal brand he can put his work and writing into.",
    outcome: "He liked it from the first draft and did not need many changes.",
    techStack: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    showcase: true,
    countsAsClient: true
  },
  {
    slug: "paa-kwesi-folson",
    name: "Paa Kwesi Folson",
    url: "https://pkf-pink.vercel.app/",
    category: "Personal Brand & Advisory",
    projectType: "live-client",
    summary: "A rebuild of entrepreneur and speaker Paa Kwesi Folson's website, so it fits the work he does.",
    problem: "Paa Kwesi is an entrepreneur, and his website did not fit what he was doing. We got on a call, talked through a few things, and I took it from there.",
    approach: "I rebuilt the site around his work as a speaker, coach and consultant, with sections for speaking, programmes, consulting and media.",
    outcome: "He loved the result.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "GSAP", "Framer Motion"],
    showcase: true
  },
  {
    slug: "remotework-africa",
    name: "RemoteWork Africa",
    url: "https://rwa-tawny.vercel.app/",
    category: "Marketplace",
    projectType: "in-progress",
    summary: "A remote-work marketplace connecting African professionals with companies hiring remotely, with job categories, applications and shared workrooms. Still in build.",
    problem: "The founder is starting a remote-work marketplace. They saw some of my work and trusted me to build it.",
    approach: "Building a full marketplace: talent profiles, job posting and applications across 12 categories, ranked applicants for companies, and contract workrooms for milestone-based collaboration. Input is validated server-side, bots are filtered at sign-up, and the core flows are covered by automated tests.",
    outcome: "In progress. The marketplace core (profiles, roles, applications and workrooms) is built and live as a prototype. Payments, identity verification and email are still being completed before it opens to real users.",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    showcase: true
  },
  {
    slug: "truecraft",
    name: "TrueCraft",
    category: "Web Agency",
    projectType: "in-progress",
    summary: "The website for TrueCraft, my own web studio: services, selected work, process and pricing, with a looping 3D hero. Built, not hosted yet.",
    problem: "TrueCraft is my own platform, so this was my own brief: a site that explains what the studio does, shows its work and gives visitors a clear way to start a project.",
    approach: "Designed and built a dark, editorial single-page site with a hero video, services, a selected-work gallery linking to case-study pages, process, pricing and a contact form. It is plain HTML, CSS and JavaScript with no framework, and includes fallbacks for video and Safari.",
    outcome: "A finished build that is not hosted yet, so there is no live link. Screenshots are from the local build.",
    techStack: ["HTML", "CSS", "JavaScript"],
    showcase: true
  },
  {
    slug: "eyecon",
    name: "EyeCon",
    category: "E-commerce",
    projectType: "concept",
    summary: "A redesign of an eyewear store's website: a single-page shop with a scroll-driven hero, a lens picker, a frame gallery and a clickable cart and checkout. Photos belong to EyeCon.",
    problem: "I bought something from EyeCon and struggled with the customer experience. I met the manager, who asked me to rate the website. I ran a full audit and sent it to him, and he asked me to redesign it.",
    approach: "I redesigned it as a single page: a full-bleed photo hero, a lens picker to help shoppers choose, a product grid, a cart drawer and a checkout flow with add-ons and an upgrade offer. It is a clickable concept, not connected to any store, payment or email system.",
    outcome: "I showed the redesign to the manager and he loved it. He is expanding the business, and the plan is to put the concept on his live website. Until then it is a concept build. The photos belong to EyeCon.",
    techStack: ["HTML", "CSS", "JavaScript"],
    showcase: true
  },
  {
    slug: "checin",
    name: "ChecIN",
    url: "https://checin-6982.vercel.app/",
    category: "SaaS Product",
    projectType: "in-progress",
    summary: "Attendance software where a QR code on a tablet changes every 15 seconds, so check-ins cannot be faked. I am building it with my colleagues.",
    problem: "My colleagues and I are starting a SaaS company to help organisations track attendance and handle the rest of their HR. Attendance comes first, and it has to be easy for a company to use and easy to scale.",
    approach: "ChecIN is built around attendance. A tablet at the entrance shows a QR code that changes every 15 seconds, staff scan it with their phones, and managers get a live view of who is in. It also has shifts, leave and reports, with more HR tools, including payroll, planned.",
    outcome: "In progress. Attendance is the core, and we are building out the rest with the aim of making it easy for companies to scale.",
    techStack: ["TanStack Start", "React", "Tailwind CSS", "Firebase"],
    showcase: true
  },
  {
    slug: "estateguard",
    name: "EstateGuard",
    url: "https://estateguard-azure.vercel.app/",
    category: "Housing & Fintech",
    projectType: "in-progress",
    summary: "A rental platform where government employees find approved homes and pay rent by approving a prompt on their phone. I built its landing page and a clickable demo for the client.",
    problem: "My client is building a rental platform and needed a way to explain it to renters, landlords and the people backing it. They had seen my work and knew I could do it.",
    approach: "I built the landing page and a clickable demo of the platform, covering approved listings, digital tenancy agreements, rent approval prompts and receipts. In the demo, payments are simulated.",
    outcome: "The landing page is live, and the demo is used to walk the owners through the idea. The platform itself is still being built.",
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
    showcase: false
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
    showcase: false
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
    showcase: false
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
export const liveClientCount = projects.filter((p) => p.countsAsClient).length;
