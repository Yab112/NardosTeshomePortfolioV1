import { EmailValidator } from "@/lib/validators/emailValidator";
import { z } from "zod";

import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req: Request) {
  try {

    const body = await req.json();
    const { text, email } = EmailValidator.parse(body);
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "eshetieyabibal@gmail.com",
      subject: "Message from contact form",
      replyTo: email,
      text,
    });

    return new NextResponse("OK");
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new NextResponse(error.message, { status: 400 });
    }

    return new Response(
      "Could not update username at this time. Please try later",
      { status: 500 }
    );
  }
}
