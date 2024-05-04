import express, { json } from "express";
import dotenv from "dotenv";
import { patientsRouter } from "./routes/patients.routes";

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();
app.use(json());
app.use("/patients", patientsRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});