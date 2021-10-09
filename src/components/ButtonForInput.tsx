import React from "react";

type propsButtonForInputType = {
    callBack: ()=>void
    name: string
    setTitle: (title:string)=>void

}

export const ButtonForInput= ({callBack,name, setTitle, ...props}:propsButtonForInputType) =>{

    const onClickHandlerForAddTask = () => {
        callBack()
        setTitle('')
    }

    return (
        <button onClick={onClickHandlerForAddTask}>{name}</button>

    )
}