// import React, { useState } from "react";
import React, { Component } from "react";
import Persons from "../Components/Persons.js";
import Cockpit from "../Components/Cockpit.js";

import "./App.css";

class App extends Component {
  state = {
    persons: [
      { id: 1231, name: "Kate", age: 26 },
      { id: 1232, name: "Mitch", age: 29 },
      { id: 1233, name: "Jess", age: 28 }
    ],
    showPersons: false
  };

  deletePersonHandler = personIndex => {
    let persons = [...this.state.persons];
    const deleted = persons.splice(personIndex, 1);
    this.setState({ persons: persons });
    console.log(deleted);
  };

  nameChangedHandler = (event, id) => {
    let personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    console.log(personIndex.toString());
    let persons = [...this.state.persons];
    persons[personIndex].name = event.target.value;

    this.setState({
      persons: persons
    });
  };
  addPersonHandler = () => {
    let persons = [...this.state.persons];
    const lastEntryIndex = persons.length - 1;
    const lastEntryId = persons[lastEntryIndex].id;
    persons.push({ id: lastEntryId + 1, name: "", age: 21 });
    this.setState({ persons: persons });
  };
  togglePeople = () => {
    const isShowing = this.state.showPersons;
    this.setState({ showPersons: !isShowing });
  };
  render() {
    let buttonStyle = {
      border: "2px solid blue",
      font: "inherit",
      backgroundColor: "green",
      color: "white",
      padding: "16px",
      margin: "16px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clickedDelete={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
      buttonStyle.backgroundColor = "red";
    }
    let addPerson = null;

    if (this.state.showPersons) {
      addPerson = this.addPersonHandler;
    }

    return (
      <div className="App">
        <Cockpit
          buttonStyle={buttonStyle}
          togglePeople={this.togglePeople}
          addPerson={addPerson}
        />
        {persons}
      </div>
    );
  }
}

export default App;
