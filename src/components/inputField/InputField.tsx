import React from 'react';

type InputFieldType = {
    text: string
    setText: (text: string) => void
    addText: () => void
}

export const InputField = ({text, setText, addText}: InputFieldType) => {
    return (
        <label>
            <input value={text} onChange={(e) => setText(e.currentTarget.value)}/>
            <button onClick={addText}>Add text</button>
        </label>
    );
};

