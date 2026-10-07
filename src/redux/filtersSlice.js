import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from './constants';
// import { changeFilter } from './actions';

const initialFilters = {
  status: statusFilters.all,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFilters,
  reducers: {
    changeFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
