const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Contact Form Submission - Portfolio",
      html: `<p>Name: ${firstName} ${lastName}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ code: 200, status: "Message Sent" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ code: 500, status: "Message Failed", error: error.message });
    }
  } else {
    res.status(405).json({ status: 'Method not allowed' });
  }
}
