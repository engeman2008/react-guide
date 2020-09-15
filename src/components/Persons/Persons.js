import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
    return props.persons.map((person, index) => {
        return (
            <Person
                clicked={() => props.clicked(index)}
                changed={(event) => props.changed(event, person.id)}
                name={person.name}
                age={person.age}
                key={person.id} />
        )
    });
};

export default persons;