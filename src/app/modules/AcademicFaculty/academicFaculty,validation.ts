import { z } from 'zod';
import { updateStudentValidationSchema } from '../student/student.validation';

const AcademicFacultyValidationSchema = z.object({
    body:z.object({
        name: z.string({ invalid_type_error: 'Academic Faculty must be a string' })
         
      })
})
const updateAcademicFacultyValidationSchema = z.object({
    body: z.object({
      name: z.string({
        invalid_type_error: 'Academic faculty must be string',
      }),
    }),
  });
  
export const AcademicFacultyValidation = {
 AcademicFacultyValidationSchema,
 updateAcademicFacultyValidationSchema
};