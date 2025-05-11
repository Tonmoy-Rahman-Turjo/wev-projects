
import { TAcademicDeperment } from "./Academic.deperment.interface"
import { AcademicDepartment } from "./academic.deperment.model"




const createAcademicDepermentDB = async(palylode: TAcademicDeperment)=>{
    /// emester name and semester code chaking 
  
  const result = await AcademicDepartment.create(palylode)
  console.log(result)
  return result
  
}
const getAllAcademicDepartmentsFromDB = async () => {
    const result = await AcademicDepartment.find().populate('academicFaculty');
    return result;
  };
  
  const getSingleAcademicDepartmentFromDB = async (id: string) => {
    const result =
      await AcademicDepartment.findById(id).populate('academicFaculty');
    return result;
  };
  
  const updateAcademicDepartmentIntoDB = async (
    id: string,
    payload: Partial<TAcademicDeperment>,
  ) => {
    const result = await AcademicDepartment.findOneAndUpdate(
      { _id: id },
      payload,
      {
        new: true,
      },
    );
    return result;
  };
export const academicDepermentServices ={
  createAcademicDepermentDB,
  getAllAcademicDepartmentsFromDB,
  getSingleAcademicDepartmentFromDB,
  updateAcademicDepartmentIntoDB
}