import React from 'react';
import '../styles/Answers.css';
import LargeLogo from "../images/3QQ-logo-answers.svg";

function Answers({ answers, quizQuestions }) {

  console.log("Answers: quizQuestions State: ", quizQuestions);
  console.log("Answers: answers State: ", answers);

  // Determine the quiz ID dynamically from the answers keys
  const quizId = Object.keys(answers)[0].split('-')[0];

  // Helper function to determine if the radio button should be checked
  const isChecked = (questionIndex, optionIndex) => {
    // Construct the key using the dynamic quiz ID, the question index, and compare with the answer
    const key = `${quizId}-${questionIndex}`;
    return answers[key] === String(optionIndex);
  };

  return (
    <React.Fragment>
      <main>
        <img src={LargeLogo} alt="3QQ logo" className="answers-logo"/>

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
                      readOnly // To make it not editable, as it reflects past answers
                    />
                    <span className="checkmark"></span>
                    {question[`option_${optionIndex}`]}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </React.Fragment>
  );
}

export default Answers;
