import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import variables from './components/utils/variables';

import Home from './components/Home';
import Login from './components/profile/Login';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';
import Sets from './components/cards/Sets';
import Set from './components/cards/Set';

function App() {
  const [sets, setSets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
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
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sets" element={<Sets />} />
        {sets.map((set) => {
          return (
            <Route
              path={'/sets/'.concat(set.set_id)}
              key={set.set_id}
              element={<Set data={set} />}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
