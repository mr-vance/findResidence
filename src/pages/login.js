import React from 'react';
import './signup-login.css';

function Login() {
  return (
    <div className="wrapper">
      <h2>Login</h2>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your email" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Enter password" required />
        </div>
        <div className="input-box button">
          <input type="submit" value="Login" />
        </div>
        <div className="text">
          <h3>Forgot password? <a href="#">Reset now</a></h3>
        </div>
      </form>
    </div>
  );
}

export default Login;
