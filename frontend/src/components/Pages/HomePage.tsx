import { Typography } from "@material-tailwind/react";

export default function HomePage() {
  return (
    <div className='h-full flex justify-center items-center'>
      <div className='text-center'>
        <Typography variant='h1' className='mb-4'>
          Welcome to the Home Page
        </Typography>
      </div>
    </div>
  );
}
