
import React from 'react';
import './Person.css';
import classes from './Person.css';

const person = props => {
    const rndm = Math.random();
    if(rndm > 0.5){
        throw new Error('Something went wrongd');
    }
    return (
       
        <div className={classes.Person}>
            <p onClick={props.clicked} >I'm {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        </div>
    );
};

export default person;
