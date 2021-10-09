import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {propsFilteredTasks} from "./App";
import {Button} from "./components/Button";
import {Input} from "./components/Input";
import {SingleInput} from "./components/SingleInput";
import {ButtonForInput} from "./components/ButtonForInput";
import style from './TodoList.module.css'

type propsTasksType =
    {
        id: string
        title: string
        isDone: boolean
    }

type prosTodoListType = {
    title: string
    tasks: propsTasksType[]
    removeTasks: (tID: string) => void
    changeFilter: (value: propsFilteredTasks) => void
    addTask: (newTitle: string) => void
    changeStatus: (isDone: boolean, tID: string) => void
    filter: propsFilteredTasks

}

export const TodoList = ({title, tasks, removeTasks,changeFilter, addTask,  changeStatus, filter, ...props}: prosTodoListType) => {

    let [newTitle, setTitle] = useState('')
    let [error, setError] = useState(false)

    const onClickHandlerForAddTask = () => {
        if (newTitle === '') {
            setError(true)
        }
        addTask(newTitle)
        setTitle('')

    }
    const onChangeHandlerForAddTask = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            if (newTitle === '') {
                setError(true)
            }
            addTask(newTitle)
            setTitle('')
        }
    }
    const callBackHandlerForRemoveTask = (tID: string) => {
        removeTasks(tID)
    }
    const onChangeHandlerForCheckTask = (e: ChangeEvent<HTMLInputElement>, tID: string) => {
        changeStatus(e.currentTarget.checked, tID)
    }
    const callBackHandlerForFilter = (value: propsFilteredTasks) => {
        changeFilter(value)
    }
    // const callBackForAddTask = () => {
    //     addTask(newTitle)
    // }
    // const callBakHandlerForAdd = (newTitle:string) => {
    //     addTask(newTitle)
    // }

    return (
        <div>
            <h3>{title}</h3>
            <div>
                {/*<SingleInput newTitle={newTitle}*/}
                {/*             setTitle={setTitle}*/}
                {/*             callBack={callBackForAddTask}*/}
                {/*             addTask={callBackForAddTask}*/}
                {/*/>*/}
                {/*<ButtonForInput callBack={callBackForAddTask}*/}
                {/*                name={'+'}*/}
                {/*                setTitle={setTitle}*/}
                {/*/>*/}

                {/*<Input callBack={callBakHandlerForAdd}/>*/}
                <input className={error ? style.error : ''}
                       value={newTitle}
                       onChange={onChangeHandlerForAddTask}
                       onKeyPress={onKeyPressHandler}/>
                <button onClick={onClickHandlerForAddTask}>+</button>
                {error && <div className={style.errorMessage}>Title is required</div>}
            </div>
            <ul>
                {
                    tasks.map(t => <li key={t.id}>
                        <input type="checkbox"
                               checked={t.isDone}
                               onChange={e => onChangeHandlerForCheckTask(e, t.id)}
                        /> <span className={t.isDone ? style.isDone: ''}>{t.title}</span>
                        <Button  callBack={() => callBackHandlerForRemoveTask(t.id)} name={'X'} filter={filter}/>
                    </li>)
                }

            </ul>
            <div>
                <Button  callBack={() => callBackHandlerForFilter('All')} name={'All'} filter={filter}/>
                <Button  callBack={() => callBackHandlerForFilter('Active')} name={'Active'} filter={filter}/>
                <Button  callBack={() => callBackHandlerForFilter('Completed')} name={'Completed'} filter={filter}/>
            </div>
        </div>
    )
}