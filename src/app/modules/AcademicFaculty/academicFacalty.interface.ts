export type TAcademicFaculty = {
    name: string;
    password: string;
    needsPasswordChange: boolean;
    role: 'admin' | 'student' | 'faculty';
    isDeleted: boolean;
    status: 'in-progress' | 'block';
  };