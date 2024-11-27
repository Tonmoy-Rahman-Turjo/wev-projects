import { Request, Response } from 'express';
import { send } from 'process';
import { StudentServices } from './Student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await StudentServices.creatStucentIntoDB(studentData);
    //well calle service funcation to send data

    //response
    res.status(200).json({
      success: true,
      message: 'Student Creat Successfuly',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getallStudentFormDB();
    res.status(200).json({
      success: true,
      message: 'Student is  retrieved Successfuly',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getsingleStudent = async (req: Request, res: Response) => {
  try {
    const { stundetId } = req.params;
    const result = await StudentServices.getsingleStudentFormDB(stundetId);
    res.status(200).json({
      success: true,
      message: 'single Student is  retrieved Successfuly',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const StudentControlar = {
  createStudent,
  getAllStudent,
  getsingleStudent,
};
