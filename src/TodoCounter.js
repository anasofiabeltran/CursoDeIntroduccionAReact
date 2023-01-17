import React from "react";
import './TodoCounter.css'
import {UseContext } from './todoContext';


const estilosH2 = {
    background: 'linear-gradient(to right, #9dc7cc 0%, #fc794f 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
}

function TodoCounter(){

    const {
        totalTodos,
        homework,
        setHomework,
        completedTodos,
    }=UseContext()



    const onSearchValueChange = (event) =>{
        setHomework(event.target.value);
    }

    return (
        <div style={{
            width: '16rem',
        }} className="containerNav">
            <h2 style={estilosH2}>
                Your tasks
            </h2>
            <p className="containerNav-content">
                Completed {completedTodos} de {totalTodos}
            </p>
            <section className="containerNav-search">
                <input 
                placeholder="Search..." 
                onChange={onSearchValueChange}
                />
                <img src="https://i.pinimg.com/originals/71/68/99/716899d4a15ad03f139f16e7606df47f.png" />
            </section>
            <p>Buscando: {homework.length}</p>
        </div>
        
    );
}

export {TodoCounter};