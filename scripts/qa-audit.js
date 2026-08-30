const http = require("http");
const crypto = require("crypto");

const BASE_URL = "http://localhost:3000";

function makeRequest(path, method = "GET", headers = {}, body = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, BASE_URL);
    const reqHeaders = { ...headers };
    let payload = null;

    if (body && typeof body === "object") {
      payload = JSON.stringify(body);
      reqHeaders["Content-Type"] = "application/json";
      reqHeaders["Content-Length"] = Buffer.byteLength(payload);
    } else if (body) {
      payload = body;
    }

    const req = http.request(
      url,
      {
        method,
        headers: reqHeaders,
      },
      (res) => {
        let responseData = "";
        res.on("data", (chunk) => (responseData += chunk));
        res.on("end", () => {
          resolve({
            status: res.statusCode,
            headers: res.headers,
            data: responseData,
          });
        });
      }
    );

    req.on("error", (err) => reject(err));
    if (payload) req.write(payload);
    req.end();
  });
}

async function runQAAudit() {
  console.log("==================================================");
  console.log("🔍 STARTING SANKALP SARTHI FOUNDATION QA AUDIT");
  console.log("==================================================\n");

  let passed = 0;
  let failed = 0;

  async function testStep(name, fn) {
    try {
      console.log(`⏳ Testing: ${name}...`);
      await fn();
      console.log(`✅ PASSED: ${name}\n`);
      passed++;
    } catch (err) {
      console.error(`❌ FAILED: ${name}`);
      console.error(`   Error: ${err.message || err}\n`);
      failed++;
    }
  }

  // 1. Test Razorpay Order Creation API
  await testStep("Razorpay Order API (/api/donations/create-order)", async () => {
    const res = await makeRequest("/api/donations/create-order", "POST", {}, {
      amount: 1000,
      donorName: "QA Auditor",
      donorEmail: "qa@sankalpsarthifoundation.org",
      donorPhone: "9876543210",
      cause: "Education Support",
      consent: true,
    });

    if (res.status !== 200) throw new Error(`HTTP ${res.status}: ${res.data}`);
    const json = JSON.parse(res.data);
    if (!json.success || !json.orderId) throw new Error("Order ID not generated");
    console.log(`   Order Created: ${json.orderId}, Amount: ₹${json.amount / 100}`);
  });

  // 2. Test Payment Verification API with HMAC signature
  await testStep("Donation Payment Verification API (/api/donations/verify)", async () => {
    const orderId = "order_test_qa_123";
    const paymentId = "pay_test_qa_456";
    const secret = process.env.RAZORPAY_KEY_SECRET || "jChLBRshmM64ATJ7lLVMEj6T";
    const generatedSignature = crypto
      .createHmac("sha256", secret)
      .update(`${orderId}|${paymentId}`)
      .digest("hex");

    const res = await makeRequest("/api/donations/verify", "POST", {}, {
      razorpay_order_id: orderId,
      razorpay_payment_id: paymentId,
      razorpay_signature: generatedSignature,
      donorName: "QA Test Donor",
      donorEmail: "donor.qa@example.com",
      donorPhone: "9876543210",
      amount: 1000,
      cause: "Education Support",
    });

    if (res.status !== 200) throw new Error(`HTTP ${res.status}: ${res.data}`);
    const json = JSON.parse(res.data);
    if (!json.success || !json.donationId) throw new Error("Donation ID not returned");
    console.log(`   Donation Verified: ${json.donationId}`);
  });

  // 3. Test PDF Receipt Generation Endpoint
  await testStep("PDF Receipt Download Endpoint (/api/donations/pdf-receipt)", async () => {
    const res = await makeRequest(
      "/api/donations/pdf-receipt?id=DON_QA_TEST&amount=1000&cause=Education%20Support&name=QA%20Donor",
      "GET"
    );

    if (res.status !== 200) throw new Error(`HTTP ${res.status}`);
    const contentType = res.headers["content-type"];
    if (contentType !== "application/pdf") throw new Error(`Unexpected Content-Type: ${contentType}`);
    console.log(`   PDF Receipt Buffer Received: ${res.data.length} bytes`);
  });

  // 4. Test Volunteer Registration API
  await testStep("Volunteer Application API (/api/volunteers)", async () => {
    const res = await makeRequest("/api/volunteers", "POST", {}, {
      name: "QA Volunteer",
      email: "volunteer.qa@example.com",
      phone: "9876543210",
      city: "Mumbai",
      occupation: "Student",
      skills: "Event Logistics, Teaching",
      availability: "Weekends",
      interests: ["Education & School Drives"],
      consent: true,
    });

    if (res.status !== 200) throw new Error(`HTTP ${res.status}: ${res.data}`);
    const json = JSON.parse(res.data);
    if (!json.success || !json.volunteerId) throw new Error("Volunteer ID missing");
    console.log(`   Volunteer Registered: ${json.volunteerId}`);
  });

  // 5. Test Non-Monetary Contribution API
  await testStep("Contribution Proposal API (/api/contributions)", async () => {
    const res = await makeRequest("/api/contributions", "POST", {}, {
      name: "QA Contributor",
      email: "contrib.qa@example.com",
      phone: "9876543210",
      contributionType: "School Supplies",
      description: "100 Notebooks and 50 Geometry Sets",
    });

    if (res.status !== 200) throw new Error(`HTTP ${res.status}: ${res.data}`);
    const json = JSON.parse(res.data);
    if (!json.success || !json.contributionId) throw new Error("Contribution ID missing");
    console.log(`   Contribution Stored: ${json.contributionId}`);
  });

  // 6. Test Contact Us Form & SMTP Email
  await testStep("Contact Us Form & SMTP Email API (/api/contact)", async () => {
    const res = await makeRequest("/api/contact", "POST", {}, {
      name: "QA Tester",
      email: "sankalpsarthifoundation@gmail.com",
      subject: "QA System Verification Audit",
      message: "This is an automated QA test message to verify Nodemailer SMTP delivery.",
    });

    if (res.status !== 200) throw new Error(`HTTP ${res.status}: ${res.data}`);
    const json = JSON.parse(res.data);
    if (!json.success || !json.contactId) throw new Error("Contact ID missing");
    console.log(`   Contact Inquiry Submitted: ${json.contactId}`);
  });

  // 7. Test Admin Passcode Authentication API
  await testStep("Admin Stats Auth API (/api/admin/stats)", async () => {
    const res = await makeRequest("/api/admin/stats", "GET", {
      Authorization: "Bearer sankalp_admin_2026",
    });

    if (res.status !== 200) throw new Error(`HTTP ${res.status}: ${res.data}`);
    const json = JSON.parse(res.data);
    if (!json.success) throw new Error("Admin authentication failed");
    console.log(`   Admin Stats Auth Verified: ${json.stats.totalDonationsCount} donations recorded`);
  });

  // 8. Test AI Assistant Chatbot Endpoint
  await testStep("Sarthi AI Chatbot API (/api/chat)", async () => {
    const res = await makeRequest("/api/chat", "POST", {}, {
      messages: [{ role: "user", content: "What is Sankalp Sarthi Foundation?" }],
    });

    if (res.status !== 200) throw new Error(`HTTP ${res.status}: ${res.data}`);
    const json = JSON.parse(res.data);
    if (!json.reply) throw new Error("AI Chatbot reply empty");
    console.log(`   AI Chatbot Response Received (${json.reply.length} chars)`);
  });

  console.log("==================================================");
  console.log(`📊 FINAL SUMMARY: ${passed} Passed | ${failed} Failed`);
  console.log("==================================================");

  if (failed > 0) process.exit(1);
}

runQAAudit().catch((err) => {
  console.error("Fatal QA Audit Error:", err);
  process.exit(1);
});
