import React from 'react';

import './TodoItem.css';

function TodoItem(props){
    /*
    function deleteTask(id){
        document.getElementById(id).remove();
    }
    */
    return(
        <li id={props.id} className={`todoItem ${props.completed && 'TodoItem-ready'}`}>
            <span onClick={props.onComplete} className={`${props.completed && 'TodoItem-checket'} circle `}>
            </span>
            <p>{props.text}</p>
            <span onClick={props.onDelete} className={`${!props.completed && 'eliminateItem'} pointer`}></span>
        </li>
    );
}

export {TodoItem};