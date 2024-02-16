import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import variables from './components/utils/variables';

import Home from './components/Home';
import Login from './components/profile/Login';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';

import Sets from './components/cards/Sets';
import Set from './components/cards/Set';
import Flashcards from './components/cards/Flashcards';
import CreateSet from './components/cards/CreateSet';

function App() {
  const [sets, setSets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); // täytyy tehdä jotain
  useEffect(() => {
    if (loggedIn) {
      fetchSets();
    }
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
        <Route path="/sets" element={<Sets loggedIn={loggedIn} />} />
        <Route path="/sets/create" element={<CreateSet />} />
        {loggedIn ? (
          sets.map((set) => {
            return (
              <React.Fragment key={set.set_id}>
                <Route
                  path={'/sets/'.concat(set.set_id)}
                  key={set.set_id}
                  element={<Set data={set} />}
                />
                <Route
                  path={'/sets/flashcards/'.concat(set.set_id)}
                  key={set.set_id}
                  element={<Flashcards data={set} />}
                />
              </React.Fragment>
            );
          })
        ) : (
          <>
            <Route path="/login" element={<Login />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
