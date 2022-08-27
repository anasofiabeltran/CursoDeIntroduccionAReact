import React from "react";
import './TodoCounter.css'

const estilosH2 = {
    background: 'linear-gradient(to right, #9dc7cc 0%, #fc794f 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
}

function TodoCounter(props){
    const [searchValue, setSearchValue]= React.useState('');

    const onSearchValueChange = (event) =>{
        setSearchValue(event.target.value);
        props.setHomework(event.target.value);
    }

    return (
        <div style={{
            width: '16rem',
        }} className="containerNav">
            <h2 style={estilosH2}>
                Your tasks
            </h2>
            <p className="containerNav-content">
                Completed {props.completed} de {props.total}
            </p>
            <section className="containerNav-search">
                <input 
                placeholder="Search..." 
                onChange={onSearchValueChange}
                />
                <img src="https://i.pinimg.com/originals/71/68/99/716899d4a15ad03f139f16e7606df47f.png" />
            </section>
            <p>Buscando: {searchValue}</p>
        </div>
        
    );
}

export {TodoCounter};