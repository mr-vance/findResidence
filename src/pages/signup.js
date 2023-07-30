import React from 'react';
import './signup-login.css';

function Signup() {
  return (
    <div className="wrapper">
      <h2>Registration</h2>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your name" required />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Create password" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Confirm password" required />
        </div>
        <div className="policy">
          <input type="checkbox" />
          <h3>I accept all terms & condition</h3>
        </div>
        <div className="input-box button">
          <input type="submit" value="Register Now" />
        </div>
      </form>
    </div>
  );
}

export default Signup;
