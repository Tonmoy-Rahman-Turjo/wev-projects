import { TAcademicSemseter } from '../acadamicSemester/acadamicSemesre.interface';
import { User } from './user.modal';

const findLastStudnetId = async () => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({
      createAt: -1,
    })
    .lean();
  return lastStudent?.id ? lastStudent.id : undefined;
};

export const genaretStudentId = async (payload: TAcademicSemseter) => {
let  currentId =  (0).toString();
  const lastStudentId = await findLastStudnetId()
  const lastStudentIdSemesterCode = lastStudentId?.substring(4,6);
  const lastStudentYear =  lastStudentId?.substring(0,4)
  const currentSemesterCode = payload.code;
  const currentSemesterYear = payload.year;
  if(lastStudentId && lastStudentIdSemesterCode === currentSemesterCode && lastStudentYear === currentSemesterYear){
    currentId = lastStudentId.substring(6)
  }  
  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  incrementId = `${payload.year}${payload.code}${incrementId}`;
  return incrementId;
};
