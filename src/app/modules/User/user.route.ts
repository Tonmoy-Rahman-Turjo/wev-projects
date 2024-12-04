import express from 'express';
import { userControlar } from './user.controlar';

import { createStudentValidationSchema } from '../student/student.validation';
import validatorRequest from '../../middlwares/validate.request';

const router = express.Router();

router.post('/create-student', validatorRequest(createStudentValidationSchema),  userControlar.createStudnet);

export const UserRoute = router;
