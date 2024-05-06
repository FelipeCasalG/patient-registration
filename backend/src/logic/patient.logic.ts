import { PatientCreationAttributes } from "../db-models/patientModel";
import { RegisterPatient } from "../interface/RegisterPatientSchema";
import { getAllPatients, create } from "../repository/PatientRepository";
import uploadFileToCloudinary from "../utils/cloudinary";
import { sendMail } from "../utils/mailer";
import fs from "fs";
import path from "path";

export const getPatients = async () => {
    try {
        const patients = await getAllPatients();
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
        html = html.replace("{{name}}", name);
        sendMail(email, "Registration Confirmation", html);
    });
}

const saveFile = async (file: Express.Multer.File): Promise<string> => {
    const uploadDirectory = 'img/';
    fs.mkdirSync(uploadDirectory, { recursive: true });
    const filename = Date.now() + '-' + file.originalname;
    const filePath = path.join(uploadDirectory, filename);
    fs.writeFileSync(filePath, file.buffer);
    return filePath;
}

export const createPatient = async (patient: RegisterPatient, file: Express.Multer.File) => {
    const localFilePath = await saveFile(file);
    const documentPhotoURL = await uploadFileToCloudinary(localFilePath);
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