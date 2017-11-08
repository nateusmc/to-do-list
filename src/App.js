import React, { Component } from 'react';
import './App.css';
import AddToList from './components/AddToList'
import Title from './components/Title'
import List from './components/List'

class App extends Component {
constructor(props) {
  super(props)

  this.state = {
    todos: []
  }
  this.addToDo = this.addToDo.bind(this)
}

//for easier debugging
componentDidMount() {
  console.log('inputValue')
}

addToDo(inputValue) {
this.setState({todos: [...this.state.todos, inputValue]})
}

  render() {
    return (
      <div className="App">
        <Title />
        <AddToList addToList={this.addToDo}/>
        <List listOfToDo={this.state.todos}/>
      </div>
    );
  }
}

export default App;
