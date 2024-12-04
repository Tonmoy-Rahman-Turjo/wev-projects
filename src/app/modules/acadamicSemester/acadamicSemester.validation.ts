
import z from 'zod'
import { TAcadamicSemesterCode, TAcadamicSemesterNmae, TMonths } from './acadamicSemesre.interface'
import { months } from './acadamicSemester.constent'


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


export const AcadamicSemesterValidation = {
    createAcademicSemsesterSchema
}