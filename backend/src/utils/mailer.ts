import nodemailer, { SendMailOptions } from "nodemailer";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: Number(process.env.MAILTRAP_PORT),
    auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASSWORD
    }
});

const sendMail = async (to: string, subject: string, html: string) => {

    const mailOptions: SendMailOptions = {
        from: process.env.MAILTRAP_SEND_DOMAIN,
        to: to,
        subject: subject,
        html: html
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error(err);
            return;
        }
    });

};

export { sendMail };