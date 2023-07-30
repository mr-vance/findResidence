import React from 'react';
import './App.css';

function App() {
  const handleSignupClick = () => {
    // Code to navigate to the signup page
    // For example: window.location.href = '/signup';
  };

  const handleLoginClick = () => {
    // Code to navigate to the login page
    // For example: window.location.href = '/login';
  };

  return (
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
    </div>
  );
}

export default App;
