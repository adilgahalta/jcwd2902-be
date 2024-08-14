/** @format */
import { config } from "dotenv";
config(); // load env
export const PORT = process.env.PORT || 8000;
export const API_KEY = process.env.API_KEY;
