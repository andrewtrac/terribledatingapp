import React from "react";
import "./RegistrationPage.css";

const RegistrationPage = (props) => {
  const questionArray = [
    "Do you want children?",
    "Are you a smoker?",
    "Do you drink?",
  ];

  return (
    <div className="registrationpage__body">
      <div className="registrationpage__header">
        Lets get to know each other!
      </div>
      <div className="registrationpage__form">
        {questionArray.map((question) => {
          return <div className="registrationpage__item">{question}</div>;
        })}
      </div>
    </div>
  );
};

export default RegistrationPage;
