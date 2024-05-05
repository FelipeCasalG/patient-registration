import { IPatient } from "../interface/IPatient";
import { RegisterPatient } from "../interface/RegisterPatientSchema";
import { getAll, create } from "../repository/PatientRepository";
import { sendMail } from "../utils/mailer";
import fs from "fs";

export const getAllPatients = async () => {
    return await getAll();
}

const sendRegistrationConfirmationMail = async (email: string, name: string) => {
    fs.readFile("src/html-templates/registration-confirmation.html", "utf8", async (err, html) => {
        if (err) {
            console.error(err);
            return;
        }
        sendMail(email, "Registration Confirmation", html);
    });
}


export const createPatient = async (patient: RegisterPatient) => {
    const { documentPhoto, ...restPatient } = patient;
    // TODO: Upload photo to cloud storage and get the URL
    const documentPhotoURL = "https://www.mass.gov/files/styles/embedded_full_width/public/images/2024-02/ma_d200_pr_adult_lid_150dpi-_liquor_card_2.jpg?itok=z0dKZLGF";
    const createdPatient: IPatient = await create({ ...restPatient, documentPhotoURL });
    sendRegistrationConfirmationMail(patient.email, patient.fullName);
    return createdPatient;
}