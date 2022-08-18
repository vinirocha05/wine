import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterReducer';

export const store = configureStore({
  reducer: {
    filters: filterReducer,
  },
});

export default store;
