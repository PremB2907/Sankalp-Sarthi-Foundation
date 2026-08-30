"use client";

import { useState } from "react";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/site";
import { MessageCircle, CheckCircle2, AlertCircle, Award, FileText } from "lucide-react";

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "Mumbai",
    occupation: "Student",
    skills: "",
    availability: "Weekends",
    message: "",
    consent: true,
  });

  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    "Education & School Drives",
  ]);

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInterestToggle = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/volunteers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          interests: selectedInterests,
        }),
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || "Failed to submit volunteer application");
      }

      setSuccess(true);
    } catch (err: any) {
      setErrorMessage(err.message || "An unexpected error occurred.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="py-20 bg-[#F7F6F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Banner */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#005B45]">
            Volunteer Network & Student Internships
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#17352D] leading-tight">
            Become a volunteer. <br />
            <span className="font-accent italic text-[#005B45] font-normal">
              Drive real service.
            </span>
          </h1>

          <p className="text-base font-sans text-[#66756F] leading-relaxed">
            Join hundreds of passionate students, working professionals, and digital creators across Mumbai. We offer official Certificates of Appreciation & Letterheads signed by Trustees for 45-hour academic social service internships.
          </p>
        </div>

        {/* Volunteer Certification & Recognition Section */}
        <div className="bg-[#003D31] text-white p-8 sm:p-12 border border-white/10 mb-20">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#63BE21]">
              Official Volunteer Certification
            </span>
            <h2 className="font-serif text-3xl text-white">
              Earn Official Recognition for Your Service
            </h2>
            <p className="text-xs font-sans text-white/80 leading-relaxed">
              Volunteers completing 45 hours of field drives, supply logistics, or digital contributions receive official Foundation Certificates & Trustee Recommendation Letterheads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Official Certificate Card */}
            <div className="bg-emerald-950/80 p-6 border border-white/15 space-y-4">
              <div className="flex items-center gap-2 text-[#63BE21]">
                <Award className="w-5 h-5" />
                <span className="text-xs font-sans font-bold uppercase tracking-wider">
                  Certificate of Appreciation
                </span>
              </div>
              <div className="relative aspect-4/3 border border-white/20 bg-white overflow-hidden">
                <Image
                  src="/assets/foundation-certificate.png"
                  alt="Official Volunteer Certificate of Appreciation"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-contain p-2"
                />
              </div>
              <p className="text-xs font-sans text-white/70">
                Awarded to volunteers for outstanding contribution and commitment to social welfare drives.
              </p>
            </div>

            {/* Official Letterhead Recommendation */}
            <div className="bg-emerald-950/80 p-6 border border-white/15 space-y-4">
              <div className="flex items-center gap-2 text-[#63BE21]">
                <FileText className="w-5 h-5" />
                <span className="text-xs font-sans font-bold uppercase tracking-wider">
                  Official Recommendation Letterhead
                </span>
              </div>
              <div className="relative aspect-4/3 border border-white/20 bg-white overflow-hidden">
                <Image
                  src="/assets/foundation-letterhead.png"
                  alt="Official Foundation Letterhead Recommendation"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-contain p-2"
                />
              </div>
              <p className="text-xs font-sans text-white/70">
                Official institutional recommendation letter signed by Treasurer Priyanka Barge & IT Lead Prem Baraskar for academic credit.
              </p>
            </div>

          </div>
        </div>

        {/* Form Container */}
        {success ? (
          <div className="max-w-2xl mx-auto bg-white p-12 border border-[#17352D]/15 text-center space-y-6">
            <CheckCircle2 className="w-12 h-12 text-[#005B45] mx-auto" />
            <h2 className="font-serif text-3xl text-[#17352D]">
              Welcome to the Sankalp Sarthi Family!
            </h2>
            <p className="text-sm font-sans text-[#66756F]">
              Your volunteer application has been recorded. You can now join our official volunteer WhatsApp community to coordinate with on-ground drive teams.
            </p>
            <a
              href={SITE_CONFIG.socialLinks.whatsappVolunteer}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-xs font-sans font-bold tracking-widest text-[#003D31] bg-[#63BE21] hover:bg-lime-400 uppercase transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#003D31]" />
              JOIN OFFICIAL VOLUNTEER WHATSAPP GROUP →
            </a>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 border border-[#17352D]/15 space-y-8">
            
            <div>
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#005B45]">
                Application Form
              </span>
              <h2 className="font-serif text-3xl text-[#17352D] mt-1">
                Volunteer Registration
              </h2>
            </div>

            {errorMessage && (
              <div className="p-4 bg-red-50 text-red-700 text-xs font-sans border border-red-200 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans font-semibold text-[#17352D] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full px-4 py-3 text-xs font-sans bg-[#F7F6F0] border border-[#17352D]/20 outline-none focus:border-[#005B45]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans font-semibold text-[#17352D] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 text-xs font-sans bg-[#F7F6F0] border border-[#17352D]/20 outline-none focus:border-[#005B45]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-sans font-semibold text-[#17352D] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 9876543210"
                    className="w-full px-4 py-3 text-xs font-sans bg-[#F7F6F0] border border-[#17352D]/20 outline-none focus:border-[#005B45]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans font-semibold text-[#17352D] mb-1">
                    City / Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Mumbai / Thane"
                    className="w-full px-4 py-3 text-xs font-sans bg-[#F7F6F0] border border-[#17352D]/20 outline-none focus:border-[#005B45]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans font-semibold text-[#17352D] mb-1">
                    Occupation *
                  </label>
                  <select
                    value={formData.occupation}
                    onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                    className="w-full px-4 py-3 text-xs font-sans bg-[#F7F6F0] border border-[#17352D]/20 outline-none focus:border-[#005B45]"
                  >
                    <option value="Student">Student (B.Tech / Degree)</option>
                    <option value="Working Professional">Working Professional</option>
                    <option value="Self Employed">Self Employed</option>
                    <option value="Retired">Retired</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Interests */}
              <div>
                <label className="block text-xs font-sans font-bold uppercase tracking-widest text-[#17352D] mb-2">
                  Areas of Interest *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "Education & School Drives",
                    "Homeless Food Distribution",
                    "Hospital Patient Care",
                    "Social Media & Content Strategy",
                    "On-Ground Event Logistics",
                    "Graphic Design & Photography",
                  ].map((interest) => (
                    <label
                      key={interest}
                      onClick={() => handleInterestToggle(interest)}
                      className={`p-3 border text-xs font-sans font-medium cursor-pointer flex items-center gap-2 transition-all ${
                        selectedInterests.includes(interest)
                          ? "bg-[#F7F6F0] border-[#005B45] text-[#005B45] font-bold"
                          : "bg-white border-[#17352D]/20 text-[#17352D]"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedInterests.includes(interest)}
                        onChange={() => {}}
                        className="w-4 h-4 text-[#005B45] focus:ring-0"
                      />
                      <span>{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans font-semibold text-[#17352D] mb-1">
                    Your Key Skills *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.skills}
                    onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                    placeholder="e.g. Design, Logistics, Coding, Photo"
                    className="w-full px-4 py-3 text-xs font-sans bg-[#F7F6F0] border border-[#17352D]/20 outline-none focus:border-[#005B45]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans font-semibold text-[#17352D] mb-1">
                    Availability *
                  </label>
                  <select
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    className="w-full px-4 py-3 text-xs font-sans bg-[#F7F6F0] border border-[#17352D]/20 outline-none focus:border-[#005B45]"
                  >
                    <option value="Weekends">Weekends Only</option>
                    <option value="Weekdays">Weekdays</option>
                    <option value="Both">Both Weekdays & Weekends</option>
                    <option value="Remote / Digital">Remote / Digital Work Only</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans font-semibold text-[#17352D] mb-1">
                  Why do you want to volunteer? (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share a short note..."
                  className="w-full px-4 py-3 text-xs font-sans bg-[#F7F6F0] border border-[#17352D]/20 outline-none focus:border-[#005B45]"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 text-xs font-sans font-bold tracking-widest text-white bg-[#005B45] hover:bg-[#003D31] disabled:opacity-50 uppercase transition-all"
              >
                {submitting ? "SUBMITTING..." : "BECOME A VOLUNTEER →"}
              </button>

            </form>

          </div>
        )}

      </div>
    </div>
  );
}
