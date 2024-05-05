import { IPatient } from "../interface/IPatient";
import { RegisterPatient } from "../interface/RegisterPatientSchema";
import dbConnection from "./dbConnection";

export const getAll = async (): Promise<IPatient[]> => {
    return new Promise((resolve, reject) => {
        dbConnection.query<IPatient[]>("SELECT * FROM patient", (err: any, rows: IPatient[] | PromiseLike<IPatient[]>) => {
            if (err) reject(err);
            else resolve(rows);
        });
    })
}

export const create = async (patient: IPatient): Promise<IPatient> => {
    return new Promise((resolve, reject) => {
        dbConnection.query("INSERT INTO patient SET ?", patient, (err: any, result: any) => {
            if (err) reject(err);
            else {
                const returnPatient: IPatient = { ...patient };
                returnPatient.id = result.insertId;
                resolve(returnPatient);
            }
        });
    });
}