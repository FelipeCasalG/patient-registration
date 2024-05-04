import { IPatient } from "../types";
import dbConnection from "./dbConnection";

export class PatientRepository {
    async getAll(): Promise<IPatient[]> {
        return new Promise((resolve, reject) => {
            dbConnection.query<IPatient[]>("SELECT * FROM patient", (err: any, rows: IPatient[] | PromiseLike<IPatient[]>) => {
                if (err) reject(err);
                else resolve(rows);
            });
        })
    }

    async create(patient: IPatient): Promise<IPatient> {
        return new Promise((resolve, reject) => {
            dbConnection.query("INSERT INTO patient SET ?", patient, (err: any, result: any) => {
                if (err) reject(err);
                else {
                    patient.id = result.insertId;
                    resolve(patient);
                }
            });
        });
    }
}