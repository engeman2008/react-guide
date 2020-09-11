import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Mustafa', age: '30' },
      { id: '2', name: 'Yahya', age: '2' },
      { id: '3', name: 'Younes', age: '1' },
    ],
    otherState: 'toggle ok'
  };

  nameChangedHandler = (event, id) => {
    // const personIndex = this.state.persons.find(p => p.id === id);
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] }; //this or next line to copy object
    // const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;  this create pointer to original array not copy
    // const persons = this.state.persons.slice(); use this Or 
    const persons = [...this.state.persons]; //spread operator .. craete copy of persons

    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid #eee',
      padding: '8px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              clicked={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              name={person.name}
              age={person.age}
              key={person.id} />
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }
    // let classes = ['red', 'blue'].join(' ');
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');

    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');

    }
    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I am react app</h1>
          <p className={classes.join(' ')}>this is working</p>
          <p>{this.state.otherState}</p>
          <button style={style} onClick={this.togglePersonHandler}>Switch name</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
