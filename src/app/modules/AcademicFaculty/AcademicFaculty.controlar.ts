import httpStatus from "http-status";
import catchAsyn from "../../utils/catchAsync";
import sendResponse from "../../utils/send.response";
import { academicFacultyServices } from "./AcademicFaculty.servide";




const createAcademicFaculty = catchAsyn (async( req, res, next)=>{
    
   const result =  await academicFacultyServices.createAcademicFacultyDB(req.body);
    sendResponse(res,{
        success: true,
        stautsCode: httpStatus.OK,
        message: 'create a new Academic Faculty successfuly',
        data:result
})
})

export const AcademicSemesterControlar ={
  createAcademicFaculty
}