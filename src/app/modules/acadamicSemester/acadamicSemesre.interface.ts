


 export type TMonths = | "January"| "February"| "March"| "April"| "May"| "June"| "July"| "August"| "September"| "October"
| "November"  | "December";
 export type TAcadamicSemesterNmae= 'Autumn'| 'Summar'| 'Fall'
 export  type TAcadamicSemesterCode= '01'| '02'|'03'
export type TAcademicSemseter={
    name: TAcadamicSemesterNmae,
    code: TAcadamicSemesterCode,
    year: string,
    startMonth: TMonths,
    endMonth: TMonths
}

 export type TAcademisSemesterCodeMaper = {
    [ key: string]:string
   }