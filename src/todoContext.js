import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props){

    
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

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            homework,
            setHomework,
            completedTodos,
            searchedTodos,
            checkTodos,
            deleteTodos,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}


export { TodoContext, TodoProvider};