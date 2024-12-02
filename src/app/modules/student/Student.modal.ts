var validator = require('validator');

import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import {
  StudentModel,
  TGuardian,
  TLocalGuardian,
  TStudent,
  TUserName,
} from './student.interface';
import config from '../../config';

// User Name Schema
const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'name is requried'],
    // maxlength:20,
    trim: true,
    validate: function (value: string) {
      const fristNameStr =
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      if (value !== fristNameStr) {
        return false;
      }
      return true;
     
    },
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
    validate: {
      validator: (value: any) => validator.isAlpha(value),
      message: 'Last name must contain only letters',
    },
  },
});

// Guardian Schema
const guradianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
});

// Local Guardian Schema
const localgurdianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

// Student Schema
const studentSchema = new Schema<TStudent, StudentModel>(
  {
    id: { type: String, required: true, unique: true },
    user:{
      type: Schema.Types.ObjectId, required: [true , 'user id is requried'], unique:true, ref:'User'
    },
    name: {
      type: userNameSchema,
      required: true,
    },

    gender: {
      type: String,
      enum: {
        values: ['male', 'female', 'other'],
        message: 'bhaitui tur genader thik kor ',
      },
      required: true,
    },
    dateOfBirth: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
    presentAddress: {
      type: String,
      required: true,
    },
    emergencyContactNo: {
      type: String,
      required: true,
    },
    bloogGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    guardian: {
      type: guradianSchema,
      required: true,
    },
    localGuardian: {
      type: localgurdianSchema,
      required: true,
    },
    profileImg: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);


///// vartual
studentSchema.virtual('fullName').get(function () {
  return `${this.name.firstName} ${this.name.middleName} ${this.name.lastName}`;
  //  return this.name.firstName + this.name.middleName + this.name.lastName
});



//// queary medelwar

studentSchema.pre('find', function (next) {
  // console.log(this)
  this.find({ isDeleted: { $ne: true } });
  next();
});
studentSchema.pre('findOne', function (next) {
  // console.log(this)
  this.find({ isDeleted: { $ne: true } });
  next();
});

studentSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});
// creating a custom static methords

studentSchema.statics.isUserExists = async function (id: string) {
  // console.log(id)
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

//// creating a custom instance
// studentSchema.methods.isUserExists =async function(id: string){
//   const existingUser = await Student.findOne({id})
//   return existingUser
// }

// Export the Model
export const Student = model<TStudent, StudentModel>('Student', studentSchema);
