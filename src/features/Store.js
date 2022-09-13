import { configureStore } from "@reduxjs/toolkit";
import regReducers from "./regSlice";
import deleteReducers from './deleteSlice';
import sessionReducers from './sessionSlice';

export const store = configureStore({
  reducer: {
    auth: regReducers,
    removeUser: deleteReducers,
    session:sessionReducers
  },
});

