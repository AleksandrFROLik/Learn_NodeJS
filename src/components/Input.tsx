import React, {ChangeEvent, KeyboardEvent, useState} from "react";


type propsInputType = {
    callBack: (newTitle: string) => void
}

export const Input = ({callBack}: propsInputType) => {


    let [newTitle, setTitle] = useState('')

    const onClickHandlerForAddTask = () => {
        callBack(newTitle)
        setTitle('')
    }
    const onChangeHandlerForAddTask = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            callBack(newTitle)
            setTitle('')
        }
    }


    return (
        <div>
            <input value={newTitle}
                   onChange={onChangeHandlerForAddTask}
                   onKeyPress={onKeyPressHandler}
            />
            <button onClick={onClickHandlerForAddTask}>+</button>
        </div>
    )

}