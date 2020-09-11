import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Eman', age: '34' },
      { name: 'Mustafa', age: '30' },
      { name: 'Yahya', age: '2' },
      { name: 'Younes', age: '1' },
    ],
    otherState: 'toggle ok'
  });

  console.log(personsState);

  const switchNameHandler = () => {
    console.log('Was clicked');
    //DONT DO THIS : this.state.persons[0].name = 'Emyu';
    setPersonsState({
      persons: [
        { name: 'Emaaaaaan', age: '33' },
        { name: 'Mustafa', age: '30' },
        { name: 'Yahya', age: '2' },
        { name: 'Younes', age: '1' },
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I am react app</h1>
      <p>this is working</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age} />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age} >My Hoppies Person</Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age} />
      <Person
        name={personsState.persons[3].name}
        age={personsState.persons[3].age} />
    </div>
  );
}

export default app;
