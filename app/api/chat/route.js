import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { message, name, email } = await req.json();
  const text = message.toLowerCase();

  let reply = "";

  // ===== ABOUT =====
  if (
    text.includes("about") ||
    text.includes("who are you") ||
    text.includes("yourself")
  ) {
    reply =
      "Hi 👋 I'm Vivek Kumar, a Full Stack Developer with 2+ years of experience in React.js, Next.js, Node.js and MongoDB. Currently working as a Software Engineer at Retransform (Apex Group Company).";
  }

  // ===== SKILLS =====
  else if (
    text.includes("skill") ||
    text.includes("tech") ||
    text.includes("stack")
  ) {
    reply =
      "My technical skills include React.js, Next.js, Node.js, MongoDB, REST APIs and performance optimization.";
  }

  // ===== EXPERIENCE =====
  else if (
    text.includes("experience") ||
    text.includes("work") ||
    text.includes("company")
  ) {
    reply =
      "I have 2+ years of professional experience and currently work as a Software Engineer at Retransform, an Apex Group company.";
  }

  // ===== PROJECTS =====
  else if (
    text.includes("project") ||
    text.includes("built") ||
    text.includes("portfolio")
  ) {
    reply =
      "I have built full-stack web applications using React, Next.js, Node.js and MongoDB.";
  }

  // ===== HIRE / CONTACT (SEND EMAIL) =====
  else if (
    text.includes("hire") ||
    text.includes("contact") ||
    text.includes("email") ||
    text.includes("job")
  ) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "New Hiring Inquiry from Portfolio AI",
        text: `Message: ${message}\nName: ${name || "Not Provided"}\nEmail: ${email || "Not Provided"}`,
      });

      reply =
        "Thank you for your interest 🚀 I have received your message and will contact you soon.";
    } catch (error) {
      reply =
        "Something went wrong while sending the message. Please try again later.";
    }
  }

  // ===== DEFAULT =====
  else {
    reply =
      "You can ask about Vivek's skills, experience, projects, or hiring information 😊";
  }

  return NextResponse.json({ reply });
}