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
const getAllAcademicFaculties = catchAsyn(async (req, res) => {
  const result = await academicFacultyServices.getAllAcademicFacultiesFromDB();

  sendResponse(res, {
    stautsCode: httpStatus.OK,
    success: true,
    message: 'Academic faculties are retrieved successfully',
    data: result,
  });
});

const getSingleAcademicFaculty = catchAsyn(async (req, res) => {
  const { facultyId } = req.params;
  const result =
    await academicFacultyServices.getSingleAcademicFacultyFromDB(facultyId);

  sendResponse(res, {
    stautsCode: httpStatus.OK,
    success: true,
    message: 'Academic faculty is retrieved succesfully',
    data: result,
  });
});

const updateAcademicFaculty = catchAsyn(async (req, res) => {
  const { facultyId } = req.params;
  const result = await academicFacultyServices.updateAcademicFacultyIntoDB(
    facultyId,
    req.body,
  );

  sendResponse(res, {
    stautsCode: httpStatus.OK,
    success: true,
    message: 'Academic faculty is updated succesfully',
    data: result,
  });
});
export const AcademicFacultyControlar ={
  createAcademicFaculty,
  getAllAcademicFaculties,
  getSingleAcademicFaculty,
  updateAcademicFaculty
}