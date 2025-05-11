import express from 'express';
import { StudentControlar } from './student.controlar';
import validatorRequest from '../../middlwares/validate.request';
import { updateStudentValidationSchema } from './student.validation';

const router = express.Router();
//get
router.get('/', StudentControlar.getAllStudent);
/// single  stundet data gate
router.get('/:studentId', StudentControlar.getsingleStudent);
router.delete('/:studentId', StudentControlar.getsingleStudentDeletd);
router.patch('/:studentId', validatorRequest(updateStudentValidationSchema),StudentControlar.updateStudent)
//welll calle controlar
// router.post('/creat-student', StudentControlar.createStudent);
export const StudentRoutes = router;
