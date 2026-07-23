import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    name,
    email,
    goals,
    location,
    message,
  } = req.body;

  try {

    await resend.emails.send({
      from: "Function Better <hello@functionbetter.fit>",
      to: "hello@functionbetter.fit",

      subject: `New Consultation Request from ${name}`,

      html: `
        <h2>New Website Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Goal:</strong> ${goals}</p>

        <p><strong>Location:</strong> ${location}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    await resend.emails.send({
      from: "Function Better <hello@functionbetter.fit>",
      to: email,

      subject: "Thank you for your enquiry",

      html: `
      <h2>Thank you for getting in touch.</h2>

      <p>Dear ${name},</p>

      <p>
      Thank you for contacting Function Better.
      </p>

      <p>
      I have safely received your enquiry and will personally get back to you within 24 hours.
      </p>

      <p>
      I look forward to helping you move better, feel stronger and live with confidence.
      </p>

      <br>

      <strong>
      Sabina
      </strong>

      <br>

      Function Better
      `
    });

    return res.status(200).json({ success: true });

  } catch (error) {

    return res.status(500).json({
      success: false,
      error,
    });

  }

}

