import { object } from "joi";
import config from "../../config";
import { TStudent } from "../student/student.interface";
import {  TUser } from "./user.interfaace";
import { User } from "./user.modal";
import { Student } from "../student/Student.modal";



const creatuserFormDB = async (password: string, studnetData : TStudent)=>{
    //create e ucer object
    const userData: Partial<TUser> = {}
    //   console.log(studnetData)
    ///if pssword is not given ,  user defult password
    userData.password = password || (config.defult_password as string)
    //   console.log(userData)
    //set studet roll
    userData.role = 'student'
     //manualy set genreted id 
    userData.id = '2030100001'
  // create  a user model
    const newUser = await User.create(userData)
  //// creat a student
  if(Object.keys(newUser).length){
    /// set id, _id as user 
    studnetData.id = newUser.id;
    studnetData.user = newUser._id ///refarance id
    const newStudent = await  Student.create(studnetData)
    return newStudent
  }
   
    
}

export const userServices ={
creatuserFormDB
}