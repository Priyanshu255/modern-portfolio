"use server";

import { contactSchema } from "@/lib/validations/contact";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const parsed = contactSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = parsed.data;

  try {
    await resend.emails.send({
      to: ["priyanshupandit737@gmail.com"],
      from: "Priyanshu Pandit <onboarding@resend.dev>",
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; background:#f6f9fc; padding:20px;">
            <div style="max-width:600px; margin:auto; background:#ffffff; padding:24px; border-radius:8px;">
            
            <h2 style="margin-top:0;">📩 New Portfolio Contact</h2>
            
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>

            <hr style="margin:20px 0;" />

            <p style="font-weight:bold;">Message</p>
            <p style="white-space:pre-wrap;">${message}</p>

            <hr style="margin:20px 0;" />

            <p style="font-size:12px; color:#666;">
                Sent from your portfolio contact form
            </p>
            </div>
        </div>
        `,
    });

    return { success: true };
  } catch (error) {
    return { success: false, errors: { server: ["Failed to send email"] } };
  }
}
