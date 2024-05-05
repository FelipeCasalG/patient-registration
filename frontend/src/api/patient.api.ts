import axios from "axios";
import { IPatient } from "../interface/Patient";

const getAllPatients = async (): Promise<IPatient[]> => {
    const response = await axios.get("http://localhost:4000/patients");
    return response.data;
};

export { getAllPatients };
