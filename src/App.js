import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Eman', age: '34' },
      { name: 'Mustafa', age: '30' },
      { name: 'Yahya', age: '2' },
      { name: 'Younes', age: '1' },
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I am react app</h1>
        <p>this is working</p>
        <button>Switch name</button>
        <Person name='Eman' age='34' />
        <Person name='Mustafa' age='30' >My Hoppies Person</Person>
        <Person name='Yahya' age='2' />
      </div>
    );
  }
}

export default App;
