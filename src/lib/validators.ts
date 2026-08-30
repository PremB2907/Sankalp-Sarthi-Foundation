import { z } from "zod";

export const CreateOrderSchema = z.object({
  amount: z.number().min(1, "Amount must be at least ₹1"),
  currency: z.string().default("INR"),
  donorName: z.string().min(2, "Name is required"),
  donorEmail: z.string().email("Valid email is required"),
  donorPhone: z.string().optional(),
  cause: z.string().default("General Fund"),
  campaignId: z.string().optional(),
  anonymous: z.boolean().default(false),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "Consent is required to proceed with donation",
  }),
});

export const VerifyPaymentSchema = z.object({
  razorpay_order_id: z.string().min(1),
  razorpay_payment_id: z.string().min(1),
  razorpay_signature: z.string().min(1),
  donorName: z.string(),
  donorEmail: z.string(),
  donorPhone: z.string().optional(),
  amount: z.number(),
  cause: z.string(),
  campaignId: z.string().optional(),
  anonymous: z.boolean().optional(),
  message: z.string().optional(),
});

export const ManualUPISchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  amount: z.number().min(1, "Amount is required"),
  utr: z.string().min(6, "Valid UTR / Reference number is required"),
  cause: z.string().default("General Fund"),
  message: z.string().optional(),
});

export const VolunteerSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email address is required"),
  phone: z.string().min(10, "Valid 10-digit phone number is required"),
  city: z.string().min(2, "City is required"),
  occupation: z.string().min(2, "Occupation is required"),
  skills: z.string().min(2, "Please specify your skills"),
  interests: z.array(z.string()).min(1, "Select at least one area of interest"),
  availability: z.string().min(2, "Please select your availability"),
  message: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "Consent is required",
  }),
});

export const ContributionSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email address is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  contributionType: z.string().min(2, "Select contribution type"),
  description: z.string().min(10, "Please provide a brief description"),
});

export const ContactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email address is required"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
