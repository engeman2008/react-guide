
import React, { Component, Fragment } from 'react';
import './Person.css';
import classes from './Person.css';
import Aux from '../../../hoc/Aux'
import PropTypes from 'prop-types';


class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount = () => {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('Person.js render');
        return (
            //Aux or Fragment
            <Fragment>
                <p onClick={this.props.clicked} >I'm {this.props.name} and I'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input
                    type='text'
                    onChange={this.props.changed}
                    value={this.props.name}
                    // ref={(inputEl) => { this.inputElement = inputEl }}
                    ref={this.inputElementRef}
                />
            </Fragment>
        );
    }
}

Person.PropTypes = {
    clicked: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default Person;