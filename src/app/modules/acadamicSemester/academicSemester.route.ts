
import express from 'express'
import { AcademicSemesterControlar } from './academicSemester.contolar'
import validatorRequest from '../../middlwares/validate.request'
import { AcadamicSemesterValidation } from './acadamicSemester.validation'

const route = express.Router()

route.post('/create-academic-semester',validatorRequest(AcadamicSemesterValidation.createAcademicSemsesterSchema), AcademicSemesterControlar.createAcademicSemster)


export const academicSemsemsterRoute = route