import React, { Component } from "react";
import Person from "./Person";

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

  render() {
    return (
      <div className="App">
        <h1>hi Im a react app</h1>
        <p>this is really working</p>
        {/* <button onClick={this.switchNameHandler.bind(this, "Mike")}> */}
        <button onClick={() => this.switchNameHandler('Mike')}>
          Swtich Name
        </button>

        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        />
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
          click={this.switchNameHandler.bind(this, "Michael")}
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
