import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => {
    console.log('Persons.js render');
    return <Person
        clicked={() => props.clicked(index)}
        changed={(event) => props.changed(event, person.id)}
        name={person.name}
        age={person.age}
        key={person.id}
        isAuth={props.isAuthenticated} />
});

export default persons;

