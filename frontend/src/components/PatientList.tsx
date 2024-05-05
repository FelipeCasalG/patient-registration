import { useEffect, useState } from "react";
import { IPatient } from "../interface/Patient";
import PatientCard from "./PatientCard";
import { getAllPatients } from "../api/patient/patient.api";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function PatientList() {
  const [patients, setPatients] = useState<IPatient[]>([]);

  useEffect(() => {
    const getPatients = async () => {
      try {
        const data: IPatient[] = await getAllPatients();
        setPatients(data);
      } catch (e: unknown) {
        console.error(e);
      }
    };

    void getPatients();
  }, []);

  return (
    <div className='h-full'>
      {patients.length > 0 ? (
        <div>
          <div className='mt-4'>
            <Link to='/register-patient'>
              <Button variant='outlined'>Register patient</Button>
            </Link>
          </div>
          <div className='mt-4 g id grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
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
  );

  // return (
  //   <div>
  //     <div>
  //       <div>
  //         <h1 className='text-3xl font-bold underline'>Patients</h1>
  //       </div>
  //       <div>
  //         <button type='button'>
  //           <div>
  //             <svg
  //               xmlns='http://www.w3.org/2000/svg'
  //               width='24'
  //               height='24'
  //               fill='currentColor'
  //               className='bi bi-person-fill-add'
  //               viewBox='0 0 16 16'
  //             >
  //               <path d='M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0' />
  //               <path d='M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4' />
  //             </svg>

  //             <h5>Register patient</h5>
  //           </div>
  //         </button>
  //       </div>
  //     </div>
  //     <div>
  //       {patients.map((patient) => (
  //         <div key={patient.id}>
  //           <PatientCard patient={patient} />
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
}

export default PatientList;
