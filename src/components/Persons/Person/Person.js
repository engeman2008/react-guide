
import React, {Fragment} from 'react';
import './Person.css';
import classes from './Person.css';
import Aux from '../../../hoc/Aux'

const person = props => {
    console.log('Person.js render');
    return (
       <Fragment>
        // <div className={classes.Person}>
            <p onClick={props.clicked} >I'm {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name} />
        // </div>
        </Fragment>
    );
};

export default person;
