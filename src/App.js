import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi im a React App</h1>
          <Person name={'Max'} age={'43'}/>
          <Person name={'Justin'} age={'25'}/>
      </div>
    );
    //   return React.createElement('div', {className: 'App'}, '', React.createElement('h1', null, 'This is a React App'))
  }
}

export default App;
