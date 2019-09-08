import React from "react";
import "./Person.css";

const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        Hello, i'm {props.name}, I'm {props.age} years old
      </p>
      <input type="text" value={props.name} onChange={props.changed} />
    </div>
  );
};

export default person;
