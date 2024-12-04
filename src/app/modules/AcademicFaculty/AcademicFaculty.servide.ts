
import { TAcademicFaculty } from "./academicFacalty.interface"
import { AcademicFaculty } from "./AcademicFaculty.model"


const createAcademicFacultyDB = async(palylode: TAcademicFaculty)=>{
    /// emester name and semester code chaking 
  
  const result = await AcademicFaculty.create(palylode)
  return result
}

export const academicFacultyServices ={
    createAcademicFacultyDB
}