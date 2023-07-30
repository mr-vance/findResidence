import React from 'react';
import { BrowserRouter as Router, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Signup from './pages/signup';
import Login from './pages/login';

function App() {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    // Navigate to the signup page
    navigate('/signup');
  };

  const handleLoginClick = () => {
    // Navigate to the login page
    navigate('/login');
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Our Accommodation Platform</h1>
          <p>Find your perfect accommodation with ease!</p>
          <div className="buttons-container">
            <button className="round-button signup-button" onClick={handleSignupClick}>
              Sign Up
            </button>
            <button className="round-button login-button" onClick={handleLoginClick}>
              Login
            </button>
          </div>
        </header>

        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
