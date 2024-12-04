
import express from 'express'

import validatorRequest from '../../middlwares/validate.request'
import { AcademicFacultyValidation } from './academicFaculty,validation'
import { AcademicSemesterControlar } from './AcademicFaculty.controlar'


const route = express.Router()

route.post('/create-academic-faculty',validatorRequest(AcademicFacultyValidation.AcademicFacultyValidationSchema),AcademicSemesterControlar.createAcademicFaculty)


export const academiFacultyRoute = route