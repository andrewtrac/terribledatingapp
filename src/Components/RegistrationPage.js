import React, { useState } from "react";
import "./RegistrationPage.css";

const RegistrationPage = (props) => {
  const [formSubmission, setFormSubmission] = useState({});

  const handleClick = (event) => {
    const newState = { ...formSubmission };
    const selector = `question_${event.currentTarget.id}`;
    newState[selector] = event.currentTarget.value;
    console.log(newState);
    setFormSubmission(newState);
  };

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
        {questionArray.map((question, index) => {
          return (
            <div className="registrationpage__item">
              <div className="registrationpage__question">{question}</div>
              <button id={index} value={true} onClick={handleClick}>
                yes
              </button>
              <button id={index} value={false} onClick={handleClick}>
                no
              </button>
            </div>
          );
        })}
      </div>
      <div className="registrationpage__footer">
        <button>Submit</button>
      </div>
    </div>
  );
};

export default RegistrationPage;
