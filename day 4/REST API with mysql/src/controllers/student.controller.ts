/** @format */
import { Request, Response } from "express";
import { responseHandler } from "../helpers/response";
import { StudentService } from "../services/student.service";

export class StudentController {
  public async getAll(req: Request, res: Response) {
    const data = await StudentService.getAllService();
    res.send(responseHandler("get all students", data));
  }
  public async getById(req: Request, res: Response) {
    const data = await StudentService.getByIdService(req);
    res.send(responseHandler("get student by id", data));
  }
  public async create(req: Request, res: Response) {
    await StudentService.createService(req);
    res.status(201).send(responseHandler("create new student"));
  }
  public async update(req: Request, res: Response) {
    await StudentService.updateService(req);
    res.send(responseHandler("update student"));
  }
  public async delete(req: Request, res: Response) {
    await StudentService.deleteService(req);
    res.send(responseHandler("delete student"));
  }
}
