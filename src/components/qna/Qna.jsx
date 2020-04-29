import React, { useContext, useEffect } from "react";
import QuizContext from "../../context/quiz/quizContext";
import Nimbus from "../layout/images/nimbus.jpg";

import Progress from "../qna/Progress";
import Question from "../qna/Question";
import Answers from "../qna/Answers";
import NextQuestion from "../qna/NextQuestion";
import Score from "../pages/Score";
import Spinner from "../layout/Spinner";
import NotFound from "../pages/NotFound";
import ComingSoon from "../pages/ComingSoon";

const Qna = (props) => {
  const quizContext = useContext(QuizContext);
  let bookId = props.match.params.bookId;
  let title = props.match.params.title;

  const {
    questions,
    getQuestions,
    currentQuestion,
    loading,
    activateQuizFlag,
  } = quizContext;

  useEffect(() => {
    getQuestions(bookId);
    // eslint-disable-next-line
  }, [bookId]);

  if (loading) {
    return <Spinner />;
  }

  if (!activateQuizFlag) {
    return <NotFound />;
  }

  if (questions.length === null || questions.length === 0) {
    return <ComingSoon />;
  }

  if (currentQuestion < questions.length) {
    return (
      <div className="container z-depth-5 qna-container s12">
        <p className="title-text flow-text">{title}</p>
        <img src={Nimbus} alt="" width="250px" height="90px" />
        <Progress />
        <Question />
        <Answers />
        <NextQuestion />
      </div>
    );
  } else {
    return <Score />;
  }
};

export default Qna;
