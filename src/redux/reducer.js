import { combineReducers } from 'redux';
import { statusFilters } from './constants';
import { createReducer } from '@reduxjs/toolkit';
import { addTask, deleteTask, toggleTask, changeFilter } from './actions';

const initialTasks = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

const tasksReducer = createReducer(initialTasks, builder => {
  builder
    .addCase(addTask, (state, action) => void state.push(action.payload))
    .addCase(deleteTask, (state, action) =>
      state.filter(task => task.id !== action.payload)
    )
    .addCase(toggleTask, (state, action) =>
      state.map(task =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      )
    );
});

const initialFilters = {
  status: statusFilters.all,
};

const filtersReducer = createReducer(initialFilters, builder => {
  builder.addCase(changeFilter, (state, action) => ({
    ...state,
    status: action.payload,
  }));
});

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});

// const filtersReducer = (state = initialFilters, action) => {
//   switch (action.type) {
//     case 'filters/changeFilter':
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// const tasksReducer = (state = initialTasks, action) => {
//   switch (action.type) {
//     case 'tasks/addTask':
//       return [...state, action.payload];

//     case 'tasks/deleteTask':
//       return state.filter(task => task.id !== action.payload);

//     case 'tasks/toggleTask':
//       return state.map(task =>
//         task.id === action.payload
//           ? { ...task, completed: !task.completed }
//           : task
//       );
//     default:
//       return state;
//   }
// };

// const initialState = {
//   tasks: [
//     { id: 0, text: 'Learn HTML and CSS', completed: true },
//     { id: 1, text: 'Get good at JavaScript', completed: true },
//     { id: 2, text: 'Master React', completed: false },
//     { id: 3, text: 'Discover Redux', completed: false },
//     { id: 4, text: 'Build amazing apps', completed: false },
//   ],
//   filters: {
//     status: statusFilters.all,
//   },
// };

// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'tasks/addTask':
//       return {
//         ...state,
//         tasks: [...state.tasks, action.payload],
//       };
//     case 'tasks/deleteTask':
//       return {
//         ...state,
//         tasks: state.tasks.filter(task => task.id !== action.payload.id),
//       };
//     case 'tasks/toggleTask':
//       return {
//         ...state,
//         tasks: state.tasks.map(task =>
//           task.id === action.payload.id
//             ? { ...task, completed: !task.completed }
//             : task
//         ),
//       };
//     case 'filters/changeFilter':
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           status: action.payload.value,
//         },
//       };
//     default:
//       return state;
//   }
// };
