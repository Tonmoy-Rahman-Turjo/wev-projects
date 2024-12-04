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

export const AcademicSemesterControlar ={
    createAcademicSemster
}