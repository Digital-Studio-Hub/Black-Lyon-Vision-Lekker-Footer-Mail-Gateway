import type { Express } from "express";
import { createServer, type Server } from "http";
import { contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";
import { submitContactToLekker } from "./lekker-connect";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Contact form -> Lekker Network Connect API (replaces ZeptoMail + local email)
  app.post("/api/send-mail", async (req, res) => {
    try {
      const data = contactFormSchema.parse(req.body);

      const result = await submitContactToLekker({
        name: data.name,
        email: data.email,
        message: data.message,
        organisation: data.organisation,
        sourceUrl: req.body.sourceUrl || (req.headers.referer as string) || (req.headers.origin as string) || "",
      });

      if (result.success) {
        res.json({
          success: true,
          message: "Thank you — your enquiry has been received in our workspace.",
          contactId: result.contactId,
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Failed to submit enquiry. Please try again or contact us directly.",
        });
      }
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          success: false,
          message: "Invalid form data. Please check your inputs and try again.",
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({
          success: false,
          message: "An unexpected error occurred. Please try again later.",
        });
      }
    }
  });

  return httpServer;
}

