import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");
    const adminToken = process.env.ADMIN_TOKEN || "sankalp_admin_2026";

    if (!authHeader || authHeader !== `Bearer ${adminToken}`) {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    }

    // Aggregate statistics
    const stats = {
      totalDonationsAmount: 185000,
      totalDonationsCount: 142,
      pendingManualUPI: 4,
      registeredVolunteers: 258,
      contributionsReceived: 35,
      campaignsActive: 1,
      annualDriveGoal: 150000,
      annualDriveRaised: 42500,
      recentDonations: [
        { id: "DON_1001", name: "Aayush Bhogale", amount: 1000, cause: "Education Support", date: "2026-08-29" },
        { id: "DON_1002", name: "Anonymous Donor", amount: 2500, cause: "Homeless Food Drive", date: "2026-08-28" },
        { id: "DON_1003", name: "Priyanka B.", amount: 500, cause: "Hospital Patient Nutrition", date: "2026-08-28" },
      ],
      recentVolunteers: [
        { id: "VOL_201", name: "Rohan Sharma", city: "Mumbai", occupation: "B.Tech Student", skills: "Content & Design" },
        { id: "VOL_202", name: "Sneha Patil", city: "Thane", occupation: "Software Engineer", skills: "On-field Logistics" },
      ],
    };

    return NextResponse.json({ success: true, stats });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
