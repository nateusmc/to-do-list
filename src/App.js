import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor() {
  super()

  this.state = {
    todos: []
  }
  this.addToDo = this.addToDo.bind(this)
  this.deleteToDo = this.deleteToDo.bind(this)
}

addToDo() {

}

deleteToDo() {

}

  render() {
    return (
      <div className="App">
        <Title />
        <AddToList addtolist={this.addToDo}/>
        <List />
      </div>
    );
  }
}

export default App;
