import { NextFunction, Request, Response } from 'express';
import { send } from 'process';
import { StudentServices } from './Student.service';
import { error } from 'console';
 import Joi from 'joi'
// import studentVaidationSchema from './student.joi.validation';

import { z } from "zod";
import studentValidationSchema from './student.validation';
// import { Student } from '../Student.modal';
import { MongoServerError } from 'mongodb';



const getAllStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentServices.getallStudentFormDB();
    res.status(200).json({
      success: true,
      message: 'Student is  retrieved Successfuly',
      data: result,
    });
  } catch (err) {
    next(err)
  }
};
const getsingleStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getsingleStudentFormDB(studentId);
    res.status(200).json({
      success: true,
      message: 'single Student is  retrieved Successfuly',
      data: result,
    });
  } catch (err) {
    next(err)
  }
};
const getsingleStudentDeletd = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getsingleStudentDeletedFormDB(studentId);
    res.status(200).json({
      success: true,
      message: 'single Student deleted Successfuly',
      data: result,
    });
  } catch (err) {
    next()
  }
};
export const StudentControlar = {
  // createStudent,
  getAllStudent,
  getsingleStudent,
  getsingleStudentDeletd
};
