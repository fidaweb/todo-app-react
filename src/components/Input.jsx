import React from 'react'
import '../styling/input.scss'
import '../styling/todo.scss'
import { addTask } from '../state/reducers/todoSlice'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
const Input = () => {

  const [task,setTask]=useState('')
  const [completed,setCompleted]=useState(false)
  const todos=useSelector(state=>state.todos)
  const themes=useSelector(state=>state.themes)

  const dispatch=useDispatch()

const addOneTask=()=>{
const todo={
  id: todos.length,
  task: task,
  complete: completed
}
if(task!==''){
  dispatch(addTask(todo))
  setTask('')
  setCompleted(false)
}


}

  return (
    <li 
    className={themes===false?'TodoInput':'TodoInputDark'}
    
    >
        <button className={themes===false?'notCompleted':'notCompletedDark'}></button>
        <input className={themes===false?'task':'taskDark'} placeholder='Add New Task' onChange={(e)=>{setTask(e.target.value)}} value={task}/>
        <button className={themes===false?'':'addDark'} onClick={()=>{addOneTask();}}>Add</button>
        <button className={themes===false?'delete':'deleteDark'}></button>
    </li>
  )
}

export default Input