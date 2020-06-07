import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    person: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
    otherState: "something",
    showPersons: true,
  };

  switchNameHandler = (newName) => {
    this.setState({
      person: [
        { name: newName, age: "37" },
        { name: "Manu", age: "29" },
        { name: "Stephanie", age: "27" },
      ],
    });
  };

  nameChangeHandler = (e) => {
    this.setState({
      person: [
        { name: "Mike", age: "37" },
        { name: e.target.value, age: "29" },
        { name: "Stephanie", age: "27" },
      ],
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  };

  render() {
    const style = {
      backgroundColor: "White",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.person.map((person) => {
            return <Person name={person.name} age={person.age} />;
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>hi Im a react app</h1>
        <p>this is really working</p>
        <button style={style} onClick={this.togglePersonHandler}>
          Toggle Name
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
