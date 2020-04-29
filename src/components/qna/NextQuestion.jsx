import React, { Fragment, useContext } from "react";
import QuizContext from "../../context/quiz/quizContext";

const NextQuestion = () => {
  const quizContext = useContext(QuizContext);

  const {
    questions,
    currentQuestion,
    answerSubmitted,
    incrQuestion,
  } = quizContext;

  const handleClick = (e) => {
    incrQuestion();
  };

  return (
    <Fragment>
      <div className="container btn-next-container s12">
        <button
          className={
            "btn black white-text " + (!answerSubmitted && "btn-disabled")
          }
          onClick={handleClick}
        >
          <span>
            {currentQuestion < questions.length - 1 ? (
              <i className="fas fa-angle-right"></i>
            ) : (
              "View Scorecard"
            )}{" "}
          </span>
        </button>
      </div>
      <div className="container btn-next-container s12">
        <a href="/" className="btn red darken-3">
          End Quiz
        </a>
      </div>
    </Fragment>
  );
};

export default NextQuestion;
