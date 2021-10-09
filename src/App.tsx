import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./TodoList";
import {v1} from "uuid";

export type propsFilteredTasks = 'All' | 'Active' | 'Completed'

function App() {
    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JavaScript", isDone: true},
        {id: v1(), title: "NodeJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ])


    const changeStatus = (isDone: boolean, tID: string) => {
        setTasks(tasks.map(m => m.id === tID ? ({...m, isDone: isDone}) : m))
    }
    const removeTasks = (id: string) => {
        let deleteTask = tasks.filter(f => f.id !== id)
        setTasks(deleteTask)
    }
    const addTask = (newTitle: string) => {
        if (newTitle.trim() !== '') {
            let task = {id: v1(), title: newTitle.trim(), isDone: false}
            let newTasks = [task, ...tasks]
            setTasks(newTasks)
        }
    }

    let [filter, setFilter] = useState<propsFilteredTasks>('All')
    let filterForTodoList = tasks
    if (filter === 'Active') {
        filterForTodoList = tasks.filter(f => !f.isDone)
    }
    if (filter === 'Completed') {
        filterForTodoList = tasks.filter(f => f.isDone)
    }

    const changeFilter = (value: propsFilteredTasks) => {
        setFilter(value)
    }

    return (
        <div className="App">
            <TodoList title='What to learn'
                      tasks={filterForTodoList}
                      removeTasks={removeTasks}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeStatus={changeStatus}
                      filter={filter}
            />
        </div>
    );
}

export default App;
