import React from 'react';
import {TodosType} from "../../App";
import {TodoItem} from "../todoItem/TodoItem";

type TodoListType = {
    todos: TodosType[]
    handleChecked: (id: string) => void
    removeTodo: (id: string) => void
}

export const TodoList = ({todos, handleChecked, removeTodo}: TodoListType) => {
    return (
        <ul>
            {
                todos.map(todo => <TodoItem key={todo.id} todo={todo} handleChecked={handleChecked}
                                            removeTodo={removeTodo}/>)
            }
        </ul>
    );
};

