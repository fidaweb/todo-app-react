import React, { useEffect } from 'react'
import '../styling/todo.scss'
import { 
  removeTask,
  completeTask,
  dragEnter,
  reOrder} from '../state/reducers/todoSlice'
import { useRef } from 'react'
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux'

const Todo = ({todo,index}) => {
  const dragItemId=useRef(0)
  const dragOverItemId=useRef(0)
  const dragItemRef=useRef(null)
  const themes=useSelector(state=>state.themes)

  const dispatch=useDispatch()
 
  


  const removeOneTask=()=>{
    dispatch(removeTask(todo.id))
  }
  const completeOneTask=()=>{
    dispatch(completeTask({...todo,complete:!todo.complete}))
  }
  const dragOneEnter=(e)=>{
    if(!isNaN(e.target.dataset.index)){
      dragOverItemId.current=e.target.dataset.index
    }
    // console.log(dragOverItemId.current)
    dispatch(dragEnter({dragOverItemId}))
  }
 const dragStart=(e)=>{
  dragItemId.current=parseInt(e.target.dataset.index)
  dragItemRef.current.classList.add('drag')
 }
 const sortTodos=(e)=>{
  dragItemRef.current.classList.remove('drag')

  dispatch(reOrder({dragItemId}))
 }

  return (
    <li 
    
    id={todo.id}
    ref={dragItemRef}
    className={themes===false?'Todo':'TodoDark'}
    data-index={index}
    draggable
    onDragStart={dragStart}
    onDragEnter={dragOneEnter}
    onDragEnd={sortTodos}
    onDragOver={e=>{e.preventDefault()}}
    >
        
        <button className={
          themes === false 
    ? (todo.complete === true ? 'completed' : 'notCompleted') 
    : (todo.complete === true ? 'completedDark' : 'notCompletedDark')
        } 
          onClick={()=>{completeOneTask()}}></button>
        <div className={
          themes === false 
          ? (todo.complete === true ? 'completedTask' : 'task') 
          : (todo.complete === true ? 'completedTaskDark' : 'taskDark')
        }>{todo.task}</div>
        <button className={themes===false?'delete':'deleteDark'} onClick={()=>{removeOneTask()}}></button>
        

    </li>
  )
}

export default Todo