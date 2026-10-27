import { getLatestNews } from 'services/newsAPI';
// import { getNewsFulfilled, getNewsPending, getNewsRejected } from './newsSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const getNews = () => async dispatch => {
//   try {
//     dispatch(getNewsPending());
//     const data = await getLatestNews();
//     dispatch(getNewsFulfilled(data));
//   } catch (error) {
//     dispatch(getNewsRejected(error));
//   }
// };

export const getNews = createAsyncThunk(
  'news/getTopNews',
  async (_, thunkAPI) => {
    try {
      const data = await getLatestNews();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
