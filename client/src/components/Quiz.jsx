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
          QUIZ NAME
        </header>


      </main>
    </React.Fragment>
  );
}

export default Quiz;
