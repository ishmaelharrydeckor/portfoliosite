// Selected roles, from LinkedIn. Order = most relevant to a business client first.
export interface Role {
  org: string;
  role: string;
  dates: string;
  /** What this means for a business owner hiring me. */
  note: string;
}

export const experience: Role[] = [
  {
    org: "Sena Academy",
    role: "Founder",
    dates: "Jun 2026 – Present",
    note: "Launched and run a product with real users, including a custom-built LMS.",
  },
  {
    org: "Echelon Networking",
    role: "Co-founder & Director of Operations and Logistics",
    dates: "Dec 2025 – Present",
    note: "Own timelines, logistics and risk across hybrid events. I deliver on schedule.",
  },
  {
    org: "SPE Ghana Section",
    role: "Deputy Membership Chair",
    dates: "Jan 2026 – Present",
    note: "Grow and retain a professional network through onboarding and engagement.",
  },
  {
    org: "SPE KNUST Student Chapter",
    role: "Membership Chairperson",
    dates: "Sep 2025 – Aug 2026",
    note: "Led recruitment and retention, and ran workshops and networking events.",
  },
  {
    org: "Petroleum Engineering Students' Association, KNUST",
    role: "Head, Internship and Field Trip Committee",
    dates: "Oct 2026 – Present",
    note: "Plan and coordinate opportunities for students.",
  },
  {
    org: "Erudite Africa Network",
    role: "Student Intern",
    dates: "May 2026 – Jun 2026",
    note: "Applied AI and machine learning to real business problems.",
  },
];
