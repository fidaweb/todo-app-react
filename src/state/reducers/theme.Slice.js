import { createSlice } from "@reduxjs/toolkit";

let initialState=false

const themeSlice=createSlice({
    name:'theme',
    initialState,
    reducers:{
      toggleTheme:(state,action)=>{
        state = !action.payload.themes;
        
        console.log(state)
        return state
      }  
    },
})

export const {toggleTheme}=themeSlice.actions

export default themeSlice.reducer