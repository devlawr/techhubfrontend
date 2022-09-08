import { configureStore } from "@reduxjs/toolkit";
import regReducers from "./regSlice";

export const store = configureStore({
  reducer: {
    auth: regReducers,
  },
});

