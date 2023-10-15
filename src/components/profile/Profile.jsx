import React, { useState, useEffect } from 'react';

export default function Profile() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    setLoading(true);
    fetch('http://localhost:5000/api/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + localStorage.getItem('accessToken')
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  };
  return <div>{loading ? <div></div> : <div>{user.user ? user.user.user_name : <></>}</div>}</div>;
}
