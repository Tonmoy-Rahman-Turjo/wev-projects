import { Router } from 'express';
import { StudentRoutes } from '../modules/student/student.route';
import { UserRoute } from '../modules/User/user.route';
import path from 'path';

import { academicSemsemsterRoute } from '../modules/acadamicSemester/academicSemester.route';
import { academiFacultyRoute } from '../modules/AcademicFaculty/academicFaculty.route';
import { academiDepermentRoute } from '../modules/AcademicDeperment/academic.deperment.route';

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
  {
    path: '/academic-deperment',
    route: academiDepermentRoute,
  },
];
moduleRoute.forEach((route) => router.use(route.path, route.route));
export default router;
