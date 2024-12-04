
import { model, Schema } from "mongoose";
import {  TAcademicSemseter } from "./acadamicSemesre.interface";

import { acadamicSemesterCode, acadamicSemesterName, months } from "./acadamicSemester.constent";
import { error } from "console";


const acadamicSemesterSchem = new Schema<TAcademicSemseter>(
    {
   name:{type: String, required: true , enum: acadamicSemesterName},
   year:{type: String, required: true },
   code:{type: String, required: true, enum: acadamicSemesterCode},
   startMonth:{type: String, enum: months, required: true},
   endMonth:{type: String, enum: months, required: true}
   
   
},{
    timestamps:true
})

 acadamicSemesterSchem.pre('save', async function (next) {
    const isSemeserExsits = await AcademicSemester.findOne({
        year: this.year,
        name: this.name
    })
    if(isSemeserExsits){
        throw new Error('this semester all ready exsits')
    }
    next()
 })

 
export const AcademicSemester = model<TAcademicSemseter>('AcademiceSemesert', acadamicSemesterSchem)
