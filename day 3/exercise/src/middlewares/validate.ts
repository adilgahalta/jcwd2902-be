/** @format */

import { NextFunction, Request, Response } from "express";
import { API_KEY } from "../config";
import { ErrorResponse } from "../helpers/response";

export const validateApiKey = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const apiKey = req.headers["x-api-key"];
  if (apiKey !== API_KEY) {
    throw new ErrorResponse("invalid api key", 401);
  }
  next();
};
