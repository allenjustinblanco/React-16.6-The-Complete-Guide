import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, {StyleRoot} from 'radium';


class App extends Component {
    //state only available in components which are used by extending Component in react
    state = {
        persons: [
            { id: '1',name: 'Joey', age: 23},
            { id: '2',name: 'Max', age: 26},
            { id: '3',name: 'Jennifer', age: 24}
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

    nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });

      const person = {
        ...this.state.persons[personIndex]
      }

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState( {persons: persons} )
    }



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
            backgroundColor: 'blue',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
              backgroundColor: 'lightgreen',
              color: 'black'
            }
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
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}
                        />
                    })}
                </div>
            )
            style.backgroundColor = 'red'
            style[':hover'] = {
              backgroundColor: 'cyan',
              color: 'red'
            }
        }

        let classes = [];
        if(this.state.persons.length <= 2){
          classes.push('blue');
        }
        if(this.state.persons.length <= 1) {
          classes.push('bold');
        }

        return (
          <StyleRoot>
            <div className="App">
                <h1>Hi im a React App</h1>
                <p className={classes.join(' ')}>This is really working!</p>
                <button style={style}
                        onClick={this.togglePersonsHandler}>Toggle Persons
                </button>
                {persons}
            </div>
          </StyleRoot>
        );
        //   return React.createElement('div', {className: 'App'}, '', React.createElement('h1', null, 'This is a React App'))
    }
}

export default Radium(App);
