import React from 'react';
import '../styles/Quiz.css';
import ProgressBar from '../images/Progressbar1.svg'
import useAppData from '../hooks/useAppData';

function Quiz() {

  const { data, isLoading, error } = useAppData();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log("IN QUIZ:", data); //////////////////////////////////////

  // Ensure that data is not empty before attempting to access its first item
  const quizName = data.length > 0 ? data[0].name : 'No quiz name available';
  
  console.log(quizName)///////////////////////////////////////////////

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit?
        </div>

          <div className="quiz-answers">
            <label className="custom-radio">
              <input type="radio" name="quizAnswer" value="1" />
              <span className="checkmark"></span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </label>
            <label className="custom-radio">
              <input type="radio" name="quizAnswer" value="2" />
              <span className="checkmark"></span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </label>
            <label className="custom-radio">
              <input type="radio" name="quizAnswer" value="3" />
              <span className="checkmark"></span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
