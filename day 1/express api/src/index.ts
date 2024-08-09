/** @format */
import express, { Application, Request, Response } from "express";
import { config } from "dotenv";
import { userRouter } from "./routers/user.route";
config(); // this will load .env file
const PORT = process.env.PORT || 8000;
const app: Application = express();
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
