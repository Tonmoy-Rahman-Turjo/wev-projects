import { TAcadamicSemesterCode, TAcademicSemseter, TAcademisSemesterCodeMaper } from "./acadamicSemesre.interface"
import { accademicSemesterNameCodeMaper } from "./acadamicSemester.constent"
import { AcademicSemester } from "./acadaminSemester.model"


const createAcademicSemesterDB = async(palylode: TAcademicSemseter)=>{
    /// emester name and semester code chaking 
  
  
    if(accademicSemesterNameCodeMaper[palylode.name] !== palylode.code){
      throw new Error('Invalid code semester code')
    }
  const result = await AcademicSemester.create(palylode)
  return result
}
const getAllAcademicSemestersFromDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};

const getSingleAcademicSemesterFromDB = async (id: string) => {
  const result = await AcademicSemester.findById(id);
  return result;
};

const updateAcademicSemesterIntoDB = async (
  id: string,
  payload: Partial<TAcademicSemseter>,
) => {
  if (
    payload.name &&
    payload.code &&
   accademicSemesterNameCodeMaper[payload.name] !== payload.code
  ) {
    throw new Error('Invalid Semester Code');
  }

  const result = await AcademicSemester.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
export const academicSemesterServices ={
    createAcademicSemesterDB,
    updateAcademicSemesterIntoDB,
    getAllAcademicSemestersFromDB,
    getSingleAcademicSemesterFromDB
}