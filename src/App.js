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
  namChangeHandler = (e) => {
    this.setState({
      person: [
        { name: "Mike", age: "37" },
        { name: e.target.value, age: "29" },
        { name: "Stephanie", age: "27" },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: "White",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
      
    };

    return (
      <div className="App">
        <h1>hi Im a react app</h1>
        <p>this is really working</p>
        {/* <button onClick={this.switchNameHandler.bind(this, "Mike")}> */}
        <button  style={style} onClick={() => this.switchNameHandler("Mike")}>
          Switch Name
        </button>

        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        />
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
          click={this.switchNameHandler.bind(this, "Michael")}
          changed={this.namChangeHandler}
        >
          My hobbies: Racing
        </Person>
        <Person
          name={this.state.person[2].name}
          age={this.state.person[2].age}
        />
      </div>
    );
  }
}

export default App;
