import * as yup from 'yup';

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const errorValidate = (
  field: string,
  num: number,
  type: 'min' | 'max' = 'min',
) =>
  `${field} ${
    type === 'min' ? 'should be at least' : 'cannot exceed more than'
  } ${num} characters!`;

const registerSchema = yup.object().shape({
  fullName: yup
    .string()
    .required('Full name is required!')
    .min(8, errorValidate('Full name', 8))
    .max(30, errorValidate('Full name', 30, 'max')),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid!')
    .required('Phone number is required!')
    .min(10, errorValidate('Phone number', 10))
    .max(12, errorValidate('Phone number', 12, 'max')),
  email: yup
    .string()
    .email()
    .required('Email is required!')
    .min(8, errorValidate('Email', 8))
    .max(30, errorValidate('Email', 30, 'max')),
  password: yup
    .string()
    .required('Password is required!')
    .min(8, errorValidate('Password', 8))
    .max(30, errorValidate('Password', 30, 'max')),
  cPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Confirm password does not must match!'),
});

export default registerSchema;
