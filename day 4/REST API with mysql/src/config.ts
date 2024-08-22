/** @format */
import { config } from "dotenv";
config(); // load env
export const PORT = process.env.PORT || 8000;
export const mysql_config = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "my db",
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
};
