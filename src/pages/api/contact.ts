import type {NextApiRequest, NextApiResponse} from 'next';
import nodemailer from 'nodemailer';

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isValidBody(body: unknown): body is ContactPayload {
  if (!isRecord(body)) return false;
  const {name, email, message} = body as Record<string, unknown>;
  return (
    typeof name === 'string' && name.trim() !== '' &&
    typeof email === 'string' && email.trim() !== '' &&
    typeof message === 'string' && message.trim() !== ''
  );
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({error: 'Method Not Allowed'});
  }

  if (!isValidBody(req.body)) {
    return res.status(400).json({error: 'Invalid request body'});
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_SECURE,
    CONTACT_TO,
    CONTACT_FROM,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
    return res.status(500).json({error: 'SMTP is not configured on the server'});
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: SMTP_SECURE === 'true',
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const {name, email, message} = req.body as ContactPayload;

    const fromAddress = CONTACT_FROM || SMTP_USER;
    const toAddress = CONTACT_TO;

    const info = await transporter.sendMail({
      from: `Portfolio Contact <${fromAddress}>`,
      to: toAddress,
      replyTo: email,
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message.replace(/\n/g, '<br/>')}</p>`,
    });

    return res.status(200).json({ok: true, id: info.messageId});
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('SMTP send error:', error);
    return res.status(500).json({error: 'Failed to send message'});
  }
}
