/*

import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setFilter(state, action) {
      console.log(action);
      return { ...state, filter: state.filter };
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;


const initialState = {
  filter: '',
};*/

const initialState = {
  filter: '',
};

export default function filterReducer(state = initialState, action) {
  const newState = { ...state, filter: action.filter };

  return newState;
}
