import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const MovieCoreApi = createApi({
  reducerPath: "MovieAppApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://moviesdatabase.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "20a0deb4afmsh20ebb2ef6545a69p1c7400jsn5ef12d7cffe0"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getRandomAcotr: builder.query({ query: (query) => "/actors/random" }),
    getTitles: builder.query({ query: (query) => "/titles" }),
    // getTitle: builder.quer
  }),
});
export const { useGetRandomAcotrQuery, useGetTitlesQuery } = MovieCoreApi;
