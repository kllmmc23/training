import React from 'react';
import Person from './Person';

function App() {
  return (
    <div className='App'>
      <h1>hi Im a react app</h1>
      <p>this is really working</p>
      <Person name='Max' age='28'/>
      <Person name='Manu' age='29'>My hobbies: Racing</Person>
      <Person name='Stephanie' age='26'/>
      
    </div>
  );
}

export default App;
