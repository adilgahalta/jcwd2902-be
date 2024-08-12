/** @format */

import { Response, Router, Request } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("method get!");
});

router.get("/testing", (req: Request, res: Response) => {
  res.send("method get testing!");
});
router.post("/", (req: Request, res: Response) => {
  res.send("method post !");
});

export default router;

export const test = "abc";
