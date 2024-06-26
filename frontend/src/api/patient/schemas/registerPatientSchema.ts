import { z } from "zod";

const onlyLetters = /^[a-zA-Z\s]/;
const MAX_UPLOAD_SIZE = 1024 * 1024 * 3; // 3MB
const ACCEPTED_FILE_TYPES = ['image/jpg'];

export const registerPatientSchema = z
    .object({
        name: z.string().min(1).max(50).regex(onlyLetters, "Only letters are allowed"),
        email: z.string().email().endsWith("@gmail.com"),
        phoneCharacteristic: z.string().min(1).max(3),
        phoneNumber: z.string().min(1).max(10),
        documentPhoto: z.instanceof(File)
    })
    .refine(data => data.documentPhoto.size < MAX_UPLOAD_SIZE, {
        message: `File size exceeds ${MAX_UPLOAD_SIZE / 1024 / 1024}MB`,
        path: ['documentPhoto']
    })
    .refine(data => ACCEPTED_FILE_TYPES.includes(data.documentPhoto.type), {
        message: `File type not supported. Supported types: ${ACCEPTED_FILE_TYPES.join(", ")}`,
        path: ['documentPhoto']
    });