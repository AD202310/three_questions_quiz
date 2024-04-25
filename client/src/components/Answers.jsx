import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Answers.css';
import LargeLogo from "../images/3QQ-logo-answers.svg";

function Answers({ answers, quizQuestions }) {
  const [showResults, setShowResults] = useState(false);  // State to control display of results
  const [buttonText, setButtonText] = useState("See results!"); // State to manage button text
  const navigate = useNavigate();
  const quizId = Object.keys(answers)[0].split('-')[0];

  const isChecked = (questionIndex, optionIndex) => {
    const key = `${quizId}-${questionIndex}`;
    return answers[key] === String(optionIndex);
  };

  const handleButtonClick = () => {
    if (!showResults) {
      setShowResults(true);  // Show the results
      setButtonText("New quiz"); // Change the button text
    } else {
      window.location.href = '/quiz'; // Force a full page reload
    }
  };

  const isCorrect = (questionIndex, optionIndex) => {
    return quizQuestions.questions[questionIndex].correct_option === String(optionIndex);
  };

  return (
    <React.Fragment>
      <main>
        <img src={LargeLogo} alt="3QQ logo" className="answers-logo"/>
        <title className='answers-title'>
          ANSWERS
        </title>
        <header className='answers-quiz-name'>
          {quizQuestions.questions[0].name}
        </header>
        <div className='answers-block'>
          {quizQuestions.questions.map((question, index) => (
            <div key={index}>
              <h1 className='answers-question'>
                {index + 1}. {question.question}
              </h1>
              <div className="answers-quiz-answers">
                {[1, 2, 3].map(optionIndex => (
                  <label className="answers-custom-radio" key={optionIndex}>
                    <input 
                      type="radio" 
                      name={`quizAnswer-${index}`} 
                      value={optionIndex} 
                      checked={isChecked(index, optionIndex)}
                      readOnly
                    />
                    <span className="checkmark"></span>
                    {question[`option_${optionIndex}`]}
                    {showResults && isChecked(index, optionIndex) ? 
                      (isCorrect(index, optionIndex) ? " ✔️ Correct" : " ❌ Incorrect") : ""}
                  </label>
                ))}
              </div>
            </div>
          ))}
          <div className="div-next-button">
            <button className="next-button" onClick={handleButtonClick}>
              {buttonText}
            </button>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Answers;
