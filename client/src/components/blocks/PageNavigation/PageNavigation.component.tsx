import { Link } from 'react-router-dom';

import { useAuth } from '../../../hooks/auth';

const PageNavigation = (): JSX.Element => {
  const { auth } = useAuth();

  return (
    <nav>
      <h2>Page Navigation</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {auth ? (
          <>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/logout"> Logout</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default PageNavigation;
