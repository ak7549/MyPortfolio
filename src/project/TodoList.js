import React from 'react'
import "./TodoNew.css"
import Tooltip from "@mui/material/Tooltip";
const TodoList = (props) => {
  return (
    <>
    <div className="todolist">
        <h2>{props.id+1}-{props.text}</h2>
        <Tooltip title="Delete" placement="top-end">
        <button  onClick={()=>{
            props.delete(props.id)
        }}>delete</button>
           
          </Tooltip>
      
        
    </div>
    
      
    </>
  )
}

export default TodoList
