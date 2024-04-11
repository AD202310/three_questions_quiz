import React from 'react';
import '../styles/Quiz.css';
import ProgressBar from '../images/Progressbar1.svg'
import useAppData from '../hooks/useAppData';

function Quiz() {

  const { data, isLoading, error } = useAppData();

  // Handle loading state
  if (isLoading) return <p>Loading...</p>;
  
  // Handle error state
  if (error) return <p>Error: {error.message}</p>;

  // Log data for debugging
  console.log("Quiz.jsx:", data.questions);

  // Randomly select a quiz index if quizzes are available
  const randomIndex = data.quizzes.length > 0 ? Math.floor(Math.random() * data.quizzes.length) : null;

  // Use the random index to get the quiz name and ID, if quizzes are not empty
  const selectedQuiz = randomIndex !== null ? data.quizzes[randomIndex] : null;
  const quizName = selectedQuiz ? selectedQuiz.name : 'No quiz name available';

  // Filter questions that belong to the selected quiz
  const questionsForQuiz = selectedQuiz ? data.questions.filter(question => question.quiz_id === selectedQuiz.id) : [];

   // Log data for debugging
   console.log("Quiz.jsx:", questionsForQuiz);

  return (
    <React.Fragment>
      <main>
        <section className="quiz-progress-bar">
          <img src={ProgressBar} alt="Progress Bar" />
        </section>

        <header className="quiz-name">
          {quizName}
        </header>

        <div className="quiz-question">
          {questionsForQuiz[0].question}
        </div>

          <div className="quiz-answers">
            <label className="custom-radio">
              <input type="radio" name="quizAnswer" value="1" />
              <span className="checkmark"></span>
                {questionsForQuiz[0].option_1}  
            </label>
            <label className="custom-radio">
              <input type="radio" name="quizAnswer" value="2" />
              <span className="checkmark"></span>
                {questionsForQuiz[0].option_2}
            </label>
            <label className="custom-radio">
              <input type="radio" name="quizAnswer" value="3" />
              <span className="checkmark"></span>
                {questionsForQuiz[0].option_3}
            </label>
          </div>

          <div className="div-next-button">
            <button className="next-button">NEXT</button>
          </div>

      </main>
    </React.Fragment>
  );
}

export default Quiz;
