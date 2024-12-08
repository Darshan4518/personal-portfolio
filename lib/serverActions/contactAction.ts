"use server";

import nodemailer from "nodemailer";

interface EmailResponse {
  success: boolean;
  message: string;
}

export const sendEmail = async (formData: FormData): Promise<EmailResponse> => {
  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const message = formData.get("message") as string | null;

  // Validate inputs
  if (!name || !email || !message) {
    return {
      success: false,
      message: "All fields are required.",
    };
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER as string,
      pass: process.env.EMAIL_PASS as string,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return { success: true, message: "Message sent successfully!" };
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again.",
    };
  }
};
