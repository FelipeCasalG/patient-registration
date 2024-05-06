import nodemailer, { SendMailOptions } from "nodemailer";
import dotenv from "dotenv";
import { INotificationService } from "../interface/INotificationService";

dotenv.config();

export class EmailNotificationService implements INotificationService {
    async sendNotification(recipient: string, html: string, subject?: string): Promise<void> {
        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: Number(process.env.MAILTRAP_PORT),
            auth: {
                user: process.env.MAILTRAP_USER,
                pass: process.env.MAILTRAP_PASSWORD
            }
        });

        const mailOptions: SendMailOptions = {
            from: process.env.MAILTRAP_SEND_DOMAIN,
            to: recipient,
            subject: subject,
            html: html
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error(err);
                return;
            }
        });
    }
}
