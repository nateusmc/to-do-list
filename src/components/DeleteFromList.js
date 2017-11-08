import React from 'react'
import './DeleteFromList.css'

export default function DeleteFromList(props) {

  const removeToDo = props.removeToDo;

  return(
      <button onClick={(event) => {
      removeToDo(props.index);
      //event.target.parentNode.getAttribute("id"));
      }
    }>Delete</button>
  )
}