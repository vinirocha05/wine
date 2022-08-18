import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './modules/filters/reducer';

export const store = configureStore({
  reducer: {
    filters: filterReducer,
  },
});

export default store;
