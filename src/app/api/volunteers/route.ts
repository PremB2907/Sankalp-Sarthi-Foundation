import { NextResponse } from "next/server";
import { appendToSheet } from "@/lib/google-sheets";
import { VolunteerSchema, formatZodError } from "@/lib/validators";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = VolunteerSchema.parse(body);

    const volunteerId = `VOL_${Date.now()}`;
    const createdAt = new Date().toISOString();

    // Sheet Columns: volunteer_id, created_at, name, email, phone, city, occupation, skills, interests, availability, message, source, status
    const rowValues = [
      volunteerId,
      createdAt,
      validated.name,
      validated.email,
      validated.phone,
      validated.city,
      validated.occupation,
      validated.skills,
      validated.interests.join(", "),
      validated.availability,
      validated.message || "",
      "Website Form",
      "ACTIVE",
    ];

    await appendToSheet("VOLUNTEERS", rowValues);

    return NextResponse.json({
      success: true,
      volunteerId,
      message: "Thank you for registering as a volunteer with Sankalp Sarthi Foundation!",
    });
  } catch (error: any) {
    console.error("Error submitting volunteer form:", error);
    return NextResponse.json(
      { success: false, error: formatZodError(error) },
      { status: 400 }
    );
  }
}
