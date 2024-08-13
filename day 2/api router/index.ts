import express, { Request, Response, Router } from "express";
import { NextFunction } from "express";
import router from "./router";
const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded());

const secret = "OnC6rLk2s0NCrT6brhrVoVJ6NsVb/PLWV9xbeq8IY6M=";

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome To My Api");
});

const validateSecret = (req: Request, res: Response, next: NextFunction) => {
  const key = req.headers["api-key"];
  if (key != secret) {
    return res.status(401).send("Unauthorized");
  }
  console.log(new Date().toISOString);

  next();
};

app.use(validateSecret);

app.get("/about", (req: Request, res: Response) => {
  res.send("About Page");
});

app.get("/random.text", (req: Request, res: Response) => {
  res.send("This is random text");
});

app.get(/a/, (req: Request, res: Response) => {
  res.send("setiap karakter a dalam path");
});
app.get(/.*fly$/, (req: Request, res: Response) => {
  res.send("setiap kata yang diakhiri dengan fly dalam path");
});

app.get("/users/:id/books/bookId", (req: Request, res: Response) => {
  const { id, bookId } = req.params;
  res.send("user id" + id + "book id" + bookId);
});

app.get("/users/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.send("user id" + id);
});

app.get("/users/test", (req: Request, res: Response) => {
  res.send("user test"); //route test tidak akan bisa diakses
});

app.get(
  "/exp",
  (req: Request, res: Response, next: NextFunction) => {
    console.log("lewat middleware");
    next();
  },
  (req: Request, res: Response) => {
    res.send("exp");
  }
);

app.get("/donlod/:file", (req: Request, res: Response) => {
  res.send("download" + req.params.file);
});

app.get("/html", (req: Request, res: Response) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/img", (req: Request, res: Response) => {
  res.sendFile(__dirname + "/images.webp");
});

app.use("/profile", router);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
