import { Patient, type PatientCreationAttributes } from "../db-models/patientModel";
import { WhereOptions } from "sequelize";

export const getAllPatients = async () => {
    return await Patient.findAll();
}

export const create = async (patient: PatientCreationAttributes) => {
    return await Patient.create(patient);
}