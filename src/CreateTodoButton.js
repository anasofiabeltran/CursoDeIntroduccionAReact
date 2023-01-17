import React from 'react';
import './CreateTodoButton.css';
import {default as App, deftodos} from './App.js';

/*
function deleteTask(id){
    console.log(`id: ${id}`)
    document.getElementById(id).remove();
    
}
function addTask(mensaje){
    let newTask= {id:deftodos.length+1, text: mensaje, completed: false}
    deftodos.push(newTask);
    console.log(deftodos);
    document.getElementById('TodoList-list').innerHTML+=`
    <li id=${newTask.id} class="todoItem  ${newTask.completed && 'TodoItem-ready'}">
        <span class="${newTask.completed && 'TodoItem-checket'} circle">
        </span>
        <p>${newTask.text}</p>
        <span id=task_${newTask.id} class="${!newTask.completed && 'eliminateItem'} pointer"></span>
    </li>
    `
    document.getElementById(`task_${newTask.id}`).onclick= () => deleteTask(newTask.id);
    console.log(document.getElementById(`task_${newTask.id}`).onclick)
    console.log(newTask.id)
}
*/
function CreateTodoButton(){  
    return(
        <section className='principalContainer'>
            <h2>
                Create new task
            </h2>
            <div className='principalContainer-content'>
                <div>
                    <p>Task Name</p>
                    <input id='input' placeholder='Lunch rocket to the moon' />
                </div>
                
                <button  className='pointer'>
                    Create task
                </button>
            </div>
            <img src='https://img.freepik.com/vector-gratis/chica-escribiendo-diario-o-diario_74855-7408.jpg?w=900&t=st=1660012886~exp=1660013486~hmac=49a223abae5cb535991038671bd67dd8ebce031a3987f5eee5c5bd80864891ba' />
        </section>
        
    );
}

export {CreateTodoButton};