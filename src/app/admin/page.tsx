"use client";

import { useState, useEffect } from "react";
import { Lock, ShieldCheck, Download, Users, Heart, QrCode, FileText, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export default function AdminDashboardPage() {
  const [token, setToken] = useState<string>("");
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/admin/stats", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.error || "Invalid Passcode");
      }

      setStats(json.stats);
      setAuthenticated(true);
    } catch (err: any) {
      setErrorMsg(err.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  const exportCSV = (data: any[], filename: string) => {
    if (!data || data.length === 0) return;
    const keys = Object.keys(data[0]);
    const csvContent =
      "data:text/csv;charset=utf-8," +
      [keys.join(","), ...data.map((row) => keys.map((k) => `"${row[k]}"`).join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${filename}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {!authenticated ? (
          /* Login Screen */
          <div className="max-w-md mx-auto bg-white p-8 rounded-3xl border border-gray-200 shadow-xl space-y-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                <Lock className="w-6 h-6" />
              </div>
              <h1 className="font-serif font-bold text-2xl text-gray-900">
                Coordinator Portal
              </h1>
              <p className="text-xs text-gray-500">
                Protected administration dashboard for Sankalp Sarthi Foundation.
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Coordinator Passcode *
                </label>
                <input
                  type="password"
                  required
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  placeholder="Enter passcode"
                  className="w-full px-3.5 py-2.5 text-xs border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-600 outline-none"
                />
                <span className="text-[10px] text-gray-400 mt-1 block">
                  Default dev passcode: <code className="bg-gray-100 px-1 py-0.5 rounded">sankalp_admin_2026</code>
                </span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 rounded-xl transition-all shadow-md"
              >
                {loading ? "Authenticating..." : "Access Dashboard"}
              </button>
            </form>
          </div>
        ) : (
          /* Dashboard Content */
          <div className="space-y-8">
            
            {/* Header Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-gray-200 shadow-xs">
              <div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-700" />
                  <h1 className="font-serif font-bold text-2xl text-gray-900">
                    Coordinator Dashboard
                  </h1>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">
                  Live metrics synced with Google Sheets operational database.
                </p>
              </div>

              <button
                onClick={() => setAuthenticated(false)}
                className="px-4 py-2 text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-colors"
              >
                Sign Out
              </button>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-500 uppercase">Total Donations</span>
                  <Heart className="w-5 h-5 text-emerald-700" />
                </div>
                <div className="font-serif font-extrabold text-2xl text-gray-900">
                  ₹{stats?.totalDonationsAmount?.toLocaleString()}
                </div>
                <p className="text-[11px] text-emerald-700 font-medium">
                  {stats?.totalDonationsCount} Successful Transactions
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-500 uppercase">Pending UPI Proofs</span>
                  <QrCode className="w-5 h-5 text-amber-600" />
                </div>
                <div className="font-serif font-extrabold text-2xl text-amber-700">
                  {stats?.pendingManualUPI}
                </div>
                <p className="text-[11px] text-gray-500">Requires manual UTR verification</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-500 uppercase">Volunteers Enrolled</span>
                  <Users className="w-5 h-5 text-emerald-700" />
                </div>
                <div className="font-serif font-extrabold text-2xl text-gray-900">
                  {stats?.registeredVolunteers}
                </div>
                <p className="text-[11px] text-emerald-700 font-medium">Active Community Network</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-500 uppercase">Annual Drive Raised</span>
                  <FileText className="w-5 h-5 text-emerald-700" />
                </div>
                <div className="font-serif font-extrabold text-2xl text-emerald-800">
                  ₹{stats?.annualDriveRaised?.toLocaleString()}
                </div>
                <p className="text-[11px] text-gray-500">Target: ₹{stats?.annualDriveGoal?.toLocaleString()}</p>
              </div>
            </div>

            {/* Table 1: Recent Donations */}
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xs space-y-4 p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-bold text-lg text-gray-900">Recent Online Donations</h3>
                <button
                  onClick={() => exportCSV(stats?.recentDonations, "donations")}
                  className="px-3.5 py-1.5 text-xs font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  Export CSV
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-gray-50 text-gray-600 border-b border-gray-200">
                      <th className="p-3 font-bold">ID</th>
                      <th className="p-3 font-bold">Donor Name</th>
                      <th className="p-3 font-bold">Amount</th>
                      <th className="p-3 font-bold">Cause</th>
                      <th className="p-3 font-bold">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats?.recentDonations?.map((item: any) => (
                      <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50/50">
                        <td className="p-3 font-mono font-semibold text-emerald-800">{item.id}</td>
                        <td className="p-3 font-medium text-gray-900">{item.name}</td>
                        <td className="p-3 font-bold text-emerald-950">₹{item.amount.toLocaleString()}</td>
                        <td className="p-3 text-gray-700">{item.cause}</td>
                        <td className="p-3 text-gray-500">{item.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2: Recent Volunteers */}
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-xs space-y-4 p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-bold text-lg text-gray-900">Recent Volunteer Applications</h3>
                <button
                  onClick={() => exportCSV(stats?.recentVolunteers, "volunteers")}
                  className="px-3.5 py-1.5 text-xs font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  Export CSV
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-gray-50 text-gray-600 border-b border-gray-200">
                      <th className="p-3 font-bold">ID</th>
                      <th className="p-3 font-bold">Volunteer Name</th>
                      <th className="p-3 font-bold">City</th>
                      <th className="p-3 font-bold">Occupation</th>
                      <th className="p-3 font-bold">Skills</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats?.recentVolunteers?.map((vol: any) => (
                      <tr key={vol.id} className="border-b border-gray-100 hover:bg-gray-50/50">
                        <td className="p-3 font-mono font-semibold text-emerald-800">{vol.id}</td>
                        <td className="p-3 font-medium text-gray-900">{vol.name}</td>
                        <td className="p-3 text-gray-700">{vol.city}</td>
                        <td className="p-3 text-gray-700">{vol.occupation}</td>
                        <td className="p-3 text-gray-600">{vol.skills}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
