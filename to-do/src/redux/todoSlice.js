import { createSlice } from "@reduxjs/toolkit";

 const todoSlice = createSlice ({
    name:"todo",
    initialState: {
        data:[]
    },

    reducers:{
        addTodo(state, action) {
           state.data.push({
            id: state.data.length +1,
            title: action.payload,
           });
        },
        deleteTodo(state, action){
               state.data = state.data.filter((val) => val.id !== action.payload);
        },
        editTodo(state, action){
            const {id, title} = action.payload
            state.data = state.data.map((value) => value.id === id ? {...value, title  } : value)
        }
    },
 });

 export const{addTodo, editTodo, deleteTodo} = todoSlice.actions;
 export default todoSlice.reducer