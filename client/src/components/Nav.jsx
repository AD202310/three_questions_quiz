import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import '../styles/Nav.css';
import NavbarLogo from '../images/Navbar_logo 1.svg';

function Nav() {
  const navigate = useNavigate(); // Create an instance of useNavigate

  // Function to handle the login button click
  const handleLoginClick = () => {
    navigate('/login'); // Use navigate to change the route to /login
  };

  // Function to handle the logo click, navigating to the root path and reload the page
  const handleLogoClick = () => {
    navigate('/'); // Navigate to root
    window.location.reload(); // Force a full page reload
  };

  // Function to handle the sign up button click
  const handleSignUpClick = () => {
    navigate('/signup'); // Use navigate to change the route to /signup
  };

  return (
    <nav className="navbar">
      <div onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
        <img src={NavbarLogo} alt="3QQ logo" />
      </div>

      <div>
        ABOUT US
      </div>
      <div>
        FAQS
      </div>
      <div>
        CONTACT US
      </div>

      <div className="button-group">
        <button onClick={handleLoginClick}>
          LOG IN
        </button>
        <button onClick={handleSignUpClick}>
          SIGN UP
        </button>
      </div>
    </nav>
  );
}

export default Nav;
