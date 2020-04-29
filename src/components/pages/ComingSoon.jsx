import React from "react";
import { Link } from "react-router-dom";
import books from "../layout/images/books.png";

const NotFound = () => {
  return (
    <div className="container">
      <div className="not-found">
        <div className="row">
          <div className="col s12">
            <img src={books} alt="" width="400px" height="400px" />
          </div>
          <div className="row">
            <div className="col s12">
              <p className="flow-text">
                Apologies! We are hard at work to get this quiz out. It will be
                available real soon. In the meantime, please try some of the
                other quizzes{" "}
                <Link to="/" style={{ color: "#37474f" }}>
                  <i class="fab fa-2x fa-fort-awesome"></i>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
