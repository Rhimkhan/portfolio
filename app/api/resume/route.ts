import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "public", "resume.pdf");
    
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "Resume file not found" }, { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Rhim_Khan_Resume.pdf"',
        "Content-Length": fileBuffer.length.toString(),
        "Cache-Control": "public, max-age=3600, must-revalidate",
      },
    });
  } catch (error) {
    console.error("Error serving resume:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
