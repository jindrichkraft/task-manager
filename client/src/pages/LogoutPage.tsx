import { useEffect } from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import { useAuth } from '../hooks/auth';

const LogoutPage = (): JSX.Element => {
  const { handleLogout } = useAuth();

  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <DefaultLayout>
      <h1>Logout</h1>
      <p>You&apos;ve been logged out.</p>
    </DefaultLayout>
  );
};

export default LogoutPage;
