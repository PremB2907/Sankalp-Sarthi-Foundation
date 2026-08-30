export interface FAQItem {
  question: string;
  answer: string;
  category: "donations" | "volunteering" | "trust" | "general";
}

export const FAQS_DATA: FAQItem[] = [
  {
    category: "donations",
    question: "How can I make a donation to Sankalp Sarthi Foundation?",
    answer: "You can donate securely online via Razorpay using UPI, Credit/Debit cards, NetBanking, or Digital Wallets. Alternatively, you can scan our official YES BANK UPI QR code or pay to our UPI ID: yespay.ypbsm000011762@yesbankltd and submit your transaction reference (UTR) on our website.",
  },
  {
    category: "donations",
    question: "Is my payment secure?",
    answer: "Yes, 100%. All online donations are processed using Razorpay's PCI-DSS Level 1 compliant secure payment gateway with 256-bit encryption. We never store your payment card details or banking credentials.",
  },
  {
    category: "donations",
    question: "Can I donate anonymously?",
    answer: "Yes, when filling out the donation form, simply check the 'Donate Anonymously' option. Your name will not be displayed in public donor walls or impact reports.",
  },
  {
    category: "volunteering",
    question: "Who can become a volunteer?",
    answer: "Anyone! College students, working professionals, homemakers, and senior citizens are welcome to join our volunteer network. You can participate in weekend field drives, digital communications, graphic design, content creation, or logistical management.",
  },
  {
    category: "volunteering",
    question: "Do volunteers receive an internship / appreciation certificate?",
    answer: "Yes! Active volunteers and students completing social service internships (such as 45-hour academic requirements) receive official Certificates of Appreciation signed by foundation trustees and leads.",
  },
  {
    category: "trust",
    question: "Where do my donated funds go?",
    answer: "100% of direct project donations go directly into purchasing school supplies (notebooks, bags, stationery), fresh food ingredients for homeless meal drives, and nutritional kits for hospital patients. Drive receipts and photographs are published transparently.",
  },
  {
    category: "trust",
    question: "Is Sankalp Sarthi Foundation registered?",
    answer: "Yes. Sankalp Sarthi Foundation is a Govt. Approved registered non-profit entity (Registration No: Mu/0001792/2025) based in Mumbai, Maharashtra, India.",
  },
  {
    category: "general",
    question: "Can I contribute items (like school bags, books, or food) instead of money?",
    answer: "Absolutely! We strongly welcome non-cash contributions. Visit our 'Contribute' page or contact us via our WhatsApp Website & Supply Contribution group to arrange item drop-offs or collection drives.",
  },
];
