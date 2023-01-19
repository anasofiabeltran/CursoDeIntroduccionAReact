import React, { useState } from "react";
import { UseContext } from './todoContext';

function TodoForm(){
    const {setOpenModal,addTodo} = UseContext()
    const [text,setText]=useState('')

    function write(info){
        setText(info.target.value)
    }
    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(text);
        setOpenModal(false)
    }
    return(
        <form onSubmit={onSubmit}>
            <p>Task Name</p>
            <textarea onChange={ write} id='input' placeholder='Lunch rocket to the moon' />
            <div>
                <button
                type="button"
                onClick={() => setOpenModal(false)}>
                    Cancel
                </button>
                <button
                type="submit">
                    Add Task
                </button>
            </div>
        </form>
    );
}

export {TodoForm}