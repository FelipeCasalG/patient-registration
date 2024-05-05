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
      <CardHeader floated={false} shadow={false} color='transparent' className='m-0 rounded-none'>
        <img src={patient.documentPhotoURL.toString()} alt='Patient Document Photo' />
      </CardHeader>
      <CardBody>
        <Typography variant='h4' color='blue-gray'>
          {patient.fullName}
        </Typography>

        <Button onClick={handleCollapseBtn}>{isCollapsed ? "More info" : "Hide info"}</Button>
        <Collapse open={!isCollapsed}>
          <Card className='my-4 mx-auto w-12/12'>
            <CardBody>
              <Typography>
                Email: {patient.email} <br />
                Country code: +{patient.phoneCharacteristic} <br />
                Phone number: {patient.phoneNumber} <br />
                Date created: {patient.createdAt.toString()} <br />
              </Typography>
            </CardBody>
          </Card>
        </Collapse>
      </CardBody>
    </Card>
  );
}

export default PatientCard;
