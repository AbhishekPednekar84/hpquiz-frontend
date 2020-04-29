import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import QuizState from "../context/quiz/QuizState";

import "../App.css";

// Component imports
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Qna from "./qna/Qna";
import Score from "./pages/Score";

const App = () => {
  // Initialize Materialize CSS and get user information
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <QuizState>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/quiz/:bookId/:title" component={Qna} />
          <Route exact path="/score" component={Score} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </QuizState>
  );
};

export default App;
