import React from "react";
import "../../App.css";

const Footer = () => {
  const footerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 0",
    wordSpacing: "2px",
    fontSize: "18px",
  };

  return (
    <footer className="black white-text">
      <div className="container" style={footerStyle}>
        <span>
          Made with <i className="fa fa-heart"></i> in Bangalore
        </span>
      </div>
    </footer>
  );
};

export default Footer;
