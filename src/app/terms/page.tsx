import { SITE_CONFIG } from "@/config/site";

export const metadata = {
  title: "Terms of Service | Sankalp Sarthi Foundation",
  description: "Terms of Service for using the official Sankalp Sarthi Foundation website and making voluntary donations.",
};

export default function TermsPage() {
  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-gray-700 leading-relaxed text-sm">
        <h1 className="font-serif text-3xl font-bold text-gray-900 border-b pb-4">
          Terms of Service
        </h1>

        <p>
          Welcome to the official website of <strong>{SITE_CONFIG.name}</strong> (Regd. No. {SITE_CONFIG.regNo}). By accessing this website or making a donation, you agree to comply with the following Terms of Service.
        </p>

        <h2 className="font-serif font-bold text-lg text-gray-900 pt-2">1. Voluntary Contributions</h2>
        <p>
          All donations made to {SITE_CONFIG.name} are voluntary contributions intended to support educational supply drives, homeless food drives, hospital patient care, and community service projects.
        </p>

        <h2 className="font-serif font-bold text-lg text-gray-900 pt-2">2. Use of Site Content</h2>
        <p>
          All photos, graphics, drive logos, and text materials published on this site are property of {SITE_CONFIG.name}. Unauthorized copying or commercial use without written permission is prohibited.
        </p>

        <h2 className="font-serif font-bold text-lg text-gray-900 pt-2">3. Refund Policy</h2>
        <p>
          Donations are generally non-refundable as funds are immediately allocated towards purchasing school supplies and food items. However, if a duplicate or erroneous transaction occurs due to technical glitch, please contact us within 7 days at {SITE_CONFIG.email} for review.
        </p>

        <h2 className="font-serif font-bold text-lg text-gray-900 pt-2">4. Contact Information</h2>
        <p>
          For any clarifications regarding our terms, reach us at {SITE_CONFIG.email}.
        </p>
      </div>
    </div>
  );
}
