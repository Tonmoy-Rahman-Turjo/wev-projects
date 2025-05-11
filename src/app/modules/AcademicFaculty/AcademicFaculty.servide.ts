
import { TAcademicFaculty } from "./academicFacalty.interface"
import { AcademicFaculty } from "./AcademicFaculty.model"


const createAcademicFacultyDB = async(palylode: TAcademicFaculty)=>{
    /// emester name and semester code chaking 
  
  const result = await AcademicFaculty.create(palylode)
  return result
}
const getAllAcademicFacultiesFromDB = async () => {
  const result = await AcademicFaculty.find();
  return result;
};

const getSingleAcademicFacultyFromDB = async (id: string) => {
  const result = await AcademicFaculty.findById(id);
  return result;
};

const updateAcademicFacultyIntoDB = async (
  id: string,
  payload: Partial<TAcademicFaculty>,
) => {
  const result = await AcademicFaculty.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
export const academicFacultyServices ={
    createAcademicFacultyDB,
    updateAcademicFacultyIntoDB,
    getAllAcademicFacultiesFromDB,
    getSingleAcademicFacultyFromDB
}