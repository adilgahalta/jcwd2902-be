/** @format */
import { ErrorHandler } from "../helpers/response";
import db from "./../lib/mysql";
import { Request } from "express";
interface IStudent {
  id: number;
  name: string;
  marks: number;
  class: string;
}
export class StudentService {
  public static async getAllService(req: Request) {
    const { email, password } = req.query;
    console.log(email, password);

    const sql = "SELECT * FROM student";
    // const sql = "call get_inactive_customers()";
    // const sql = `select * from user where email = '${email}' and password = '${password}';`;
    // console.log(sql);
    // select * from user where email = 'joe@mail.com' and password = 'joe321' or id <> '0';
    // const sql = "select * from purwadhika_student.user";
    const [rows] = await db.promise().query(sql);
    console.log(rows);

    return rows;
  }
  public static async getByIdService(req: Request) {
    const sql = "SELECT * FROM student where id = " + req.params.id;
    const [rows] = (await db.promise().query(sql)) as [IStudent[], any];
    if (rows.length === 0) throw new ErrorHandler("student not found");
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
