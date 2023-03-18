import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, 'Username needs to be 4 characters minimum!')
    .max(32, 'Username needs to be 32 characters maximum!')
    .required('Username is required!'),
  password: yup
    .string()
    .min(6, 'Password needs to be 6 characters minimum!')
    .max(32, 'Password needs to be 32 characters maximum!')
    .required('Password is required!'),
});
