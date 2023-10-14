import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Authentication/Login';
import Header from './components/header/Header';
import Profile from './components/Authentication/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
