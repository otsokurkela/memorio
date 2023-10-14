import React from 'react';
import './../../styles/header.css';

import LoginProfile from './LoginProfile';
import Logout from './Logout';

export default function Header() {
  return (
    <div className="header">
      <LoginProfile />
      <Logout />
    </div>
  );
}
