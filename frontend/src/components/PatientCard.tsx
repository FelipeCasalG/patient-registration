import { useState } from "react";
import { IPatient } from "../interface/Patient";
import { Button, Card, CardBody, CardHeader, Collapse, Typography } from "@material-tailwind/react";

function PatientCard({ patient }: { patient: IPatient }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleCollapseBtn = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <Card className='max-w-[24rem] overflow-hidden'>
      <CardHeader floated={false} shadow={false} color='transparent' className='m-0 rounded-none h-60'>
        <img
          className='w-full h-full object-cover'
          src={patient.documentPhotoURL.toString()}
          alt='Patient Document Photo'
        />
      </CardHeader>
      <CardBody>
        <div className='flex w-full items-center'>
          <Typography className='pl-2' variant='h4' color='blue-gray'>
            {patient.fullName}
          </Typography>
          <Button className='ml-auto' onClick={handleCollapseBtn}>
            {isCollapsed ? "More info" : "Hide info"}
          </Button>
        </div>
        <Collapse open={!isCollapsed}>
          <Card className='my-4 mx-auto w-full'>
            <CardBody>
              <Typography>
                Email: {patient.email} <br />
                Country code: +{patient.phoneCharacteristic} <br />
                Phone number: {patient.phoneNumber} <br />
              </Typography>
            </CardBody>
          </Card>
        </Collapse>
      </CardBody>
    </Card>
  );
}

export default PatientCard;
