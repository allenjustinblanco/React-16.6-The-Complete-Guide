import React from 'react';
import styling from './Person.css';

const person = (props) => {

    return (
        <div className={styling.Person}>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age}!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;
