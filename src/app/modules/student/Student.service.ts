import { StudentModel } from '../Student.modal';
import { Student } from './student.interface';

const creatStucentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};
const getallStudentFormDB = async () => {
  const result = await StudentModel.find();
  return result;
};
const getsingleStudentFormDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};
export const StudentServices = {
  creatStucentIntoDB,
  getallStudentFormDB,
  getsingleStudentFormDB,
};
