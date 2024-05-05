import { Card, Input, Button, Typography } from "@material-tailwind/react";

export function PatientForm() {
  return (
    <div className='h-full flex justify-center items-center'>
      <Card color='transparent' shadow={false}>
        <Typography variant='h4' color='blue-gray'>
          Register new patient
        </Typography>
        <Typography color='gray' className='mt-1 font-normal'>
          Fill in the form to register a new patient
        </Typography>
        <form className='mt-6 mb-2 w-80 max-w-screen-lg sm:w-96'>
          <div className='mb-1 flex flex-col gap-6'>
            <Typography variant='h6' color='blue-gray' className='-mb-5'>
              Full Name
            </Typography>
            <Input
              size='lg'
              placeholder='John Doe'
              className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />
            <Typography variant='h6' color='blue-gray' className='-mb-5'>
              Address
            </Typography>
            <Input
              size='lg'
              placeholder='Dr. Héctor Miranda 2421'
              className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />
            <Typography variant='h6' color='blue-gray' className='-mb-5'>
              Email
            </Typography>
            <Input
              size='lg'
              placeholder='name@mail.com'
              className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />
            <Typography variant='h6' color='blue-gray' className='-mb-5'>
              Country Code
            </Typography>
            <Input
              size='lg'
              placeholder='+598'
              className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />
            <Typography variant='h6' color='blue-gray' className='-mb-5'>
              Country Code
            </Typography>
            <Input
              size='lg'
              placeholder='+598'
              className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />
          </div>
          <Button className='mt-6' fullWidth>
            Register
          </Button>
          <Typography color='gray' className='mt-4 text-center font-normal'>
            The patient will receive a confirmation email
          </Typography>
        </form>
      </Card>
    </div>
  );
}
