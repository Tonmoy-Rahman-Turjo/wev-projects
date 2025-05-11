import { model, Schema } from "mongoose";

import { TAcademicDeperment } from "./Academic.deperment.interface";
import { error } from "console";
import { AcademicFaculty } from "../AcademicFaculty/AcademicFaculty.model";


const AcademicDepermentSchama = new Schema<TAcademicDeperment>(
    {
      name: {
        type: String,
        require: true,
        unique: true,
      },
      academicFaculty:{
        
        type:Schema.Types.ObjectId,
        ref: 'AcademicFaculty' 
      }
    
   
    },
    {
      timestamps: true,
    },
  );
  AcademicDepermentSchama.pre('save' , async function (next){
    const isDepermentExsit = await AcademicDepartment.findOne({name: this.name})
    if(isDepermentExsit){
      throw new Error('This deperment is all ready exsit')
    }
  })

  AcademicDepermentSchama.pre('findOne', async  function(next){
    const quariy =  this.getQuery()
    const isFindOneExist = await AcademicDepartment.findOne(quariy)
    if(!isFindOneExist){
      throw new Error('this depermnet dosent not exsit')
    }
    next()
  })
  export const AcademicDepartment = model<TAcademicDeperment>('AcademiDeperment', AcademicDepermentSchama);