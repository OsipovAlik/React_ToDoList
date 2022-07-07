import React from 'react';

const TodoItem = ({todo,onChange,onDelete}) => {
   return (
      <div>
         <label className='listNa'>
            <input type="checkbox"  checked={todo.isCompleted} onChange={(e) => {
                  
                  onChange({
                     ...todo,
                     isCompleted:e.target.cheked
                  })
            }} className='chek'/>
            {todo.text}
            <button onClick={() => {onDelete(todo) }}>X</button>
         </label>
      </div>
   );
};

export default TodoItem;