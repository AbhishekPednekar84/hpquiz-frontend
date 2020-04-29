import React, { useContext } from "react";
import QuizContext from "../../context/quiz/quizContext";

const Progress = () => {
  const quizContext = useContext(QuizContext);

  const { questions, currentQuestion } = quizContext;
  return (
    <div className="container">
      <p className="flow-text progress-text">
        Question {currentQuestion + 1} of {questions.length}
      </p>
    </div>
  );
};

export default Progress;
