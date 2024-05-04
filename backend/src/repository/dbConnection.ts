import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();

export default mysql.createPool({
    host: process.env.DB_HOST || "127.0.0.1",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});