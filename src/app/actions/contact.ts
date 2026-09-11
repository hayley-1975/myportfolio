"use server";

import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

interface ContactState {
  success: boolean;
  message: string;
}

export async function submitContactForm(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { success: false, message: "All fields are required." };
  }

  // 1. Insert into Supabase
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (supabaseUrl && serviceKey) {
    try {
      const supabase = createClient(supabaseUrl, serviceKey);
      await supabase.from("messages").insert([{ name, email, message }]);
    } catch (dbError) {
      console.error("Failed to insert message into Supabase:", dbError);
    }
  }

  // 2. Send email via Resend
  const resendApiKey = process.env.RESEND_API_KEY;
  const notificationEmail = process.env.NOTIFICATION_EMAIL || "kenneth@brewedops.com";

  if (resendApiKey) {
    try {
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: "brewedops Contact <onboarding@resend.dev>",
        to: notificationEmail,
        replyTo: email,
        subject: `New Portfolio Lead from ${name}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #073B4C;">
            <h2 style="color: #007BA7;">New Contact Submission on brewedops</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #F0F8FB; padding: 15px; border-radius: 8px; border-left: 4px solid #0F8FC4;">
              ${message.replace(/\n/g, "<br/>")}
            </div>
            <p style="margin-top: 20px; font-size: 12px; color: #5C6B73;">Sent from brewedops portfolio website.</p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Failed to send email via Resend:", emailError);
    }
  } else {
    console.log("Mock submission received (RESEND_API_KEY not set):", { name, email, message });
  }

  return {
    success: true,
    message: "Thank you! Your message has been received. I'll get back to you shortly.",
  };
}