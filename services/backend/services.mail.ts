import nodemailer from "nodemailer";
import { ContactFormData } from "@/types";

export class MailService {
  private static createTransporter() {
    const user = process.env.MAIL_USER;
    const pass = process.env.MAIL_PASS;

    if (!user || !pass) {
      return null;
    }

    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });
  }

  public static async sendContactNotification(
    data: ContactFormData
  ): Promise<boolean> {
    const transporter = this.createTransporter();
    const mailUser = process.env.MAIL_USER;

    if (!transporter || !mailUser) {
      return false;
    }

    try {
      await transporter.sendMail({
        from: mailUser,
        to: mailUser,
        replyTo: data.email,
        subject: `New Contact Submission: ${data.subject || "No Subject"}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\n\nMessage:\n${data.message}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
            <div style="border-bottom: 2px solid #f38020; padding-bottom: 12px; margin-bottom: 20px;">
              <h2 style="color: #f38020; margin: 0; font-size: 20px;">New Contact Submission</h2>
              <p style="color: #64748b; margin: 4px 0 0; font-size: 13px;">Received via Amiristan Contact Form</p>
            </div>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; width: 100px; color: #475569;">Name:</td>
                <td style="padding: 8px 0; color: #111827;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #475569;">Email:</td>
                <td style="padding: 8px 0; color: #111827;"><a href="mailto:${data.email}" style="color: #f38020; text-decoration: none;">${data.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #475569;">Subject:</td>
                <td style="padding: 8px 0; color: #111827;">${data.subject}</td>
              </tr>
            </table>
            <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #f38020;">
              <p style="margin: 0 0 8px; font-weight: 600; color: #111827; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message Content:</p>
              <p style="margin: 0; white-space: pre-wrap; color: #475569; font-size: 14px;">${data.message}</p>
            </div>
            <p style="margin-top: 24px; font-size: 11px; color: #94a3b8; text-align: center; border-top: 1px solid #f1f5f9; padding-top: 12px;">This email was automatically dispatched by Amiristan Mail Service.</p>
          </div>
        `,
      });

      return true;
    } catch (error) {
      console.error("Failed to send contact notification email:", error);
      return false;
    }
  }
}

export default MailService;

