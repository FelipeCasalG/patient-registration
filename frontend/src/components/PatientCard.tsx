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
        <img
          src='https://www.mass.gov/files/styles/embedded_full_width/public/images/2024-02/ma_d200_pr_adult_lid_150dpi-_liquor_card_2.jpg?itok=z0dKZLGF'
          alt='Patient Document Photo'
        />
      </CardHeader>
      <CardBody>
        <Typography variant='h4' color='blue-gray'>
          {patient.name}
        </Typography>

        <Button onClick={handleCollapseBtn}>{isCollapsed ? "More info" : "Hide info"}</Button>
        <Collapse open={!isCollapsed}>
          <Card className='my-4 mx-auto w-12/12'>
            <CardBody>
              <Typography>
                Email: {patient.email} <br />
                Address: {patient.address} <br />
                Country code: +{patient.phoneCharacteristic} <br />
                Phone number: {patient.phoneNumber} <br />
                Date created: {patient.created.toString()} <br />
              </Typography>
            </CardBody>
          </Card>
        </Collapse>
      </CardBody>
    </Card>
  );
}

export default PatientCard;
