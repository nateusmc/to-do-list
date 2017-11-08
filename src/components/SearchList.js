import React from 'react'
import './SearchList.css'

export default function SearchList(props) {
  return (
  <div>
    <label htmlFor="search">Search your list: </label>
    <input name="search" id="search" value={props.value} onChange={e=>props.updateInputValue(e.target.value)}></input>
  </div>
  )
}