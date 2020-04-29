import React from "react";
import "../../App.css";

const Navbar = () => {
  return (
    <header className="main-header">
      <div className="primary-overlay">
        {/* <div className="navbar-fixed"> */}
        <nav className="transparent">
          <div className="container">
            <div className="nav-wrapper">
              <ul className="right">
                <li>
                  <a
                    href="#quizzes"
                    className="waves waves-effect btn cyan lighten-3 black-text button-text pulse"
                  >
                    Browse Quizzes
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* </div> */}

        <div className="showcase container">
          <div className="row">
            <div className="col s12 m12">
              <p className="header-text">Yet another Harry Potter quiz...</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
