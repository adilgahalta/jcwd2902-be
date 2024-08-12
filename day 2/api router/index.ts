/** @format */
import express, { NextFunction, Request, Response } from "express";
import profileRouter, { test as Ubah } from "./router";
const PORT = 8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded());

const secret = "c+1Mq63TKjOLigcYvYu6mpUnUAY3wUAQioTcQsSr6z0=";

app.get("/", (req: Request, res: Response) => {
  res.send("welcome to my api");
});

const validateSecret = (req: Request, res: Response, next: NextFunction) => {
  const key = req.headers["api-key"];
  if (key != secret) {
    return res.status(401).send("unauthorized");
  }
  console.log(new Date().toISOString());
  next();
};

app.use(validateSecret);
//req
//req res
//req res next
//error req res next

app.get("/about", (req: Request, res: Response) => {
  res.send("about");
});

app.get("/random.text", (req: Request, res: Response) => {
  res.send("this is random text");
});

app.get(/a/, (req: Request, res: Response) => {
  res.send("setiap karakter a dalam path");
});

app.get(/.*fly$/, (req: Request, res: Response) => {
  res.send("setiap kata yang diakhirin dengan fly dalam path");
});

app.get("/users/:id/books/:bookId", (req: Request, res: Response) => {
  const { id, bookId } = req.params;
  res.send("user id " + id + " book id " + bookId);
});

app.get("/users/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.send("user id " + id);
});

app.get("/users/test", (req: Request, res: Response) => {
  res.send("user test"); //route test tidak akan bisa diakses
});

app.get(
  "/exp",
  (req: Request, res: Response, next: NextFunction) => {
    console.log("lewat middleware ");
    next(); // menjalankan function berikutnya
    // res.send("stop here");
  },
  (req: Request, res: Response) => {
    res.send("exp");
  }
);

app.get("/redirect", (req: Request, res: Response) => {
  res.redirect(301, "http://localhost:8000/a");
});

app.get("/donlod/:file", (req: Request, res: Response) => {
  res.download("./" + req.params.file);
});

app.get("/html", (req: Request, res: Response) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/img", (req: Request, res: Response) => {
  res.sendfile(__dirname + "/images.webp");
});

app.use("/profile", profileRouter);

app.get("/err", (req: Request, res: Response) => {
  throw new Error("ini error");
});

app.use("*", (req: Request, res: Response) => {
  res.status(404).send("page not found");
});

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({
    success: false,
    message: error.message,
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
