import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userName = localStorage.getItem('name');

  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem('name');
    localStorage.removeItem('password');
    localStorage.removeItem('isLoggedIn');

    // Navigate to home
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">FlowerShop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/About">About Us</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Gallery">Gallery</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/ContactUs">Contact Us</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Login">Login</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/SignUp">Sign Up</Link>
            </li>
          </ul>

          {/* Right side */}
          <div className="d-flex align-items-center">
            {isLoggedIn && (
              <>
                <span className="me-3">Hello, {userName} 👋</span>
                <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>Logout</button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
