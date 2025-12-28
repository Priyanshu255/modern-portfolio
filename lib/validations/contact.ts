import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long"),

  email: z.string().email("Invalid email address"),

  message: z
    .string()
    .min(5, "Message must be at least 5 characters")
    .max(1000, "Message is too long"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
