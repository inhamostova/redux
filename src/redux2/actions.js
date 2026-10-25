// export const increment = value => ({ type: 'increment', payload: value });

import { createAction, nanoid } from '@reduxjs/toolkit';

// export const decrement = value => ({ type: 'decrement', payload: value });

// export const setStep = step => ({ type: 'setStep', payload: step });

export const increment = createAction('counter/increment');
export const decrement = createAction('counter/decrement');
export const setStep = createAction('counter/setStep');

export const addTodo = createAction('todos/addTodo', text => {
  return {
    payload: {
      id: nanoid(),
      text,
      completed: false,
    },
  };
});

export const toggleTodo = createAction('todos/toggleTodo');

export const deleteTodo = createAction('todo/deleteTodo');
