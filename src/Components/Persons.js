import React from "react";
import Person from "./Person.js";

const Persons = props => {
  return props.persons.map((person, index) => {
    return (
      <Person
        name={person.name}
        age={person.age}
        key={person.id}
        clickedDelete={() => props.clickedDelete(index)}
        changed={event => props.changed(event, person.id)}
      />
    );
  });
};

export default Persons;
