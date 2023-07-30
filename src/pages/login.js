// login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, app } from '../firebaseConfig';
import { AuthErrorCodes, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './signup-login.css';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // initialised auth instance
  const auth = getAuth(app);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    // sign in user
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("Login successful!"); // Show a simple alert when login is successful
        // You can add further logic here, such as redirecting to a dashboard page.
        history.push('/home');
      })
      .catch((err) => {
        if (
          err.code === AuthErrorCodes.INVALID_PASSWORD ||
          err.code === AuthErrorCodes.USER_DELETED
        ) {
          setError("The email address or password is incorrect");
        } else {
          console.log(err.code);
          alert(err.code);
        }
      });
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
