import type {NextApiRequest, NextApiResponse} from 'next';
import nodemailer from 'nodemailer';

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

function isValidBody(body: any): body is ContactPayload {
  return (
    body &&
    typeof body.name === 'string' &&
    typeof body.email === 'string' &&
    typeof body.message === 'string' &&
    body.name.trim() &&
    body.email.trim() &&
    body.message.trim()
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
  } catch (error: any) {
    console.error('SMTP send error:', error);
    return res.status(500).json({error: 'Failed to send message'});
  }
}
