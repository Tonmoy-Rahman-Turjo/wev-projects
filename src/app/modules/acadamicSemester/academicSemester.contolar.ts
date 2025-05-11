import httpStatus from "http-status";
import catchAsyn from "../../utils/catchAsync";
import sendResponse from "../../utils/send.response";
import { academicSemesterServices } from "./academicSemester.service";



const createAcademicSemster = catchAsyn (async( req, res, next)=>{
    
   const result =  await academicSemesterServices.createAcademicSemesterDB(req.body);
    sendResponse(res,{
        success: true,
        stautsCode: httpStatus.OK,
        message: 'create a new semester duccessfuly',
        data:result
})
})
const getAllAcademicSemesters = catchAsyn(async (req, res) => {
    const result = await academicSemesterServices.getAllAcademicSemestersFromDB();
  
    sendResponse(res, {
      stautsCode: httpStatus.OK,
      success: true,
      message: 'Academic semesters are retrieved successfully',
      data: result,
    });
  });
  
  const getSingleAcademicSemester = catchAsyn(async (req, res) => {
    const { semesterId } = req.params;
    const result =
      await academicSemesterServices.getSingleAcademicSemesterFromDB(semesterId);
  
    sendResponse(res, {
      stautsCode: httpStatus.OK,
      success: true,
      message: 'Academic semester is retrieved succesfully',
      data: result,
    });
  });
  
  const updateAcademicSemester = catchAsyn(async (req, res) => {
    const { semesterId } = req.params;
    const result = await academicSemesterServices.updateAcademicSemesterIntoDB(
      semesterId,
      req.body,
    );
  
    sendResponse(res, {
      stautsCode: httpStatus.OK,
      success: true,
      message: 'Academic semester is retrieved succesfully',
      data: result,
    });
  });
export const AcademicSemesterControlar ={
    createAcademicSemster,
    getAllAcademicSemesters,
    getSingleAcademicSemester,
    updateAcademicSemester
}