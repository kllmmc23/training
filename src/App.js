import React, { useState } from "react";
import Person from "./Person";

const App = (props) => {
  const [personState, setPersonState] = useState({
    person: [{ name: "Max", age: 28 }],
    otherState: "something",
  });

  const switchNameHandler = () => {
    setPersonState({
      person: [{ name: "Mike", age: "37" }],
    });
  };

  return (
    <div className="App">
      <h1>hi Im a react app</h1>
      <p>this is really working</p>
      <button onClick={switchNameHandler}>Swtich Name</button>
      <Person
        name={personState.person[0].name}
        age={personState.person[0].age}
      />
      <Person name="Manu" age="29">
        My hobbies: Racing
      </Person>
      <Person name="Stephanie" age="26" />
    </div>
  );
};

export default App;
