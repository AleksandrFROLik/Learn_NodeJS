import React from 'react';
import {TodosType} from "../../App";


type TodoItemType = {
    todo: TodosType
    handleChecked: (id: string) => void
    removeTodo: (id: string) => void
}

export const TodoItem = ({todo, handleChecked, removeTodo}: TodoItemType) => {
    return (
        <li>
            <input type="checkbox" checked={todo.completed} onChange={() => handleChecked(todo.id)}/>
            <span>{todo.text}</span>
            <span className='delete' onClick={() => removeTodo(todo.id)}>&times;</span>
        </li>
    );
};

