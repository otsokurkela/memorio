import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginProfile() {
  return (
    <div className="login-profile-button">
      {localStorage.getItem('accessToken') != null ? (
        <Link to="/profile" relative="path" className="header-link">
          Profile
        </Link>
      ) : (
        <Link to="/login" relative="path" className="header-link">
          Login
        </Link>
      )}
    </div>
  );
}
