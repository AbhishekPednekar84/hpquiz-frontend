import {
  GET_TITLE,
  GET_QUESTIONS,
  SET_LOADING,
  TITLE_ERROR,
  ACTIVATE_QUIZ,
  QUESTIONS_ERROR,
  SET_ANSWER,
  CORRECT_ANSWER_CHOICE,
  INCREMENT_QUESTION,
  INCREMENT_SCORE,
} from "../Types";

export default (state, action) => {
  switch (action.type) {
    case GET_TITLE:
      return {
        ...state,
        titles: action.payload,
        loading: false,
      };
    case GET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        loading: false,
      };
    case SET_ANSWER:
      return {
        ...state,
        currentAnswer: action.payload,
        answerSubmitted: true,
        loading: false,
      };
    case ACTIVATE_QUIZ:
      return {
        ...state,
        activateQuizFlag: true,
      };
    case CORRECT_ANSWER_CHOICE:
      return {
        ...state,
        correctAnswerChoice: action.payload,
      };
    case INCREMENT_QUESTION:
      return {
        ...state,
        answerSubmitted: false,
        currentQuestion: state.currentQuestion + 1,
      };
    case INCREMENT_SCORE:
      return {
        ...state,
        score: state.score + 1,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TITLE_ERROR:
    case QUESTIONS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
