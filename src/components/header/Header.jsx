import React from 'react';
import './../../styles/header.css';

import { Link } from 'react-router-dom';

import LoginProfile from './LoginProfile';
import Logout from './Logout';
import Home from '../home/Home';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <div className="header">
      <Link to="/" relative="path" className="header-link">
        <h1 className="header-link">Memorio</h1>
      </Link>
      <Link to="/sets" relative="path" className="header-link">
        Sets
      </Link>
      <SearchBar />
      <LoginProfile className="header-link" />
      <Logout />
    </div>
  );
}
