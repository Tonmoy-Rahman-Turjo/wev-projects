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

export const academicSemesterServices ={
    createAcademicSemesterDB
}