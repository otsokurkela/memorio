import React, { useState, useEffect } from 'react';
import variables from '../utils/variables';

export default function Sets() {
  const [sets, setSets] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchSets();
  }, []);

  const fetchSets = () => {
    setLoading(true);
    fetch(variables('api_url').concat('/cards/sets'), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + localStorage.getItem('accessToken')
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setSets(data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      {sets.map((set) => {
        return <p key={set.set_id}>{set.set_name}</p>;
      })}
    </div>
  );
}
