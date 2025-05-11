import httpStatus from "http-status";
import catchAsyn from "../../utils/catchAsync";
import sendResponse from "../../utils/send.response";
import { academicDepermentServices } from "./acadamic.deperment.service";





const createAcademicDeperment = catchAsyn (async( req, res, next)=>{
    
   const result =  await academicDepermentServices.createAcademicDepermentDB(req.body);
   console.log(result)
    sendResponse(res,{
        success: true,
        stautsCode: httpStatus.OK,
        message: 'create a new Academic deperment successfuly',
        data:result
})
})
const getAllAcademicDepartments = catchAsyn(async (req, res) => {
    const result =
      await academicDepermentServices.getAllAcademicDepartmentsFromDB();
  
    sendResponse(res, {
      stautsCode: httpStatus.OK,
      success: true,
      message: 'Academic departments are retrieved successfully',
      data: result,
    });
  });
  
  const getSingleAcademicDepartment = catchAsyn(async (req, res) => {
    const { departmentId } = req.params;
    const result =
      await academicDepermentServices.getSingleAcademicDepartmentFromDB(
        departmentId,
      );
  
    sendResponse(res, {
      stautsCode: httpStatus.OK,
      success: true,
      message: 'Academic department is retrieved succesfully',
      data: result,
    });
  });
  
  const updateAcademicDeartment = catchAsyn(async (req, res) => {
    const { departmentId } = req.params;
    const result =
      await academicDepermentServices.updateAcademicDepartmentIntoDB(
        departmentId,
        req.body,
      );
  
    sendResponse(res, {
      stautsCode: httpStatus.OK,
      success: true,
      message: 'Academic department is updated succesfully',
      data: result,
    });
  });
export const AcademicDepermentControlar ={
  createAcademicDeperment,
  getAllAcademicDepartments,
  getSingleAcademicDepartment,
  updateAcademicDeartment
}