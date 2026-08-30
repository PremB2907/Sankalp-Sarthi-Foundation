# 🚀 Vercel Deployment Guide — Sankalp Sarthi Foundation

This repository is optimized for **1-Click Vercel Deployment**.

---

## Step 1: Connect GitHub Repository to Vercel

1. Go to [Vercel Dashboard](https://vercel.com/new).
2. Import repository: `PremB2907/Sankalp-Sarthi-Foundation`.
3. Framework Preset: **Next.js** (detected automatically).

---

## Step 2: Configure Environment Variables in Vercel

Copy and paste the following environment variables into **Vercel Project Settings → Environment Variables**:

| Variable Name | Value / Description |
| :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | `https://your-domain.vercel.app` (or custom domain) |
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | `rzp_test_SIIeZtDjS4VRsM` |
| `RAZORPAY_KEY_ID` | `rzp_test_SIIeZtDjS4VRsM` |
| `RAZORPAY_KEY_SECRET` | `jChLBRshmM64ATJ7lLVMEj6T` |
| `RAZORPAY_MODE` | `test` |
| `GOOGLE_SHEET_ID` | `1QPPxe2Bu-GKO8zJqjVrrye4SodZGZ9cgxRE01SfgSuc` |
| `GROQ_API_KEY` | your_groq_api_key_here |
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `465` |
| `SMTP_USER` | `sankalpsarthifoundation@gmail.com` |
| `SMTP_PASS` | `dayxxfnepwtvwnxq` |
| `SMTP_FROM` | `Sankalp Sarthi Foundation <sankalpsarthifoundation@gmail.com>` |
| `ADMIN_TOKEN` | `sankalp_admin_2026` |

---

## Step 3: Deploy

Click **Deploy**. Vercel will compile the Next.js App Router static and dynamic routes automatically.

---

## Features Enabled on Vercel:
- **Live Razorpay Checkout & Webhook Listener**
- **Manual YES BANK UPI QR Submission with Proof Upload**
- **Automated Nodemailer Gmail SMTP Emails & PDF Receipt Generation**
- **Real-time Google Sheets Database Integration**
- **Groq Llama-3.3-70b AI Assistant ("Sarthi AI")**
- **20 Real Field Photographs & Press Coverage Gallery**
