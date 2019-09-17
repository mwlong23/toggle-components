import React from "react";
import App from "../Containers/App";

const Cockpit = props => {
  return (
    <div>
      <button onClick={props.togglePeople} style={props.buttonStyle}>
        Show People
      </button>
      <button style={props.buttonStyle} onClick={props.addPerson}>
        Add Person
      </button>
    </div>
  );
};

export default Cockpit;
