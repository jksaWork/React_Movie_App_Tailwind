import { configureStore } from "@reduxjs/toolkit";
import { MovieCoreApi } from "./services/MovieCoreApi";
import playerReducer from "./features/playerSlice";

export const store = configureStore({
  reducer: {
    [MovieCoreApi.reducerPath]: MovieCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MovieCoreApi.middleware),
});
