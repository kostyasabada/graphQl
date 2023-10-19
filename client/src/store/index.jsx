import {
  configureStore,
} from '@reduxjs/toolkit';
import rootReducer from './slices/root.slice';

export const store = configureStore({ reducer: rootReducer });

export const makeStore = () => configureStore({ reducer: rootReducer });


