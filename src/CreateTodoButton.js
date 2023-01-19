import React from 'react';
import './CreateTodoButton.css';




function CreateTodoButton({setOpenModal}){  

    const onClickButton = () =>{
        setOpenModal(prevState => !prevState)
    }
    return(
        <section className='principalContainer'>
            <h2>
                Create new task
            </h2>
            <div className='principalContainer-content'>
                
                
                <button  className='pointer' onClick={onClickButton}>
                    Create task
                </button>
            </div>
            <img src='https://img.freepik.com/vector-gratis/chica-escribiendo-diario-o-diario_74855-7408.jpg?w=900&t=st=1660012886~exp=1660013486~hmac=49a223abae5cb535991038671bd67dd8ebce031a3987f5eee5c5bd80864891ba' />
        </section>
        
    );
}

export {CreateTodoButton};