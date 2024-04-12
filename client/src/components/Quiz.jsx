import React, { useState } from 'react';
import '../styles/Quiz.css';
import useAppData from '../hooks/useAppData';
import ProgressBar1 from '../images/Progressbar1.svg';
import ProgressBar2 from '../images/Progressbar2.svg';
import ProgressBar3 from '../images/Progressbar3.svg';


function Quiz() {
  const { data, isLoading, error } = useAppData();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Handle loading state
  if (isLoading) return <p>Loading...</p>;

  // Handle error state
  if (error) return <p>Error: {error.message}</p>;

  const randomIndex = data.quizzes.length > 0 ? Math.floor(Math.random() * data.quizzes.length) : null;
  const selectedQuiz = randomIndex !== null ? data.quizzes[randomIndex] : null;
  const quizName = selectedQuiz ? selectedQuiz.name : 'No quiz name available';
  const questionsForQuiz = selectedQuiz ? data.questions.filter(question => question.quiz_id === selectedQuiz.id) : [];

  const progressBarImages = [ProgressBar1, ProgressBar2, ProgressBar3];

  const handleNextButtonClick = () => {
    if (currentQuestionIndex < questionsForQuiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log('Navigate to results view');
    }
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
          {quizName}
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
                <input type="radio" name="quizAnswer" value={idx + 1} />
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
