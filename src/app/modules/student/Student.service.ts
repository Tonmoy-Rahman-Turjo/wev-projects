import { error } from 'console';
import { Student } from './Student.modal';
import { TStudent } from './student.interface';

const creatStucentIntoDB = async (studentData: TStudent) => {
  if (await Student.isUserExists(studentData.id)) {
    throw new Error('User all ready exsit');
  }
  const result = await Student.create(studentData);
  // console.log(result)

  // //  //static mathrod

  // const stundet = new Student(studentData) //creat an instance
  // if(await stundet.isUserExists(studentData.id)){
  //   throw new Error('User all ready exsit')
  // }

  // const result = await stundet.save() //built instance methrod
  return result;
};
const getallStudentFormDB = async () => {
  const result = await Student.find();

  return result;
};
const getsingleStudentFormDB = async (id: string) => {
  // const result = await Student.findOne({ id });
  // return result;
  const resutl = await Student.aggregate([{ $match: { id: id } }]);
  return resutl;
};
const getsingleStudentDeletedFormDB = async (id: string) => {
  console.log(id);
  const result = await Student.updateOne({ id }, { isDeleted: true });

  return result;
};
const updateStudentIntoDB = async (id: string, payload: Partial<TStudent>) => {
  const { name, guardian, localGuardian, ...remainingStudentData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  /*
    guardain: {
      fatherOccupation:"Teacher"
    }

    guardian.fatherOccupation = Teacher

    name.firstName = 'Mezba'
    name.lastName = 'Abedin'
  */

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value;
    }
  }

  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiedUpdatedData[`guardian.${key}`] = value;
    }
  }

  if (localGuardian && Object.keys(localGuardian).length) {
    for (const [key, value] of Object.entries(localGuardian)) {
      modifiedUpdatedData[`localGuardian.${key}`] = value;
    }
  }

  console.log(modifiedUpdatedData);

  const result = await Student.findOneAndUpdate({ id }, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};
export const StudentServices = {
  creatStucentIntoDB,
  getallStudentFormDB,
  getsingleStudentFormDB,
  getsingleStudentDeletedFormDB,
  updateStudentIntoDB
};
