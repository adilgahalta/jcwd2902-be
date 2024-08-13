import { Response, Request, Router } from "express";

const router = Router();
router.get("/", (req: Request, res: Response) => {
  res.send("method get");
});

router.get("/testing", (req: Request, res: Response) => {
  res.send("method get testing");
});

router.get("/", (req: Request, res: Response) => {
  res.send("method get");
});

export default router;
