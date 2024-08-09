/** @format */

import { Router } from "express";

export const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send("ini get user!");
});

userRouter.post("/", (req, res) => {
  res.send({
    message: "ini post user!",
    data: req.body,
  });
});

userRouter.delete("/", (req, res) => {
  res.send("ini delete user!");
});

userRouter.patch("/", (req, res) => {
  res.send("ini patch user!");
});
