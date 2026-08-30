export interface Campaign {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  targetDateISO: string;
  location: string;
  status: "upcoming" | "active" | "completed";
  goalAmount: number;
  amountRaised: number;
  volunteersTarget: number;
  volunteersEnrolled: number;
  coverImage: string;
  description: string;
  highlights: string[];
  gallery: string[];
  whatsappLink: string;
}

export const CAMPAIGNS_DATA: Campaign[] = [
  {
    id: "annual-drive-2026",
    slug: "annual-drive-2026",
    title: "Annual School Supplies & Education Drive 2026",
    subtitle: "Join us on Teachers' Day to empower 500+ children with school kits",
    date: "5th September 2026",
    targetDateISO: "2026-09-05T09:00:00+05:30",
    location: "Mumbai & Palghar Rural Schools",
    status: "upcoming",
    goalAmount: 150000,
    amountRaised: 42500,
    volunteersTarget: 50,
    volunteersEnrolled: 28,
    coverImage: "/assets/annual-drive-poster.png",
    description: "Sankalp Sarthi Foundation invites all volunteers, college students, working professionals, and donors to participate in our flagship Annual Drive on 5th September 2026. Together, we will distribute comprehensive educational kits (school bags, notebooks, geometry sets, and drawing supplies) to school children in underserved rural and semi-urban communities.",
    highlights: [
      "Targeting 500+ underprivileged school children across 5 rural centers",
      "Comprehensive kits containing 1 school bag, 6 notebooks, stationery box & art supplies",
      "On-ground volunteer distribution teams and interactive learning sessions",
      "Transparent reporting with photo proof and verified delivery records",
    ],
    gallery: [
      "/assets/annual-drive-poster.png",
      "/assets/foundation-certificate.png",
      "/assets/foundation-letterhead.png",
      "/assets/foundation-logo-card.png",
    ],
    whatsappLink: "https://chat.whatsapp.com/BJL9QPF4Buh2SUkZgtI8TW",
  },
];
