"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @format */
const http_1 = __importDefault(require("http"));
const PORT = 8000;
const users = [];
const server = http_1.default.createServer((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.url == "/api" && req.method == "GET") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write("Hi there, this is a vanilla nodeJS API");
        res.end();
    }
    else if (req.url == "/api/users") {
        switch (req.method) {
            case "GET": {
                res.writeHead(200, { "Content-Type": "application/json" });
                res.write(JSON.stringify({ message: "get users", users }));
                res.end();
                break;
            }
            case "POST": {
                req.on("data", function (user) {
                    const body = JSON.parse(user);
                    users.push(body);
                });
                res.end("user added successfully");
                break;
            }
            case "PATCH": {
                req.on("data", function (user) {
                    const body = JSON.parse(user);
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
}));
server.listen(PORT, () => console.log(`server is running on port ${PORT}`));
