import { type Optional } from 'sequelize';
import { Column, Model, Table } from 'sequelize-typescript';

export interface PatientAttributes {
    id: number;
    fullName: string;
    email: string;
    phoneCharacteristic: string;
    phoneNumber: string;
    documentPhotoURL: string;
    createdAt: Date;
}

export interface PatientCreationAttributes
    extends Optional<PatientAttributes, 'id' | 'createdAt'> { }

@Table({ tableName: 'Patients' })
export class Patient extends Model<PatientAttributes, PatientCreationAttributes> implements PatientAttributes {
    @Column({ primaryKey: true, autoIncrement: true })
    id!: number;

    @Column({ allowNull: false })
    fullName!: string;

    @Column({ allowNull: false })
    email!: string;

    @Column({ allowNull: false })
    phoneCharacteristic!: string;

    @Column({ allowNull: false })
    phoneNumber!: string;

    @Column({ allowNull: false })
    documentPhotoURL!: string;

    @Column({ allowNull: false })
    createdAt!: Date;
    default: Date = new Date();
}