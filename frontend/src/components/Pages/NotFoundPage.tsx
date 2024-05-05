import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className='flex h-full items-center justify-center'>
      <div className='text-center'>
        <Typography variant='h1' className='mb-4'>
          404 Not Found
        </Typography>
        <Button size='lg'>
          <Link to='/'>Go back to the main page</Link>
        </Button>
      </div>
    </div>
  );
}
