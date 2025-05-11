import { model, Schema } from "mongoose";

import { TAcademicDeperment } from "./Academic.deperment.interface";


const AcademicDepermentSchama = new Schema<TAcademicDeperment>(
    {
      name: {
        type: String,
        require: true,
        unique: true,
      },
      academicFaculty:{
        type:Schema.Types.ObjectId,
        ref: 'academicFaculty'
      }
    
   
    },
    {
      timestamps: true,
    },
  );

  export const AcademicDepartment = model<TAcademicDeperment>('AcademiDeperment', AcademicDepermentSchama);