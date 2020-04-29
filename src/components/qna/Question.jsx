import React, { useContext } from "react";
import QuizContext from "../../context/quiz/quizContext";

const Question = () => {
  const quizContext = useContext(QuizContext);

  var { questions, currentQuestion } = quizContext;

  const question = questions[currentQuestion];

  return (
    <div className="container question-container">
      <h4>{question && question.question}</h4>
    </div>
  );
};

export default Question;
