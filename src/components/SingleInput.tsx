import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import style from "../TodoList.module.css";

type propsSingleInput = {
    newTitle:string
    setTitle: (newTitle:string)=>void
    callBack: (newTitle:string)=>void
    addTask: (newTitle:string)=>void

}

export  const  SingleInput = ({newTitle, setTitle, callBack, addTask, ...props}:propsSingleInput) => {


    const onChangeHandlerForAddTask = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTask(newTitle)
            setTitle('')
        }
    }


        return(
                <input value={newTitle}
                      onChange={onChangeHandlerForAddTask}
                      onKeyPress={onKeyPressHandler}
            />
    )
}