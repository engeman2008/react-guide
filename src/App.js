import React, { Component } from 'react';
import Person from './Person/Person';
import classes from './App.css';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    let persons = null;
    let btnClass = '';
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person
                clicked={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                name={person.name}
                age={person.age} />
            </ErrorBoundary>
          })}
        </div>
      );
      btnClass = classes.Red;
    }
    // let classes = ['red', 'blue'].join(' ');
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);

    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);

    }
    return (
      <div className={classes.App}>
        <h1>Hi, I am react app</h1>
        <p className={assignedClasses.join(' ')}>this is working</p>
        <p>{this.state.otherState}</p>
        <button className={btnClass} onClick={this.togglePersonHandler}>
          Toggle
          </button>
        {persons}
      </div>
    );
  }
}

export default App;
