import { Patient, type PatientCreationAttributes } from "../db-models/patientModel";

export const getAllPatients = async () => {
    return await Patient.findAll();
}

export const create = async (patient: PatientCreationAttributes) => {
    return await Patient.create(patient);
}