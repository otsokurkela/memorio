import React from 'react';
import getUser from '../../services/getUser';

export default function Profile() {
  getUser();
  return <div>Profile</div>;
}
