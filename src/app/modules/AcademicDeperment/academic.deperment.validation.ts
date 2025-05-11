// import { z } from "zod";

import { z } from "zod";

// const AcademicDepermentValidationSchema = z.object({
//     body:z.object({
//         name: z
//           .string({ invalid_type_error: 'Academic Deperment must be a string',
//             required_error: 'Name is requried'
//            }),
         
         
//       }),
//       academicFaculty:z.string({
//         invalid_type_error: 'Academic Deperment must be a string' ,
//         required_error: 'Faculty is required'
//       })
// })

// export const AcademicDepermentValidation = {
// AcademicDepermentValidationSchema
// };


const AcademicDepermentValidationSchema = z.object({
    name: z.string({ 
        invalid_type_error: 'Academic Deperment must be a string',
        required_error: 'Name is required'
      }),
    academicFaculty: z.string({
      invalid_type_error: 'Academic Faculty must be a string',
      required_error: 'Faculty is required'
    })
});
const updateAcademicDepartmentValidationSchema = z.object({
    body: z.object({
      name: z
        .string({
          invalid_type_error: 'Academic department must be string',
          required_error: 'Name is required',
        })
        .optional(),
      academicFaculty: z.string({
          invalid_type_error: 'Academic faculty must be string',
          required_error: 'Faculty is required',
        })
        .optional(),
    }),
  });
  
export const AcademicDepermentValidation = {
    AcademicDepermentValidationSchema,
    updateAcademicDepartmentValidationSchema
};
