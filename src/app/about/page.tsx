import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { ShieldCheck, Heart, Users, CheckCircle2, Award, FileText } from "lucide-react";

export const metadata = {
  title: "About Us | Sankalp Sarthi Foundation",
  description: "Learn about Sankalp Sarthi Foundation's mission, leadership, registration details, and 13+ year history of social service in Mumbai.",
};

export default function AboutPage() {
  return (
    <div className="py-12 space-y-16">
      
      {/* Header Banner */}
      <section className="bg-emerald-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900 border border-emerald-700 text-xs font-semibold text-lime-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Govt. Approved | Regd. No. {SITE_CONFIG.regNo}</span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
            About Sankalp Sarthi Foundation
          </h1>
          
          <p className="text-base sm:text-lg text-emerald-200/90 leading-relaxed">
            Founded on the principle that “Helping hands can make difference”, we are a volunteer-driven non-profit organization serving communities in Mumbai and surrounding areas since 2013.
          </p>
        </div>
      </section>

      {/* Core Mission & Positioning */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
              Our Organizational Positioning
            </span>
            
            <h2 className="font-serif text-3xl font-bold text-gray-900 leading-tight">
              Small acts of consistent service build resilient communities
            </h2>
            
            <p className="text-sm text-gray-700 leading-relaxed">
              Sankalp Sarthi Foundation operates at the intersection of education support, food security, and community health. Powered entirely by dedicated volunteers and generous donors, we focus on high-impact grassroots drives that deliver tangible relief directly to beneficiaries.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Education & School Supplies</h4>
                  <p className="text-xs text-gray-600">Equipping underprivileged students with quality school bags, exercise books, and stationery essentials.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Food Support & Hunger Relief</h4>
                  <p className="text-xs text-gray-600">Distributing fresh wholesome meals to homeless individuals and families across Mumbai.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Hospital Patient Nutritional Care</h4>
                  <p className="text-xs text-gray-600">Providing fresh fruits, milk, and nutritional supplements to economically vulnerable patients in government hospitals.</p>
                </div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <div className="aspect-4/3 relative">
                <Image
                  src="/assets/foundation-certificate.png"
                  alt="Official Sankalp Sarthi Foundation Certificate of Appreciation"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-4 bg-emerald-950 text-white text-center text-xs font-medium">
                Official Certificate of Appreciation sample issued for Social Service Internships
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Verified Documentation & Internship Context */}
      <section className="bg-gray-50 py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
              Youth Empowerment & Internships
            </span>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mt-1">
              Social Service Internships & Outreach
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              We provide college students (such as B.Tech academic requirement 45-hour social service programs) hands-on opportunities in field service, digital communication, content planning, and archive curation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-gray-900">Certificate of Appreciation</h3>
                  <p className="text-xs text-gray-500">Issued by Foundation Trustees</p>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Recognizing student contributions in technical development, Instagram/Facebook content curation, visual material organization, and digital communication strategy.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-emerald-800">
                <span>Signatories:</span>
                <span>Priyanka Barge (Treasurer)</span>
                <span>Prem Baraskar (IT Lead)</span>
              </div>
            </div>

            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
              <Image
                src="/assets/foundation-letterhead.png"
                alt="Foundation Letterhead and Internship Document"
                fill
                className="object-contain"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Leadership & Trustees */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">
            Leadership & Coordination
          </span>
          <h2 className="font-serif text-3xl font-bold text-gray-900 mt-1">
            Core Foundation Officers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {SITE_CONFIG.leadership.map((member) => (
            <div
              key={member.name}
              className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs text-center space-y-3"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-700 text-white text-xl font-bold font-serif mx-auto flex items-center justify-center shadow-md">
                {member.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-gray-900">{member.name}</h3>
                <p className="text-xs font-bold text-emerald-700">{member.title}</p>
                <p className="text-xs text-gray-600 mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
