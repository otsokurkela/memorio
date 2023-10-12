import React from 'react';
import { Link } from 'react-router-dom';

import checkLoggedIn from '../utils/checkLoggedIn';

export default function LoginProfile() {
  return (
    <div className="login-profile-button">
      {checkLoggedIn ? (
        <>Profile</>
      ) : (
        <Link to="/login" relative="path">
          Login
        </Link>
      )}
    </div>
  );
}
