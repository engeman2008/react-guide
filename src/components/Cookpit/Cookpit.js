import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cookpit.css'
import AuthContext from '..//../context/auth-context'

const cookpit = (props) => {

    const toggleBtnRef = useRef(null) //React.createRef();
    const authContext = useContext(AuthContext);

    useEffect(() => {
        toggleBtnRef.current.click()
        console.log('cookpit useeffect')
        return () => {
            console.log('cookpit useeffect clean')
        };
    }, []);

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
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
                Toggle
          </button>
         <button onClick={authContext.login}>Log In</button>
          {/* <AuthContext.Consumer>
              {(context) => <button onClick={context.login}>Log In</button>}
          </AuthContext.Consumer> */}
          
        </div>
    );
};

export default React.memo(cookpit);