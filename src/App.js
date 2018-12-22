import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    //state only available in components which are used by extending Component in reacr
    state = {
        persons: [
            {name: 'Joey', age: 23},
            {name: 'Max', age: 26},
            {name: 'Jennifer', age: 24}
            ]
    };

    switchNameHandler = () => {
        console.log('clicked')
    };

  render() {
    return (
      <div className="App">
        <h1>Hi im a React App</h1>
          <p>This is really working!</p>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Dancing</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //   return React.createElement('div', {className: 'App'}, '', React.createElement('h1', null, 'This is a React App'))
  }
}

export default App;
