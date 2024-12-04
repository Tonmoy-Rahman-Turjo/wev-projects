import { Response } from 'express';
import { boolean, number, string } from 'joi';

type Tresponse<T> = {
  stautsCode: number;
  success: boolean;
  message?: string;
  data: T;
};
const sendResponse = <T>(res: Response, data: Tresponse<T>) => {
  res.status(data?.stautsCode).json({
    success: data.success,
    message: data.message,
    data: data.data,
  });
};

export default sendResponse;
