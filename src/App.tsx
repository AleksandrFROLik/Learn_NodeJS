import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./components/todoList/TodoList";
import {InputField} from "./components/inputField/InputField";
import {useDispatch} from "react-redux";
import {addTodo} from './store/todoSlice'


export type TodosType = {
    id: string
    text: string
    completed: boolean
}

export const App = () => {

    const [todos, setTodos] = useState<TodosType[]>([])
    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const addText = () => {
        dispatch(addTodo({text}))
        setText('')
    };

    return (
        <div className="App">
            <InputField text={text} setText={setText} addText={addText}/>
            <TodoList todos={todos}  />
        </div>
    );
}


