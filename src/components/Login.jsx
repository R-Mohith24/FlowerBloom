import React from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p className="auth-note">Don't have an account? <Link to='/SignUp'><i>Sign up now!</i></Link></p>
      </div>
    </div>
  );
};

export default Login;
