import React, { useState } from 'react';

const Form = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      addTodo(todo);
      setTodo('');

      const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      const newTask = { id: Date.now(), title: todo, done: false };
      const updatedTasks = [...existingTasks, newTask];
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder='Enter task ...'
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Form;
