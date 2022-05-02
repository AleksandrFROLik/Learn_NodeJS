import React from 'react';
import {TodosType} from "../../App";
import {removeTodo, handleChecked}  from '../../store/todoSlice'
import {useAppDispatch} from "../../store";


type TodoItemType = {
    todo: TodosType
    id:string
}

export const TodoItem = ({todo, id}: TodoItemType) => {
    const dispatch = useAppDispatch()
    return (
        <li>
            <input type="checkbox" checked={todo.completed} onChange={() => dispatch(handleChecked({id}))}/>
            <span>{todo.text}</span>
            <span className='delete' onClick={() => dispatch(removeTodo({id}))}>&times;</span>
        </li>
    );
};

