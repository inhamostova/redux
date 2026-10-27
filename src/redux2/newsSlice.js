import { createSlice } from '@reduxjs/toolkit';
import { getNews } from './operations';

export const newsSlice = createSlice({
  name: 'news',
  initialState: {
    news: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(getNews.pending, state => {
        state.isLoading = true;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.news = action.payload;
        state.error = null;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.isLoading = false;
        state.news = [];
        state.error = action.payload;
      }),
  //   reducers: {
  //     getNewsPending: state => {
  //       state.isLoading = true;
  //     },
  //     getNewsFulfilled: (state, action) => {
  //       state.isLoading = false;
  //       state.news = action.payload;
  //       state.error = null;
  //     },
  //     getNewsRejected: (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //       state.news = [];
  //     },
  //   },
});

// export const { getNewsFulfilled, getNewsPending, getNewsRejected } =
//   newsSlice.actions;
export const newsReducer = newsSlice.reducer;
