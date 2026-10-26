import { createSlice, nanoid } from '@reduxjs/toolkit';

const initTodos = [
  { id: '1', text: 'Learn HTML', completed: true },
  { id: '2', text: 'Learn CSS', completed: true },
  { id: '3', text: 'Learn JS', completed: false },
  { id: '4', text: 'Learn React', completed: false },
];

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { total: 0, step: 1 },
  reducers: {
    increment: state => {
      state.total += state.step;
    },
    decrement: state => {
      state.total -= state.step;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: initTodos,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: text => ({
        payload: {
          id: nanoid(),
          text,
          completed: false,
        },
      }),
    },
    deleteTodo: (state, action) =>
      state.filter(todo => todo.id !== action.payload),

    toggleTodo: (state, action) => {
      state = state.map(todo =>
        todo.id === action.payload ? (todo.completed = !todo.completed) : todo
      );
    },
  },
});

export const { increment, decrement, setStep } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;

export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
