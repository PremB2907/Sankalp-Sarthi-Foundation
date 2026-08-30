import { google } from "googleapis";
import fs from "fs";
import path from "path";

function getGoogleAuth() {
  const scopes = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive.file",
  ];

  if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
    try {
      const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
      return new google.auth.JWT({
        email: credentials.client_email,
        key: credentials.private_key,
        scopes,
      });
    } catch (e) {
      console.error("Failed to parse GOOGLE_SERVICE_ACCOUNT_JSON env var:", e);
    }
  }

  const possiblePaths = [
    path.join(process.cwd(), "credentials.json"),
    "/home/prem/Prem Projects/mmmmalabarhill-main/credentials.json",
  ];

  for (const credPath of possiblePaths) {
    try {
      if (fs.existsSync(/*turbopackIgnore: true*/ credPath)) {
        const fileContent = fs.readFileSync(/*turbopackIgnore: true*/ credPath, "utf-8");
        const credentials = JSON.parse(fileContent);
        return new google.auth.JWT({
          email: credentials.client_email,
          key: credentials.private_key,
          scopes,
        });
      }
    } catch (e) {}
  }

  return null;
}

export async function appendToSheet(tabName: string, rowValues: (string | number | boolean)[]) {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const auth = getGoogleAuth();

  if (!auth || !spreadsheetId) {
    console.log(`[GoogleSheets Mock Sync] Tab: ${tabName}, Data:`, rowValues);
    return { success: true, mode: "mock" };
  }

  try {
    const sheets = google.sheets({ version: "v4", auth });
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${tabName}!A:Z`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [rowValues],
      },
    });

    return { success: true, data: response.data };
  } catch (error) {
    console.error(`Error appending to Google Sheet (${tabName}):`, error);
    return { success: false, error: String(error) };
  }
}
