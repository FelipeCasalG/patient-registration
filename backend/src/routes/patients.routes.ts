import { Router, Request, Response } from "express";
import { IPatient } from "../interface/IPatient";
import { sendMail } from "../utils/mailer";
import { RegisterPatientSchema, RegisterPatient } from "../interface/RegisterPatientSchema";
import { getPatients, createPatient } from "../logic/patient.logic";
import { Patient } from "../db-models/patientModel";

export const patientsRouter: Router = Router();

patientsRouter.get("/", async (req: Request, res: Response) => {
    try {
        const patients: Patient[] = await getPatients();
        res.status(200).json(patients);
    } catch (err) {
        res.status(500).send(err);
    }
});

patientsRouter.post("/", async (req: Request, res: Response) => {
    try {
        const patient: RegisterPatient = RegisterPatientSchema.parse(req.body);
        const newPatient: Patient = await createPatient(patient);
        res.status(201).json(newPatient);
    } catch (err) {
        res.status(500).send(err);
    }
});