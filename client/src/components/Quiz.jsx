import React, { useState } from 'react';
import '../styles/Quiz.css';
import ProgressBar1 from '../images/Progressbar1.svg';
import ProgressBar2 from '../images/Progressbar2.svg';
import ProgressBar3 from '../images/Progressbar3.svg';
import useAppData from '../hooks/useAppData';
// import Results from './Results'; // Assuming you have a Results component

function Quiz() {
  const { data, isLoading, error } = useAppData();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState(null); // State to track the current selected answer

  // Handle loading state
  if (isLoading) return <p>Loading...</p>;

  // Handle error state
  if (error) return <p>Error: {error.message}</p>;

  const randomIndex = data.quizzes.length > 0 ? Math.floor(Math.random() * data.quizzes.length) : null;
  const selectedQuiz = randomIndex !== null ? data.quizzes[randomIndex] : null;
  const questionsForQuiz = selectedQuiz ? data.questions.filter(question => question.quiz_id === selectedQuiz.id) : [];
  const progressBarImages = [ProgressBar1, ProgressBar2, ProgressBar3];
  
  const handleNextButtonClick = () => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = currentAnswer; // Save the current answer to the answers array
    setAnswers(updatedAnswers);
    setCurrentAnswer(null); // Reset current answer

    if (currentQuestionIndex < questionsForQuiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log('Navigate to results view');
      // Optionally navigate to or render the Results component
    }
  };

  const handleAnswerSelect = (option) => {
    setCurrentAnswer(option); // Just update the current answer
  };

  const renderButton = () => {
    if (currentQuestionIndex < questionsForQuiz.length - 1) {
      return <button className="next-button" onClick={handleNextButtonClick}>NEXT</button>;
    } else {
      return <button className="next-button" onClick={handleNextButtonClick}>VIEW RESULTS</button>;
    }
  };

  return (
    <React.Fragment>
      <main>
        <section className="quiz-progress-bar">
          <img src={progressBarImages[currentQuestionIndex] || progressBarImages[0]} alt="Progress Bar" />
        </section>

        <header className="quiz-name">
          {selectedQuiz ? selectedQuiz.name : 'No quiz name available'}
        </header>

        {questionsForQuiz.length > 0 && (
          <div className="quiz-question">
            {questionsForQuiz[currentQuestionIndex].question}
          </div>
        )}

        {questionsForQuiz.length > 0 && (
          <div className="quiz-answers">
            {['option_1', 'option_2', 'option_3'].map((option, idx) => (
              <label key={idx} className="custom-radio">
                <input type="radio" name={`quizAnswer${currentQuestionIndex}`} value={idx + 1} 
                  checked={currentAnswer === idx + 1}
                  onChange={() => handleAnswerSelect(idx + 1)} />
                <span className="checkmark"></span>
                {questionsForQuiz[currentQuestionIndex][option]}
              </label>
            ))}
          </div>
        )}

        <div className="div-next-button">
          {renderButton()}
        </div>
      </main>
    </React.Fragment>
  );
}

export default Quiz;
