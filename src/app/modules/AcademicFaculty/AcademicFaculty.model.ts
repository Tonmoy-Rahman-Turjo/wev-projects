import { model, Schema } from "mongoose";
import { TAcademicFaculty } from "./academicFacalty.interface";


const AcademicFacultySchama = new Schema<TAcademicFaculty>(
    {
      name: {
        type: String,
        require: true,
        unique: true,
      },
    
   
    },
    {
      timestamps: true,
    },
  );

  export const AcademicFaculty = model<TAcademicFaculty>('AcademiFaculty', AcademicFacultySchama);