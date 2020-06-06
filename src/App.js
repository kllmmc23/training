import React from "react";
import Person from "./Person";
import { Component } from "react";

class App extends Component {

  state = {
    persons: [
    {name:'Max', age: 28}
  ]
}

  render() {
    return (
      <div className="App">
        <h1>hi Im a react app</h1>
        <p>this is really working</p>
        <button onClick={}>Swtich Name</button>
        <Person name={this.state.persons[0].name} age="28" />
        <Person name="Manu" age="29">
          My hobbies: Racing
        </Person>
        <Person name="Stephanie" age="26" />
      </div>
    );
  }
}

export default App;
