const { google } = require("googleapis");
const fs = require("fs");
const path = require("path");

async function setupGoogleSheets() {
  const spreadsheetId = "1QPPxe2Bu-GKO8zJqjVrrye4SodZGZ9cgxRE01SfgSuc";
  const credPath = path.join(__dirname, "../credentials.json");

  if (!fs.existsSync(credPath)) {
    console.error("credentials.json not found at:", credPath);
    process.exit(1);
  }

  const credentials = JSON.parse(fs.readFileSync(credPath, "utf-8"));

  const auth = new google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  console.log("Connected to Google Sheets API with service account:", credentials.client_email);

  // 1. Get current sheets/tabs
  const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
  const existingSheetTitles = spreadsheet.data.sheets.map((s) => s.properties.title);
  console.log("Existing tabs:", existingSheetTitles);

  const requiredTabs = [
    {
      title: "DONATIONS",
      headers: [
        "donation_id",
        "created_at",
        "donor_name",
        "donor_email",
        "donor_phone",
        "amount",
        "currency",
        "cause",
        "campaign_id",
        "razorpay_order_id",
        "razorpay_payment_id",
        "payment_status",
        "payment_method",
        "anonymous",
        "message",
        "receipt_url",
        "source",
      ],
    },
    {
      title: "PAYMENT_EVENTS",
      headers: [
        "event_id",
        "received_at",
        "event_type",
        "payment_id",
        "order_id",
        "status",
        "raw_event_reference",
        "processed",
        "error",
      ],
    },
    {
      title: "VOLUNTEERS",
      headers: [
        "volunteer_id",
        "created_at",
        "name",
        "email",
        "phone",
        "city",
        "occupation",
        "skills",
        "interests",
        "availability",
        "message",
        "source",
        "status",
      ],
    },
    {
      title: "CONTRIBUTIONS",
      headers: [
        "contribution_id",
        "created_at",
        "name",
        "email",
        "phone",
        "contribution_type",
        "description",
        "attachment_url",
        "status",
      ],
    },
    {
      title: "CONTACTS",
      headers: ["contact_id", "created_at", "name", "email", "subject", "message", "status"],
    },
    {
      title: "MANUAL_UPI",
      headers: [
        "record_id",
        "created_at",
        "name",
        "email",
        "amount",
        "utr",
        "screenshot_url",
        "verification_status",
      ],
    },
  ];

  // 2. Add missing tabs
  const requests = [];
  for (const tab of requiredTabs) {
    if (!existingSheetTitles.includes(tab.title)) {
      requests.push({
        addSheet: {
          properties: { title: tab.title },
        },
      });
    }
  }

  if (requests.length > 0) {
    console.log(`Adding ${requests.length} new tabs...`);
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: { requests },
    });
  }

  // 3. Add headers if tab is empty
  for (const tab of requiredTabs) {
    try {
      const res = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: `${tab.title}!A1:Z1`,
      });

      if (!res.data.values || res.data.values.length === 0) {
        console.log(`Setting header row for tab: ${tab.title}`);
        await sheets.spreadsheets.values.update({
          spreadsheetId,
          range: `${tab.title}!A1`,
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values: [tab.headers],
          },
        });
      } else {
        console.log(`Tab ${tab.title} already has headers.`);
      }
    } catch (err) {
      console.error(`Error populating headers for ${tab.title}:`, err.message);
    }
  }

  console.log("Google Sheets database setup completed successfully!");
}

setupGoogleSheets().catch((err) => {
  console.error("Failed to setup Google Sheets:", err);
});
