import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Please provide your name, email, and message." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    const newEntry = {
      id: Date.now(),
      timestamp,
      name,
      email,
      subject: subject || "Portfolio Inquiry",
      message,
    };

    // 1. Log directly to terminal output
    console.log("\n============================================");
    console.log("📬 NEW CONTACT FORM SUBMISSION RECEIVED!");
    console.log(`⏰ Time:    ${timestamp}`);
    console.log(`👤 Name:    ${name}`);
    console.log(`📧 Email:   ${email}`);
    console.log(`📌 Subject: ${subject || "Portfolio Inquiry"}`);
    console.log(`💬 Message:\n${message}`);
    console.log("============================================\n");

    // 2. Persist to messages.json so you never lose any message
    try {
      const filePath = path.join(process.cwd(), "messages.json");
      let messagesList = [];
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        messagesList = JSON.parse(fileContent || "[]");
      }
      messagesList.unshift(newEntry);
      fs.writeFileSync(filePath, JSON.stringify(messagesList, null, 2), "utf-8");
    } catch (saveError) {
      console.error("Could not write to messages.json:", saveError);
    }

    // 3. Forward to your Gmail inbox via Web3Forms if key is provided
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3formsKey && web3formsKey !== "your_web3forms_key_here") {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3formsKey,
            subject: `Portfolio: ${subject || "New Message from " + name}`,
            from_name: `${name} (via Portfolio)`,
            to_email: "rhim78975730@gmail.com",
            name,
            email,
            message,
          }),
        });
        const result = await response.json();
        if (result.success) {
          console.log("✅ Email successfully forwarded to rhim78975730@gmail.com");
        } else {
          console.warn("⚠️ Web3Forms responded with error:", result);
        }
      } catch (emailErr) {
        console.error("Failed to forward email via Web3Forms:", emailErr);
      }
    } else {
      console.log(
        "💡 Tip: Add WEB3FORMS_ACCESS_KEY in .env.local to receive emails directly to rhim78975730@gmail.com."
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been received. I'll get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("Error handling contact form:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit message. Please try again later." },
      { status: 500 }
    );
  }
}
