import React from 'react';
import './ClearList.css'

export default function ClearList(props) {  
  return <button onClick={() => props.clearList()}>Clear List</button>
}
