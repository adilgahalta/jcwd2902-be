/** @format */

export class ErrorResponse extends Error {
  statusCode: number;
  constructor(message: string, statusCode?: number) {
    super(message);
    this.statusCode = statusCode || 500;
  }
}

class SuccessResponse {
  success: boolean = true;
  message: string;
  data?: any;
  constructor(message: string, data?: any) {
    this.message = message;
    this.data = data;
  }
}

export const successResponse = (message: string, data?: any) =>
  new SuccessResponse(message, data);
