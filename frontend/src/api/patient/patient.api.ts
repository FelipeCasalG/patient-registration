import axios from "axios";
import { IPatient } from "../../interface/Patient";
import { RegisterPatient } from "../../interface/RegisterPatientSchema";
import { getAPIBaseUrl } from "../../utils/getAPIBaseUrl";

const REACT_APP_API_BASE_URL = getAPIBaseUrl();

const getAllPatients = async (): Promise<IPatient[]> => {
    const response = await axios.get(REACT_APP_API_BASE_URL + "/patients");
    return response.data;
};

const createPatient = async (patient: RegisterPatient): Promise<void> => {
    const formData = new FormData();
    formData.append("fullName", patient.fullName);
    formData.append("email", patient.email);
    formData.append("phoneCharacteristic", patient.phoneCharacteristic);
    formData.append("phoneNumber", patient.phoneNumber);
    formData.append("documentPhoto", patient.documentPhoto);
    await axios.post(REACT_APP_API_BASE_URL + "/patients", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    }
    );
};

export { getAllPatients, createPatient };
