import type { Express } from "express";
import { createServer, type Server } from "http";
import { contactFormSchema } from "@shared/schema";
import { ZodError } from "zod";

async function sendZeptoMail(
  to: string,
  subject: string,
  htmlBody: string,
  textBody: string
): Promise<boolean> {
  const token = process.env.ZEPTOMAIL_TOKEN;
  
  if (!token) {
    console.error("ZEPTOMAIL_TOKEN not configured");
    return false;
  }

  try {
    const response = await fetch("https://api.zeptomail.com/v1.1/email", {
      method: "POST",
      headers: {
        "Authorization": token,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        from: {
          address: "noreply@blacklyonpower.co.za",
          name: "Black Lyon Power",
        },
        to: [
          {
            email_address: {
              address: to,
              name: to,
            },
          },
        ],
        subject: subject,
        htmlbody: htmlBody,
        textbody: textBody,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("ZeptoMail API error:", response.status, errorText);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Contact form email endpoint
  app.post("/api/send-mail", async (req, res) => {
    try {
      // Validate request body
      const data = contactFormSchema.parse(req.body);
      
      const adminEmail = process.env.ADMIN_EMAIL || "info@blacklyonpower.co.za";
      
      // Admin notification email
      const adminSubject = `New Contact Form Submission from ${data.name}`;
      const adminHtmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2d5a45;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Organisation:</strong> ${data.organisation || "Not provided"}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <h3 style="color: #2d5a45;">Message:</h3>
          <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${data.message.replace(/\n/g, "<br>")}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">This message was sent from the Black Lyon Power website contact form.</p>
        </div>
      `;
      const adminTextBody = `
New Contact Form Submission

Name: ${data.name}
Organisation: ${data.organisation || "Not provided"}
Email: ${data.email}

Message:
${data.message}

---
This message was sent from the Black Lyon Power website contact form.
      `;

      // User confirmation email
      const userSubject = "Thank you for contacting Black Lyon Power";
      const userHtmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2d5a45;">Thank You for Your Enquiry</h2>
          <p>Dear ${data.name},</p>
          <p>Thank you for contacting Black Lyon Power. We have received your message and will respond within 2 business days.</p>
          <h3 style="color: #2d5a45;">Your Message:</h3>
          <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${data.message.replace(/\n/g, "<br>")}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p>If you have any urgent enquiries, please contact us directly:</p>
          <p>
            <strong>Email:</strong> <a href="mailto:info@blacklyonpower.co.za">info@blacklyonpower.co.za</a><br>
            <strong>Phone:</strong> +27 66 383 0269
          </p>
          <hr style="border: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            Black Lyon Power<br>
            Developing Utility-Scale Renewable Energy for a Sustainable Future
          </p>
        </div>
      `;
      const userTextBody = `
Thank You for Your Enquiry

Dear ${data.name},

Thank you for contacting Black Lyon Power. We have received your message and will respond within 2 business days.

Your Message:
${data.message}

---

If you have any urgent enquiries, please contact us directly:
Email: info@blacklyonpower.co.za
Phone: +27 66 383 0269

---
Black Lyon Power
Developing Utility-Scale Renewable Energy for a Sustainable Future
      `;

      // Send both emails
      const [adminSent, userSent] = await Promise.all([
        sendZeptoMail(adminEmail, adminSubject, adminHtmlBody, adminTextBody),
        sendZeptoMail(data.email, userSubject, userHtmlBody, userTextBody),
      ]);

      if (adminSent || userSent) {
        res.json({ 
          success: true, 
          message: "Your message has been sent successfully. We'll be in touch soon." 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send email. Please try again later or contact us directly." 
        });
      }
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data. Please check your inputs and try again." 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "An unexpected error occurred. Please try again later." 
        });
      }
    }
  });

  return httpServer;
}
