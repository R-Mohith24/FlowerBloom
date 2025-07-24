import React from 'react';
import './Auth.css';

const SignUp = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p className="auth-note">Already have an account? Login now!</p>
      </div>
    </div>
  );
};

export default SignUp;
