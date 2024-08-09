/** @format */
import { Router } from "express";
import fs from "fs";
export const userRouter = Router();
const path = __dirname + "/../../data.json";
const path2 = __dirname + "/../../log.txt";

interface IUser {
  id: number;
  name: string;
  age: number;
}
interface IData {
  users: IUser[];
}
const getData = () => {
  return JSON.parse(fs.readFileSync(path, "utf8"));
};

const writeData = (data: any) => {
  fs.writeFileSync(path, JSON.stringify(data));
};

const writeLog = (message: string = "") => {
  const log = fs.readFileSync(path2, "utf-8");
  fs.writeFileSync(path2, log + " \n" + new Date() + " " + message);
};
userRouter.get("/", (req, res) => {
  //   const data = db.users;
  const data = getData().users;

  res.send({ success: true, data });
});

userRouter.post("/", (req, res) => {
  const data = getData(); // { users: [] }
  data.users.push(req.body); // { users: [ req.body ] }
  fs.writeFileSync(path, JSON.stringify(data));
  writeLog(JSON.stringify(req.body));
  res.status(201).send({
    success: true,
    message: "new user has been added",
  });
});

userRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  const data: IData = getData();
  const index = data.users.findIndex((user) => user.id == Number(id));
  data.users.splice(index, 1);
  writeData(data);
  res.send("ini delete user!");
});

userRouter.patch("/:id", (req, res) => {
  res.send("ini patch user!");
});

//crud
// product => {id,product_name,desc}
