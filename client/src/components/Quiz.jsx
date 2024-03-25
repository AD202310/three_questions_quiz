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
         Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </header>

        <div className="quiz-question">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl pretium fusce id velit ut tortor?
        </div>

        <div className="quiz-answers">
          

        </div>


      </main>
    </React.Fragment>
  );
}

export default Quiz;
