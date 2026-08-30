export interface Cause {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  impactMetric: string;
  image: string;
  category: "education" | "food" | "health" | "community";
  itemsProvided: string[];
}

export const CAUSES_DATA: Cause[] = [
  {
    id: "education-support",
    slug: "education-support",
    title: "Education & School Supplies Support",
    subtitle: "Empowering young minds with notebooks, stationery & school bags",
    description: "Ensuring children from underprivileged backgrounds have access to basic learning materials, notebooks, pens, and durable school bags for their academic journey.",
    longDescription: "Education is the greatest tool for breaking cycle of poverty. Many children in rural and low-income urban areas in and around Mumbai attend school without adequate stationery or school bags. Sankalp Sarthi Foundation conducts regular distribution drives in municipal and grassroots schools to deliver quality school kits directly to students.",
    impactMetric: "1,200+ Students Supported",
    image: "/assets/annual-drive-poster.png",
    category: "education",
    itemsProvided: ["School Bags", "Notebooks & Exercise Books", "Pens, Pencils & Geometry Sets", "Drawing Kits & Color Books"],
  },
  {
    id: "food-support",
    slug: "food-support",
    title: "Homeless & Vulnerable Food Support",
    subtitle: "Nutritious freshly cooked meals for homeless individuals & families",
    description: "Organizing regular food distribution drives in vulnerable neighborhoods and streets across Mumbai, ensuring no one goes to sleep hungry.",
    longDescription: "Hunger is an immediate crisis for homeless individuals, daily wage workers, and elderly citizens living on street margins. Our volunteer teams cook and package hygienic, wholesome meals and distribute them directly in target areas with dignity and care.",
    impactMetric: "15,000+ Meals Served",
    image: "/assets/foundation-certificate.png",
    category: "food",
    itemsProvided: ["Fresh Warm Meals", "Bottled Clean Water", "Nutritional Snack Packs", "Seasonal Fruit Distribution"],
  },
  {
    id: "hospital-nutrition",
    slug: "hospital-nutrition",
    title: "Hospital Patient Nutritional Care",
    subtitle: "Supplying nutrient-dense food kits to patients & caregivers in government hospitals",
    description: "Distributing fruit baskets, milk packets, and essential nutrition kits to economically disadvantaged patients undergoing treatment in public hospitals.",
    longDescription: "Recovery requires good nutrition. Patients in government hospitals often come from distant villages without financial backing or local family support for daily nutrition. Sankalp Sarthi Foundation provides essential food supplements and caregiver meal kits to aid speedy recovery.",
    impactMetric: "850+ Hospital Patients",
    image: "/assets/foundation-letterhead.png",
    category: "health",
    itemsProvided: ["Fresh Fruits & Milk", "Protein & Nutrient Powders", "Caregiver Meal Packs", "Hygiene & Sanitization Kits"],
  },
  {
    id: "community-service",
    slug: "community-service",
    title: "Grassroots Community Service",
    subtitle: "Volunteer-driven emergency assistance & neighborhood drives",
    description: "Mobilizing local volunteers for seasonal drives, clothes distribution, environment awareness, and emergency disaster relief.",
    longDescription: "Community resilience relies on active participation. Through our volunteer networks, Sankalp Sarthi Foundation organizes seasonal blanket drives in winter, umbrella/raincoat drives during Mumbai monsoons, and local cleanliness & awareness workshops.",
    impactMetric: "50+ Drives Conducted",
    image: "/assets/foundation-logo-card.png",
    category: "community",
    itemsProvided: ["Winter Blanket Distribution", "Monsoon Raincoats & Umbrellas", "Cleanliness & Awareness Drives", "Emergency Relief Kits"],
  },
];
