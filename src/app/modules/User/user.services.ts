import config from '../../config';
import { TStudent } from '../student/student.interface';
import { TUser } from './user.interfaace';
import { User } from './user.modal';
import { Student } from '../student/Student.modal';
import { TAcademicSemseter } from '../acadamicSemester/acadamicSemesre.interface';
// import { AcademicSemester, academicSemester } from '../acadamicSemester/acadaminSemester.model';
import { genaretStudentId } from './user.utils';
import { AcademicSemester } from '../acadamicSemester/acadaminSemester.model';

const creatuserFormDB = async (password: string, payload: TStudent) => {
  //create e ucer object
  const userData: Partial<TUser> = {};
  //   console.log(studnetData)
  ///if pssword is not given ,  user defult password
  userData.password = password || (config.defult_password as string);
  //   console.log(userData)
  //set studet roll
  userData.role = 'student';
 
 const admissionSemesters = await AcademicSemester.findById(payload.admissionSemester);
 if(!admissionSemesters){
  throw new Error('admission semester not found')
 }
  //manualy set genreted id
  userData.id = await genaretStudentId(admissionSemesters)
  // create  a user model
  const newUser = await User.create(userData);
  //// creat a student
  if (Object.keys(newUser).length) {
    /// set id, _id as user
    payload.id = newUser.id;
   payload.user = newUser._id; ///refarance id
    const newStudent = await Student.create(payload);
    return newStudent;
  }
};

export const userServices = {
  creatuserFormDB,
};
