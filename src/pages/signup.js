// signup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import './signup-login.css'; // Import the custom CSS file

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!termsAccepted) {
      setError("Please accept the terms & conditions.");
      return;
    }

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      console.log('User registered:', user);
      // You can add further logic here, such as redirecting to a dashboard page.
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="wrapper">
      <h2>Registration</h2>
      <form onSubmit={handleSignup}>
        <div className="input-box">
          <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Create password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>
        <div className="policy">
          <input type="checkbox" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} />
          <h3>I accept all terms & condition</h3>
        </div>
        <div className="input-box button">
          <input type="submit" value="Register Now" />
        </div>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
