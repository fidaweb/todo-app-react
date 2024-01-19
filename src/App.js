
// import './App.css';
import Input from './components/Input';
import Todo from './components/Todo';

import './styling/app.scss'
import { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { clearCompletedTasks } from './state/reducers/todoSlice';
import { toggleTheme } from './state/reducers/theme.Slice';
function App() {

  const todos=useSelector(state=>state.todos)
  const themes=useSelector(state=>state.themes)
  const [theme,setTheme]=useState(themes)
  const [todoList,setTodoList]=useState(todos)
  const dispatch=useDispatch()
  useEffect(()=>{
    setTodoList(todos)
    const myBody=document.getElementById('myBody')
    if(themes===true){
      myBody.classList.add('special')
    }else{
      myBody.classList.remove('special')
    }
  },[todos,themes])

  const changeTheme=()=>{
    // console.log(themes)
    dispatch(toggleTheme({themes}))
   
  }

  const renderList=(e)=>{
    const categories=document.querySelectorAll('.Todo')
   
    categories.forEach(category=>{category.classList.remove('active')})
    e.target.classList.add('active')
    switch(e.target.innerText){
      case 'All':
        setTodoList(todos)
        break
      case 'Active':
        setTodoList(todos.filter(todo=>todo.complete===false))
        break
      case 'Completed':
        setTodoList(todos.filter(todo=>todo.complete===true))
        break
      default:
        setTodoList(todos)
        
    }
  }

  const clearCompleted=()=>{
    dispatch(clearCompletedTasks())
    
  }

  return (
    <div className="App">
      <div className='container'>
      <div className={themes===false?'head-container':'head-container-dark'}>
      <div className='display'>
        <div className='title'>
          <div className='titletext'><h1>TODO</h1></div>
          <div onClick={()=>{changeTheme()}} className={themes===false?'theme':'themeDark'}/>
        </div>
        <Input/>
        {/* <div className='displayBelow'> */}
        <ul className='todoList'>
          
          {
              todoList.map((todo,index)=><Todo key={todo.id} todo={todo} index={index}/>)
              
          }
        <div className={themes===false?'bottomMenu':'bottomMenuDark'}>
        <div>{todos.length} items left</div>
          <div className='categories'>
            <button onClick={(e)=>{renderList(e)}}>All</button>
            <button onClick={(e)=>{renderList(e)}}>Active</button>
            <button onClick={(e)=>{renderList(e)}}>Completed</button>
          </div>
        
        <button onClick={()=>{clearCompleted()}}>Clear Completed</button>
        </div>
        <div className={themes===false?'instruction':'instructionDark'}>Drag and Drop to reorder list</div>
        </ul>
        {/* </div> */}
        
 
       
        
      </div>
      
      </div>
     
      </div>
   </div>
  );
}

export default App;
