import express from 'express';
import { StudentControlar } from './student.controlar';

const router = express.Router();
//get
router.get('/', StudentControlar.getAllStudent);
/// single  stundet data gate
router.get('/:studentId', StudentControlar.getsingleStudent);
//welll calle controlar
router.post('/creat-student', StudentControlar.createStudent);
export const StudentRoutes = router;
