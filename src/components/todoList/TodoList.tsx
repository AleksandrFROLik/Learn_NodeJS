import React from 'react';
import {TodosType} from "../../App";
import {TodoItem} from "../todoItem/TodoItem";
import {useSelector} from "react-redux";
import {RootState} from "../../store";


type TodoListType = {
    todos: TodosType[]
}

export const TodoList = ({}: TodoListType) => {
    const todos = useSelector<RootState, TodosType[] >(state => state.todos.todos)
    return (
        <ul>
            {
                todos.map(todo => <TodoItem key={todo.id}
                                            todo={todo}
                                            id={todo.id}
                                          />)
            }
        </ul>
    );
};

