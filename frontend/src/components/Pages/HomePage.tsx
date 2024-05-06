import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className='h-full flex justify-center items-center'>
      <div className='text-center'>
        <Typography variant='h1' className='mb-4'>
          Welcome to the Home Page
        </Typography>
        <Button size='lg' onClick={() => navigate("/patients")}>
          Go to Patients
        </Button>
      </div>
    </div>
  );
}
