// import React, { useState } from "react";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Person from "./Person/Person.js";

import "./styles.css";

class App extends Component {
  state = {
    persons: [
      { name: "Kate", age: 26 },
      { name: "Mitch", age: 29 },
      { name: "Jess", age: 28 }
    ],
    showPersons: false
  };

  deletePersonHandler = personIndex => {
    let persons = this.state.persons;
    persons.splice(personIndex, 1);
  };

  togglePeople = () => {
    const isShowing = this.state.showPersons;
    this.setState({ showPersons: !isShowing });
  };
  render() {
    const buttonStyle = {
      border: "2px solid blue",
      font: "inherit",
      backgroundColor: "white",
      padding: "16px",
      margin: "16px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.state.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <p>{this.state.showPersons.toString()}</p>

        <button onClick={this.togglePeople} style={buttonStyle}>
          Show People
        </button>
        {persons}
      </div>
    );
  }
}

// const App = () => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: "Kate", age: 26 },
//       { name: "Mitch", age: 29 },
//       { name: "Jess", age: 28 }
//     ]
//   });

//   const [catchPhrasesState, setCatchPhrasesState] = useState({
//     catchPhrase: "I'ma Bee!, I want all the honey."
//   });
//   console.log(personsState);
//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: "Kate", age: personsState.persons[0].age + 1 },
//         { name: "Mitch", age: 99 },
//         { name: "Jess", age: 28 }
//       ]
//     });
//     console.log("was clicked");
//   };
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <button onClick={switchNameHandler}>Click Me!</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       />
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//       />
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}
//       />
//     </div>
//   );
// };

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
