import React, { useState, useEffect } from 'react';
import variables from '../utils/variables';
import './../../styles/sets.css';

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
    <div className="sets">
      {sets.map((set) => {
        return (
          <a className="set-link" key={set.set_id} href={'/sets/'.concat(set.set_id)}>
            {set.set_name} {set.set_id}{' '}
          </a>
        );
      })}
    </div>
  );
}
