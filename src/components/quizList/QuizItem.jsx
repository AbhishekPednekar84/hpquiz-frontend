import React, { useContext } from "react";
import { Link } from "react-router-dom";
import QuizContext from "../../context/quiz/quizContext";
import PropTypes from "prop-types";

const QuizItem = (props) => {
  const quizContext = useContext(QuizContext);

  const { activateQuiz } = quizContext;
  const { title, description, image, bookId } = props;

  return (
    <div className="col s12 m6 l3">
      <div className="card z-depth-3">
        <div className="card-image waves-effect waves-block waves-light">
          <img
            className="activator"
            src={image}
            alt=""
            height="400"
            width="300"
          />
        </div>

        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            <i className="material-icons right">more_vert</i>
          </span>
        </div>
        <div className="card-action">
          <Link
            to={`/quiz/${bookId}/${title}`}
            className="black-text"
            onClick={activateQuiz}
          >
            <h5>
              <span>
                Take the Quiz&nbsp;&nbsp;
                <i className="fa fa-magic" aria-hidden="true"></i>
              </span>
            </h5>
          </Link>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            <h4>{title}</h4>
            <i className="material-icons right">close</i>
          </span>
          <p className="flow-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

QuizItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  bookId: PropTypes.number.isRequired,
};

export default QuizItem;
