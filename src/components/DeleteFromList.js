import React from 'react'
import './DeleteFromList.css'

export default function DeleteFromList(props) {

  const removeToDo = props.removeToDo;

  return(
      <button onClick={(event) => {
      removeToDo(event.target.key)
      }
    }>Delete</button>
  )
}