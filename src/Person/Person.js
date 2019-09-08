import React from "react";
import "./Person.css";

const person = props => {
  return (
    <div className="Person" onClick={props.click}>
      <p>
        Hello, i'm {props.name}, I'm {props.age} years old
      </p>
      <input type="text" value={props.name} />
    </div>
  );
};

export default person;
