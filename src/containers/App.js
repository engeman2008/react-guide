import React, { PureComponent } from 'react';
import Person from '../components/Persons/Person/Person';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cookpit from '../components/Cookpit/Cookpit'
import WithClass from '../hoc/WithClass';

class App extends PureComponent {

  state = {
    persons: [
      { id: '1', name: 'Mustafa', age: '30' },
      { id: '2', name: 'Yahya', age: '2' },
      { id: '3', name: 'Younes', age: '1' },
    ],
    otherState: 'toggle ok',
    changeCounter: 0
  };

  componentDidMount = () => {
    console.log('App.js did mount')
  };
  componentDidUpdate = () => {
    console.log('App.js did update');
  }

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
    // this.setState({ persons: persons, changeCounter: this.state.changeCounter + 1 });
    this.setState((prevState, props) => {
        return { persons: persons, changeCounter: prevState.changeCounter + 1 }
    });
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
    console.log('App.js render')
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
      />;
    }

    return (
      <WithClass classes={classes.App}>
        <Cookpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonHandler} />
        {persons}
      </WithClass>
    );
  }
}

export default App;
