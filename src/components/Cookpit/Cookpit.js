import React from 'react';
import classes from './Cookpit.css'

const cookpit = (props) => {
    // let classes = ['red', 'blue'].join(' ');
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cookpit}>
            <h1>Hi, I am react app</h1>
            <p className={assignedClasses.join(' ')}>this is working</p>
            <button className={btnClass} onClick={props.clicked}>
                Toggle
          </button>
        </div>
    );
};

export default cookpit;