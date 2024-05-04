import { Router } from "express";
import { PatientRepository } from "../repository/PatientRepository";
import { IPatient } from "../types";

const patientRepository = new PatientRepository();

export const patientsRouter: Router = Router();

patientsRouter.get("/", async (req, res) => {
    try {
        const patients: IPatient[] = await patientRepository.getAll();
        res.json(patients);
    } catch (err) {
        res.status(500).send(err);
    }
});