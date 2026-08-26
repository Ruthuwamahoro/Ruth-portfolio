import { transporter } from './nodemailerConfig';

export const sendMail = async(name: string, email: string, message: string) => {

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `PORTFOLIO: New message from ${name}`,
        replyTo: email,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    })
}