import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import "./RegistrationPage.css";


const RegistrationPage = (props) => {
  const { userEmail } = props

  const defaultObject = {
    user: userEmail,
    question_1: true,
    question_2: false,
    question_3: false,
    question_4: true,
    question_5: true,
    question_6: false,
    question_7: true,
    question_8: false,
    question_9: false,
    question_10: true,
    question_11: false,
    question_12: false,
    question_13: true,
    question_14: false,
    question_15: false,
    question_16: false,
    question_17: true,
    question_18: false,
    question_19: false,
    question_20: false,
    question_21: true,
  };
  
  const [formSubmission, setFormSubmission] = useState(defaultObject);
  const [clicked, setClicked] = useState(false)
  const navigate = useNavigate();

  const handleClick = (event) => {
    const newState = { ...formSubmission };
    const selector = `question_${event.currentTarget.id}`;
    newState[selector] = (event.currentTarget.value === "true" ? true : false);
    console.log(newState);
    setFormSubmission(newState);
    setClicked(current => !current)
  };

  const handleSubmit = async () => {
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded";

    await axios
      .post(`https://terribledatingapp-api.herokuapp.com/`, formSubmission)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });

    navigate("/biopage");
  };

  const questionArray = [
    ["Do you want children?", "Yes", "No"],
    ["Are you a smoker?", "Yes", "No"],
    ["Do you drink?", "Yes", "No"],
    ["Do you eat meat?", "Yes", "No"],
    ["Are you religious?", "Yes", "No"],
    ["Do you like spicy food?", "Yes", "No"],
    ["Do you prefer coffee or tea?", "Yes", "No"],
    ["Do you prefer cats or dogs?", "Cats", "Dogs"],
    ["Are you tall or short?", "Tall", "Short"],
    ["Do you use Android or iPhone?", "Android", "iPhone"],
    ["Backstreet Boys or Nsync?", "BSB", "NSYNC"],
    ["Do you like pina coladas", "Yes", "No"],
    ["And getting caught in the rain?", "Yes", "No"],
    ["Do you like pineapple on pizza?", "Yes", "No"],
    ["Are you a night owl or a early bird?", "Owl", "Bird"],
    ["Is it to-may-toe or to-mah-toe?", "May", "Mah"],
    ["What’s your level of commitment?", "Long", "Short"],
    ["Do you prefer cake or pie?", "Cake", "Pie"],
    ["Do you like to travel?", "Yes", "No"],
    ["Ruffled chips or smooth?", "Ruffle", "Smooth"],
    ["Do you like to party? ;)", "Yes", "No"],
  ];

  return (
    <div className="registrationpage__body">
      <h1 className="registrationpage__header">
        Lets get to know each other!
      </h1>
      <div className="registrationpage__form">
        {questionArray.map((question, index) => {
          return (
            <div className="registrationpage__item">
              <p className="registrationpage__question">{question[0]}</p>
              <div className="registrationpage__radio">
                <input 
                type="radio" id={question[1]+index} name={question[0]} value={true} checked/>
                <label 
                for={question[1]+index}>{question[1]}</label>
                <input 
                type="radio" id={question[2]+index} name={question[0]} value={false}/>
                <label 
                for={question[2]+index}>{question[2]}</label>
              </div>





              {/* <div>
              <button
                id={index + 1}
                className="button__selection button__selection--yes"
                value={true}
                onClick={handleClick}
              >
                {question[1]}
              </button>
              <button
                id={index + 1}
                className="button__selection button__selection--no"
                value={false}
                style={{ marginLeft: "5px" }}
                onClick={handleClick}
              >
                {question[2]}
              </button>
              </div> */}
            </div>
          );
        })}
      </div>
      <div className="registrationpage__footer">
        <button className="registrationpage__submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default RegistrationPage;
