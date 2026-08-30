import { SITE_CONFIG } from "@/config/site";

export const metadata = {
  title: "Privacy Policy | Sankalp Sarthi Foundation",
  description: "Privacy Policy for Sankalp Sarthi Foundation regarding donor personal data, security, and confidentiality.",
};

export default function PrivacyPage() {
  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-gray-700 leading-relaxed text-sm">
        <h1 className="font-serif text-3xl font-bold text-gray-900 border-b pb-4">
          Privacy Policy
        </h1>

        <p>
          At <strong>{SITE_CONFIG.name}</strong>, we are committed to respecting your privacy and protecting the confidentiality of your personal information. This Privacy Policy outlines how we collect, use, and safeguard donor and volunteer data.
        </p>

        <h2 className="font-serif font-bold text-lg text-gray-900 pt-2">1. Information We Collect</h2>
        <p>
          When you make a donation, apply as a volunteer, or contact us through our website, we may collect information including your full name, email address, phone number, city, payment reference details, and message.
        </p>

        <h2 className="font-serif font-bold text-lg text-gray-900 pt-2">2. How We Use Your Information</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>To process voluntary donations and issue digital transaction acknowledgments.</li>
          <li>To coordinate volunteer activities and communicate drive logistics.</li>
          <li>To respond to user inquiries and send impact reports.</li>
          <li>We <strong>never sell, trade, or rent</strong> donor personal information to any third parties.</li>
        </ul>

        <h2 className="font-serif font-bold text-lg text-gray-900 pt-2">3. Payment Security</h2>
        <p>
          Online payments are processed securely through PCI-DSS compliant payment gateways (Razorpay) using 256-bit SSL encryption. {SITE_CONFIG.name} does not store sensitive credit card or netbanking credentials on our servers.
        </p>

        <h2 className="font-serif font-bold text-lg text-gray-900 pt-2">4. Anonymous Donations</h2>
        <p>
          Donors who select the "Donate Anonymously" option will have their names withheld from public donor recognition lists or reports.
        </p>

        <h2 className="font-serif font-bold text-lg text-gray-900 pt-2">5. Contact Us</h2>
        <p>
          If you have questions regarding this Privacy Policy, please email us at{" "}
          <a href={`mailto:${SITE_CONFIG.email}`} className="text-emerald-700 font-semibold underline">
            {SITE_CONFIG.email}
          </a>.
        </p>
      </div>
    </div>
  );
}
