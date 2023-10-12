import React, { useState } from 'react';
import getUsers from '../services/getUsers';

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  getUsers();

  return (
    <div>
      <h1>Home</h1>
      {loggedIn ? <>Logged in</> : <></>}
    </div>
  );
}
