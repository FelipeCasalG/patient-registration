import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { RegisterPatient, RegisterPatientSchema } from "../interface/RegisterPatientSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createPatient } from "../api/patient/patient.api";
import { toast } from "react-toastify";
import { parseAPIError } from "../utils/parseAPIError";
import { useNavigate } from "react-router-dom";

export function PatientForm() {
  const navigate = useNavigate();

  const [documentPhoto, setDocumentPhoto] = useState<File | undefined>();
  const [documentPhotoError, setDocumentPhotoError] = useState<string | undefined>();
  const [preview, setPreview] = useState<string | undefined>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterPatient>({
    resolver: zodResolver(RegisterPatientSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: RegisterPatient) => {
    try {
      setDocumentPhotoError(undefined);
      await createPatient({ ...data, documentPhoto });
      toast.success("Patient registered successfully");
      navigate("/patients");
    } catch (error: unknown) {
      const errorMessage = parseAPIError(error);
      toast.error(errorMessage);
    }
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setDocumentPhoto(acceptedFiles[0]);
    setPreview(URL.createObjectURL(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/jpg": [".jpg"],
    },
    onDrop,
  });

  return (
    <div className='flex justify-center items-center p-12'>
      <Card color='transparent' shadow={false} className='w-1/3 min-w-80'>
        <div className='flex flex-col justify-center items-center'>
          <Typography variant='h4' color='blue-gray' className='mt-3'>
            Register new patient
          </Typography>
          <Typography color='gray' className='mt-1 font-normal'>
            Fill in the form to register a new patient
          </Typography>
        </div>
        <form className='mt-6 mb-2' onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-1 flex flex-col gap-6'>
            <div>
              <Typography variant='h6' color='blue-gray'>
                Full Name
              </Typography>
              <Input
                size='lg'
                placeholder='John Doe'
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("fullName")}
                crossOrigin={undefined}
              />
              {errors.fullName?.message && (
                <Typography variant='small' color='red' className='flex items-center gap-1 font-normal mt-1'>
                  {errors.fullName.message}
                </Typography>
              )}
            </div>
            <div>
              <Typography variant='h6' color='blue-gray'>
                Email
              </Typography>
              <Input
                size='lg'
                placeholder='name@mail.com'
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("email")}
                crossOrigin={undefined}
              />
              {errors.email?.message && (
                <Typography variant='small' color='red' className='flex items-center gap-1 font-normal mt-1'>
                  {errors.email.message}
                </Typography>
              )}
            </div>
            <div>
              <Typography variant='h6' color='blue-gray'>
                Country Code
              </Typography>
              <Input
                size='lg'
                placeholder='+598'
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("phoneCharacteristic")}
                crossOrigin={undefined}
              />
              {errors.phoneCharacteristic?.message && (
                <Typography variant='small' color='red' className='flex items-center gap-1 font-normal mt-1'>
                  {errors.phoneCharacteristic.message}
                </Typography>
              )}
            </div>
            <div>
              <Typography variant='h6' color='blue-gray'>
                Phone Number
              </Typography>
              <Input
                size='lg'
                placeholder='95 123 456'
                className=' !border-t-blue-gray-200 focus:!border-t-gray-900'
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                {...register("phoneNumber")}
                crossOrigin={undefined}
              />
              {errors.phoneNumber?.message && (
                <Typography variant='small' color='red' className='flex items-center gap-1 font-normal mt-1'>
                  {errors.phoneNumber.message}
                </Typography>
              )}
            </div>
            <div {...getRootProps()}>
              <input {...getInputProps()} {...register("documentPhoto")} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p>Drag & drop some files here, or click to select files</p>
              )}
              {errors.documentPhoto?.message && (
                <Typography variant='small' color='red' className='flex items-center gap-1 font-normal mt-1'>
                  {documentPhotoError}
                </Typography>
              )}
            </div>
            {preview && <img src={preview} alt='Document preview' />}
          </div>
          <Button className='mt-6' fullWidth type='submit'>
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
