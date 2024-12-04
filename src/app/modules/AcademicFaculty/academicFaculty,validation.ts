import { z } from 'zod';

const AcademicFacultyValidationSchema = z.object({
    body:z.object({
        name: z
          .string({ invalid_type_error: 'Academic Faculty must be a string' })
         
      })
})

export const AcademicFacultyValidation = {
 AcademicFacultyValidationSchema
};