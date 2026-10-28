import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY } from 'services/newsAPI';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://newsdata.io/api/1' }),
  endpoints: build => ({
    getNews: build.query({
      query: () => `/latest?apikey=${API_KEY}`,
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
