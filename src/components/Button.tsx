import React from "react";
import style from './../TodoList.module.css'
import {propsFilteredTasks} from "../App";

type propsButtonType = {
    callBack: () => void
    name: string
    filter: propsFilteredTasks
}

export const Button = ({callBack, name, filter, ...props}: propsButtonType) => {
    const onClickHandler = () => {
        callBack()
    }

    return (
        <button className={filter === name ? style.activeFilter : ''} onClick={onClickHandler}>{name}</button>
    )
}