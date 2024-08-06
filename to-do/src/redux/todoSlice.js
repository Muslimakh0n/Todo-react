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
            title: action.playlod,
           });
        },
    },
 });

 export const{addTodo} = todoSlice.actions;
 export default todoSlice.reducer