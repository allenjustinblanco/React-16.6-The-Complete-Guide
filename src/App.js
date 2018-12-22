import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'


class App extends Component {
    //state only available in components which are used by extending Component in react
    state = {
        persons: [
            {name: 'Joey', age: 23},
            {name: 'Max', age: 26},
            {name: 'Jennifer', age: 24}
            ]
    };

    switchNameHandler = (newName) => {
        console.log('clicked')
        // DO NOT DO THIS!!!
        // this.state.persons[0].name = 'Maximillian'
        this.setState({persons: [
                {name: newName, age: 54},
                {name: 'Maximilian', age: 26},
                {name: 'Simon', age: 24}
            ]
        })
    };

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name:  event.target.value, age: 23},
                {name:  'Aj' , age: 26},
                {name: 'Jennifer', age: 24}
            ]
        } )
    };

  render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

    return (
      <div className="App">
        <h1>Hi im a React App</h1>
          <p>This is really working!</p>
          <button style={style}
                  onClick={this.switchNameHandler.bind(this, 'Manu')}>Switch Name</button>
          <Person
              name={this.state.persons[0].name} age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Jon')}
          changed={this.nameChangedHandler}/>
          <Person
              name={this.state.persons[1].name} age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Naruto')}
          >My Hobbies: Dancing</Person>
          <Person
              name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //   return React.createElement('div', {className: 'App'}, '', React.createElement('h1', null, 'This is a React App'))
  }
}

export default App;
