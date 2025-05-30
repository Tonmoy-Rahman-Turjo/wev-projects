import { error } from 'console';
import { NextFunction, Request, Response } from 'express';

import httpStatus from 'http-status';
const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).send({
    success: false,
    message: 'Api not found',
    error,
  });
};
export default notFound;
