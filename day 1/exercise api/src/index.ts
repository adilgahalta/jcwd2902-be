/** @format */
import fs from "fs";
import express, { Application, Request, Response } from "express";
const PORT = process.env.PORT || 8000;
const app: Application = express();
app.use(express.json());
interface IProduct {
  id: number;
  product_name: string;
  desc: string;
}

interface IData {
  products: IProduct[];
}

const path = __dirname + "/data.json";

const getData = (): IData => JSON.parse(fs.readFileSync(path, "utf8"));
const writeData = (data: any): void =>
  fs.writeFileSync(path, JSON.stringify(data));

app.get("/", (req, res) => {
  res.send("welcome to my api");
});

app.get("/products", (req: Request, res: Response) => {
  const data = getData();

  res.send({ success: true, data: data.products });
});

app.get("/products/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const data = getData();
  const findProduct = data.products.find((product) => product.id == Number(id));
  res.send({ success: true, data: findProduct });
});
app.post("/products", (req: Request, res: Response) => {
  const data = getData(); // { products: [] }

  const newUser: IProduct = req.body;
  console.log(req.body);

  const id = data.products.length
    ? data.products[data.products.length - 1].id + 1
    : 1;
  newUser.id = id;
  data.products.push(newUser);
  writeData(data);
  res.status(201).send({
    success: true,
    message: "new product has been added",
  });
});
app.delete("/products/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const data: IData = getData();
  const index = data.products.findIndex((product) => product.id == Number(id));
  data.products.splice(index, 1);
  writeData(data);
  res.send({
    success: true,
    message: "product id " + id + " has been deleted",
  });
});
app.patch("/products/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const data: IData = getData();
  const index = data.products.findIndex((product) => product.id == Number(id));
  data.products[index] = { ...data.products[index], ...req.body };
  writeData(data);
  res.send({
    success: true,
    message: "product id " + id + " has been updated",
  });
});

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
