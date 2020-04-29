import React, { useContext, useEffect } from "react";
import QuizItem from "./QuizItem";
import QuizContext from "../../context/quiz/quizContext";
import Spinner from "../layout/Spinner";
import getImage from "./books";

const Quizzes = () => {
  const quizContext = useContext(QuizContext);

  const { loading, titles, getTitles } = quizContext;

  useEffect(() => {
    getTitles();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <section className="section black center section-quizcard" id="quizzes">
        <div className="row">
          {titles.map((title) => (
            <QuizItem
              key={title.id}
              title={title.title}
              description={title.description}
              bookId={title.id}
              image={getImage(title.id)}
            />
          ))}
        </div>
      </section>
    );
  }
};

export default Quizzes;
