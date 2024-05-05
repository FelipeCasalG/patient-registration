import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export function PatientForm() {
  const [documentPhoto, setDocumentPhoto] = useState<File | undefined>();
  const [preview, setPreview] = useState<string | undefined>();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setDocumentPhoto(acceptedFiles[0]);
      console.log(documentPhoto);
      setPreview(URL.createObjectURL(acceptedFiles[0]));
    },
    [documentPhoto]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/jpg": [".jpg"],
    },
    onDrop,
  });

  return (
    <div className='h-full flex justify-center items-center p-12'>
      <Card color='transparent' shadow={false} className='w-1/3 min-w-80'>
        <div className='flex flex-col justify-center items-center'>
          <Typography variant='h4' color='blue-gray' className='mt-3'>
            Register new patient
          </Typography>
          <Typography color='gray' className='mt-1 font-normal'>
            Fill in the form to register a new patient
          </Typography>
        </div>
        <form className='mt-6 mb-2'>
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
              Phone Number
            </Typography>
            <Input
              size='lg'
              placeholder='95 123 456'
              className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin={undefined}
            />
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
              )}
            </div>
            {preview && <img src={preview} alt='Document preview' />}
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
