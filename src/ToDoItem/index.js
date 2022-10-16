import React, { useState } from 'react';


export const ToDoItem = ({defaultToDo}) => {
    const [inputVal, setInputVal] = useState(defaultToDo)

    return <li>
            <span contentEditable onChange={(e) => {
                setInputVal(e.target.value)
            }}>{inputVal}</span>
    </li>;
};