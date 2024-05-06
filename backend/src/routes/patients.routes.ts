import { Router, Request, Response } from "express";
import { RegisterPatientSchema, RegisterPatient } from "../interface/RegisterPatientSchema";
import { getPatients, createPatient } from "../logic/patient.logic";
import { Patient } from "../db-models/patientModel";
import multer from "multer";

export const patientsRouter: Router = Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

patientsRouter.get("/", async (req: Request, res: Response) => {
    try {
        const patients: Patient[] = await getPatients();
        res.status(200).json(patients);
    } catch (err) {
        res.status(500).send(err);
    }
});

patientsRouter.post("/", upload.single("documentPhoto"), async (req: Request, res: Response) => {
    try {
        if (!req.file) {
            return res.status(400).send("File is required");
        }
        const patientSchema: RegisterPatient = {
            fullName: req.body.fullName,
            email: req.body.email,
            phoneCharacteristic: req.body.phoneCharacteristic,
            phoneNumber: req.body.phoneNumber,
            documentPhoto: new File([req.file.buffer], req.file.originalname, { type: req.file.mimetype }),
        };
        const patient: RegisterPatient = RegisterPatientSchema.parse(patientSchema);
        const newPatient: Patient | null = await createPatient(patient, req.file);
        res.status(201).json(newPatient);
    } catch (err) {
        res.status(500).send(err);
    }
});