import React, { Component } from 'react';
import './App.css';

import Title from './components/Title'
import AddToList from './components/AddToList'
import SearchList from './components/SearchList'
import ClearList from './components/ClearList'
import List from './components/List'

class App extends Component {
constructor(props) {
  super(props)

  this.state = {
    todos: [],
    inputValue: ''
  }
  this.addToDo = this.addToDo.bind(this)
  this.removeToDo = this.removeToDo.bind(this)
}

// //For easier debugging - Nate
// componentDidMount() {
//   console.log('inputValue')
// }

addToDo(inputValue) {
  this.setState({todos: [...this.state.todos, inputValue]})
}

clearToDoList(value) {
  this.setState({todos: []})
}

updateInputValue(inputValue) {
  this.setState({inputValue})
}

removeToDo(index) {
  this.setState(this.state.todos.splice(index, 1))
}

  render() {

    const findList = this.state.todos.filter(task =>
        task.toLowerCase().includes(
        this.state.inputValue.toLowerCase()
      )
    );

    return (
      <div className="App">
        <Title />
        <AddToList addToList={this.addToDo}/>
        <SearchList value={this.state.inputValue} updateInputValue={(inputValue)=>this.updateInputValue(inputValue)}/>
        <ClearList clearList={()=>this.clearToDoList()}/>
        <List listOfToDo={findList} removeToDo={this.removeToDo}/>
      </div>
    );
  }
}

export default App;
