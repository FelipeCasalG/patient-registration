import { PatientCreationAttributes } from "../db-models/patientModel";
import { IPatient } from "../interface/IPatient";
import { RegisterPatient } from "../interface/RegisterPatientSchema";
import { getAllPatients, create } from "../repository/PatientRepository";
import { sendMail } from "../utils/mailer";
import fs from "fs";

export const getPatients = async () => {
    try {
        const patients = await getAllPatients();
        console.log(patients);
        return patients;
    }
    catch (err) {
        console.error(err);
        return [];
    }
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
    const documentPhotoURL = "https://images.foxtv.com/static.fox29.com/www.fox29.com/content/uploads/2022/09/764/432/license.jpg";
    const newPatient: PatientCreationAttributes = {
        fullName: patient.fullName,
        email: patient.email,
        phoneCharacteristic: patient.phoneCharacteristic,
        phoneNumber: patient.phoneNumber,
        documentPhotoURL: documentPhotoURL,
    };
    const createdPatient = await create(newPatient);
    if (createdPatient) {
        sendRegistrationConfirmationMail(patient.email, patient.fullName);
    }
    return createdPatient;
}