import React from 'react'
import './AddToList.css'

export default function AddToList (props) {

  const addToDo = props.addToList

  return(
    <div className="mainDiv">
    <form onSubmit={(event) => {event.preventDefault(); addToDo(event.target.inputType.value); event.target.inputType.value = ''}}>
      <label htmlFor="inputType">Enter your task to add to your to do list </label>
      <input type="text" id="inputType" name="inputType" />
      <button type="submit">Add To List</button>
    </form>
    </div>  
  )
}

