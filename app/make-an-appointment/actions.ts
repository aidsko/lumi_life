"use server";

import FormData from "form-data";
import Mailgun from "mailgun.js";

export async function sendEmail(
  email: string,
  message: string,
  firstName: string,
  lastName: string,
  phone: string
) {
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY || "",
  });

  try {
    const result = await mg.messages.create(process.env.MAILGUN_DOMAIN || "", {
      from: "Contact Form <mailgun@sandboxbac9f28292c14c4f8d7f2661fc38a5a0.mailgun.org>",
      to: ["contact@lumilifetherapy.com"],
      subject: `Message from ${firstName} ${lastName}`,
      text: message,
      html: `<div>
        <p>Name: ${firstName} ${lastName}</p>
        <p>Phone: ${phone}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
        </div>`,
    });
    return result;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email.");
  }
}
