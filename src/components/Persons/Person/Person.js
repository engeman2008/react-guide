
import React, { Component, Fragment } from 'react';
import './Person.css';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context'

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount = () => {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('Person.js render');
        return (
            //Aux or Fragment
            <Fragment>
                <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>'Authenticated'</p> : <p>'Please log in'</p>}
                </AuthContext.Consumer>
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