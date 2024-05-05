import { RowDataPacket } from "mysql2";

export interface IPatient extends RowDataPacket {
    id?: number;
    fullName: string;
    email: string;
    phoneCharacteristic: string;
    phoneNumber: string;
    documentPhotoURL: string;
    created?: Date;
}