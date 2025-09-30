import { NextRequest } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(5000),
  hp: z.string().optional(), // honeypot field
  ts: z.number().optional(), // client timestamp
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return Response.json(
        { error: 'Invalid form data', details: result.error.issues },
        { status: 400 }
      );
    }

    const { name, email, message, hp, ts } = result.data;

    // Honeypot check - if hp field is filled, it's likely spam
    if (hp && hp.trim() !== '') {
      return Response.json({ error: 'Invalid request' }, { status: 400 });
    }

    // Basic timestamp check - reject if too old (more than 1 hour) or from the future
    if (ts) {
      const now = Date.now();
      const timeDiff = Math.abs(now - ts);
      const oneHour = 60 * 60 * 1000;
      
      if (timeDiff > oneHour) {
        return Response.json({ error: 'Request expired' }, { status: 400 });
      }
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'noreply@jacobrafal.com', // Using verified custom domain
      to: [process.env.CONTACT_TO || 'rafaljacobmatthew@gmail.com'],
      subject: `Portfolio Contact: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Sent from your portfolio contact form</em></p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return Response.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Contact API error:', error);
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}