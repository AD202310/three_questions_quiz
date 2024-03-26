import React from 'react';
import '../styles/Quiz.css';
import ProgressBar from '../images/Progressbar1.svg'

function Quiz() {
  return (
    <React.Fragment>
      <main>
        <section className="quiz-progress-bar">
          <img src={ProgressBar} alt="Progress Bar" />
        </section>

        <header className="quiz-name">
         Lorem Ipsum Dolor Sit Amet
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
