import React from 'react';
import handleLogOut from '../../services/handleLogOut';

export default function Logout() {
  return (
    <div>
      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
}
