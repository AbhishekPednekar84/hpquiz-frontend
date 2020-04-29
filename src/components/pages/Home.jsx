import React, { Fragment } from "react";
import Navbar from "../layout/Navbar";
import QuizList from "../quizList/QuizList";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <QuizList />
      <Footer />
    </Fragment>
  );
};

export default Home;
