
import React, {Fragment} from 'react';
import './Person.css';
import classes from './Person.css';
import Aux from '../../../hoc/Aux'
import PropTypes from 'prop-types';

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

person.PropTypes = {
    clicked: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default person;
