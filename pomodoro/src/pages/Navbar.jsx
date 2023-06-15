import React, { useState } from 'react';
import '../styles/Navbar.css'; 


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://pomodoro-tracker.com/static/images/macappstore.svg" alt="Logo" />
      </div>
      <div className="navbar-sections">
        <div className="navbar-stats">
          <a href="/">Stats</a>
        </div>
        <div className="navbar-feedback">
          <a href="/">Feedback</a>
        </div>
        <div className="navbar-dropdown">
          <button onClick={handleDropdownToggle}>Signup / Login</button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <a href="/">Sign Up</a>
              <a href="/">Login</a>
              <a href="/">Forgot Password</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
