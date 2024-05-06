import { useEffect, useState } from "react";
import { IPatient } from "../interface/Patient";
import PatientCard from "./PatientCard";
import { getAllPatients } from "../api/patient/patient.api";
import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function PatientList() {
  const [patients, setPatients] = useState<IPatient[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPatients = async () => {
      try {
        const data: IPatient[] = await getAllPatients();
        setPatients(data);
        localStorage.setItem("patients", JSON.stringify(data));
      } catch (e: unknown) {
        console.error(e);
      }
    };

    void getPatients();
  }, []);

  return (
    <div className='h-full flex justify-center'>
      <div>
        <div className='mt-4 flex-row w-full items-center text-center'>
          <Typography variant='h1' className='mx-auto'>
            Patients
          </Typography>
          <div className='mt-2 md:text-right md:-mt-12'>
            <Button variant='outlined' onClick={() => navigate("/register-patient")}>
              Register patient
            </Button>
          </div>
        </div>

        {patients.length > 0 ? (
          <div className='flex justify-center'>
            <div className='mt-4 grid lg:grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2'>
              {patients.map((patient: IPatient) => (
                <div key={patient.id}>
                  <PatientCard patient={patient} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className='flex items-center justify-center h-full'>
            <h1 className='text-3xl font-bold'>No patients found</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default PatientList;
