import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        const htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #2c3e50;">New Message from ${name}</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="border-left: 4px solid #ccc; padding-left: 16px;">
            ${message}
          </blockquote>
          <p style="color: #7f8c8d;">This email was sent through your developer portfolio contact form.</p>
      </div>
    `;

        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['seerviu690@gmail.com'],
            subject: `New message from ${name}`,
            html: htmlContent,
        });

        if (error) {
            return NextResponse.json({ message: 'Error sending email', error }, { status: 400 });
        }

        return NextResponse.json({ message: 'Email sent successfully', data }, { status: 200 });
    } catch (err) {
        console.error('Error sending email:', err);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
