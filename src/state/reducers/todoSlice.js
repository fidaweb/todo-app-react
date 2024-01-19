import { createSlice } from "@reduxjs/toolkit";

let initialID=0;
let dragItemId=0
let dragOverItemId=0

const initialState=  [
    {
        id: initialID++, // @Hack: Create the increasing id automatically with `initialID++`
        task: '♦ Complete online JavaScript course ♦',
        complete: true
    },
    {
        id: initialID++,
        task: '♦ Jog around the park 3x ♦',
        complete: false
    },
    {
        id: initialID++,
        task: '♦ 10 minutes meditation ♦',
        complete: false
    },
    {
        id: initialID++,
        task: '♦ Read for 1 hour ♦',
        complete: false
    },
    {
        id: initialID++,
        task: '♦ Pick up groceries ♦',
        complete: false
    },
    {
        id: initialID++,
        task: '❤ Complete Todo App on Frontend Mentor ❤',
        complete: true
    },
]

const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTask:(state,action)=>{
            return [...state,action.payload]
        },
        removeTask:(state,action)=>{
            return state.filter(todo=>todo.id!==action.payload)
        },
        completeTask:(state,action)=>{
            return state.map(todo=> todo.id===action.payload.id?action.payload:todo)
        },
        clearCompletedTasks:(state,action)=>{
            return state.filter(todo=>todo.complete!==true)
        },
        dragEnter:(state,action)=>{
            dragOverItemId=action.payload.dragOverItemId.current
        },
        reOrder:(state,action)=>{
            dragItemId=action.payload.dragItemId.current
            const draggedItem=state[dragItemId]
            // console.log(dragOverItemId)
            // console.log(dragItemId)
            // console.log(...state)
            // console.log('-------------------')
            if(dragItemId!==dragOverItemId){
                state.splice(dragItemId,1)
                console.log(Reflect.getPrototypeOf(draggedItem))
                state.splice(dragOverItemId,0,draggedItem)
                return state
            }
            else{
                return state
            }
        }
    }
})


export const {
    addTask,
    removeTask,
    completeTask,
    clearCompletedTasks,
    dragEnter,
    reOrder
}=todoSlice.actions

export default todoSlice.reducer