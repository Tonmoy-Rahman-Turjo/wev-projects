import { Router } from 'express';
import { StudentRoutes } from '../modules/student/student.route';
import { UserRoute } from '../modules/User/user.route';
import path from 'path';

import { academicSemsemsterRoute } from '../modules/acadamicSemester/academicSemester.route';
import { academiFacultyRoute } from '../modules/AcademicFaculty/academicFaculty.route';

const router = Router();
const moduleRoute = [
  {
    path: '/users',
    route: UserRoute,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/academic-semester',
    route: academicSemsemsterRoute,
  },
  {
    path: '/academic-faculty',
    route: academiFacultyRoute,
  },
];
moduleRoute.forEach((route) => router.use(route.path, route.route));
export default router;
