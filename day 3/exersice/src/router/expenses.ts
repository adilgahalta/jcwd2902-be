import { Router } from "express";
import { Request, Response } from "express";
import { getData } from "../services/services";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Welcome To my life");
});

router.get("/products", (req: Request, res: Response) => {
  const data = getData();
  res.send(data.data);
});

router.get("/products/:id", (req: Request, res: Response) => {
  const data = getData();
  const id = req.params.id;
  const index = data.data.findIndex((product) => product.id == Number(id));
  res.send(data.data[index]);
});
