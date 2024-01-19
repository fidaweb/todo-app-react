import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './reducers/todoSlice'
import themeReducer from './reducers/theme.Slice'
export default configureStore({
    reducer:{
        todos:todoReducer,
        themes:themeReducer
    }
})
   
