import React, { Fragment, useContext } from "react";
import QuizContext from "../../context/quiz/quizContext";
import M from "materialize-css/dist/js/materialize.min.js";
import "../../App.css";

const AnswerItem = (props) => {
  const quizContext = useContext(QuizContext);
  const { setAnswer, answerSubmitted, incrScore } = quizContext;
  const { letter, answer, selected, correctAnswer } = props;

  const handleClick = (e) => {
    setAnswer(e.target.value);

    // Increment the score if the correct answer is selected
    if (correctAnswer) {
      incrScore();
    }
  };

  const setStyle = (id) => {
    switch (id) {
      case "a":
      case "b":
      case "c":
      case "d":
        // Highlight correct answer if it is selected
        if (answerSubmitted && selected && correctAnswer) {
          M.toast({
            html: "Well done! That is correct.",
            displayLength: 1000,
            classes: "toast-correct",
          });
          return { backgroundColor: "#a5d6a7", color: "#000" };
        }
        // Highlight correct answer if incorrect answer is selected
        else if (answerSubmitted && !selected && correctAnswer) {
          M.toast({
            html: "Sorry! That choice is incorrect.",
            displayLength: 1200,
            classes: "toast-incorrect",
          });
          return { backgroundColor: "#a5d6a7", color: "#000" };
        }

        // Highlight incorrect answer
        if (answerSubmitted && selected && !correctAnswer) {
          return { backgroundColor: "#c62828 " };
        }
        break;
      default:
        return null;
    }
  };

  const setClass = (id) => {
    switch (id) {
      case "a":
      case "b":
      case "c":
      case "d":
        // Disable buttons once an answer is selected
        if (answerSubmitted) {
          return "btn-disabled";
        }
        break;
      default:
        return null;
    }
  };

  return (
    <Fragment>
      <div className="answer-items-container">
        <button
          id={letter}
          value={letter}
          className={
            "waves-effect waves-light z-depth-3 btn-large answer-choices " +
            setClass(letter)
          }
          style={setStyle(letter)}
          onClick={handleClick}
        >
          {/* // <span className="blue-grey lighten-2 black-text left answer-choices-slno">
          //  {letter}
          // </span>{" "} */}
          {answer}
        </button>
      </div>
    </Fragment>
  );
};

export default AnswerItem;
