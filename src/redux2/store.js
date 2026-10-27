// import { rootReducer } from './reducer';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterReducer, todosReducer } from './slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { newsReducer } from './newsSlice';

const persistConfig = {
  key: 'todos',
  storage,
  whitelist: ['todos'],
};

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
  news: newsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
