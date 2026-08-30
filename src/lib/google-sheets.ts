import { google } from "googleapis";
import fs from "fs";
import path from "path";

function getGoogleAuth() {
  const scopes = [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive.file",
  ];

  // 1. Try parsing from environment variable
  if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
    try {
      const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
      const privateKey = credentials.private_key
        ? credentials.private_key.replace(/\\n/g, "\n")
        : "";
      return new google.auth.JWT({
        email: credentials.client_email,
        key: privateKey,
        scopes,
      });
    } catch (e) {
      console.error("Failed to parse GOOGLE_SERVICE_ACCOUNT_JSON env var:", e);
    }
  }

  // 2. Try loading from local credentials.json file
  const possiblePaths = [
    path.join(process.cwd(), "credentials.json"),
    "/home/prem/Prem Projects/Sankalp Sarthi Foundation/credentials.json",
  ];

  for (const credPath of possiblePaths) {
    try {
      if (fs.existsSync(/*turbopackIgnore: true*/ credPath)) {
        const fileContent = fs.readFileSync(/*turbopackIgnore: true*/ credPath, "utf-8");
        const credentials = JSON.parse(fileContent);
        const privateKey = credentials.private_key
          ? credentials.private_key.replace(/\\n/g, "\n")
          : "";
        return new google.auth.JWT({
          email: credentials.client_email,
          key: privateKey,
          scopes,
        });
      }
    } catch (e) {}
  }

  return null;
}

export async function appendToSheet(tabName: string, rowValues: (string | number | boolean)[]) {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID || "1QPPxe2Bu-GKO8zJqjVrrye4SodZGZ9cgxRE01SfgSuc";
  const auth = getGoogleAuth();

  if (!auth) {
    console.warn(`[GoogleSheets Warning] Auth missing. Tab: ${tabName}, Data:`, rowValues);
    return { success: false, error: "Google Sheets authentication credentials not found" };
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

    console.log(`[GoogleSheets Success] Appended to ${tabName}:`, response.data.updates?.updatedRows);
    return { success: true, data: response.data };
  } catch (error) {
    console.error(`Error appending to Google Sheet (${tabName}):`, error);
    return { success: false, error: String(error) };
  }
}
