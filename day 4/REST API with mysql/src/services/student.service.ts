/** @format */
import db from "./../lib/mysql";
import { Request } from "express";
interface IStudent {
  id: number;
  name: string;
  marks: number;
  class: string;
}
export class StudentService {
  public static async getAllService() {
    const sql = "SELECT * FROM student";
    const [rows] = await db.promise().query(sql);

    return rows;
  }
  public static async getByIdService(req: Request) {
    const sql = "SELECT * FROM student where id = " + req.params.id;
    const [rows] = (await db.promise().query(sql)) as [IStudent[], any];
    if (rows.length === 0) throw new Error("student not found");
    return rows[0];
  }
  public static async createService(req: Request) {
    const sql = "INSERT INTO student SET ?";
    await db.promise().query(sql, req.body);
  }
  public static async updateService(req: Request) {
    const sql = "UPDATE student SET ? WHERE id = " + req.params.id;
    await db.promise().query(sql, req.body);
  }
  public static async deleteService(req: Request) {
    const sql = "DELETE FROM student where id = " + req.params.id;
    await db.promise().query(sql);
  }
}
