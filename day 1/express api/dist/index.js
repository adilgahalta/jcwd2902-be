"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @format */
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)(); // this will load .env file
const PORT = process.env.PORT || 8000;
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
