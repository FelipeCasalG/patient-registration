import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className='flex h-full items-center justify-center'>
      <div className='text-center'>
        <Typography variant='h1' className='mb-4'>
          404 Not Found
        </Typography>
        <Button size='lg' onClick={() => navigate("/")}>
          Go back to the main page
        </Button>
      </div>
    </div>
  );
}
