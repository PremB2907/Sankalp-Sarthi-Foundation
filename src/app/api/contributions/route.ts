import { NextResponse } from "next/server";
import { appendToSheet } from "@/lib/google-sheets";
import { ContributionSchema } from "@/lib/validators";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = ContributionSchema.parse(body);

    const contributionId = `CTR_${Date.now()}`;
    const createdAt = new Date().toISOString();

    // Sheet Columns: contribution_id, created_at, name, email, phone, contribution_type, description, attachment_url, status
    const rowValues = [
      contributionId,
      createdAt,
      validated.name,
      validated.email,
      validated.phone,
      validated.contributionType,
      validated.description,
      "N/A",
      "NEW",
    ];

    await appendToSheet("CONTRIBUTIONS", rowValues);

    return NextResponse.json({
      success: true,
      contributionId,
      message: "Thank you for offering your support. Our coordinator will contact you shortly.",
    });
  } catch (error: any) {
    console.error("Error submitting contribution offer:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to submit contribution offer" },
      { status: 400 }
    );
  }
}
