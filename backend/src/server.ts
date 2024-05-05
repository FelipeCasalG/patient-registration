import express, { json } from "express";
import dotenv from "dotenv";
import { patientsRouter } from "./routes/patients.routes";
import { corsMiddleware } from "./middlewares/cors";
import { initMySQLDb } from "./repository/dbConnection";

dotenv.config();

(async () => {
    try {
        await initMySQLDb();
        const port = process.env.PORT || 3000;

        const app = express();
        app.use(json());
        app.use(corsMiddleware());
        app.use("/patients", patientsRouter);

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
    catch (error) {
        console.error("Failed to start server");
        console.error(error);
    }
})();