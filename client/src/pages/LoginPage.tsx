import { useFormik } from 'formik';

import DefaultLayout from '../layouts/DefaultLayout';
import { useAuth } from '../hooks/auth';
import { loginSchema } from '../schemas/auth';

const LoginPage = (): JSX.Element => {
  const { handleLogin } = useAuth();

  const onSubmit = async () => {
    const authData = await handleLogin({
      username: values.username,
      password: values.password,
    });
    if (authData && !authData.success) {
      if (authData.message) alert(authData.message);
    }
  };

  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <DefaultLayout>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <br />
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.username && errors.username ? (
          <>
            <br />
            <span>{errors.username}</span>
          </>
        ) : null}
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.password && errors.password ? (
          <>
            <br />
            <span>{errors.password}</span>
          </>
        ) : null}
        <br />
        <br />
        <input type="submit" value="Sign in" disabled={isSubmitting} />
      </form>
    </DefaultLayout>
  );
};

export default LoginPage;
