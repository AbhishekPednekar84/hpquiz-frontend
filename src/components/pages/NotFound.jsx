import React from "react";
import { Link } from "react-router-dom";
import sortingHat from "../layout/images/sortinghat.png";

const NotFound = () => {
  return (
    <div className="container">
      <div className="not-found">
        <div className="row">
          <div className="col s12">
            <img src={sortingHat} alt="" />
          </div>
          <div className="row">
            <div className="col s12">
              <p className="flow-text">
                Lost, are we? Nothing to see here. Run along{" "}
                <Link to="/" style={{ color: "#795548" }}>
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
