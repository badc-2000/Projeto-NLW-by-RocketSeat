import nodemailer from 'nodemailer';
import { MaildAdapter, SendMailData } from "../mail.adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "5e5e211c2a47c1",
      pass: "86387e25308894"
    }
  });

export class NodemailerMailAdapter implements MaildAdapter{
    async sendMail ({ subject, body}: SendMailData) {
        await transport.sendMail({
        from: 'Equipe FeedGet <oi@feedget.com>',
        to: 'Machado Assis <pamonha@gmail.com>',
        subject,
        html: body
    })
    }
}