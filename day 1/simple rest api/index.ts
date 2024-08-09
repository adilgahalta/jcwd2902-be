/** @format */
import http, { IncomingMessage, ServerResponse } from "http";
const PORT = 8000;

interface IUser {
  id: number;
  name: string;
  age: number;
}
const users: IUser[] = [];

const server = http.createServer(
  async (req: IncomingMessage, res: ServerResponse) => {
    if (req.url == "/api" && req.method == "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write("Hi there, this is a vanilla nodeJS API");
      res.end();
    } else if (req.url == "/api/users") {
      switch (req.method) {
        case "GET": {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.write(JSON.stringify({ message: "get users", users }));
          res.end();
          break;
        }
        case "POST": {
          req.on("data", function (user) {
            const body: IUser = JSON.parse(user);
            users.push(body);
          });
          res.end("user added successfully");
          break;
        }
        case "PATCH": {
          req.on("data", function (user) {
            const body: IUser = JSON.parse(user);
            users.push(body);
          });
          res.end("user added successfully");
          break;
        }
        case "DELETE": {
          break;
        }
        default: {
        }
      }
    }
  }
);

server.listen(PORT, () => console.log(`server is running on port ${PORT}`));
