import React, { useContext } from "react";
import QuizContext from "../../context/quiz/quizContext";

import AnswerItem from "./AnswerItem";

const Answers = (props) => {
  const quizContext = useContext(QuizContext);

  const { currentAnswer, currentQuestion, questions } = quizContext;

  const question = questions[currentQuestion];

  return (
    <div className="container answers-container s12">
      <AnswerItem
        letter="a"
        answer={question && question.option_a}
        selected={currentAnswer === "a"}
        correctAnswer={(question && question.c_option) === "a" ? true : false}
      />
      <AnswerItem
        letter="b"
        answer={question && question.option_b}
        selected={currentAnswer === "b"}
        correctAnswer={(question && question.c_option) === "b" ? true : false}
      />
      <AnswerItem
        letter="c"
        answer={question && question.option_c}
        selected={currentAnswer === "c"}
        correctAnswer={(question && question.c_option) === "c" ? true : false}
      />
      <AnswerItem
        letter="d"
        answer={question && question.option_d}
        selected={currentAnswer === "d"}
        correctAnswer={(question && question.c_option) === "d" ? true : false}
      />
    </div>
  );
};

export default Answers;
