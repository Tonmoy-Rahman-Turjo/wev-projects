// import { Schema, model, connect } from 'mongoose';
// import { Gauardian, localguardian, Student, userName } from './student/student.interface';
// const userNameSchema = new Schema<userName>({
//     fristName:{
//         type: String,
//         required: true
//     },
//     midelName:{
//         type: String
//     },
//     lastName:{
//         type: String,
//         required: true,
//     }
// })
// const guradianSchema = new Schema<Gauardian>({
//     fatherName:{
//         type:String,
//         required: true,
//     },
//     fotheroccopation:{
//         type:String,
//         required: true,
//     },
//     fatherCon:{
//         type:String,
//         required: true,
//     },
//     montherName:{
//         type:String,
//         required: true,
//     },
//     motherocc:{
//         type:String,
//         required: true,
//     },
//     motherP:{
//         type:String,
//         required: true,
//     }
// })
// const localgurdianSchema = new Schema<localguardian>({

//         name:{
//             type:String,
//             required: true,
//         },
//         occopation:{
//             type:String,
//             required: true,
//         },
//         contract:{ type:String,
//             required: true,},
//         addredd:{
//             type:String,
//             required: true,
//         }

// })
// const studentScima = new Schema<Student>({
//     id:{ id: String },
//     name:userNameSchema,
//     gender:["male", "female"],
//     detOfBath:{
//         type: String,
//     },
//     email:{
//         type:String,
//         required: true
//     },
//     contractNumber:{
//         type: String,
//         required: true

//     },
//     presentAddres:{
//         type: String,
//         required: true

//     },
//     parmanentAddress:{
//         type: String,
//         required: true

//     },
//     emergencyCon:{
//         type:String,
//         required: true,
//     },
//     bloodGroup:["O+", "-O", "A+", "AB"],
//     gauardian: guradianSchema,
//     localGurdian: localgurdianSchema,
//     profileImg:{
//         type:String,
//         required: true,
//     },
//     isActive:["active", "blocked"]
// }
// )
// ///modal

//  export const StudentModel = model <Student>('Student',  studentScima )

import { Schema, model } from 'mongoose';
import {
  Gauardian,
  localguardian,
  Student,
  userName,
} from './student/student.interface';

// User Name Schema
const userNameSchema = new Schema<userName>({
  fristName: {
    type: String,
    required: true,
  },
  midelName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

// Guardian Schema
const guradianSchema = new Schema<Gauardian>({
  fatherName: {
    type: String,
    required: true,
  },
  fotheroccopation: {
    type: String,
    required: true,
  },
  fatherCon: {
    type: String,
    required: true,
  },
  montherName: {
    type: String,
    required: true,
  },
  motherocc: {
    type: String,
    required: true,
  },
  motherP: {
    type: String,
    required: true,
  },
});

// Local Guardian Schema
const localgurdianSchema = new Schema<localguardian>({
  name: {
    type: String,
    required: true,
  },
  occopation: {
    type: String,
    required: true,
  },
  contract: {
    type: String,
    required: true,
  },
  addredd: {
    type: String,
    required: true,
  },
});

// Student Schema
const studentSchema = new Schema<Student>({
  name: userNameSchema,
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  },
  detOfBath: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  contractNumber: {
    type: String,
    required: true,
  },
  presentAddres: {
    type: String,
    required: true,
  },
  parmanentAddress: {
    type: String,
    required: true,
  },
  emergencyCon: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    enum: ['O+', 'O-', 'A+', 'AB'],
  },
  gauardian: guradianSchema,
  localGurdian: localgurdianSchema,
  profileImg: {
    type: String,
    required: true,
  },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    required: true,
  },
});

// Add a Virtual `id` Property
studentSchema.virtual('id').get(function () {
  return this._id.toString();
});

// Export the Model
export const StudentModel = model<Student>('Student', studentSchema);
