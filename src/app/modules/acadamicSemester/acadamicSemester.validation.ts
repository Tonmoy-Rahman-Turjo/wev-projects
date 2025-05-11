
import z from 'zod'
import { TAcadamicSemesterCode, TAcadamicSemesterNmae, TMonths } from './acadamicSemesre.interface'
import { accademicSemesterNameCodeMaper, months } from './acadamicSemester.constent'


const acadamicSemesterName : TAcadamicSemesterNmae[] = ['Autumn', 'Summar', 'Fall' ]
const acadamicSemesterCode : TAcadamicSemesterCode[] = ['01', '02', '03' ]
const  createAcademicSemsesterSchema = z.object({
     body: z.object({
    name:z.enum([...acadamicSemesterName] as [string, ... string[]]),
    code:z.enum([...acadamicSemesterCode] as [string, ...string[]]),
    year:z.string(),
    startMonth:z.enum([...months] as [string, ...string[]]),
    endMonth: z.enum([...months] as [string, ...string[]])
     })
})

const updateAcademicSemesterValidationSchema = z.object({
    body: z.object({
      name: z.enum([...acadamicSemesterName] as [string, ...string[]]).optional(),
      year: z.string().optional(),
      code: z.enum([...acadamicSemesterCode] as [string, ...string[]]).optional(),
      startMonth: z.enum([...months] as [string, ...string[]]).optional(),
      endMonth: z.enum([...months] as [string, ...string[]]).optional(),
    }),
  });
export const AcadamicSemesterValidation = {
    createAcademicSemsesterSchema,
    updateAcademicSemesterValidationSchema
}