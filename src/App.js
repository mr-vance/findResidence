import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Signup from './pages/signup';
import Login from './pages/login';
import Home from './pages/home'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Our Accommodation Platform</h1>
          <p>Find your perfect accommodation with ease!</p>
          <div className="buttons-container">
            <Link to="/signup">
              <button className="round-button signup-button">Sign Up</button>
            </Link>
            <Link to="/login">
              <button className="round-button login-button">Login</button>
            </Link>
          </div>
        </header>

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
