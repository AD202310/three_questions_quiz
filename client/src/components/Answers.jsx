import React from 'react';
import '../styles/Answers.css';
import LargeLogo from "../images/3QQ-logo-answers.svg";

function Answers() {
  return (
    <React.Fragment>
      <main>

      <img src={LargeLogo} alt="3QQ logo" className="answers-logo"/>

      <title className='answers-title'>
        ANSWERS
      </title>

      <header className='answers-quiz-name'>
        Lorem Ipsum Dolor Sit Amet
      </header>

      <div className='answers-block'>

        <div>
          <h1 className='answers-question'>
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </h1>

          <div className="answers-quiz-answers">
                <label className="answers-custom-radio">
                  <input type="radio" name="quizAnswer" value="1" />
                  <span className="checkmark"></span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </label>
                <label className="answers-custom-radio">
                  <input type="radio" name="quizAnswer" value="2" />
                  <span className="checkmark"></span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </label>
                <label className="answers-custom-radio">
                  <input type="radio" name="quizAnswer" value="3" />
                  <span className="checkmark"></span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </label>
          </div>
        </div>

        <div>
          <h1 className='answers-question'>
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </h1>
          
          <div className="answers-quiz-answers">
                <label className="answers-custom-radio">
                  <input type="radio" name="quizAnswer" value="1" />
                  <span className="checkmark"></span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </label>
                <label className="answers-custom-radio">
                  <input type="radio" name="quizAnswer" value="2" />
                  <span className="checkmark"></span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </label>
                <label className="answers-custom-radio">
                  <input type="radio" name="quizAnswer" value="3" />
                  <span className="checkmark"></span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </label>
          </div>
        </div>

        <div>
          <h1 className='answers-question'>
            1. Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </h1>
          
          <div className="answers-quiz-answers">
                <label className="answers-custom-radio">
                  <input type="radio" name="quizAnswer" value="1" />
                  <span className="checkmark"></span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </label>
                <label className="answers-custom-radio">
                  <input type="radio" name="quizAnswer" value="2" />
                  <span className="checkmark"></span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </label>
                <label className="answers-custom-radio">
                  <input type="radio" name="quizAnswer" value="3" />
                  <span className="checkmark"></span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </label>
          </div>
        </div>
      </div>


      </main>
    </React.Fragment>
  );
}

export default Answers;
