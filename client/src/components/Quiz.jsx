import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Quiz.css';


function Quiz({ answers, setAnswers, quizQuestions }) {

  // States 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [submitFinal, setSubmitFinal] = useState(false);

  // Navigate
  const navigate = useNavigate();
    
  useEffect(() => {
    // Check if there's an existing answer when changing questions, reset if none
    const newSelectedOption = answers[quizQuestions.questions?.[currentQuestionIndex]?.id] || '';
    setSelectedOption(newSelectedOption);
  }, [currentQuestionIndex, answers, quizQuestions.questions]);

  useEffect(() => {
    if (submitFinal) {
      navigate('/answers');
    }
  }, [submitFinal, navigate]); // Include `navigate` in the dependency array as a best practice


  if (!quizQuestions || !quizQuestions.questions || quizQuestions.questions.length === 0) {
    return <div>No questions available.</div>;
  }

  const currentQuestion = quizQuestions.questions[currentQuestionIndex];
  if (!currentQuestion) {
    return <div>Question data is missing.</div>;
  }

  const options = [
    { label: currentQuestion.option_1, value: '1' },
    { label: currentQuestion.option_2, value: '2' },
    { label: currentQuestion.option_3, value: '3' }
  ];


  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const handleNext = () => {
    if (selectedOption !== '') {
      setAnswers(prevAnswers => ({
        ...prevAnswers,
        [`${currentQuestion.id}-${currentQuestionIndex}`]: selectedOption
      }));
    }
  
    if (currentQuestionIndex < quizQuestions.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption('');
    } else {
      // Set the flag to submit final answers instead of navigating directly
      setSubmitFinal(true);
    }
  };


  const progressBarImage = require(`../images/Progressbar${Math.min(currentQuestionIndex + 1, 3)}.svg`);

  return (
    <React.Fragment>
      <main>
        <section className="quiz-progress-bar">
          <img src={progressBarImage} alt="Progress Bar" />
        </section>

        <header className="quiz-name">
          {currentQuestion.name}
        </header>

        <div className="quiz-question">
          {currentQuestion.question}
        </div>

        <div className="quiz-answers">
          {options.map((option, index) => (
            <label key={index} className="custom-radio">
              <input
                type="radio"
                name="quizAnswer"
                value={option.value}
                onChange={() => handleOptionChange(option.value)}
                checked={selectedOption === option.value}
              />
              <span className="checkmark"></span>
              {option.label}
            </label>
          ))}
        </div>

        <div className="div-next-button">
          <button className="next-button" onClick={handleNext}>
            {currentQuestionIndex < quizQuestions.questions.length - 1 ? 'NEXT' : 'SEE RESULTS'}
          </button>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Quiz;
