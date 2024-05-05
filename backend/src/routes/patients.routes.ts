import { Router, Request, Response } from "express";
import { IPatient } from "../interface/IPatient";
import { sendMail } from "../utils/mailer";
import { RegisterPatientSchema, RegisterPatient } from "../interface/RegisterPatientSchema";
import { getAllPatients, createPatient } from "../logic/patient.logic";

export const patientsRouter: Router = Router();

patientsRouter.get("/", async (req: Request, res: Response) => {
    try {
        const patients: IPatient[] = await getAllPatients();
        res.status(200).json(patients);
    } catch (err) {
        res.status(500).send(err);
    }
});

patientsRouter.post("/", async (req: Request, res: Response) => {
    try {
        const patient: RegisterPatient = RegisterPatientSchema.parse(req.body);
        const newPatient: IPatient = await createPatient(patient);
        res.status(201).json(newPatient);
    } catch (err) {
        res.status(500).send(err);
    }
});