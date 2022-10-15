import React from "react";
import "./BioPage.css";

const BioPage = (props) => {

  const handleSubmit = () => {
  }

  return (
    <div className="biopage__body">
      <div className="biopage__header">Tell us about yourself</div>
        <textarea className="biopage__textarea">I love to eat raw chicken wings</textarea>
        <button className="biopage_submit_button" onClick={handleSubmit}>
          Submit
        </button>
    </div>
  );
};

export default BioPage;
