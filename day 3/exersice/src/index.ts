import express, { Application, Request, Response } from "express";
import { config } from "dotenv";
import fs from "fs";
import IData from "./interface";
import IProduct from "./interface";
import { getData, writeData } from "./services/services";
config();

const PORT = process.env.PORT || 8000;
const app: Application = express();
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to my life");
});

app.get("/products", (req: Request, res: Response) => {
  const data = getData();
  res.send(data.data);
});

app.get("/products/:id", (req: Request, res: Response) => {
  const data = getData();
  const id = req.params.id;
  res.send(data.data);
});

// app.post("/products", (req: Request, res: Response) => {
//   const data = getData();
//   const newData: IProduct = req.body;

//   const id = (data.data.length ? data.data[data.data.length - 1].id : 0) + 1;
//   newData.id = id;
//   data.data.push(newData);
//   writeData(data);
//   res.status(201).send({
//     success: true,
//     message: "new product has been added",
//   });
// });

app.patch("/products/:id", (req: Request, res: Response) => {
  const data = getData();
  const id = req.params.id;
  const newData = req.body;
  const index = data.data.findIndex((product) => product.id == Number(id));
  data.data[index] = newData;
  writeData(data);
  res.send({ success: true, message: "product has been updated" });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
