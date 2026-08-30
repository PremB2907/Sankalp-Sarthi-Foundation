# Sankalp Sarthi Foundation — Production NGO Web Platform

Production-ready, modern, trustworthy NGO web platform built for **Sankalp Sarthi Foundation** (Mumbai, India).

## Features & Highlights

- **Visual Brand Identity**: Deep trust green (`#0A4D2E`), bright lime accent (`#5CB817`), ocean blue, official circular logo mark, and verified registration details (`REGD. NO. Mu/0001792/2025`).
- **Mobile-First Donation System**: Seamless Razorpay Checkout API integration (Test/Live switchable) + manual YES BANK UPI QR fallback with transaction reference (UTR) & screenshot proof upload.
- **Operational Google Database**: Connected via Google Sheets API (6 tabs: `DONATIONS`, `PAYMENT_EVENTS`, `VOLUNTEERS`, `CONTRIBUTIONS`, `CONTACTS`, `MANUAL_UPI`) and Google Drive API for proof attachments.
- **Volunteer & Contribution Portals**: Application forms for 45-hour academic social service internships, field volunteers, and non-cash supply donations with official WhatsApp community links.
- **Annual Drive Campaign**: Dedicated landing page for 5th September 2026 Drive.
- **Coordinator Admin Dashboard**: Passcode-protected administration portal (`/admin`) with aggregate stats and CSV exports.
- **SEO & Accessibility**: Complete JSON-LD structured data, metadata tags, sitemap.xml, robots.txt, and WCAG-conscious contrast & keyboard navigation.

---

## 1. Local Setup Instructions

```bash
# 1. Clone repository
cd "Sankalp Sarthi Foundation"

# 2. Install dependencies
npm install

# 3. Create local environment configuration
cp .env.example .env.local

# 4. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 2. Razorpay Test & Live Setup

1. Sign up / log in to [Razorpay Dashboard](https://dashboard.razorpay.com/).
2. Navigate to **Account & Settings** → **API Keys**.
3. Generate **Key ID** and **Key Secret** in **Test Mode**.
4. Add keys to `.env.local`:
   ```env
   NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_...
   RAZORPAY_KEY_ID=rzp_test_...
   RAZORPAY_KEY_SECRET=your_test_secret
   RAZORPAY_MODE=test
   ```
5. To switch to **Production**, generate Live API keys, set `RAZORPAY_MODE=live`, and update environment variables in Vercel.

---

## 3. Google Cloud, Google Sheets & Google Drive Setup

### Google Cloud Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project: `Sankalp-Sarthi-Foundation`.
3. Enable **Google Sheets API** and **Google Drive API** under **APIs & Services**.
4. Create a **Service Account** under **Credentials** and click **Keys** → **Add Key** → **Create new key (JSON)**.
5. Save the downloaded JSON file locally as `credentials.json` in the project root directory (do not commit to git).

### Google Sheets Setup
1. Create a new Google Sheet named `Sankalp Sarthi Operational Database`.
2. Share the spreadsheet with your Service Account Email (e.g. `service-account@project.iam.gserviceaccount.com`) with **Editor** permissions.
3. Copy the `SPREADSHEET_ID` from the URL:
   `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit`
4. Add tab names: `DONATIONS`, `PAYMENT_EVENTS`, `VOLUNTEERS`, `CONTRIBUTIONS`, `CONTACTS`, `MANUAL_UPI`.

### Google Drive Setup
1. Create a Google Drive folder named `Sankalp-Sarthi-Foundation`.
2. Share the folder with your Service Account Email with **Editor** permissions.
3. Copy the `FOLDER_ID` from the URL:
   `https://drive.google.com/drive/folders/FOLDER_ID_HERE`

---

## 4. Vercel Deployment & Environment Variables

When deploying to Vercel, set the following environment variables:

| Variable Name | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://sankalpsarthi.org` |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Razorpay Key ID |
| `RAZORPAY_KEY_ID` | Razorpay Key ID |
| `RAZORPAY_KEY_SECRET` | Razorpay Secret Key |
| `RAZORPAY_WEBHOOK_SECRET` | Razorpay Webhook Secret |
| `RAZORPAY_MODE` | `test` or `live` |
| `GOOGLE_SHEET_ID` | Google Spreadsheet ID |
| `GOOGLE_DRIVE_FOLDER_ID` | Google Drive Root Folder ID |
| `GOOGLE_SERVICE_ACCOUNT_JSON` | Minified JSON string of service account key |
| `ADMIN_TOKEN` | Secret passcode for `/admin` portal |

---

## 5. Razorpay Webhook Setup

1. In Razorpay Dashboard, go to **Settings** → **Webhooks**.
2. Click **Add New Webhook**.
3. Set Webhook URL to: `https://your-domain.com/api/donations/webhook`
4. Select events: `payment.captured`, `payment.failed`, `refund.processed`.
5. Copy Secret and set `RAZORPAY_WEBHOOK_SECRET` in environment variables.

---

## 6. How to Add Campaigns, Impact Numbers & Gallery Assets

- **Update Site Config & Impact Numbers**: Edit `src/config/site.ts` to update verified stats or leadership.
- **Add New Campaigns**: Edit `src/config/campaigns.ts` to add future campaign objects with dates, goals, and cover images.
- **Manage Gallery Assets**: Add images into `public/assets/` and update `GALLERY_ITEMS` array in `src/app/gallery/page.tsx`.

---

## Official Links

- **Email**: sankalpsarthifoundation@gmail.com
- **LinkedIn**: https://www.linkedin.com/company/sankalp-sarthi-foundation
- **Instagram**: https://www.instagram.com/sankalpsarthifoundation
- **Facebook**: https://www.facebook.com/people/Sarthi-Foundation/100064413293133/
- **Blog**: https://sarathifoundation.blogspot.com/p/spreading-hope-through-education-sarathi.html
- **WhatsApp Volunteer Group**: https://chat.whatsapp.com/BJL9QPF4Buh2SUkZgtI8TW
- **WhatsApp Supply Group**: https://chat.whatsapp.com/EZvLic05eva3z6gnko1m7u
- **WhatsApp Donation Group**: https://chat.whatsapp.com/Bo29izqVNsgJtFHgvUNQAT
