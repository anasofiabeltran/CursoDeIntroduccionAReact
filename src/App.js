//import logo from './logo.svg';
import React from 'react';
import { TodoContext, TodoProvider,UseContext } from './todoContext';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';

import './App.css';

/*
export let deftodos = [
  {id:1, text: 'cortar cesped', completed: true},
  {id:2, text: 'hacer la tarea', completed: false},
  {id:3, text: 'hacer la tarea 2', completed: false},
  {id:4, text: 'hacer la tarea 3', completed: true},
  {id:5, text: 'hacer la tarea 4', completed: false},
  {id:6, text: 'hacer la tarea 5', completed: false},
  {id:7, text: 'hacer la tarea 6', completed: false},
  {id:8, text: 'hacer la tarea 7', completed: false},

]
*/

//custom hook


  

  


function App() {
  
  const {loading,
    error,
    totalTodos,
    homework,
    setHomework,
    completedTodos,
    searchedTodos,
    checkTodos,
    deleteTodos,}=UseContext()
  return (
    <TodoProvider>
        <section className='containerPrincipal'>
              <section className='containerPrincipal-section_1'>
                <CreateTodoButton />
              </section>
              <section className='containerPrincipal-section_2'>
              <TodoCounter setHomework={setHomework}/>
                <TodoList>
                    <p>{loading}</p>
                    {loading && <p>Estamos cargando, no desesperes....</p>}
                    {error && <p>Desespérate, hubo un error</p>}
                    {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO!</p>}
                  {searchedTodos.map(todo => (
                    <TodoItem 
                    key={todo.id} 
                    id={todo.id} 
                    text={todo.text} 
                    completed={todo.completed} 
                    onComplete={() =>  checkTodos(todo.id)}
                    onDelete={() => deleteTodos(todo.id)}
                    />
                  
                  )
                )}
                </TodoList>
              </section>   
            </section>
    </TodoProvider>
    
  );
}

export default App;