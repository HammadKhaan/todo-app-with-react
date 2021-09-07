import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reduxInput";

export const store = configureStore({
  reducer: {
    todos: taskReducer.reducer,
  },
});
