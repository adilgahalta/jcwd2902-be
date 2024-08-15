import { Request, Response } from "express";
import { responseHandler } from "../helpers/response";
import { StudentService } from "../services/studentService";

export class StudentController {
  public async getAll(req: any, res: any) {
    const data = await StudentService.getAllService();
    res.send(responseHandler("get all students", data));
  }
  public async getById(req: any, res: any) {
    const data = await StudentService.getByIdService(req);
    res.send(responseHandler("get student by id"));
  }
  public create = async (req: any, res: any) => {
    const data = await StudentService.getByIdService(req);
    res.send(responseHandler("create new student"));
  };
  public update = async (req: any, res: any) => {
    const data = await StudentService.getByIdService(req);
    res.send(responseHandler("update student"));
  };
  public delete = async (req: any, res: any) => {
    res.send(responseHandler("delete student"));
  };
}
