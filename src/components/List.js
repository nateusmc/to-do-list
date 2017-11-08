import React from 'react'
import './List.css'


export default function List (props) {

const todo = props.listOfToDo.map((task, index) => {
return <li key={index}>{task}<button>delete</button></li>
})

  return (
    <div>
    <ul>
    {todo}
    </ul>
    </div>
  )
}