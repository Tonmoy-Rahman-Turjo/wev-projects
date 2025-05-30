import { NextFunction, Request, Response } from 'express';

const gobalErrorHandelar = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = 500;
  const message = err.message || 'some thing went wrong';
  res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
};

export default gobalErrorHandelar;
