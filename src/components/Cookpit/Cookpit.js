import React, { useEffect } from 'react';
import classes from './Cookpit.css'

const cookpit = (props) => {

    useEffect(() => {
        console.log('cookpit useeffect')
        return () => {
            console.log('cookpit useeffect clean')
        };
    });

    // let classes = ['red', 'blue'].join(' ');
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cookpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>this is working</p>
            <button className={btnClass} onClick={props.clicked}>
                Toggle
          </button>
        </div>
    );
};

export default React.memo(cookpit);