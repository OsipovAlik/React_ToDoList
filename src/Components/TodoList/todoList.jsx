import React from 'react';
import TodoItem from './todoItem/todoItem';

const TodoList = ({todos,onChange,onDelete}) => {
   return (
      <div className='list'> 
         {
            todos.map((todo) =>{
               return(
                  <TodoItem 
                     key={todo.id} 
                     todo={todo}
                     onDelete ={onDelete}
                     onChange={onChange}
                     
                   />
               )
            })
         }
      </div>
   );
};

export default TodoList;