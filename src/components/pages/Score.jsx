import React, { useContext } from "react";
import QuizContext from "../../context/quiz/quizContext";

import NotFound from "../pages/NotFound";

const Score = () => {
  const quizContext = useContext(QuizContext);
  const { questions, score, activateQuizFlag } = quizContext;
  let percentage = Math.round((score / questions.length) * 100, 2);

  let giftArray = [
    "a mug of good 'ol Butterbeer",
    "a box of Chocolate Frogs",
    "a packet of Bertie Botts Every Flavor Beans",
    "a slice of Cauldron Cake",
    "a piece of Lupin's Chocolate",
    "some Pumpkin Pasties",
    "a packet of Droobles",
    "a Licorice Wand",
  ];

  if (!activateQuizFlag) {
    return <NotFound />;
  } else {
    return (
      <div className="container score-container z-depth-5">
        <div className="score-details">
          <h2 className="score-heading">Your scorecard</h2>
          <p className="score-item">
            Number of questions...{" "}
            <span className="score-item-result"> {questions.length}</span>
          </p>
          <p className="score-item">
            Your score... <span className="score-item-result"> {score}</span>
          </p>
          <p className="score-item">
            Percentage correct...{" "}
            <span className="score-item-result"> {percentage}%</span>
          </p>
          {percentage >= 80 ? (
            <p className="score-reward">
              Good Show! You deserve{" "}
              {giftArray[Math.floor(Math.random() * giftArray.length)]}
            </p>
          ) : (
            <p className="score-reward">
              Hmmm.. looks like you need to skim through the ol' book again!
            </p>
          )}
          <a
            href="/"
            className="waves waves-effect #41403e btn pulse scorecard-footer"
          >
            Another Quiz?
          </a>
        </div>
      </div>
    );
  }
};

export default Score;
