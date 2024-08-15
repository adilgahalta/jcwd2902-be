/** @format */

import { Router } from "express";
import { StudentController } from "../controllers/student.controller";

export class StudentRouter {
  private studentController: StudentController;
  private router: Router;
  constructor() {
    this.studentController = new StudentController();
    this.router = Router();
    this.routers();
  }
  private routers() {
    this.router.get("/", this.studentController.getAll);
    this.router.get("/:id", this.studentController.getById);
    this.router.post("/", this.studentController.create);
    this.router.patch("/:id", this.studentController.update);
    this.router.delete("/:id", this.studentController.delete);
  }
  public getRouter() {
    return this.router;
  }
}
