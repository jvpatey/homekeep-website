import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { error } = await resend.emails.send({
      from: "HomeKeep Support <onboarding@resend.dev>", // Using Resend's verified domain
      to: [process.env.SUPPORT_EMAIL || "jeffreyvpatey@gmail.com"], // Your email from env variable
      subject: `HomeKeep Support: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C45C26;">New Support Request</h2>
          
          <div style="background-color: #F4EFE6; padding: 20px; border-radius: 16px; margin: 20px 0;">
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #FFFBF7; padding: 20px; border: 1px solid #E5DDD2; border-radius: 16px;">
            <h3 style="margin-top: 0; color: #1A1612;">Message:</h3>
            <p style="line-height: 1.6; color: #6B645C;">${message.replace(
              /\n/g,
              "<br>"
            )}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #F4EFE6; border-radius: 16px; font-size: 14px; color: #6B645C;">
            <p><strong>Reply to:</strong> ${email}</p>
            <p><strong>Sent from:</strong> HomeKeep Support Form</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      replyTo: email, // This allows you to reply directly to the user
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
