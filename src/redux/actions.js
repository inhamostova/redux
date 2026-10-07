import { nanoid } from 'nanoid';

import { createAction } from '@reduxjs/toolkit';

export const addTask = createAction('tasks/addTask', text => ({
  payload: {
    id: nanoid(),
    text,
    completed: false,
  },
}));

export const deleteTask = createAction('tasks/deleteTask');

export const toggleTask = createAction('tasks/toggleTask');

export const changeFilter = createAction('filters/changeFilter');

// export const addTask = text => {
//   return {
//     type: 'tasks/addTask',
//     payload: {
//       id: nanoid(),
//       text,
//       completed: false,
//     },
//   };
// };

// export const deleteTask = id => {
//   return {
//     type: 'tasks/deleteTask',
//     payload: {
//       id,
//     },
//   };
// };

// export const toggleTask = id => {
//   return {
//     type: 'tasks/toggleTask',
//     payload: {
//       id,
//     },
//   };
// };

// export const changeFilter = value => {
//   return {
//     type: 'filters/changeFilter',
//     payload: {
//       value,
//     },
//   };
// };
