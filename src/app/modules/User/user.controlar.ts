import { NextFunction, Request, RequestHandler, Response } from 'express';
import { userServices } from './user.services';

import sendResponse from '../../utils/send.response';
import httpStatus from 'http-status';
import catchAsyn from '../../utils/catchAsync';

const createStudnet = catchAsyn(async (req, res) => {
  const { password, student: stundetData } = req.body;
  // console.log(password)
  const result = await userServices.creatuserFormDB(password, stundetData);

  sendResponse(res, {
    success: true,
    stautsCode: httpStatus.OK,
    message: 'creat a user successfuly',
    data: result,
  });
});

export const userControlar = {
  createStudnet,
};
