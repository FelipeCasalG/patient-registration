import { z } from "zod";

const onlyLetters = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$/;

export const RegisterPatientSchema = z
    .object({
        fullName: z.string().min(2, "Please, enter full name").max(50, "Full name is too long").regex(onlyLetters, "Only letters are allowed"),
        email: z.string().email("Please, enter a valid email").endsWith("@gmail.com", { message: "Only gmail accounts are allowed" }),
        phoneCharacteristic: z.string().min(1).max(3),
        phoneNumber: z.string().min(1).max(10),
        documentPhoto: z.any(),
    });

export type RegisterPatient = z.infer<typeof RegisterPatientSchema>;