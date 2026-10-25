// export const rootReducer = (state = { total: 0, step: 1 }, action) => {
//   switch (action.type) {
//     case 'increment':
//       return {
//         ...state,
//         total: (state.total += action.payload),
//       };
//     case 'decrement':
//       return {
//         ...state,
//         total: (state.total -= action.payload),
//       };
//     case 'setStep':
//       return {
//         ...state,
//         step: action.payload,
//       };
//     default:
//       return state;
//   }
// };

import { createReducer } from '@reduxjs/toolkit';
import {
  addTodo,
  decrement,
  deleteTodo,
  increment,
  setStep,
  toggleTodo,
} from './actions';

const counterReducer = createReducer({ total: 0, step: 1 }, builder =>
  builder
    .addCase(increment, state => {
      state.total += state.step;
    })
    .addCase(decrement, state => {
      state.total -= state.step;
    })
    .addCase(setStep, (state, action) => {
      state.step = action.payload;
    })
);

const todoReducer = createReducer([], builder =>
  builder
    .addCase(addTodo, (state, action) => {
      state.push(action.payload);
    })
    .addCase(toggleTodo, (state, action) => {
      state = state.map(todo =>
        todo.id === action.payload ? (todo.completed = !todo.completed) : todo
      );
    })
    .addCase(deleteTodo, (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    })
);

export const rootReducer = {
  counter: counterReducer,
  todos: todoReducer,
};
