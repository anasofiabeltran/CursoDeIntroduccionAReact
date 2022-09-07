//import logo from './logo.svg';
import React from 'react';
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
function useLocalStorage(itemName, initialValue){
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(
    () => {
      setTimeout(() => {
        try{
          const localStorageItem= localStorage.getItem(itemName);
          let parsedItem;

          if(!localStorageItem){
            localStorage.setItem(itemName,JSON.stringify(initialValue));
            parsedItem=initialValue;
          }else{
            parsedItem = JSON.parse(localStorageItem);
          }

          setItem(parsedItem);
          setLoading(false);
        } catch(error){
          setError(error);
        }
      },1000);
    }
  ); 

  

  

  const saveItem = (newItem) =>{
    try{
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    }catch(error){
      setError(error);
    }
  };

  return{item,
    saveItem,
    loading,
    error,
  };

}

function App() {

 const {
  item: todos, 
  saveItem: saveTodos,
  loading,
  error} = useLocalStorage('TODOS_V1',[]);
  const [homework, setHomework] = React.useState('');
  
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos= todos.length;

  let searchedTodos = [];

  if(!homework.length >=1){
    searchedTodos = todos;
  } else{
    searchedTodos =  todos.filter(work => {
      const workText = work.text.toLowerCase();
      const searchText = homework.toLowerCase();
      return workText.includes(searchText);
    });
  }

  //check items
  const checkTodos = (id, text) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);

    const newTodos = [...todos];
    newTodos[todoIndex] = {
      id: id,
      text: todos[todoIndex].text,
      completed: true,
    };
    saveTodos(newTodos);
  }

  
  //eliminar items
  const deleteTodos = (id, text) => {

    const todoIndex = todos.findIndex(todo => todo.id === id);

    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
 
  }

  console.log('Render (antes del use effect)');

  React.useEffect(() => {
    console.log('use effect');
  },[totalTodos]);

  console.log('Render (luego del use effect)');

  return (
    <section className='containerPrincipal'>
      <section className='containerPrincipal-section_1'>
        <CreateTodoButton />
      </section>
      <section className='containerPrincipal-section_2'>
        <TodoCounter 
        completed={completedTodos}  
        total={totalTodos} 
        setHomework={setHomework}/>
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
          
        ))}
        </TodoList>
      </section>   
    </section>
  );
}

export default App;