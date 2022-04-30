import {createSlice} from '@reduxjs/toolkit'
import {TodosType} from "../App";



const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [] as TodosType[]
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
            })
        },
        removeTodo(state, action) {},
        handleChecked(state, action){}

    }
})

export  const {addTodo, removeTodo, handleChecked} = todoSlice.actions;
export default todoSlice.reducer;