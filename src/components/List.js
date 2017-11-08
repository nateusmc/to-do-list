import React from 'react'
import './List.css'
import DeleteFromList from './DeleteFromList'

export default function List (props) {

const todo = props.listOfToDo.map((task, index) => {
return <li id={index} key={index}>{task} <DeleteFromList removeToDo={props.removeToDo} index={index}/></li>
})

  return (
    <div>
      <ul>
        {todo}
      </ul>
    </div>
  )
}