import { createStore } from 'redux';
import { rootReducer } from './reducer';

export const store = createStore(rootReducer, { total: 0, step: 1 });
