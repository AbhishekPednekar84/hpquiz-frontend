import React, { useReducer } from "react";
import QuizContext from "./quizContext";
import quizReducer from "./quizReducer";
import axios from "axios";
import {
  GET_TITLE,
  SET_LOADING,
  TITLE_ERROR,
  ACTIVATE_QUIZ,
  GET_QUESTIONS,
  QUESTIONS_ERROR,
  SET_ANSWER,
  INCREMENT_QUESTION,
  INCREMENT_SCORE,
} from "../Types";

const QuizState = (props) => {
  const initialState = {
    titles: [],
    questions: [],
    answersubmitted: false,
    currentQuestion: 0,
    currentAnswer: "",
    activateQuizFlag: false,
    error: "",
    score: 0,
    loading: false,
  };

  const [state, dispatch] = useReducer(quizReducer, initialState);
  const {
    titles,
    questions,
    answerSubmitted,
    activateQuizFlag,
    // correctAnswerChoice,
    currentQuestion,
    currentAnswer,
    error,
    score,
    loading,
  } = state;

  // Get book titles
  const getTitles = async () => {
    setLoading();

    try {
      const res = await axios.get("/api/books");
      // console.log(res.data);
      dispatch({ type: GET_TITLE, payload: res.data });
    } catch (error) {
      error.message = "Error retrieving titles";
      dispatch({ type: TITLE_ERROR, payload: error.message });
    }
  };

  // Get questions
  const getQuestions = async (bookId) => {
    setLoading();

    try {
      const res = await axios.get(`/api/questions/?book_id=${bookId}`);
      dispatch({ type: GET_QUESTIONS, payload: res.data });
    } catch (error) {
      error.message = "Error retrieving questions";
      dispatch({ type: QUESTIONS_ERROR, payload: error.message });
    }
  };

  // Activate quiz flag
  const activateQuiz = () => {
    dispatch({ type: ACTIVATE_QUIZ });
  };

  // Increment question
  const incrQuestion = () => {
    dispatch({ type: INCREMENT_QUESTION });
  };

  // Increment score
  const incrScore = () => {
    dispatch({ type: INCREMENT_SCORE });
  };

  // Set answer
  const setAnswer = (answer) => {
    dispatch({ type: SET_ANSWER, payload: answer });
  };

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <QuizContext.Provider
      value={{
        titles: titles,
        loading: loading,
        questions: questions,
        answerSubmitted: answerSubmitted,
        activateQuizFlag: activateQuizFlag,
        currentQuestion: currentQuestion,
        currentAnswer: currentAnswer,
        error: error,
        score: score,
        getTitles,
        getQuestions,
        setLoading,
        setAnswer,
        incrQuestion,
        incrScore,
        activateQuiz,
      }}
    >
      {props.children}
    </QuizContext.Provider>
  );
};

export default QuizState;
