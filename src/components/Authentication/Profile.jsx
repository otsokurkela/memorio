import React, { useState, useEffect } from 'react';

export default function Profile() {
  const [user, setUser] = useState();
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer ' + localStorage.getItem('accessToken')
        }
      });
      const userData = await response.json();
      setUser(userData.user);
    };
    fetchUser();
  }, []);
  return <div>{user.user_name}</div>;
}
