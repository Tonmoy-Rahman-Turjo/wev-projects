import { NextFunction, Request, RequestHandler, Response } from 'express';
import { send } from 'process';
import { StudentServices } from './Student.service';
import { error } from 'console';
import Joi from 'joi';
// import studentVaidationSchema from './student.joi.validation';

import { z } from 'zod';
// import studentValidationSchema from './student.validation';
// import { Student } from '../Student.modal';
import { MongoServerError } from 'mongodb';
import sendResponse from '../../utils/send.response';
import httpStatus from 'http-status';
import catchAsyn from '../../utils/catchAsync';

const getAllStudent = catchAsyn(async (req, res) => {
  const result = await StudentServices.getallStudentFormDB();
  sendResponse(res, {
    success: true,
    stautsCode: httpStatus.OK,
    message: 'get all student successfuly',
    data: result,
  });
});
const getsingleStudent = catchAsyn(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.getsingleStudentFormDB(studentId);
  sendResponse(res, {
    success: true,
    stautsCode: httpStatus.OK,
    message: 'get single successfuly',
    data: result,
  });
});
const getsingleStudentDeletd = catchAsyn(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.getsingleStudentDeletedFormDB(studentId);
  sendResponse(res, {
    success: true,
    stautsCode: httpStatus.OK,
    message: 'get single student deletd successfuly',
    data: result,
  });
});
const updateStudent = catchAsyn(async (req, res) => {
  const { studentId } = req.params;
  const { student } = req.body;
  const result = await StudentServices.updateStudentIntoDB(studentId, student);

  sendResponse(res, {
    stautsCode: httpStatus.OK,
    success: true,
    message: 'Student is updated succesfully',
    data: result,
  });
});
export const StudentControlar = {
  // createStudent,
  getAllStudent,
  getsingleStudent,
  getsingleStudentDeletd,
  updateStudent
};
