import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Quiz.css';
import useQuizQuestions from '../hooks/useQuizQuestions';

function Quiz() {
  const { quizQuestions, isLoading, error } = useQuizQuestions();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();

  console.log("answers state: ", answers)

  useEffect(() => {
    // Check if there's an existing answer when changing questions, reset if none
    const newSelectedOption = answers[quizQuestions.questions?.[currentQuestionIndex]?.id] || '';
    setSelectedOption(newSelectedOption);
  }, [currentQuestionIndex, answers, quizQuestions.questions]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

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

  const handleNext = () => {
    // Save the selected option to the answers state only if it has been selected
    if (selectedOption) {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [currentQuestion.id]: selectedOption
        }));
    }

    // Check if there are more questions, if so, move to the next question
    if (currentQuestionIndex < quizQuestions.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        // Reset the selectedOption for the next question
        setSelectedOption('');
    } else {
        // If no more questions, navigate to results page
        navigate('/answers');
    }
};




  const handleOptionChange = (value) => {
    setSelectedOption(value);
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
