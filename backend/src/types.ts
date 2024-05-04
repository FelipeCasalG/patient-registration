import { RowDataPacket } from "mysql2";

export interface IPatient extends RowDataPacket {
    id: number;
    name: string;
    email: string;
    address: string;
    phoneCharacteristic: string;
    phoneNumber: string;
    documentPhoto: Blob;
    created: Date;
}