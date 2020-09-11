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
    ],
    otherState: 'toggle ok'
  };

  switchNameHandler =(newName) => {
    console.log('Was clicked');
    //DONT DO THIS : this.state.persons[0].name = 'Emyu';
    this.setState({
      persons: [
        { name: newName, age: '33' },
        { name: 'Mustafa', age: '30' },
        { name: 'Yahya', age: '2' },
        { name: 'Younes', age: '1' },
      ]
    });
    this.setState({
      otherState: 'Not ok'
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Eman changed', age: '33' },
        { name: 'Mustafa', age: '30' },
        { name: event.target.value, age: '2' },
        { name: 'Younes changed', age: '1' },
      ]
    });
  }

  render() {
    const style= {
      backgroundColor: 'white',
      border: '1px solid red',
      padding: '8px'
    };
    return (
      <div className="App">
        <h1>Hi, I am react app</h1>
        <p>this is working</p>
        <p>{this.state.otherState}</p>
        {/* if there is no parameters */}
        {/* <button onClick={this.switchNameHandler}>Switch name</button> */}
        <button style={style} onClick={() => this.switchNameHandler('Ahmed')}>Switch name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        click={this.switchNameHandler.bind(this,'Asmaa')} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        changed={this.nameChangedHandler} >My Hoppies Person</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />
        <Person 
        name={this.state.persons[3].name} 
        age={this.state.persons[3].age} />
      </div>
    );
  }
}

export default App;
