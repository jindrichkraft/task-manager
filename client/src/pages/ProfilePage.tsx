import DefaultLayout from '../layouts/DefaultLayout';
import { useAuth } from '../hooks/auth';
import { useEndpoint } from '../hooks/api';

import type { IProfileInfo } from '../typings/profile';

const ProfilePage = (): JSX.Element => {
  const { auth } = useAuth();
  const { data, loading } = useEndpoint<IProfileInfo>('/profile', auth);

  return (
    <DefaultLayout>
      {loading ? <p>Loading...</p> : null}
      {data ? (
        <>
          <h1>{data.display_name}</h1>
          <p>Username: {data.username}</p>
        </>
      ) : null}
    </DefaultLayout>
  );
};

export default ProfilePage;
