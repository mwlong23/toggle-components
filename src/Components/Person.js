import React from "react";
import "./Person.css";

const Person = props => {
  return (
    <div className="Person">
      <p onClick={props.clickedDelete}>
        Hello, i'm {props.name}, I'm {props.age} years old
      </p>
      <input type="text" value={props.name} onChange={props.changed} />
    </div>
  );
};

export default Person;
