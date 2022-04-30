import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./components/todoList/TodoList";
import {InputField} from "./components/inputField/InputField";


export type TodosType = {
    id: string
    text: string
    completed: boolean
}

export const App = () => {

    const [todos, setTodos] = useState<TodosType[]>([])
    const [text, setText] = useState('')

    const addText = () => {
        if (text.trim().length) {
            setTodos([
                ...todos,
                {
                    id: new Date().toISOString(),
                    text,
                    completed: false
                }
            ])
            setText('')
        }
    };


    const removeTodo = (todoId: string) => {
        setTodos(todos.filter(todo => todo.id !== todoId))
    };

    const handleChecked = (todoId: string) => {
        setTodos(todos.map(todo => todo.id === todoId ? {...todo, completed: !todo.completed} : todo))
    };

    return (
        <div className="App">
            <InputField text={text} setText={setText} addText={addText}/>
            <TodoList todos={todos} handleChecked={handleChecked} removeTodo={removeTodo}/>
        </div>
    );
}


