import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  organisation: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const contactResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});

export type ContactResponse = z.infer<typeof contactResponseSchema>;
