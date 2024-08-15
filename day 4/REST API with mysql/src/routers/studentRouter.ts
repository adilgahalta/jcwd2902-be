import { StudentController } from "../controllers/studentControllers";
import { Router } from "express";
export class StudentRouter {
  private studentController: StudentController;
  private router: Router;
  constructor() {
    this.studentController = new StudentController();
    this.router = Router();
    this.routes();
  }
  private routes() {
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
