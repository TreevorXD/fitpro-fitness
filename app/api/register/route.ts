import { NextRequest } from 'next/server';
import { RegistrationEmailTemplate } from '../../../components/registration-email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { contact, athletes, signature } = body;

    if (!contact?.fullName || !contact?.email || !athletes?.length || !signature) {
      return Response.json(
        { error: 'Missing required registration fields.' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'Registration <noreply@notifications.victoriawaterpolo.ca>',
      to: ['contactform+southislandwpa@gmail.com'],
      replyTo: contact.email,
      subject: `New Registration: ${contact.fullName}`,
      react: RegistrationEmailTemplate(body),
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error('Route error:', error);
    return Response.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}