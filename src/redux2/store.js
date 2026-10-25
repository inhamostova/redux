import { rootReducer } from './reducer';
import { configureStore } from '@reduxjs/toolkit';

// export const store = createStore(rootReducer, { total: 0, step: 1 });
export const store = configureStore({ reducer: rootReducer });
