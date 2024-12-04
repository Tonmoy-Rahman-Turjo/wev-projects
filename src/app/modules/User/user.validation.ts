import { z } from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({ invalid_type_error: 'password must be a string' })
    .max(20, { message: 'password more then 20 charecters' })
    .optional(),
});

export const uservalidation = {
  userValidationSchema,
};
