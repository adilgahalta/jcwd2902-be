import db from "../lib/mysql";
import { Request } from "express";

interface IStudent {
  id: number;
  name: string;
  marks: number;
  class: string;
}

export class StudentService {
  public static async getAllService() {
    const sql = "SELECT * FROM students";
    const [rows] = await db.promise().query(sql);
    return rows;
  }
  public static async getByIdService(req: Request) {
    const sql = "SELECT * FROM students where id = " + req.params.id;
    const [rows] = await db.promise().query(sql);
    return rows;
  }
  public static async createService() {}
  public static async updateService() {}
  public static async deleteService() {}
}
