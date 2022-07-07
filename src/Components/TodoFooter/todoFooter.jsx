import React from 'react';

const TodoFooter = ({todos,onClear}) => {
  const completedLength = todos.filter((todo) => todo.isCompleted).length;
   return (
      <div className='footer'>
         <span>{completedLength}/{todos.length} Completed</span>
         <button onClick={onClear} className='footerButton'>Clear</button>
      </div>
   );
};

export default TodoFooter;