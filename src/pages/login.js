// login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import './signup-login.css'; // Import the custom CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      console.log('User logged in:', user);
      // You can add further logic here, such as redirecting to a dashboard page.
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="wrapper">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-box">
          <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="input-box button">
          <input type="submit" value="Login Now" />
        </div>
        {error && <p className="error">{error}</p>}
        <div className="text">
          <h3>Forgot password? <Link to="/signup">Reset</Link></h3>
        </div>
      </form>
    </div>
  );
};

export default Login;
