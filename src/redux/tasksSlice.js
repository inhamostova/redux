import { createSlice } from '@reduxjs/toolkit';
// import { addTask, deleteTask, toggleTask } from './reducer';
import { nanoid } from 'nanoid';
import { fetchTasks } from './operations';

const initialTasks = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTasks.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.items = [];
        state.error = action.payload;
      });
  },
  // reducers: {
  //   fetchingInProgress(state) {
  //     state.isLoading = true;
  //   },
  //   fetchingSuccess(state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   fetchingError(state, action) {
  //     state.isLoading = false;
  //     state.items = [];
  //     state.error = action.payload;
  //   },
  // },
});

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;

// const tasksSlice = createSlice({
//   name: 'tasks',
//   initialState: initialTasks,
//   reducers: {
//     addTask: {
//       reducer: (state, action) => {
//         state.push(action.payload);
//       },
//       prepare: text => {
//         const id = nanoid();
//         return {
//           payload: {
//             id,
//             text,
//             completed: false,
//           },
//         };
//       },
//     },
//     deleteTask(state, action) {
//       return state.filter(task => task.id !== action.payload);
//     },
//     toggleTask(state, action) {
//       state.map(task =>
//         task.id === action.payload ? (task.completed = !task.completed) : task
//       );
//     },
//   },
// });

// export const { addTask, deleteTask, toggleTask } = tasksSlice.actions;
// export const tasksReducer = tasksSlice.reducer;
