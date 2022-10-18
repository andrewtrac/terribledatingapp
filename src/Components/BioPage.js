import React from "react";
import "./BioPage.css";
import { useNavigate } from "react-router-dom";

const BioPage = (props) => {

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/waiting");
  }

  return (
    <div className="biopage__body">
      <div className="biopage__header">Tell us about yourself</div>
      <div> 
        <textarea className="biopage__textarea" defaultValue={'I love to eat raw chicken wings'}></textarea>
        </div>
        <button className="biopage_submit_button" onClick={handleSubmit}>
          Submit
        </button>
    </div>
  );
};

export default BioPage;
