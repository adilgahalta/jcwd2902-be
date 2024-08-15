import fs from "fs";
import IData from "../interface";
const path = __dirname + "/../data.json";

export const getData = (): IData => JSON.parse(fs.readFileSync(path, "utf8"));

export const writeData = (data: any) =>
  fs.writeFileSync(path, JSON.stringify(data));
