import React, { useContext, useEffect } from "react";
import QuizItem from "./QuizItem";
import QuizContext from "../../context/quiz/quizContext";
import Spinner from "../layout/Spinner";
import getImage from "./books";

// Book covers
// import book1 from "../layout/images/books/book1.jpg";
// import book2 from "../layout/images/books/book2.jpg";
// import book3 from "../layout/images/books/book3.jpg";
// import book4 from "../layout/images/books/book4.jpg";
// import book5 from "../layout/images/books/book5.jpg";
// import book6 from "../layout/images/books/book6.jpg";
// import book7 from "../layout/images/books/book7.jpg";

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
        {/* <div className="container"> */}
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
        {/* </div> */}
      </section>
    );
  }
};

export default Quizzes;
