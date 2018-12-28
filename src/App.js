import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
    //state only available in components which are used by extending Component in react
    state = {
        persons: [
            {name: 'Joey', age: 23},
            {name: 'Max', age: 26},
            {name: 'Jennifer', age: 24}
        ],
        showPersons: false
    };

    switchNameHandler = (newName) => {
        console.log('clicked')
        // DO NOT DO THIS!!!
        // this.state.persons[0].name = 'Maximillian'
        this.setState({persons: [
                {name: newName, age: 54},
                {name: 'Maximilian', age: 26},
                {name: 'Simon', age: 24},
            ]
        })
    };

    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState( {showPersons: !doesShow })
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                        />
                    })}
                </div>
            )
        }

        return (
            <div className="App">
                <h1>Hi im a React App</h1>
                <p>This is really working!</p>
                <button style={style}
                        onClick={this.togglePersonsHandler}>Toggle Persons
                </button>
                {persons}
            </div>
        );
        //   return React.createElement('div', {className: 'App'}, '', React.createElement('h1', null, 'This is a React App'))
    }
}

export default App;
