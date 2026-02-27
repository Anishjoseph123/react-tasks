import React from "react";
import AboutPageStyle from "../Styles/AboutPageStyling.css";
const About = () => {
  return (
    <div className="aboutDiv">
      <h3 className="aboutTitle" style={AboutPageStyle}>
        About Edura
      </h3>
      <img
        src="https://cdn.pixabay.com/photo/2018/02/07/18/30/group-3137670_1280.jpg"
        alt="img"
      />
      <div>
        <p className="aboutText" style={AboutPageStyle}>
          Millions of children have benefited from Edura and its services.
        </p>
        <p className="aboutDescription">
          We are an online education firm which helps children in learning
          different courses online to upskil themselves.{" "}
        </p>
      </div>
    </div>
  );
};
export default About;
