
import express from 'express'

import validatorRequest from '../../middlwares/validate.request'
import { AcademicDepermentValidation } from './academic.deperment.validation'
import { AcademicDepermentControlar } from './academic.deperment.controlar'



const route = express.Router()

route.post('/create-academic-deperment',validatorRequest(AcademicDepermentValidation.updateAcademicDepartmentValidationSchema),AcademicDepermentControlar.createAcademicDeperment)
route.get(
    '/:departmentId',AcademicDepermentControlar.getSingleAcademicDepartment,
  );
  
  route.patch(
    '/:departmentId',
    validatorRequest(
      AcademicDepermentValidation.updateAcademicDepartmentValidationSchema,
    ),
    AcademicDepermentControlar.updateAcademicDeartment,
  );
  
  route.get('/', AcademicDepermentControlar.getAllAcademicDepartments);
  

export const academiDepermentRoute = route