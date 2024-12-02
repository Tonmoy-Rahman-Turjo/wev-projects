import Joi from 'joi';

// User Name Schema
const userNameValidationSchema = Joi.object({
  fristName: Joi.string()
    .required()
    .max(20)
    .trim()
    .custom((value, helpers) => {
      const formattedStr =
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      if (value !== formattedStr) {
        return helpers.message({
            custom: 'First name must start with an uppercase letter followed by lowercase letters',
          }); // Cor
      }
      return value;
    }),
  midelName: Joi.string().optional(),
  lastName: Joi.string()
    .required()
    .pattern(/^[a-zA-Z]+$/)
    .messages({
      'string.pattern.base': 'Last name must contain only letters',
    }),
});

// Guardian Schema
const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required(),
  fotheroccopation: Joi.string().required(),
  fatherCon: Joi.string().required(),
  montherName: Joi.string().required(),
  motherocc: Joi.string().required(),
  motherP: Joi.string().required(),
});

// Local Guardian Schema
const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required(),
  occopation: Joi.string().required(),
  contract: Joi.string().required(),
  addredd: Joi.string().required(),
});

// Student Schema
const studentVaidationSchema = Joi.object({
  id: Joi.string().required(),
  name: userNameValidationSchema.required(),
  gender: Joi.string()
    .valid('male', 'female', 'other')
    .required()
    .messages({
      'any.only': 'Gender must be one of male, female, or other',
    }),
  detOfBath: Joi.date().optional(),
  email: Joi.string().email().required(),
  contractNumber: Joi.string().required(),
  presentAddres: Joi.string().required(),
  parmanentAddress: Joi.string().required(),
  emergencyCon: Joi.string().required(),
  bloodGroup: Joi.string().valid('O+', 'O-', 'A+', 'AB').optional(),
  gauardian: guardianValidationSchema.required(),
  localGurdian: localGuardianValidationSchema.required(),
  profileImg: Joi.string().uri().required(),
  isActive: Joi.string()
    .valid('active', 'blocked')
    .default('active')
    .required(),
});

export default  studentVaidationSchema;
