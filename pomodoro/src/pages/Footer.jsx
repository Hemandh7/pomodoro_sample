import React from 'react';
import '../styles/Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logos">
        <img src="https://pomodoro-tracker.com/static/images/macappstore.svg" alt="Microsoft Logo" className="logo" />
        <img src="https://pomodoro-tracker.com/static/images/winstore.svg" alt="Mac Logo" className="logo" />
      </div>
      <div className="footer-content">
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">Slack Community</a>
        </div>
        <span className="footer-version">Version 22.0.4</span>
        <span className="footer-copyright">
          &copy; horneds@gmail.com 2015
        </span>
      </div>
      <div className="footer-disclaimer">
        <p>
          Pomodoro-Tracker is not related to the Pomodoro Technique&trade;/Pomodoro&trade;'s trademark holder Cirillo Company and respects its trademarks.
        </p>
        <p>
          Pomodoro Technique&reg; and Pomodoro&reg; are registered trademarks of Francesco Cirillo.
        </p>
        <p>
          All logos and marks contained herein are the property of their respective owners.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
