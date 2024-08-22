/** @format */

import express, { NextFunction, Request, Response } from "express";
import { config } from "dotenv";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
config();
const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors({}));
const PORT = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => res.send("welcome to my api"));

app.get(
  "/branches",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { search } = req.query;
      const data = await prisma.branch.findMany({
        include: {
          Manager: true,
          Class: {
            select: {
              name: true,
            },
          },
        },
        where: {
          OR: [
            {
              name: {
                contains: String(search || ""), // select * from branch where name like '%{search}%' or location like '%{search}%'
              },
            },
            {
              location: {
                contains: String(search || ""), // select * from branch where name like '%{search}%' or location like '%{search}%'
              },
            },
          ],
        },
      });
      res.send({
        message: "fetching branches",
        data,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  }
);

app.post(
  "/branches",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await prisma.branch.create({ data: req.body });
      res.status(201).send({
        message: "creating new branch",
        success: true,
      });
    } catch (error) {
      next(error);
    }
  }
);

app.patch(
  "/branches/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      await prisma.branch.update({
        data: req.body,
        where: {
          id: Number(id),
        },
      });
      res.send({
        message: "updating branch id " + id,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  }
);

app.delete(
  "/branches/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      await prisma.branch.delete({
        where: {
          id: Number(id),
        },
      });
      res.send({
        message: "deleting branch id " + id,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  }
);

app.get(
  "/branches/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = await prisma.branch.findUnique({
        select: {
          id: true,
          name: true,
          location: true,
        },
        where: {
          id: Number(id),
        },
      });
      res.send({
        message: "fetching branch id " + id,
        data,
        success: true,
      });
    } catch (error) {
      next(error);
    }
  }
);

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({
    success: false,
    message: error.message,
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
