import { IPatient } from "../types";
import dbConnection from "./dbConnection";

export class PatientRepository {
    getAll(): Promise<IPatient[]> {
        return new Promise((resolve, reject) => {
            dbConnection.query<IPatient[]>("SELECT * FROM patient", (err: any, rows: IPatient[] | PromiseLike<IPatient[]>) => {
                if (err) reject(err);
                else resolve(rows);
            });
        })
    }
}