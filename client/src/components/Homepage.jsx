import React from 'react';
import "../styles/Homepage.css";
import { useNavigate } from 'react-router-dom';
import LargeLogo from "../images/LargeLogo.svg";

function Homepage () {

  const navigate = useNavigate(); // Create an instance of useNavigate

  // Function to handle the quiz button click
  const handleQuizClick = () => {
    navigate('/quiz');
  };




  return (
    <React.Fragment>
      <div className="main-content">
        <section className="welcome-section">
          WELCOME TO
        </section>
        <img src={LargeLogo} alt="3QQ logo" className="homepage-logo"/>
        <div className="lorem-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Vivamus luctus turpis id tristique feugiat.
        </div>
        <button className="attempt-quiz-btn" onClick={handleQuizClick}>ATTEMPT QUIZ</button>
      </div>
    </React.Fragment>
  );
}

export default Homepage;
