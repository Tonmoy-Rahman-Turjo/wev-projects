
import express from 'express'

import validatorRequest from '../../middlwares/validate.request'
import { AcademicFacultyValidation } from './academicFaculty,validation'
import { AcademicFacultyControlar} from './AcademicFaculty.controlar'


const route = express.Router()

route.post('/create-academic-faculty',validatorRequest(AcademicFacultyValidation.AcademicFacultyValidationSchema),AcademicFacultyControlar.createAcademicFaculty)


route.get('/:facultyId', AcademicFacultyControlar.getSingleAcademicFaculty);

route.patch(
  '/:facultyId',
  validatorRequest(
    AcademicFacultyValidation.updateAcademicFacultyValidationSchema,
  ),
  AcademicFacultyControlar.updateAcademicFaculty,
);

route.get('/', AcademicFacultyControlar.getAllAcademicFaculties);
export const academiFacultyRoute = route