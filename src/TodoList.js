import React, { useState, useEffect } from 'react';
import { FaRegCircle, FaRegCheckCircle } from 'react-icons/fa';
import TodoListHeader from './TodoListHeader';

const TodoList = (props) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Build some websites',
      done: false,
      dueDate: '2023-09-30',
    },
  ]);
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  const handleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(updatedTasks);

    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const undoneTasks = tasks.filter((task) => !task.done);
  const undoneTasksCount = undoneTasks.length;
  function calculateDaysLeft(dueDate) {
    const now = new Date();
    const due = new Date(dueDate);
    const timeDiff = due - now;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysLeft;
  }

  const { todos, handleCheckTodo } = props;
  return (
    <div className='todo-list-container'>
      <TodoListHeader undoneTasksCount={undoneTasksCount} />{' '}
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`todo-item-container ${task.done ? 'done' : ''}`}
        >
          <div onClick={() => handleTaskCompletion(task.id)}>
            {task.done ? (
              <FaRegCheckCircle color='#9a9a9a' className='item-done-button' />
            ) : (
              <FaRegCircle className='item-done-button' color='#9a9a9a' />
            )}
          </div>
          <div className='item-title'>{task.title}</div>
          <div className='days-left'>
            {task.dueDate && (
              <>
                {calculateDaysLeft(task.dueDate) > 0 ? (
                  <span>{calculateDaysLeft(task.dueDate)} days left</span>
                ) : (
                  <span>Due today</span>
                )}
              </>
            )}
          </div>
        </div>
      ))}
      {todos?.map((todo) => (
        <div
          key={todo.id}
          className={`todo-item-container ${todo.isActive ? 'done' : ''}`}
        >
          <div onClick={() => handleCheckTodo(todo)}>
            {todo.isActive ? (
              <FaRegCheckCircle color='#9a9a9a' className='item-done-button' />
            ) : (
              <FaRegCircle className='item-done-button' color='#9a9a9a' />
            )}
          </div>
          <div className='item-title'>{todo.title}</div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
