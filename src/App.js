import { useState } from 'react';
import './App.css';
import TodoFooter from './Components/TodoFooter/todoFooter';
import TodoForm from './Components/TodoForm/todoForm';
import TodoList from './Components/TodoList/todoList';

function App() {
const [todos,setTodos] = useState([
  {
    id: Math.random(),
    text: 'Javascript',
    isCopmleted: false
  },
  {
    id: Math.random(),
    text: 'React',
    isCopmleted: false
  },
  {
    id: Math.random(),
    text: 'Html5',
    isCopmleted: false
  }
]);

  return (
    <div className="App">
      <TodoForm onAdd={(text) =>{
          setTodos([
              ...todos,
              {
                id: Math.random(),
                text: text,
                isCopmleted:false
              }
            
          ])
      }}/>
      <TodoList 
      todos={todos} 
      onDelete={(todo) => {
          setTodos(todos.filter((t) => t.id !== todo.id))
      }}
      onChange={(newTodo) =>{
        setTodos(todos.map((todo) => {
          if(todo.id === newTodo.id){
            return newTodo;
          }
          return todo;
        }));
      }}
      />
      <TodoFooter todos={todos}  onClear={() => {
        setTodos(todos.filter((todo) => !todo.isCopmleted));
      }}/>
    </div>
  );
}

export default App;
