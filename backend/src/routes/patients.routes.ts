import { Router, Request, Response } from "express";
import { PatientRepository } from "../repository/PatientRepository";
import { IPatient } from "../types";
import { sendMail } from "../utils/mailer";

const patientRepository = new PatientRepository();

export const patientsRouter: Router = Router();

patientsRouter.get("/", async (req: Request, res: Response) => {
    try {
        const patients: IPatient[] = await patientRepository.getAll();
        res.json(patients);
    } catch (err) {
        res.status(500).send(err);
    }
});

patientsRouter.post("/", async (req: Request, res: Response) => {
    try {
        const patient: IPatient = req.body;
        const newPatient: IPatient = await patientRepository.create(patient);
        sendMail(patient.email, "Registration Confirmation", patient.name);
        res.status(201).json(newPatient);
    } catch (err) {
        res.status(500).send(err);
    }
});